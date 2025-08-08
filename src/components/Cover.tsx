import { Button } from "react-papercss-design";

const Cover = () => {
	return (
		<div className="w-full flex flex-col justify-center dark gap-8 py-0 md:py-10 items-center px-6 md:px-20">
			<div className="border p-2 w-full bg-[#cb4ed943] md:mx-0 !border-amber-100">
				<div className="border py-8 md:py-16 md:p-8 bg-[#42DC0043] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 !border-amber-500 w-full">
					<p className="text-center text-white text-3xl md:text-5xl text-shadow-sm tracking-widest">MANIFEST</p>
					<p className="text-center text-sm md:text-3xl mt-4 md:mt-4 text-white tracking-wider text-shadow-lg">
						bea mariano + xyh tamura
					</p>
				</div>
			</div>
			<Button className="!bg-transparent !border-2 !text-white !border-white hover:!bg-amber-50 hover:!text-blue-800 !px-8 !py-3 shadow-2xl" outline onClick={() => console.log('Hello react papercss design!')}>
				Begin here </Button >
		</div >)
}

export default Cover;