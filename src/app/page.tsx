import ReactRough, {
	Arc,
	Curve,
	Line,
	Rectangle,
	LinearPath,
	Path,
	Circle,
	Polygon,
	Ellipse
} from "rough-react-wrapper";

export default function App() {
	return (
		<div className="border bg-center m-auto h-screen w-screen bg-[url(/images/1.png)] !p-0 !m-0 bg-no-repeat bg-cover">
			<div className="w-screen xl:w-screen 2xl:w-[90%] m-auto">
				<ReactRough
					renderer={"svg"}
					width="100%"
					height={800}
					config={{
						options: {
							fill: "lime",
							fillStyle: "solid",
							strokeWidth: 1
						}
					}}
				>
					<Path d="M 10 60 C 10 200, 160 100, 200 160" />

					<Rectangle
						width={200}
						height={200}
						x={250}
						y={10}
						fill="#6700c9"
						fillStyle={"hachure"}
						fillLineDash={[5, 15]}
						disableMultiStroke={true}
					/>

					<Arc
						closed
						fill={"red"}
						fillStyle={"dots"}
						height={180}
						start={3.141592653589793}
						stop={5.026548245743669}
						width={200}
						x={620}
						y={150}
					/>

					<Circle diameter={150} x={100} y={350} />

					<Line x1={420} y1={280} x2={260} y2={420} />

					<Ellipse height={80} width={150} x={600} y={350} />

					<Curve
						points={[
							[10, 628],
							[30, 673],
							[50, 690],
							[70, 673],
							[90, 628],
							[110, 572],
							[130, 527],
							[150, 510],
							[170, 527],
							[190, 572]
						]}
						strokeLineDash={[10, 15]}
						disableMultiStroke={true}
					/>

					<Polygon
						strokeWidth={2}
						points={[
							[350, 510],
							[290, 698],
							[440, 578],
							[260, 578],
							[420, 698]
						]}
					/>

					<LinearPath
						points={[
							[540, 560],
							[640, 570],
							[610, 670],
							[540, 660]
						]}
					/>
				</ReactRough>
			</div>
		</div>
	);
}
