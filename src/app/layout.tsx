import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav';
import "./globals.css";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Quick Ecommerce",
	description: "By Shamna K",
	keywords: ["Upcode", "Professional Training"]
};

export default function RootLayout({
 	 children,
}: Readonly<{
 	 children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div className="container">
					<div>Quick Ecomm</div>
					<Nav />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
