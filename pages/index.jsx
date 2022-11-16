import { useState } from 'react'
import { useProvider, useContract, useSigner, useAccount } from 'wagmi'
import abi from '../contracts/PrizePool.json'
import erc20abi from '../contracts/ERC20ABI.json'
import ControlledTokenAbi from '../contracts/ControlledToken.json'
import Layout from '../components/Layout'
import { ethers } from 'ethers'
// import { useSendTransactionWrapper } from "../hooks/useSendTransactionWrapper";
import BorderWrapper from '../components/Wrappers/BorderWrapper'
import PrizeCard from '../components/Cards/PrizeCard'
import EventCard from '../components/Cards/EventCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

// Agregado por Yoea13
// import { getTimeSentence } from '../components/utils/getTimeSentence'
// import { NewPrizeCountdownInWords } from '../components/NewPrizeCountdownInWords'

// import CountdownTimer from '../components/utils/CountdownTimer'
// -------------------

export default function Home() {
	// const sendTx = useSendTransactionWrapper();
	const [amount, setAmount] = useState()
	// const provider = useProvider();
	const { address, isConnected } = useAccount()

	const { data: signer } = useSigner()

	// Mumbai PrizePool contract address
	const poolAddress = '0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2'

	// Polygon PrizePool contract addrress
	// const poolAddress = "0x4f3Fc13df562c7C06e530b054834a282fc1961f7";

	// PT Aave aAAVE Ticket token address
	const tokenAddress = '0x74c873c719866a650F151A9fBF0cB5b5c6315906'

	// WETH Polygon token address
	// const tokenAddress = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

	const wooyPoolContract = useContract({
		addressOrName: poolAddress,
		contractInterface: abi,
		signerOrProvider: signer,
	})

	const erc20Contract = useContract({
		addressOrName: tokenAddress,
		contractInterface: ControlledTokenAbi,
		signerOrProvider: signer,
	})

	// const getsegundos = async () => {
	// 	const { ethereum } = window
	// 	if (ethereum) {
	// 		const provider = new ethers.providers.Web3Provider(ethereum)
	// 		const signer = provider.getSigner()
	// 		const pool = new ethers.Contract(poolAddress, abi, signer)

	// 		// const direccion = await pool.address
	// 		// console.log(direccion, ' - direccion')

	// 		// const dato = await pool.prize
	// 		// console.log(dato, ' - dato')

	// 		// const segundos = await pool.prize.prizePeriodSeconds
	// 		// console.log(segundos, ' - segundos')
	// 	}
	// }

	// const deposit = async (e) => {
	// 	const address = await signer.getAddress()
	// 	const parsedAmount = ethers.utils.parseUnits(amount)

	// 	// e.preventDefault();

	// 	// const params = [
	// 	//   poolAddress,
	// 	//   ethers.utils.parseUnits("9999999999", Number(decimals)),
	// 	// ];

	// 	// const txName = t(`allowTickerPoolSponsorship`, {});
	// 	// const method = "approve";

	// 	// const id = await sendTx({
	// 	//   name: txName,
	// 	//   contractAbi: ControlledTokenAbi,
	// 	//   contractAddress: tokenAddress,
	// 	//   method,
	// 	//   params,
	// 	//   callbacks: {},
	// 	// });
	// 	// console.log(id, "asdasd");
	// 	// const aId = await id.wait();

	// 	// console.log(aId, "asdasd");

	// 	const approveTx = await erc20Contract.approve(poolAddress, parsedAmount)
	// 	console.log(approveTx, 'aprobacion')
	// 	const aTx = await approveTx.wait()
	// 	console.log(aTx, 'await tx')

	// 	const tx = await wooyPoolContract.depositTo(
	// 		address,
	// 		parsedAmount,
	// 		tokenAddress,
	// 		ethers.constants.AddressZero
	// 	)

	// 	console.log(tx, 'Depositando....')

	// 	const depositAtx = await tx.wait()
	// 	console.log(depositAtx, 'depositAtx')
	// }

	// const withdrawal = async (e) => {
	//   const approveTx = await erc20Contract.approve(poolAddress, parsedAmount);
	//   console.log(approveTx, "aprobacion");
	//   const aTx = await approveTx.wait();
	//   console.log(aTx, "await tx");

	//   const tx = await wooyPoolContract.withdrawInstantlyFrom(
	//     address,
	//     parsedAmount,
	//     tokenAddress
	//   );

	//   console.log(tx, "Retirando....");

	//   const widthdrawAtx = await tx.wait();
	//   console.log(widthdrawAtx, "widthdrawAtx");
	// };

	/// @notice Withdraw assets from the Prize Pool instantly.  A fairness fee may be charged for an early exit.
	/// @param from The address to redeem tokens from.
	/// @param amount The amount of tokens to redeem for assets.
	/// @param controlledToken The address of the token to redeem (i.e. ticket or sponsorship)
	/// @param maximumExitFee The maximum exit fee the caller is willing to pay.  This should be pre-calculated by the calculateExitFee() fxn.
	/// @param donationPercentage The percentage of the withdrawal to donate
	/// @return The actual exit fee paid
	// function withdrawInstantlyFrom(
	//   address from,
	//   uint256 amount,
	//   address controlledToken,
	//   uint256 maximumExitFee,
	//   uint256 donationPercentage
	// )

	const prizeData = {
		name: 'Experience the World Cup in Qatar',
		company: 'Helps Weforest',
		images: ['fifa-player.jpeg', 'fifa-player.jpeg', 'fifa-player.jpeg'],
		endDate: 'July 28, 23 11:00:00 GMT+00:00',
		// endDate: 'November 28, 2022',
	}

	const comingData = [
		{
			image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg',
			name: 'Event1 super special with a star featured, we are all gona make it.',
			company: 'COMPANY1 NAME',
			startDate: 'August 05, 2022',
		},
		{
			image: 'https://dfmas.df.cl/dfmas/site/artic/20220818/imag/foto_0000000520220818214557/harry-styles-1656061342.jpg',
			name: 'Event2 super special with a star featured, we are all gona make it.',
			company: 'COMPANY2 NAME',
			startDate: 'August 25, 2022',
		},
		{
			image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg',
			name: 'Event3 super special with a star featured, we are all gona make it.',
			company: 'COMPANY3 NAME',
			startDate: 'August 05, 2022',
		},
		{
			image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg',
			name: 'Event4 super special with a star featured, we are all gona make it.',
			company: 'COMPANY4 NAME',
			startDate: 'August 05, 2022',
		},
		{
			image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg',
			name: 'Event5 super special with a star featured, we are all gona make it.',
			company: 'COMPANY5 NAME',
			startDate: 'August 05, 2022',
		},
	]
	// ===============================

	// const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
	// const NOW_IN_MS = new Date().getTime()
	// const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS

	const NOW_IN_MS = new Date().getTime()
	const dateTimeTarget = new Date('July 28, 23 11:00:00 GMT+00:00')

	const deposit = async (e) => {
		console.log('Comienza....')
		const { ethereum } = window
		const parsedAmount = ethers.utils.parseUnits(amount)
		console.log(amount, 'Valor.')
		const provider = new ethers.providers.Web3Provider(ethereum)
		const signer = provider.getSigner()
		const contract = new ethers.Contract(poolAddress, abi, signer)
		console.log(`Contrato: ${poolAddress}`)
		const tx = await contract.depositTo(
			address,
			parsedAmount,
			tokenAddress,
			ethers.constants.AddressZero
		)
		console.log(tx, 'Depositando....')
		const depositAtx = await tx.wait()
		console.log(depositAtx, 'depositAtx')
	}

	const withdrawal = async (e) => {
		console.log('Comienza....')
		const { ethereum } = window
		const parsedAmount = ethers.utils.parseUnits(amount)
		const maximumExitFee = ethers.utils.parseUnits('0.0000001')
		console.log(amount, 'Valor.')
		const provider = new ethers.providers.Web3Provider(ethereum)
		const signer = provider.getSigner()
		const contract = new ethers.Contract(poolAddress, abi, signer)
		console.log(`Contrato: ${poolAddress}`)
		const tx = await contract.withdrawInstantlyFrom(
			address,
			parsedAmount,
			tokenAddress,
			maximumExitFee,
			0
		)
		console.log(tx, 'Retirando....')
		const widthdrawAtx = await tx.wait()
		console.log(widthdrawAtx, 'widthdrawAtx')
	}

	const [currentAccount, setCurrentAccount] = useState('')
	const connectWallet = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				alert('Get MetaMask -> https://metamask.io/')
				return
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			})

			console.log('Connected', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log(error)
		}
	}
	const switchNetwork = async () => {
		if (window.ethereum) {
			try {
				// Try to switch to the Mumbai testnet
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
				})
			} catch (error) {
				// This error code means that the chain we want has not been added to MetaMask
				// In this case we ask the user to add it to their MetaMask
				if (error.code === 4902) {
					try {
						await window.ethereum.request({
							method: 'wallet_addEthereumChain',
							params: [
								{
									chainId: '0x13881',
									chainName: 'Polygon Mumbai Testnet',
									rpcUrls: [
										'https://rpc-mumbai.maticvigil.com/',
									],
									nativeCurrency: {
										name: 'Mumbai Matic',
										symbol: 'MATIC',
										decimals: 18,
									},
									blockExplorerUrls: [
										'https://mumbai.polygonscan.com/',
									],
								},
							],
						})
					} catch (error) {
						console.log(error)
					}
				}
				console.log(error)
			}
		} else {
			// If window.ethereum is not found then MetaMask is not installed
			alert(
				'MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html'
			)
		}
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window

		if (!ethereum) {
			console.log('Make sure you have metamask!')
			return
		} else {
			console.log('We have the ethereum object', ethereum)
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

		if (accounts.length !== 0) {
			const account = accounts[0]
			console.log('Found an authorized account:', account)
			setCurrentAccount(account)
		} else {
			console.log('No authorized account found')
		}

		// This is the new part, we check the user's network chain ID
		const chainId = await ethereum.request({ method: 'eth_chainId' })
		setNetwork(networks[chainId])

		ethereum.on('chainChanged', handleChainChanged)

		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload()
		}
	}

	// ===============================

	return (
		<Layout>
			{/* =============================== */}

			{/* <div className="text-white">
				<h2>Countdown Timer</h2>
				<CountdownTimer targetDate={dateTimeTarget} />
			</div> */}

			{/* <button
				onClick={getsegundos}
				className="cta-button connect-wallet-button mb-8 text-white"
			>
				Get Segundos
			</button> */}
			{/* <div className="text-inverse mb-3 text-white">
				<NewPrizeCountdownInWords
					prizePeriodSeconds={wooyPoolContract.prizePeriodSeconds}
					prizePeriodStartedAt={wooyPoolContract.prizePeriodStartedAt}
					isRngRequested={wooyPoolContract.isRngRequested}
				/>
			</div> */}

			{/* <div>
				<button
					onClick={connectWallet}
					className="cta-button connect-wallet-button mb-8 text-white"
				>
					Connect Wallet
				</button>
			</div>
			<div>
				<input
					placeholder="Ingresar monto a depositar"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button style={{ backgroundColor: 'red' }} onClick={deposit}>
					Depositar
				</button>
			</div>

			<div>
				<input
					placeholder="Ingresar monto a retirar"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button
					style={{ backgroundColor: 'green' }}
					onClick={withdrawal}
				>
					Retirar
				</button>
			</div> */}

			{/* =============================== */}
			<h2 className="title mb-8">Current Prize</h2>
			<BorderWrapper
				className="mb-[6rem] "
				rounded="rounded-xl"
				position="bottom-1.75 right-1.75"
				contraPosition="top-1.75 left-1.75"
				borderColor="border-white"
			>
				<PrizeCard prizeData={prizeData} />
			</BorderWrapper>

			<h2 className="mb-8 text-5xl font-semibold text-white">
				Coming up this season
			</h2>

			<div className="relative w-full">
				<>
					{/* <Swiper
						spaceBetween={20}
						slidesPerView="auto"
						navigation
						freeMode={true}
					>

						{comingData.map((event, index) => {
							return (
								<SwiperSlide
									key={index}
									className="!w-[17rem] 2xl:!w-[18rem]"
								>
									<EventCard event={event} />
								</SwiperSlide>
							)
						})}
					</Swiper> */}
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
					>
						{comingData.map((event, index) => (
							<SwiperSlide
								key={index}
								className="!w-[17rem] 2xl:!w-[18rem]"
							>
								<EventCard event={event} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="absolute top-[50%] left-[-3.5rem] h-[3.2rem]  w-[3.2rem] translate-y-[-50%] font-bold text-white">
						<img src="arrow-left.png" alt="" />
					</div>
					<div className="absolute top-[50%] right-[-3.5rem] h-[3.2rem]  w-[3.2rem] translate-y-[-50%]  font-bold text-white">
						<img src="arrow-right.png" alt="" />

						{/* <button onClick={() => Swiper.SwiperSlide}>
							Slide to the next slide
						</button> */}
					</div>
				</>
			</div>

			{/* <h3 className="my-24 text-center text-xl font-semibold text-white underline decoration-1 underline-offset-4">
				PAST PRIZES
			</h3> */}
		</Layout>
	)
}

{
	/* <input
  placeholder="Ingresar monto a depositar"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
<button style={{ backgroundColor: "red" }} onClick={deposit}>
  Join the pool
</button>
<input
  placeholder="Ingresar monto a retirar"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
<button style={{ backgroundColor: "red" }} onClick={deposit}>
  Join the pool
</button> */
}
{
	/* <Card
  image="bored.jpg"
  title={"Win a ticket"}
  desc={"This will be the best prize of the world"}
  buttonlabel={"Enter the pool"}
  path="/"
/>
<Card
  image="pool2.jpeg"
  title={"Win a ticket"}
  desc={"This will be the best prize of the world"}
  buttonlabel={"Enter the pool"}
  path="/"
/> */
}
