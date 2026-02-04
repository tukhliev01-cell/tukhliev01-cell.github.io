import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Blog",
  description: "Modern Next.js blog with MDX and CMS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
