import { useEffect, useState } from 'react'
import Image from 'next/image'

import BorderWrapper from './Wrappers/BorderWrapper'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

const Navbar = () => {
	const [firstRender, setFirstRender] = useState(true)
	const { isConnected } = useAccount()

	// @dev - Prevent hydratation mismatch

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false)
		}
	}, [firstRender])

	return (
		!firstRender && (
			<nav className="flex justify-between px-4">
				<Image
					src="/wooylogo.svg"
					width={150}
					height={150}
					alt="wooy logo"
				/>

				<div className="py-12">
					{isConnected ? (
						<ConnectButton />
					) : (
						<BorderWrapper
							className={'h-[45px] w-[175px] font-bold'}
							rounded="rounded-xl"
							position="bottom-1.25 right-1.25"
							contraPosition="top-1.25 left-1.25"
							outline="outline outline-[3px] outline-black"
						>
							<div
								id="connectButtonStyle"
								className="flex h-full w-full"
							>
								<ConnectButton />
							</div>
						</BorderWrapper>
					)}
				</div>
			</nav>
		)
	)
}

export default Navbar
