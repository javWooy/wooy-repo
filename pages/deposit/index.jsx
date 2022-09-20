import { useState } from 'react'
import { ethers } from 'ethers'
import { useContract, useSigner } from 'wagmi'

import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/Layout'
import PressableButton from '../../components/Wrappers/PressableButton'

import ControlledTokenAbi from '../../contracts/ControlledToken.json'
import abi from '../../contracts/PrizePool.json'
// import { useSendTransactionWrapper } from "../hooks/useSendTransactionWrapper";
import { CircularProgress } from '@mui/material'

const Deposit = () => {
	const [amount, setAmount] = useState()
	const [isConfirming, setIsConfirming] = useState(false)

	const { data: signer } = useSigner()

	const poolAddress = '0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2'

	// Mumbai PrizePool contract address
	// Polygon PrizePool contract addrress
	//const poolAddress = '0x4f3Fc13df562c7C06e530b054834a282fc1961f7'

	// PT Aave aAAVE Ticket token address
	const tokenAddress = '0x74c873c719866a650F151A9fBF0cB5b5c6315906'

	// WETH Polygon token address
	//const tokenAddress = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'

	// AAVE (depositTo)
	const controlledTokenAddress = '0x341d1f30e77D3FBfbD43D17183E2acb9dF25574E'

	const wooyPoolContract = useContract({
		addressOrName: poolAddress,
		contractInterface: abi,
		signerOrProvider: signer,
	})

	const erc20Contract = useContract({
		addressOrName: controlledTokenAddress,
		contractInterface: ControlledTokenAbi,
		signerOrProvider: signer,
	})

	const [isLoading, setIsLoading] = useState(false)
	const [txFinished, setTxFinished] = useState(true)

	const deposit = async (e) => {
		const address = await signer.getAddress()
		const parsedAmount = ethers.utils.parseUnits(amount)
		console.log(parsedAmount)

		if (!parsedAmount) return

		setIsLoading(true)

		const approveTx = await erc20Contract
			.approve(poolAddress, parsedAmount)
			.then(() => {
				const tx = wooyPoolContract
					.depositTo(
						address,
						parsedAmount,
						tokenAddress,
						ethers.constants.AddressZero,
						{ gasLimit: 1000000 }
					)
					.then(() => {
						setIsLoading(false)
					})
					.finally(() => {
						setIsLoading(false)
						setTxFinished(true)
					})
			})
	}

	return (
		<Layout>
			<div className="mb-40 flex h-full flex-col">
				<div className="mb-4 flex flex-row text-white/80">
					<span className="mr-1.5 flex items-center">
						<Link href="/">
							<Image
								width="18"
								height="18"
								alt="homeIcon"
								src="/iconWhite-home.svg"
							/>
						</Link>
					</span>
					/
					<span className="mx-1.5 flex items-center">
						<Link href="/pool">Worldcup final</Link>
					</span>
					/
					<span className="mx-1.5 flex items-center">
						<button
							onClick={() => {
								setIsConfirming(false)
							}}
						>
							Deposit
						</button>
					</span>
					{isConfirming && (
						<>
							/
							<span className="mx-1.5 flex items-center">
								<Link href="/deposit/confirm">
									Confirm deposit
								</Link>
							</span>
						</>
					)}
				</div>

				<div className="flex max-h-[90%] min-h-[90%] w-[70%] flex-col items-center justify-center gap-10 rounded-lg bg-white">
					<div className="flex w-fit items-center justify-center rounded-full border-[2px] border-black">
						<Image
							width="150"
							height="150"
							className="rounded-full object-cover object-center"
							src="/pool1.png"
							alt="pool photo"
						/>
					</div>

					<div className="flex w-full flex-col items-center justify-center gap-7">
						{/* 
								@dev - This structure isn't clean and intuitive, it should be refactored when there is time, and also it don't have error handling
						*/}

						{/* The user is in the confirm transaction modal*/}
						{isConfirming ? (
							<>
								{/* The tx already finish and was succesfull?*/}
								{txFinished ? (
									<div className="flex w-[75%] flex-col items-center justify-center gap-7">
										<h2 className="w-full text-center text-3xl font-bold tracking-tight text-black">
											You&apos;re in! Good luck
										</h2>

										<p className="w-[65%] text-center font-semibold text-black">
											Once this pool finishes, you&apos;ll
											automatically join the next one.
										</p>

										<div className="w-[90%] border-t-[2px] border-black" />

										<p className="w-[75%] text-center font-semibold text-gray-700">
											There are no withdrawal fees or
											lock-in periodsm but there are lots
											of free prizes.
										</p>

										<PressableButton className="w-[75%]">
											<Link href="/account">
												<p className="font-bold tracking-tight text-black">
													GO TO MY ACCOUNT
												</p>
											</Link>
										</PressableButton>

										<Link href="/">
											<p className="cursor-pointer font-semibold tracking-tight text-orange1 underline underline-offset-4">
												GO TO HOME
											</p>
										</Link>
									</div>
								) : (
									<>
										{/* The tx is pending or its waiting to be minted?*/}
										{isLoading ? (
											<CircularProgress />
										) : (
											<div className="flex w-[75%] flex-col items-center justify-center gap-7">
												<h2 className="text-center text-3xl font-bold tracking-tight text-black">
													Ready to win and go to the
													world cup final?
												</h2>

												<div className="flex w-full flex-row items-center justify-between rounded-lg border-[2px] border-black py-1 px-5">
													<p className="w-full text-center font-bold tracking-tight">
														Your deposit: {amount}{' '}
														USDC
													</p>
												</div>

												<PressableButton
													onClick={deposit}
													className="w-[75%]"
												>
													<p className="font-bold tracking-tight text-black">
														CONTINUE
													</p>
												</PressableButton>

												<p className="w-[75%] text-center font-bold text-gray-600">
													You&apos;ll need to approve
													this transaction on your
													wallet first.
												</p>
											</div>
										)}
									</>
								)}
							</>
						) : (
							<>
								{/* The user is in the deposit amount modal*/}

								<h2 className="text-3xl font-bold tracking-tight text-black">
									Deposit USDC on Polygon
								</h2>

								<p className="font-semibold text-gray-600">
									More networks and tokens coming soon!
								</p>

								<label
									className="w-[75%] cursor-pointer"
									htmlFor="amount"
									name="amount"
								>
									<div className="flex w-full flex-row items-center justify-between rounded-lg border-[2px] border-black py-1 px-5">
										<p className="font-bold tracking-tight">
											USDC
										</p>
										<input
											id="amount"
											name="amount"
											type="number"
											className="flex cursor-pointer text-end outline-none"
											placeholder="0"
											onChange={(e) =>
												setAmount(e.target.value)
											}
										/>
									</div>
								</label>

								<PressableButton
									className="w-[75%]"
									onClick={() => {
										setIsConfirming(true)
									}}
								>
									<p className="font-bold tracking-tight text-black">
										CONTINUE
									</p>
								</PressableButton>

								<p className="font-semibold">
									You&apos;ll need to approve this transaction
									on your wallet first.
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Deposit
