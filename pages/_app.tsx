import { AppProps } from 'next/app';

import '../assets/styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
