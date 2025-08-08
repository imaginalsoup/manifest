import React from 'react'

type Props = {
	children: React.ReactNode
}

const WorkLayout = ({ children }: Props) => {
	return (
		<div className="w-full bg-center flex min-h-screen bg-[url(/images/2.png)] bg-no-repeat bg-cover flex overflow-x-clip">
			<div className='w-full xl:w-screen 3xl:w-[90%] min-h-screen mx-auto mx-20'>
				<div className='h-full w-full bg-[#ffffffed] bg-clip-padding backdrop-filter p-6 flex justify-center'>
					<div className='w-full md:w-[60%] max-w-[80%] mt-12 md:mt-20'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkLayout