import { NextResponse } from "next/server";

/**
 * Recepción de solicitudes de alta.
 *
 * ⏳ SIN DESTINO DEFINIDO. Hoy valida y registra en el log del servidor; falta
 *    decidir a dónde va el lead (correo, hoja de cálculo, CRM). El punto de
 *    integración es el bloque marcado más abajo — el resto no cambia.
 */

interface Lead {
  nombre: string;
  telefono: string;
  email: string;
}

function parse(body: unknown): Lead | null {
  if (typeof body !== "object" || body === null) return null;
  const { nombre, telefono, email } = body as Record<string, unknown>;

  if (typeof nombre !== "string" || !nombre.trim()) return null;
  if (typeof telefono !== "string" || !/^\+?\d{7,15}$/.test(telefono.replace(/[\s()-]/g, ""))) {
    return null;
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return null;

  return { nombre: nombre.trim(), telefono: telefono.trim(), email: email.trim() };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const lead = parse(body);
  if (!lead) {
    return NextResponse.json({ error: "Datos incompletos o mal formados." }, { status: 422 });
  }

  // ── INTEGRACIÓN PENDIENTE ────────────────────────────────────────────────
  // Sustituir por el envío real. No guardar leads en el log en producción:
  // son datos personales y quedarían en texto plano (GDPR).
  console.info("[lead]", { email: lead.email });
  // ─────────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true });
}
