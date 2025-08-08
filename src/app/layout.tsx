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
			<body className="m-0 w-screen">
				<div className="w-full  bg-center flex h-screen bg-[url(/images/1.png)] !p-4 bg-no-repeat bg-cover flex overflow-clip">
					<div className="w-full xl:w-screen 2xl:w-[90%] flex align-center border-6 border-emerald-300 m-auto self-center justify-center h-[90%]">

						{children}
					</div>
				</div>
			</body>
		</html>
	);
}