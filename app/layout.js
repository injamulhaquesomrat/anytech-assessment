import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "@splidejs/splide/css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Page | AnyTech",
  description: "Embrace the future of finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${montserratFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
