import { Reveal } from "@/components/Reveal";

export function EditorialBeat({
  index,
  label,
  phrase,
}: {
  index: number;
  label: string;
  phrase: string;
}) {
  return (
    <section className="editorial-beat" data-side={index % 2 === 0 ? "right" : "left"}>
      <div className="wrap">
        <Reveal className="editorial-beat__inner">
          <span className="editorial-beat__index">{String(index).padStart(2, "0")}</span>
          <div>
            <span className="tag">{label}</span>
            <p>{phrase}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}