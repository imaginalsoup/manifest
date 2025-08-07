'use client';

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="m-0 w-screen overflow-clip">
				{children}
			</body>
		</html>
	);
}
