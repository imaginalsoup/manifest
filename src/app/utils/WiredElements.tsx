import { useEffect } from 'react';

export default function WiredElements() {
	useEffect(() => {
		import('wired-elements');
	}, []);

	return <></>
}