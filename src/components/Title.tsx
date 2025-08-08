import React from 'react'

type Props = {
	heading: string;
}

const Title = ({ heading }: Props) => {
	return (
		<p className='text-xl md:text-2xl text-black font'>{heading}</p>
	)
}

export default Title;