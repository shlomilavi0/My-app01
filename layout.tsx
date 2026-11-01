import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "My Fitness | המאמן שלי", description: "מאמן קליסטניקס אישי עם מדריך קולי ותזכורות", manifest: "/manifest.webmanifest" };
export const viewport: Viewport = { themeColor: "#10243b", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
