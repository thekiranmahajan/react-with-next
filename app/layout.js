import "./globals.css";

export const metadata = {
  title: "PikaPic",
  description: "This website uses random image API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
