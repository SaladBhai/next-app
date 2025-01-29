
'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Provider store={store}>
      
    <Navbar></Navbar>
{children}
<Footer></Footer>
</Provider>
      </body>
    </html>
  );
}
