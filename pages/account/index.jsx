import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import PoolCard from '../../components/Cards/PoolCard'
import BorderWrapper from '../../components/Wrappers/BorderWrapper'
import PressableButton from '../../components/Wrappers/PressableButton'
import ModalWrapper from '../../components/Wrappers/ModalWrapper'

const pools = [
	{
		title: 'Experience the World Cup in Qatar',
		photo: '/pool1.png',
		isActive: true,
		enddate: '',
		isWinner: false,
	},
	{
		title: 'Viví un recital único con Javier Calamaro',
		photo: '/pool2.jpeg',
		isActive: false,
		enddate: '09/06',
		isWinner: true,
	},
]

const badges = [
	{ image: '/nft1.png', data: {} },
	{ image: '/nft2.png', data: {} },
	{ image: '/nft3.png', data: {} },
	{ image: '/nft4.png', data: {} },
	{ image: '/nft5.png', data: {} },
	{ image: '/nft6.png', data: {} },
]

const buttons = [
	{ value: '0%' },
	{ value: '25%' },
	{ value: '50%' },
	{ value: '75%' },
	{ value: '100%' },
]

const Index = () => {
	const [showType, setShowType] = useState('pools')
	const [confirmationModalIsOpen, setConfirmationModalIsOpen] =
		useState(false)
	const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false)
	const [podModalIsOpen, setPodModalIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState('0%')

	const router = useRouter()

	const switchHandler = (option) => {
		setShowType(option)
	}

	const formHandler = (event) => {
		event.preventDefault()
		console.log(event.target.name.value)
		console.log(event.target.email.value)
		console.log(event.target.checkbox.checked)
	}

	const withdrawHandler = () => {
		setSelectedValue('0%')
		setWithdrawModalIsOpen(false)

		// DO SOMETHING
	}

	return (
		<>
			{confirmationModalIsOpen && (
				<ModalWrapper>
					<div className="relative flex h-[35rem] w-[35rem] flex-col items-center text-black">
						<div className="flex items-center self-end">
							<button
								className="z-40 mt-4 mr-8 self-end text-xl text-gray-400 hover:text-gray-700"
								onClick={() => {
									setConfirmationModalIsOpen(false)
								}}
							>
								X
							</button>
						</div>

						<div className="flex w-fit items-center justify-center rounded-full border-[2px] border-black">
							<Image
								width="150"
								height="150"
								className="rounded-full object-cover object-center"
								src="/pool1.png"
								alt="pool photo"
							/>
						</div>

						<div className="flex w-[70%] flex-col items-center justify-center gap-7">
							<h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
								Are you sure?
								<br />
								There&apos;s nothing to lose!
							</h2>

							<p className="w-[79%] text-center font-semibold tracking-tight">
								There are no withdrawal fees or lock-in periods,
								but there are lots upcoming prizes and more NGOs
								to help.
							</p>

							<PressableButton
								onClick={() => {
									setConfirmationModalIsOpen(false)
									setWithdrawModalIsOpen(true)
								}}
								color="blue"
								className="w-[80%]"
							>
								<p className="tracking-tight text-white">
									WITHDRAW MONEY
								</p>
							</PressableButton>

							<button
								onClick={() => {
									router.push('/')
								}}
							>
								<p className="font-semibold tracking-tight text-blue1 underline underline-offset-2">
									CONTINUE PARTICIPATING
								</p>
							</button>
						</div>
					</div>
				</ModalWrapper>
			)}

			{withdrawModalIsOpen && (
				<ModalWrapper>
					<div className="relative flex h-[38rem] w-[40rem] flex-col items-center text-black">
						<div className="flex items-center self-end">
							<button
								className="z-40 mt-3 mr-8 self-end text-xl text-gray-400 hover:text-gray-700"
								onClick={() => {
									setSelectedValue('0%')
									setWithdrawModalIsOpen(false)
								}}
							>
								X
							</button>
						</div>

						<div className="flex h-full w-full flex-col px-12 py-0">
							<h2 className="text-xl font-bold tracking-tight">
								Withdraw
							</h2>
							<p className="font-semibold tracking-tight">
								Are you sure? You can withdraw your monet at any
								time, but you&apos;d be eliminating/reducing
								your chances to win this and future prizes for
								free if you do so.
							</p>

							<BorderWrapper
								className="mt-4 rounded-xl"
								rounded="rounded-xl"
								position="bottom-1.25 right-1.25"
								contraPosition="top-1.25 left-1.25"
								outline="outline outline-[3px] outline-black"
								borderColor="border-black"
							>
								<div className="flex flex-col gap-3 bg-blue1 px-8 py-2 tracking-tight text-white">
									<div className="flex w-full flex-row justify-between">
										<p>Withdraw amount</p>
										<p>1,000,000 DAI</p>
									</div>
									<div className="flex w-full flex-row items-center">
										<input
											type="number"
											className="w-[90%] rounded-lg py-1 px-2 text-black"
										/>
										<p className="w-[10%] pl-6 text-center">
											DAI
										</p>
									</div>
								</div>
							</BorderWrapper>

							<h2 className="mt-4 text-lg font-bold tracking-tight">
								Feeling generous? Donate more!
							</h2>
							<p className="mt-1 font-semibold tracking-tight">
								If you prefer, you can donate a percentage or
								the full amount you&apos;ll withdraw to the NGO
								that benefits from our current active pool
							</p>

							<div className="mt-5 flex flex-row items-center justify-center gap-3">
								{buttons.map((button, index) => {
									return (
										<PressableButton
											key={index}
											color={'blue'}
											className="w-auto"
											onClick={() => {
												setSelectedValue(button.value)
											}}
										>
											<p className="text-center tracking-tight text-white">
												{button.value}
											</p>
										</PressableButton>
									)
								})}
							</div>

							<BorderWrapper
								className="mt-4 rounded-xl"
								rounded="rounded-xl"
								position="bottom-1.25 right-1.25"
								contraPosition="top-1.25 left-1.25"
								outline="outline outline-[3px] outline-black"
								borderColor="border-black"
							>
								<div className="flex flex-col gap-3 bg-blue1 px-8 py-2 tracking-tight text-white/80">
									<p>Donation percentage</p>

									<div className="flex w-full flex-row items-center">
										<input
											type="text"
											className="w-[90%] rounded-lg bg-blue2 py-1 px-2 text-white"
											value={selectedValue}
											defaultValue={selectedValue}
											disabled
										/>
									</div>
								</div>
							</BorderWrapper>
							<PressableButton
								color="blue"
								className="mt-6 h-fit w-[45%]"
								padding="py-1.5 px-4"
								onClick={withdrawHandler}
							>
								<p className="tracking-tight text-white">
									Withdraw
								</p>
							</PressableButton>
						</div>
					</div>
				</ModalWrapper>
			)}

			{podModalIsOpen && (
				<ModalWrapper>
					<div className="relative flex h-[38rem] w-[35rem] flex-col items-center text-black">
						<div className="flex items-center self-end">
							<button
								className="z-40 mt-4 mr-8 self-end text-xl text-gray-400 hover:text-gray-700"
								onClick={() => {
									setPodModalIsOpen(false)
								}}
							>
								X
							</button>
						</div>

						<div className="flex w-fit items-center justify-center rounded-full border-[3px] border-black">
							<Image
								width="150"
								height="150"
								className="rounded-full object-cover object-center"
								src="/pool1.png"
								alt="pool photo"
							/>
						</div>

						<div className="flex w-[91%] flex-col items-center justify-center">
							<h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
								Viví un recital único con Javier Calamaro
							</h2>
							<p className="my-2 font-semibold text-blue1">
								#5113940
							</p>

							<p className="w-[91%] text-center font-semibold tracking-tight">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Blanditiis, dolor. Sapiente
								iusto quod Blanditiis, dolor. Sapiente iusto
								quod adipisicing elit. Blanditiis, dolor.
							</p>

							<div className="mt-3 flex w-[91%] flex-col items-center gap-1 tracking-tight">
								<p className="text-xs">
									<span className="font-semibold">
										From address:{' '}
									</span>
									0x3df2641419c38c27756ed458f1347ce85fe715ca9363ba8c0b18506834a49495
								</p>
								<p className="text-xs">
									<span className="font-semibold">
										To address:{' '}
									</span>
									0xbb361a591a20bd7be13a48fc4ba3f7260cbff00f
								</p>
							</div>

							<div className="my-4 w-[91%] border-t-[2px] border-black" />

							<div className="flex w-[91%] flex-row items-center justify-start  py-1">
								<Image
									width={15}
									height={15}
									alt="calendar icon"
									src={'/calendarIcon.png'}
								/>
								<p className="ml-1 text-sm font-semibold tracking-tight text-blue1">
									01 july 2022
								</p>
							</div>

							<PressableButton
								onClick={() => {
									setPodModalIsOpen(false)
								}}
								color="blue"
								className="mt-5 w-[75%]"
							>
								<p className="tracking-tight text-white">
									SHARE POD IMAGE
								</p>
							</PressableButton>
						</div>
					</div>
				</ModalWrapper>
			)}

			<Layout>
				<div className="mb-20 flex min-h-full flex-col text-white">
					<h2 className="title">My account</h2>

					<div className="flex flex-row items-center justify-between">
						<div className="my-10 flex w-fit flex-row rounded-lg border ">
							<div
								className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
									showType == 'pools' &&
									'!bg-blue1 outline-[1.5px] !outline-white/70'
								}`}
							>
								<button
									onClick={() => {
										switchHandler('pools')
									}}
									className="px-5 py-0.75 font-semibold"
								>
									Pools
								</button>
							</div>
							<div
								className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
									showType == 'pods' &&
									'!bg-blue1 outline-[1.5px] !outline-white/70'
								}`}
							>
								<button
									onClick={() => {
										switchHandler('pods')
									}}
									className="px-5 py-0.75 font-semibold"
								>
									PODs
								</button>
							</div>
							<div
								className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
									showType == 'info' &&
									'!bg-blue1 outline-[1.5px] !outline-white/70'
								}`}
							>
								<button
									onClick={() => {
										switchHandler('info')
									}}
									className="px-5 py-0.75 font-semibold"
								>
									Personal info
								</button>
							</div>
						</div>

						{showType == 'pods' && (
							<BorderWrapper
								className={'h-fit w-fit font-bold'}
								rounded="rounded-lg"
								position="bottom-1.25 right-1.25"
								contraPosition="top-1.25 left-1.25"
								outline="outline outline-[3px] outline-black"
							>
								<button className="flex h-full w-full flex-row items-center justify-center gap-2 rounded-lg bg-white py-2 px-4">
									<img
										className="w-4"
										src="/shareIcon.svg"
										alt="share icon"
									/>
									<p className=" text-sm tracking-tight text-black">
										SHARE MY COLLECTION
									</p>
								</button>
							</BorderWrapper>
						)}
					</div>

					{showType == 'pools' && (
						<>
							<div className="flex flex-col gap-5">
								<h3 className="mb-2 text-lg font-semibold">
									ACCOUNT OVERVIEW
								</h3>
								<div className="rounded-2xl bg-blue1 p-8 pb-10">
									<p className="mb-1 text-xl font-semibold tracking-tight">
										DEPOSITS
									</p>
									<h2 className=" text-5xl font-bold ">
										31,066.08 USDC
									</h2>
								</div>
							</div>

							<div className="mt-20 flex flex-col gap-3">
								<h3 className="mb-4 text-lg font-semibold">
									POOLS I&apos;VE JOINED
								</h3>

								{pools.map((pool, index) => {
									return (
										<PoolCard
											key={index}
											title={pool.title}
											photo={pool.photo}
											isActive={pool.isActive}
											enddate={pool.enddate}
											isWinner={pool.isWinner}
											openModal={
												setConfirmationModalIsOpen
											}
										/>
									)
								})}
							</div>
						</>
					)}

					{showType == 'pods' && (
						<div className="mt-5 mb-20 flex flex-col">
							<h3 className="mb-16 text-3xl font-semibold tracking-tight">
								My collection
							</h3>

							<div className="grid grid-cols-4 gap-10">
								{badges.map((badge, index) => {
									return (
										<div
											key={index}
											className="h-full w-full"
										>
											<img
												src={badge.image}
												className="h-[13vw] w-[13vw] rounded-full border-[2px] object-cover"
												alt="badge photo"
												onClick={() => {
													setPodModalIsOpen(true)
												}}
											/>
										</div>
									)
								})}
							</div>
						</div>
					)}

					{showType == 'info' && (
						<div className="flex flex-col">
							<p className="mb-6 text-xl">
								Don&apos;t worry,{' '}
								<span className="font-bold">
									we value anonymity
								</span>{' '}
								as much as you do!
							</p>
							<p className="text-xl">
								We don&apos;t need your personal info, but iw
								would be much easier to contact you by email{' '}
								<span className="font-bold">
									in case you win a prize.
								</span>
							</p>

							<form
								onSubmit={formHandler}
								className="mt-20 flex flex-col gap-12"
							>
								<div className="flex flex-row gap-10">
									<input
										type="text"
										id="name"
										className="w-1/2 rounded-sm bg-white py-2 px-3 text-black"
										placeholder="Alias"
									/>
									<input
										type="email"
										id="email"
										className="w-1/2 rounded-sm bg-white py-2 px-3 text-black"
										placeholder="Email"
									/>
								</div>

								<div className="flex items-center gap-2.5">
									<input
										type="checkbox"
										id="checkbox"
										className="relative mt-[0.25rem] h-[0.95rem] w-[0.95rem] accent-black invert"
									/>
									<p className="text-white/70">
										Join our mailing list to receive news on
										awesome prizes
									</p>
								</div>

								<PressableButton
									color="blue"
									className="h-fit w-[30%] self-end"
									padding="py-2 px-7"
								>
									<p className="font-semibold text-white">
										SAVE
									</p>
								</PressableButton>
							</form>
						</div>
					)}
				</div>
			</Layout>
		</>
	)
}

export default Index
