'use client';

import dynamic from 'next/dynamic';

// import Contents from "@/components/Contents"
const Contents = dynamic(() => import('@/components/Contents'), {
	ssr: false,
});

const page = () => {
	return (
		<Contents />)
}

export default page