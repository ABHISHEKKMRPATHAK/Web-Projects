'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";
import {appStore} from '../store/appStore'

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={appStore}>
        {children}
        </Provider>
      </body>
    </html>
  );
}
