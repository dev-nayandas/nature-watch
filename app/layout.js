
import "./globals.css";



export const metadata = {
  title: "Nature Watch",
  description: "Real Time Weather Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
