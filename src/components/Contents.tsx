'use client';

import GeneralLayout from "@/layouts/GeneralLayout";
import { useRouter } from "next/navigation";
import { Button } from "react-papercss-design"


const Contents = () => {
	const router = useRouter();


	const works = [
		{
			title: 'Of Another Shore',
			url: 'https://ppk80.github.io/of-another-shore/'
		},
		{
			title: 'Chanidae',
			url: 'https://ppk80.github.io/chanidae.html',
		},
		{
			title: 'i wanted to think about time; i wanted',
			url: 'https://ppk80.github.io/of-another-shore/iwantedtothinkabouttimeiwanted.html',
		},
		{
			title: 'moonmilk',
			url: 'https://ppk80.github.io/of-another-shore/moonmilk.html',
		},
		{
			title: 'mother[2]',
			url: '/mother[2]',
		},
		{
			title: '[untitled] - bea2',
			url: '#',
		},
		{
			title: 'Vermillion Blues',
			url: '/vermillion-blues',
		},
		{
			title: '[untitled] - 2',
			url: '#',
		},
		{
			title: '[untitled] - 3',
			url: '#',
		},
		{
			title: '[untitled] - 4',
			url: '#',
		},
		{
			title: '[untitled] - 5',
			url: '#',
		},
		{
			title: '[untitled] - 6',
			url: '#',
		}
	]



	const randomEffect = () => {
		const effects = ['animate-bounce', 'animate-pulse', 'skew-y-[20deg]', 'skew-x-[30deg]',
			'skew-x-[80deg]', 'motion-rotate-loop-45', 'skew-y-[10deg]',
			'scale-120', 'animate-pulse', 'animate-bounce', 'motion-translate-y-loop-2', 'motion-scale-loop-110', 'scale-70', 'ml-3', 'mr-3', 'pt-6', 'pb-2'];

		const random = Math.floor(Math.random() * effects.length);

		return `${effects[random]}`;
	};

	return (
		<GeneralLayout>
			<div className='flex flex-col  content-center w-full p-4 items-center gap-2 md:gap-4 py-4 md:py-8'>
				<div><p className="text-amber-50 text-4xl md:text-7xl">contents</p></div>

				<div className="flex justify-between w-full h-full  pb-10 md:pb-20 px-2 md:px-20 flex-wrap">
					{works.map((item) => (
						<Button className={`text-xl md:!text-2xl !border-b-orange-300 !bg-[#ff78bca7] !text-cyan-50 ${randomEffect()}`} key={item.title} onClick={() => router.push(item.url)}>{item.title}</Button>
					))}
				</div>
			</div>
		</GeneralLayout>
	)
}

export default Contents