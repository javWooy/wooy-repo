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
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Home() {
	// const sendTx = useSendTransactionWrapper();
	const [amount, setAmount] = useState()
	// const provider = useProvider();
	// const { address, isConnected } = useAccount();

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

	const deposit = async (e) => {
		const address = await signer.getAddress()
		const parsedAmount = ethers.utils.parseUnits(amount)

		// e.preventDefault();

		// const params = [
		//   poolAddress,
		//   ethers.utils.parseUnits("9999999999", Number(decimals)),
		// ];

		// const txName = t(`allowTickerPoolSponsorship`, {});
		// const method = "approve";

		// const id = await sendTx({
		//   name: txName,
		//   contractAbi: ControlledTokenAbi,
		//   contractAddress: tokenAddress,
		//   method,
		//   params,
		//   callbacks: {},
		// });
		// console.log(id, "asdasd");
		// const aId = await id.wait();

		// console.log(aId, "asdasd");

		const approveTx = await erc20Contract.approve(poolAddress, parsedAmount)
		console.log(approveTx, 'aprobacion')
		const aTx = await approveTx.wait()
		console.log(aTx, 'await tx')

		const tx = await wooyPoolContract.depositTo(
			address,
			parsedAmount,
			tokenAddress,
			ethers.constants.AddressZero
		)

		console.log(tx, 'Depositando....')

		const depositAtx = await tx.wait()
		console.log(depositAtx, 'depositAtx')
	}

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

	return (
		<Layout>
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
					<Swiper
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
					</Swiper>
					<div className="absolute top-[50%] left-[-3.5rem] h-[3.2rem]  w-[3.2rem] translate-y-[-50%] font-bold text-white">
						<img src="arrow-left.png" alt="" />
					</div>
					<div className="absolute top-[50%] right-[-3.5rem] h-[3.2rem]  w-[3.2rem] translate-y-[-50%]  font-bold text-white">
						<img src="arrow-right.png" alt="" />
					</div>
				</>
			</div>

			<h3 className="my-24 text-center text-xl font-semibold text-white underline decoration-1 underline-offset-4">
				PAST PRIZES
			</h3>
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
