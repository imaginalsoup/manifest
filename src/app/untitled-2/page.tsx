import Title from '@/components/Title'
import WorkLayout from '@/layouts/WorkLayout'
import React from 'react'


const page = () => {
	return (
		<WorkLayout>
			<div className='flex flex-col gap-2'>
				<Title heading="Untitled 2" />
				<img src='/images/4.png' className='!border-0 mt-6 ' />
			</div>
		</WorkLayout>
	)
}

export default page