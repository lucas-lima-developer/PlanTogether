// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "PlanTogether",
  description: "Planeje a sua viagem em conjunto com os amigos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
