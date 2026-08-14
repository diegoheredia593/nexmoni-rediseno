"use client";

import { useState } from "react";
import { leadFields } from "@/content/site";

type Values = Record<string, string>;
type Errors = Record<string, string>;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.nombre?.trim()) errors.nombre = "Escribe tu nombre.";

  const phone = values.telefono?.replace(/[\s()-]/g, "") ?? "";
  if (!phone) errors.telefono = "Escribe tu teléfono.";
  else if (!/^\+?\d{7,15}$/.test(phone)) errors.telefono = "Revisa el número, con prefijo del país.";

  const email = values.email?.trim() ?? "";
  if (!email) errors.email = "Escribe tu correo.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Revisa el correo.";

  return errors;
}

export function LeadForm() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="eyebrow" style={{ color: "var(--accent-light)" }}>
          SOLICITUD RECIBIDA
        </div>
        <h3 style={{ font: "600 26px/1.2 var(--sans)", letterSpacing: "-.02em", margin: 0 }}>
          Gracias. Te escribimos en breve.
        </h3>
        <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-62)", margin: 0 }}>
          Revisa tu correo — ahí llegan los siguientes pasos para verificar tu identidad y activar tu
          cuenta.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {leadFields.map((field) => (
        <label key={field.name} className="field">
          <span className="field__label">{field.label}</span>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.ph}
            value={values[field.name] ?? ""}
            aria-invalid={Boolean(errors[field.name])}
            onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
          />
          {errors[field.name] && (
            <span
              role="alert"
              style={{ font: "400 11.5px/1.4 var(--mono)", color: "var(--accent)" }}
            >
              {errors[field.name]}
            </span>
          )}
        </label>
      ))}

      <button type="submit" className="btn btn--amber btn--block" disabled={status === "sending"}>
        <span>
          {status === "sending" ? "Enviando…" : "Crear mi cuenta"} <b className="arrow">→</b>
        </span>
      </button>

      {status === "error" && (
        <p role="alert" style={{ font: "400 12px/1.55 var(--mono)", color: "var(--accent)", margin: 0 }}>
          No hemos podido enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <p style={{ font: "400 12px/1.55 var(--mono)", color: "var(--ink-50)", margin: 0 }}>
        ¿Prefieres hablar primero? Escríbenos por WhatsApp.
      </p>
    </form>
  );
}
