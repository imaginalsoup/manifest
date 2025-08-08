'use client'
import { createRoot } from "react-dom/client";
import "./styles.css";

import Cover from "@/components/Cover";

export default function App() {

	return (
		<div className="bg-center m-auto h-screen w-screen bg-[url(/images/1.png)] !p-0 !m-0 bg-no-repeat bg-cover flex">
			<div className="w-screen xl:w-screen 2xl:w-[90%] flex align-center border-2 border-emerald-300 m-auto self-center justify-center h-[90%]">
				<Cover />
			</div>
		</div >
	);
}


const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(<App />);
}
