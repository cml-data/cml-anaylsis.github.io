import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Christina's Portfolio</title>
				<meta name="description" content="Christina's Portfolio"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			</Head>
			<div>
				<About/>
				<Skills/>
				<Projects/>
			</div>
		</>
	);
};

export default Home;
