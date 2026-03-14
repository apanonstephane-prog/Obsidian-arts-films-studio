import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@obsidian-arts-films.fr";

export async function POST(req: NextRequest) {
  if (!RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY non configurée");
    return NextResponse.json(
      { error: "Service email non configuré." },
      { status: 503 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const { nom, prenom, email, telephone, typeClient, service, budget, delais, description } = body;

  if (!nom || !prenom || !email || !typeClient || !service || !description) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const resend = new Resend(RESEND_API_KEY);

  const html = `
    <h2 style="color:#1a1a2e">Nouvelle demande de devis — Obsidian Arts Films</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
      <tr><td style="padding:8px;font-weight:600;width:180px">Nom</td><td style="padding:8px">${nom} ${prenom}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:600">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;font-weight:600">Téléphone</td><td style="padding:8px">${telephone || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:600">Profil</td><td style="padding:8px">${typeClient}</td></tr>
      <tr><td style="padding:8px;font-weight:600">Service</td><td style="padding:8px">${service}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:600">Budget</td><td style="padding:8px">${budget || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:600">Délais</td><td style="padding:8px">${delais || "—"}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:600;vertical-align:top">Description</td><td style="padding:8px;white-space:pre-wrap">${description}</td></tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from: "Obsidian Arts Films <noreply@obsidian-arts-films.fr>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Demande de devis — ${service} (${typeClient})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Erreur Resend :", err);
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 });
  }
}
