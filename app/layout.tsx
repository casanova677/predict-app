import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SearchBar from "./components/searchBar/searchBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Predict App",
  description: "Prediction website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative bg-black">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="/background.png" alt="backgroundImage"
              className="h-screen w-full object-cover" 
            />
          </div>
          <div className="absolute top-0 left-0 h-screen bg-gradient-to-b from-black/10 to-black"></div>
          <div className="relative">
            <SearchBar/>
            {children}
          </div>
        </div>
       
      </body>
    </html>
  );
}
