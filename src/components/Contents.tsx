'use client';

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
			title: '[untitled] - bea1',
			url: '#',
		},
		{
			title: '[untitled] - bea2',
			url: '#',
		},
		{
			title: '[untitled] - bea3',
			url: '#',
		}
	]

	const randomEffect = () => {

		const effects = ['animate-bounce', 'animate-pulse', 'skew-y-[40deg]', 'skew-x-[40deg]', 'scale-120', 'underline', 'motion-scale-in-[0.5 motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur']

		const random = Math.floor(Math.random() * effects.length);

		return effects[random];
	};

	return (
		<div className='flex flex-col  content-center w-full p-4 items-center gap-2 md:gap-4 py-4 md:py-8'>
			<div><p className="text-amber-50 text-7xl">contents</p></div>

			<div className="flex border justify-between w-full h-full  pb-10 md:pb-20 px-2 md:px-20 flex-wrap">
				{works.map((item) => (
					<Button className={`!bg-[#ff78bca7] !text-cyan-50 ${randomEffect()} animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-out animate-alternate-reverse animate-fill-both`} key={item.title} onClick={() => router.push(item.url)}>{item.title}</Button>
				))}
			</div>
		</div>
	)
}

export default Contents