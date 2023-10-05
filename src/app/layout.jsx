import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
            {/* Header */}


            {/* SearchBox */}

            {children}
        <Analytics />
        </body>
        </html>
    );
}
