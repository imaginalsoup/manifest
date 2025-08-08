import Title from '@/components/Title'
import WorkLayout from '@/layouts/WorkLayout'
import React from 'react'
import ReactPlayer from 'react-player'


const page = () => {
	return (
		<WorkLayout>
			<div className='flex flex-col gap-8'>
				<Title heading='Vermillion Blues' />
				<ReactPlayer src='/images/3.mov' style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
					controls={true}
					playing={true}
				/>

			</div>
		</WorkLayout >)
}

export default page