'use client'
import dynamic from "next/dynamic";
import "./styles.css";
// import Cover from "@/components/Cover";

const Cover = dynamic(() => import('../components/Cover'), {
	ssr: false,
});

const App = () => {
	return (
		<div className="w-full  bg-center flex h-screen bg-[url(/images/1.png)] !p-4 bg-no-repeat bg-cover flex overflow-clip">
			<div className="w-full xl:w-screen 2xl:w-[90%] flex align-center border-6 border-emerald-300 m-auto self-center justify-center h-[90%]">
				<Cover />
			</div>
		</div >)
}

export default App;