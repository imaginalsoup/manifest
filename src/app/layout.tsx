'use client'
// import dynamic from "next/dynamic";
import "./globals.css";
import 'papercss/dist/paper.min.css';

// const WiredElements = dynamic(() => import('./utils/WiredElements'));



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			{/* <WiredElements></WiredElements> */}
			<body className="m-0 w-screen">{children}</body>
		</html>
	);
}