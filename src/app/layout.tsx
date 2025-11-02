import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thai-Nippon Sushi-Bar | Sushi & Asiatische Küche Berlin-Marienfelde",
  description: "Frische Sushi-Spezialitäten, Thai-Gerichte und Vietnam Pho im Kaufland Berlin-Marienfelde. Lieferservice ab 20€ im Umkreis von 4km. Tel: 0155 6313 6888",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Thai-Nippon Sushi-Bar", "version": "1.0.0", "location": "Berlin-Marienfelde"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}