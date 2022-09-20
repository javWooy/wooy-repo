import SideBar from './SideBar'
import Navbar from './Navbar'
import ModalWrapper from './Wrappers/ModalWrapper'
import PressableButton from './Wrappers/PressableButton'

import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import { SidebarContext } from '../context/sidebarContext'

const Layout = (props) => {
	const { helpModalIsOpen, setHelpModalIsOpen } = useContext(SidebarContext)

	return (
		<div className="min-w-screen bgGradient min-h-screen">
			{helpModalIsOpen && (
				<ModalWrapper>
					<div className="relative flex h-[35rem] w-[35rem] flex-col items-center text-black">
						<div className="flex items-center self-end">
							<button
								className="z-40 mt-4 mr-8 self-end text-xl text-gray-400 hover:text-gray-700"
								onClick={() => {
									setHelpModalIsOpen(false)
								}}
							>
								X
							</button>
						</div>

						<div className="flex w-[70%] flex-col items-center justify-center">
							<h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
								We&apos;re here to help
							</h2>

							<div className="mt-9 mb-8 flex w-[95%] items-center justify-center rounded-lg border-[2px] border-black py-1">
								<p className="font-bold tracking-tight">
									SUPPORT@WOOY.CO
								</p>
							</div>

							<p className="w-[90%] text-center font-semibold tracking-tight">
								Maybe we&apos;ve already covered your questions
								in our FAQ section, make sure to check it out!
								You can also chat with us on Telegram
							</p>
							<p className="mt-4 mb-7 w-[90%] text-center font-semibold tracking-tight">
								{' '}
								We might take up to{' '}
								<span className="font-bold">48 hours</span> to
								answer your email.
							</p>

							<PressableButton
								onClick={() => {
									setHelpModalIsOpen(false)
								}}
								color="blue"
								className="mb-8 w-[80%]"
							>
								<p className="tracking-tight text-white">
									READ FAQ
								</p>
							</PressableButton>

							<Link href={'/'}>
								<p className="cursor-pointer font-semibold tracking-tight text-blue1 underline underline-offset-2">
									CHAT SUPPORT
								</p>
							</Link>
						</div>
					</div>
				</ModalWrapper>
			)}
			<div className="container mx-auto min-h-screen px-20 2xl:px-10">
				<Navbar />
				<main className=" mt-12 flex h-full w-full justify-between 2xl:mt-16">
					<SideBar />
					<div className="w-[72%] 2xl:w-8/12 ">{props.children}</div>
				</main>
			</div>
		</div>
	)
}
{
	/* <div className="min-w-screen bgGradient min-h-screen">
			<div className="container mx-auto px-20 2xl:px-0">
				<Navbar />
				<main className="mt-12 flex h-full justify-between gap-[11vw] 2xl:mt-16 ">
					<SideBar />
					<div className="w-8/12">{props.children}</div>
				</main>
			</div>
		</div> */
}

export default Layout
