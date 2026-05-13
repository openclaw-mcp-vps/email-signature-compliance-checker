import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email Signature Compliance Checker",
  description: "Ensure company email signatures meet legal requirements. Scan for required disclaimers, contact info, and branding compliance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="733c2be5-39b9-4d74-a6f6-8e5cb58528fc"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
