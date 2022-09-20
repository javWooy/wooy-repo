import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Timer from '../../components/Timer'
import PressableButton from '../../components/Wrappers/PressableButton'
import ComboPrize from '../../components/DropdownCombos/ComboPrize'
import ComboNGO from '../../components/DropdownCombos/ComboNGO'
import ComboLegal from '../../components/DropdownCombos/ComboLegal'
import DropdownCombo from '../../components/DropdownCombos/DropdownCombo'
import dropdownsData from '../../components/DropdownCombos/dropdownsData'

const Index = () => {
	const prizeData = {
		name: 'Worldcup final',
		title: 'Experience the world cup in Qatar',
		company: 'Weforest',
		features: [
			'Travel to Qatar and attend the World Cup 2022',
			'Spend a week at Qatar and have an unique experience',
			'Be part of the positive global impact by helping We forest',
		],
		slogan: 'Win this once in a life time experience and be part of the world changing!',
	}

	return (
		<Layout>
			<div className="mb-40">
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
						<Link href="/pool">{prizeData.name}</Link>
					</span>
				</div>
				<div className="flex w-full gap-8 ">
					<div className="flex w-1/2 flex-col gap-16 ">
						<div>
							<img
								src={'/poollarge.png'}
								className="w-full"
								alt=""
							/>
						</div>
						{dropdownsData.map((item, index) => (
							<DropdownCombo
								title={item.title}
								items={item.items}
								key={index}
							/>
						))}
					</div>

					<div className="flex w-1/2 flex-col  ">
						<div className="mb-8 border-b-2 border-white/50 pb-8">
							<h2 className="mb-1.5 mt-[-0.4rem] text-2xl font-medium text-white">
								{prizeData.title}
							</h2>
							<p className="font-semibold text-orange1">
								Helps {prizeData.company}
							</p>
							<ul className="my-4 ml-4 list-disc">
								{prizeData.features.map((item, index) => (
									<li
										className="leading-5 text-white"
										key={index}
									>
										{item}
									</li>
								))}
							</ul>
							<p className="mb-4 leading-5 text-white">
								{prizeData.slogan}
							</p>
							<Link href={'/deposit'}>
								<PressableButton className="h-[2.75rem]">
									JOIN POOL
								</PressableButton>
							</Link>
						</div>

						<div className="mb-8">
							<p className="mb-6 text-xl text-white">
								This pool ends in:
							</p>
							<Timer theme="light" />
						</div>

						<div className="">
							<div className="flex h-24 flex-col gap-2 ">
								<div className="flex h-1/2 w-full gap-2">
									<span className="h-full w-6/12 rounded-sm bg-red-500"></span>
									<span className="h-full w-6/12 rounded-sm bg-blue-100"></span>
								</div>
								<div className="flex h-1/2 w-full gap-1">
									<span className="h-full w-3/12 rounded-sm bg-green-500"></span>
									<span className="h-full w-3/12 rounded-sm bg-purple-700"></span>
									<span className="h-full w-3/12 rounded-sm bg-cyan-300"></span>
									<span className="h-full w-3/12 rounded-sm bg-neutral-900"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Index
