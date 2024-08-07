import '@/styles/globals.css';

import Layout from '../components/layout';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
