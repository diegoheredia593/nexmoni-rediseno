"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/dictionary";

type Values = Record<string, string>;
type Errors = Record<string, string>;

function validate(values: Values, t: Dictionary["signup"]["errors"]): Errors {
  const errors: Errors = {};

  if (!values.nombre?.trim()) errors.nombre = t.name;

  const phone = values.telefono?.replace(/[\s()-]/g, "") ?? "";
  if (!phone) errors.telefono = t.phoneMissing;
  else if (!/^\+?\d{7,15}$/.test(phone)) errors.telefono = t.phoneInvalid;

  const email = values.email?.trim() ?? "";
  if (!email) errors.email = t.emailMissing;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = t.emailInvalid;

  return errors;
}

export function LeadForm({ dict }: { dict: Dictionary }) {
  const t = dict.signup;
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values, t.errors);
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
          {t.success.eyebrow}
        </div>
        <h3 style={{ font: "600 26px/1.2 var(--sans)", letterSpacing: "-.02em", margin: 0 }}>
          {t.success.title}
        </h3>
        <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-62)", margin: 0 }}>
          {t.success.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {t.fields.map((field, i) => (
        <label key={field.name} className="field">
          <span className="field__label">{field.label}</span>
          <input
            type={["text", "tel", "email"][i]}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name] ?? ""}
            aria-invalid={Boolean(errors[field.name])}
            onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
          />
          {errors[field.name] && (
            <span role="alert" style={{ font: "400 11.5px/1.4 var(--mono)", color: "var(--accent)" }}>
              {errors[field.name]}
            </span>
          )}
        </label>
      ))}

      <button type="submit" className="btn btn--amber btn--block" disabled={status === "sending"}>
        <span>
          {status === "sending" ? t.sending : t.submit} <b className="arrow">→</b>
        </span>
      </button>

      {status === "error" && (
        <p role="alert" style={{ font: "400 12px/1.55 var(--mono)", color: "var(--accent)", margin: 0 }}>
          {t.errors.submit}
        </p>
      )}

      <p style={{ font: "400 12px/1.55 var(--mono)", color: "var(--ink-50)", margin: 0 }}>
        {t.whatsappNote}
      </p>
    </form>
  );
}
