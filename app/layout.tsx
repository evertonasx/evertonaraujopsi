import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everton Araújo | Psicólogo",
  description:
    "Psicoterapia para adultos e adolescentes. Atendimento presencial em Boa Vista–RR e on-line. Psicólogo Everton Araújo, CRP 20/10822.",
  metadataBase: new URL("https://seu-site.vercel.app"),
  openGraph: {
    title: "Everton Araújo | Psicólogo",
    description: "Um espaço de escuta, cuidado e transformação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
