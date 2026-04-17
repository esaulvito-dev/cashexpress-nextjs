import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const SITE_URL = "https://cashexpress.esaullorenzo.es";
const TITLE = "Crea y Vende Productos Digitales con IA - Esaúl Lorenzo";
const DESCRIPTION =
  "Aprende a crear y vender productos digitales con Inteligencia Artificial en tiempo récord. Clase en vivo exclusiva con Esaúl Lorenzo. Gana hasta 90% de rentabilidad vendiendo en tu moneda local.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "productos digitales",
    "inteligencia artificial",
    "vender online",
    "emprendimiento digital",
    "IA",
    "rentabilidad",
    "Esaúl Lorenzo",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description:
      "Aprende a crear y vender productos digitales con Inteligencia Artificial en tiempo récord. Clase en vivo exclusiva.",
    url: SITE_URL,
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Aprende a crear y vender productos digitales con Inteligencia Artificial en tiempo récord.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Remix Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '793340195800027');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=793340195800027&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
