import "./globals.css";

export const metadata = {
  title: "Dsmp Registration Portal",
  description: "A registration portal for DSMP made by M.Asad Amir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
