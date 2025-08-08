import Title from '@/components/Title'
import WorkLayout from '@/layouts/WorkLayout'
import React from 'react'


const page = () => {
	return (
		<WorkLayout>
			<div className='flex flex-col gap-20'>
				<Title heading="mother[2]" />
				<p className='font-noto'>You came into my life fully emerged</p>
			</div>
		</WorkLayout>
	)
}

export default page