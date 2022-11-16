import Link from 'next/link'
import React from 'react'
import Timer from '../Timer'
import PressableButton from '../Wrappers/PressableButton'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'

// const TIME_TARGET_MS = new Date('July 28, 23 11:00:00 GMT+00:00')

const SwipeableImages = ({ images }) => {
	return (
		// <div className="h-full w-4/12 border-2 border-purple-500">
		<Swiper
			modules={[Pagination]}
			spaceBetween={0}
			slidesPerView={1}
			pagination={{ clickable: true }}
			className="swiperPrizeCard h-full w-full"
			grabCursor={true}
			// longSwipes={ false}
		>
			{images.map((image, index) => (
				<SwiperSlide key={index} className=" relative h-full w-full ">
					<>
						<img
							src={images[0]}
							alt="prize image"
							className=" h-full w-full object-cover object-[-310px]"
						/>
						{/* <span className="absolute bottom-0 right-0 z-20 flex items-center justify-center bg-red-500 px-6 py-1.5  text-white">
							Coca-cola
						</span> */}
						<span className="absolute bottom-0 right-0">
							<img
								className=" w-24 rounded-sm object-cover"
								src="cocacola.jpg"
								alt=""
							/>
						</span>
					</>
				</SwiperSlide>
			))}
		</Swiper>
		// </div>
	)
}

const PrizeCard = ({ prizeData }) => {
	const TIME_TARGET_MS = new Date(prizeData.endDate)

	return (
		<div className="flex h-[21rem] w-full justify-center overflow-hidden bg-white transition-all hover:cursor-pointer hover:shadow-2xl 2xl:h-[24rem]">
			<SwipeableImages images={prizeData.images} />

			<div className="flex h-full flex-col justify-between gap-8 p-10 font-semibold 2xl:px-24 ">
				<div className="border-b-[2px] border-black pb-6 tracking-tighter">
					<h2 className="mb-0.25 text-2xl font-medium text-black">
						{prizeData.name}
					</h2>
					<p className="font-semibold text-orange1">
						{prizeData.company}
					</p>
				</div>

				<Timer time={TIME_TARGET_MS} className="2xl:mt-4" />

				<div className="flex justify-center">
					<div className="flex h-[3rem] w-[20rem] flex-wrap items-center justify-center ">
						<Link href={'/pool'}>
							<PressableButton color="orange">
								JOIN POOL
							</PressableButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PrizeCard
