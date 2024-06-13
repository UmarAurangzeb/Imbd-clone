import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Provider from './Providers';
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMBD clone",
  description: "this is a movie database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>

    </html>
  );
}
