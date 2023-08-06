import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/styles/reset.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro ricardo",
  description:
    "Portifolio de leandro ricardo caixeta junior, conheça um pouco do meu trabalho!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title></title>
        <link rel="icon" sizes="32x32" href={"/favIcon.ico"} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
