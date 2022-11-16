import { useState } from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'
import PressableButton from '../../components/Wrappers/PressableButton'
import ModalWrapper from '../../components/Wrappers/ModalWrapper'

const Index = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	return (
		<>
			{modalIsOpen && (
				<ModalWrapper>
					<div className="relative flex h-[35rem] w-[35rem] flex-col text-black">
						<div className="flex items-center justify-end">
							<button
								className="z-40 mt-4 mr-8 self-end text-xl text-gray-400 hover:text-gray-700"
								onClick={() => {
									setModalIsOpen(false)
								}}
							>
								X
							</button>
						</div>
						<div className="absolute flex h-full w-full flex-col items-center justify-center gap-8 px-20">
							<h2 className="text-3xl font-bold tracking-tight">
								Artist IFANA
							</h2>

							<p className="text-center text-lg font-semibold tracking-tight">
								Artist born in Argentina who specializes in
								various techniques of digital and analog art,
								covering branches such as digital illustration,
								graphic design, photography and painting.
							</p>

							<div className="flex flex-row gap-4">
								<PressableButton
									color="blue"
									className="w-fit"
									padding="p-2"
									border=""
								>
									<img
										className="w-6"
										src="/iconWhite-twitter.svg"
										alt="twitter icon"
									/>
								</PressableButton>
								<PressableButton
									color="blue"
									className="w-fit"
									padding="p-2"
									border=""
								>
									<img
										className="w-6"
										src="/iconWhite-instagram.svg"
										alt="instagram icon"
									/>
								</PressableButton>
								<PressableButton
									color="blue"
									className="w-fit"
									padding="p-2"
									border=""
								>
									<img
										className="w-6"
										src="/iconWhite-linkedin.svg"
										alt="linkedin icon"
									/>
								</PressableButton>
							</div>
						</div>
					</div>
				</ModalWrapper>
			)}

			<Layout>
				<div className="bgImage flex h-[20rem] w-full flex-col gap-3 py-8 px-6 xl:pt-10 2xl:!bg-cover 2xl:!bg-bottom 2xl:!pt-8">
					<h2 className="text-5xl font-semibold tracking-tighter">
						Proof of donation
					</h2>
					<p className="text-xl font-semibold">
						We love <span className="text-blue1">digital art</span>{' '}
						as much as you do!
					</p>
					<p className="front-light mt-2 text-lg">
						Every time you participate in a pool, you will get to
						claim your Proof of Donation (aka POD), a collectible
						NFT that states{' '}
						<span className="font-bold">
							when and to whom you have donated money
						</span>
					</p>

					<p className="text-lg">
						Each season has a different guest artist that creates
						beatiful PODs for you!
					</p>
					<div className="font-blue1 mr-10 self-end">
						<Link href="https://wooy.gitbook.io/wooy/">
							<p className="cursor-pointer text-blue1 underline underline-offset-4">
								Learn more
							</p>
						</Link>
					</div>
				</div>

				<div className="mb-36 mt-24">
					<h2 className="title">Coming soon</h2>

					<div className="flex flex-col">
						<div className="bgCircles mt-10 h-[420px]" />
						<PressableButton
							color="blue"
							className="mt-20 w-[40%] self-center text-white"
							onClick={() => {
								setModalIsOpen(true)
							}}
						>
							ARTIST IFANA
						</PressableButton>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Index
