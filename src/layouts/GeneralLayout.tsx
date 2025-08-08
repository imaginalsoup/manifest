import React, { ReactNode } from 'react'

const GeneralLayout = ({ children }: { children: ReactNode }) => (
	<div> <div className="w-full bg-center flex h-screen bg-[url(/images/1.png)] !p-4 bg-no-repeat bg-cover flex overflow-x-clip">
		<div className="w-full xl:w-screen 2xl:w-[90%] flex align-center border-6 border-emerald-300 m-auto self-center justify-center h-[90%] overflow-y-auto">
			{children}
		</div>
	</div>
	</div>
)

export default GeneralLayout