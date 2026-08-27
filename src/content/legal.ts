import documents from "./legal-documents.json";

export const legalDocuments = documents;
export type LegalDocument = (typeof legalDocuments)[number];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((document) => document.slug === slug);
}