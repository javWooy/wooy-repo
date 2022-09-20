import '@rainbow-me/rainbowkit/styles.css'

import {
	darkTheme,
	getDefaultWallets,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
	[chain.mainnet, chain.polygon],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: 'Wooy',
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

import '../styles/globals.css'
import Link from 'next/link'

import { SidebarContextProvider } from '../context/sidebarContext'

import PressableButton from '../components/Wrappers/PressableButton'
import ModalWrapper from '../components/Wrappers/ModalWrapper'

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				showRecentTransactions={true}
				chains={chains}
				theme={darkTheme()}
			>
				<SidebarContextProvider>
					<Component {...pageProps} />
				</SidebarContextProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default MyApp
