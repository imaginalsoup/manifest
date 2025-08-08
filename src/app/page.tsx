'use client'
import dynamic from "next/dynamic";
import "./styles.css";
// import Cover from "@/components/Cover";

const Cover = dynamic(() => import('../components/Cover'), {
	ssr: false,
});

const App = () => {
	return <Cover />;
}

export default App;