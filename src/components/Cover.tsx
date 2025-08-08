
import { Button } from "react-papercss-design";

const Cover = () => {

	return (
		<div className="w-full flex flex-col justify-center dark gap-8 py-20" >
			<div className="border p-2 w-auto bg-[#cb4ed943] md:mx-40 !border-amber-100">

				<div className="border p-20 bg-[#42DC0043] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 !border-amber-500">
					<p className="text-center text-white text-5xl md:text-8xl text-shadow tracking-widest">MANIFEST</p>
					<p className="text-center text-xl  md:text-3xl mt-8 text-white tracking-wider">
						bea mariano + xyh tamura
					</p>
				</div>
			</div>
			<Button className="!bg-transparent !border-2 !text-white !border-white hover:!bg-amber-100 hover:!text-blue-400 !px-8 !py-4" outline onClick={() => console.log('Hello react papercss design!')}>
				Begin here </Button >
		</div >)
}

export default Cover