import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { SidebarContext } from '../context/sidebarContext'
import BorderWrapper from './Wrappers/BorderWrapper'

//---icons
// import WavesIcon from '@mui/icons-material/Waves'
// import ColorLensIcon from '@mui/icons-material/ColorLens'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
//-------

const SideBar = () => {
	const router = useRouter()
	const { setHelpModalIsOpen } = useContext(SidebarContext)
	const [helpTooltipOpen, setHelpTooltipOpen] = useState(false)

	return (
		<div className="flex min-w-[14rem]">
			<div className="fixed flex h-[calc(100vh-3rem-150px-1.5rem)] flex-col justify-between 2xl:h-[calc(100vh-4rem-150px-1.5rem)]">
				<div className="flex flex-col justify-between gap-4">
					<Link href="/">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-500 hover:cursor-pointer  ${
								router.pathname == '/'
									? 'bg-blue1 '
									: 'bg-transparent'
							}`}
						>
							{/* <WavesIcon className="text-inherit" /> */}
							<Image
								width={20}
								height={20}
								alt="waves icon"
								src="/wavesicon.svg"
							/>

							<p className=" text-2xl text-inherit">Pools</p>
						</div>
					</Link>
					<Link href="/pods">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-300 hover:cursor-pointer   ${
								router.pathname == '/pods'
									? 'bg-white text-black'
									: ''
							}`}
						>
							{/* <ColorLensIcon className="text-inherit" /> */}
							<Image
								width={20}
								height={20}
								alt="colorlensicon icon"
								src="/colorlensicon.svg"
							/>

							<p className=" text-2xl text-inherit">NFTs</p>
						</div>
					</Link>
					<Link href="/account">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-300 hover:cursor-pointer ${
								router.pathname == '/account' ? 'bg-blue1' : ''
							}`}
						>
							{/* <AccountCircleIcon className="text-inherit" /> */}
							<Image
								width={20}
								height={20}
								alt="accountcircleicon icon"
								src="/accountcircleicon.svg"
							/>

							<p className=" text-2xl text-inherit">My Account</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start text-white">
					{helpTooltipOpen && (
						<>
							<div className="flex w-full flex-col items-start justify-center gap-0.5 text-sm text-white/80  2xl:text-lg">
								<button
									onClick={() => {
										window.open(
											'https://t.me/wearewooy',
											'_blank'
										)
									}}
									className="flex flex-row gap-1 hover:text-white"
								>
									<Image
										width={20}
										height={20}
										alt="telegram icon"
										src="/telegramIcon.svg"
									/>
									<p>Telegram support</p>
								</button>
								<button
									onClick={() => {
										setHelpModalIsOpen(true)
									}}
									className="flex flex-row gap-1 hover:text-white"
								>
									<Image
										width={20}
										height={20}
										alt="mail icon"
										src="/mail.png"
									/>
									<p>Email support</p>
								</button>
								<button
									onClick={() => {
										window.open(
											'https://wooy.gitbook.io/wooy/',
											'_blank'
										)
									}}
									className="flex flex-row gap-1 hover:text-white"
								>
									<Image
										width={20}
										height={20}
										alt="question icon"
										src="/questionIcon.png"
									/>
									<p>FAQ</p>
								</button>
							</div>
						</>
					)}

					<button
						className={`mt-0.5 mb-3 flex items-center gap-2 ${
							helpTooltipOpen ? 'child-image:rotate-[180]' : ''
						}`}
						onClick={() => {
							setHelpTooltipOpen((prevState) => !prevState)
						}}
					>
						<img
							className="relative top-[0.1rem] h-3 w-3 rotate-180 object-contain transition-all duration-300 "
							src="arrow.png"
							alt="arrow icon"
						/>
						<p className="text-2xl">Help</p>
					</button>

					{/* <div className="flex w-full justify-between gap-5"> */}
					<div className="flex gap-5">
						<BorderWrapper
							className="text-2xl font-bold text-black"
							position="bottom-1.25 right-1.25"
							contraPosition="top-1.25 left-1.25"
							outline="outline outline-[3px] outline-black"
						>
							<a
								href="https://discord.com/"
								target="_blank"
								rel="noreferrer"
								className="flex h-[40px] w-[40px] items-center justify-center bg-white"
							>
								<Image
									src="/discord.png"
									width={23}
									height={23}
									alt="discord icon"
								/>
							</a>
						</BorderWrapper>

						<BorderWrapper
							className="text-2xl font-bold text-black"
							position="bottom-1.25 right-1.25"
							contraPosition="top-1.25 left-1.25"
							outline="outline outline-[3px] outline-black"
						>
							<a
								href="https://medium.com/"
								target="_blank"
								rel="noreferrer"
								className="flex h-[40px] w-[40px] items-center justify-center bg-white"
							>
								<Image
									src="/medium.png"
									width={23}
									height={23}
									alt="medium icon"
								/>
							</a>
						</BorderWrapper>
						<BorderWrapper
							className="text-2xl font-bold text-black"
							position="bottom-1.25 right-1.25"
							contraPosition="top-1.25 left-1.25"
							outline="outline outline-[3px] outline-black"
						>
							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noreferrer"
								className="flex h-[40px] w-[40px] items-center justify-center bg-white"
							>
								<Image
									src="/twitter.png"
									width={23}
									height={23}
									alt="twitter icon"
								/>
							</a>
						</BorderWrapper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
