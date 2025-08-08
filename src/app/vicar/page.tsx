import Title from '@/components/Title'
import WorkLayout from '@/layouts/WorkLayout'
import React from 'react'

const page = () => {
	return (
		<WorkLayout>
			<div className='flex flex-col gap-2'>
				<Title heading='Vicar' />
				<img src='/images/6.png' className='!border-0 mt-6 ' />
				<img src='/images/5.png' className='!border-0 mt-6 ' />
			</div>
		</WorkLayout>
	)
}

export default page