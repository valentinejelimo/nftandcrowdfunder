import '../styles/globals.css';

import {NavBar, Footer} from "../components/componentindex";
import { NFTMarketplaceProvider } from '../Context/NFTMarketplaceContext';

const MyApp = ({ Component, pageProps }) => (

    <>
        <NFTMarketplaceProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer/>
        </NFTMarketplaceProvider>
    </>
);

export default MyApp;

