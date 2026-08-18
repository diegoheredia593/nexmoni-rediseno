'use client';
import {
  motion,
  useReducedMotion,
  VariantLabels,
  Target,
  TargetAndTransition,
  Transition,
} from 'motion/react';

export type TextRollProps = {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  variants?: {
    enter: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
    exit: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
  };

  onAnimationComplete?: () => void;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  transition = { ease: 'easeIn' },
  variants,
  onAnimationComplete,
}: TextRollProps) {
  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  } as const;

  const letters = children.split('');

  // El original reparte una caja `inline-block` por letra, y el navegador puede
  // cortar la línea entre dos cajas cualesquiera: en el titular del hero eso
  // partía «en» dejando la «e» arriba y la «n» abajo. Agrupando las letras de
  // cada palabra en una caja que no admite corte, el salto solo puede caer en
  // los espacios. Los retardos siguen calculándose con el índice global, así
  // que la animación es exactamente la misma.
  const words: { text: string; start: number }[] = [];
  let cursor = 0;
  for (const word of children.split(' ')) {
    words.push({ text: word, start: cursor });
    cursor += word.length + 1;
  }

  // Quien pide menos movimiento recibe el titular quieto. El bloque de
  // `prefers-reduced-motion` de globals.css no alcanza a esto: Framer anima
  // con estilos en línea desde JavaScript, fuera del alcance de la hoja.
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  const rollingLetter = (letter: string, i: number) => {
        return (
          <span
            key={i}
            className='relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]'
            aria-hidden='true'
          >
            <motion.span
              className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]'
              initial={
                variants?.enter?.initial ?? defaultVariants.enter.initial
              }
              animate={
                variants?.enter?.animate ?? defaultVariants.enter.animate
              }
              transition={{
                ...transition,
                duration,
                delay: getEnterDelay(i),
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            <motion.span
              className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]'
              initial={variants?.exit?.initial ?? defaultVariants.exit.initial}
              animate={variants?.exit?.animate ?? defaultVariants.exit.animate}
              transition={{
                ...transition,
                duration,
                delay: getExitDelay(i),
              }}
              onAnimationComplete={
                letters.length === i + 1 ? onAnimationComplete : undefined
              }
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            <span className='invisible'>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          </span>
        );
  };

  return (
    <span className={className}>
      {words.map((word, w) => (
        <span key={word.start} className='inline-block whitespace-nowrap'>
          {word.text
            .split('')
            .map((letter, j) => rollingLetter(letter, word.start + j))}
          {w < words.length - 1 && rollingLetter(' ', word.start + word.text.length)}
        </span>
      ))}
      <span className='sr-only'>{children}</span>
    </span>
  );
}
