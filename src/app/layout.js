import "./globals.css";


import { Open_Sans, Noto_Serif_Display } from "next/font/google";

// Open Sans for body
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"], 
});


const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
  display: "swap",
  weight: ["400", "500", "600", "700"], 
});


export const metadata = {
  title: "Dsmp Registration Portal",
  description: "A registration portal for DSMP made by M.Asad Amir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${notoSerifDisplay.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
