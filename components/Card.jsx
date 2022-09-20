import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Card = ({
	image,
	title,
	desc,
	buttonlabel,
	path,
	foundationName,
	donatedAmount,
}) => {
	return (
		<div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg transition-all hover:cursor-pointer hover:shadow-2xl">
			<img src={image} alt="" className="h-64 rounded-xl" />
			<div className="flex h-full flex-col items-center justify-center px-8 py-4">
				<h2 className="text-2xl font-bold text-black">{title}</h2>
				<hr className="m-4 w-full" />
				<div className="flex flex-col justify-center gap-3">
					<p className="text-black">
						Address:{' '}
						<span className="text-black">0xa4fs...615232</span>
					</p>
					<p className="text-black">
						{foundationName} address:{' '}
						<span className="text-black">0xa4fs...615232</span>
					</p>
					<p className="text-black">
						Date: <span className="text-black">05/08/2002</span>
					</p>
				</div>
				<p className="mt-8 font-semibold text-black">
					Amount donated:{' '}
					<span className="text-black">{donatedAmount}</span>
				</p>
				{path ? (
					<Link href={path}>
						<button className="mt-4 rounded-3xl bg-[#ED652B] px-8 py-2 transition-all hover:bg-[#fd692a] hover:shadow-2xl lg:px-16">
							{buttonlabel}
						</button>
					</Link>
				) : (
					<button className="mt-4 rounded-3xl bg-[#ED652B] px-8 py-2 transition-all hover:bg-[#fd692a] hover:shadow-2xl lg:px-16">
						{buttonlabel}
					</button>
				)}
			</div>
		</div>
	)
}

export default Card
