import React, { useState } from 'react'

const ComboPrize = () => {
	const [dropdown, setDropwdown] = useState({ open: false, number: null })

	const handleDropdownInteraction = (number) => {
		if (number === dropdown.number) {
			setDropwdown({ open: false, number: null })
		} else setDropwdown({ open: true, number: number })
	}
	return (
		<div className="">
			<h3 className="mb-6 text-2xl font-semibold text-orange1">
				Prize Information
			</h3>
			<div className="">
				<div className="flex w-full flex-col border-b-[1px] border-white text-lg text-white">
					<div
						className="flex cursor-pointer items-center justify-between  pb-3 pt-1 "
						onClick={() => {
							handleDropdownInteraction(0)
						}}
					>
						<h3>What to expect?</h3>
						<div className="mr-2 text-4xl font-thin text-white">
							+
						</div>
					</div>
					<div
						className={`my-4 text-sm transition-all duration-400 ${
							dropdown.number !== 0
								? 'z-[-1] my-0 h-0 opacity-0'
								: ''
						}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id quos mollitia praesentium explicabo dolorem labore,
						ea laboriosam aliquam laudantium tenetur molestiae
						maiores consequatur iusto voluptatibus, sint est saepe
						ex veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Id quos mollitia praesentium explicabo
						dolorem labore, ea laboriosam aliquam laudantium tenetur
						molestiae maiores consequatur iusto voluptatibus, sint
						est saepe ex veritatis.
					</div>
				</div>

				<div className="flex w-full flex-col border-b-[1px] border-white  text-lg text-white">
					<div
						className="flex cursor-pointer items-center justify-between  pb-3 pt-1 "
						onClick={() => {
							handleDropdownInteraction(1)
						}}
					>
						<h3>What to expect?</h3>
						<div className="mr-2 text-4xl font-thin text-white">
							+
						</div>
					</div>
					<div
						className={`my-4  text-sm transition-all duration-400 ${
							dropdown.number !== 1
								? 'z-[-1] my-0 h-0 opacity-0'
								: ''
						}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id quos mollitia praesentium explicabo dolorem labore,
						ea laboriosam aliquam laudantium tenetur molestiae
						maiores consequatur iusto voluptatibus, sint est saepe
						ex veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Id quos mollitia praesentium explicabo
						dolorem labore, ea laboriosam aliquam laudantium tenetur
						molestiae maiores consequatur iusto voluptatibus, sint
						est saepe ex veritatis.
					</div>
				</div>

				<div className="flex w-full flex-col  border-b-[1px] border-white  text-lg text-white">
					<div
						className="flex cursor-pointer items-center justify-between  pb-3 pt-1 "
						onClick={() => {
							handleDropdownInteraction(2)
						}}
					>
						<h3>What to expect?</h3>
						<div className="mr-2 text-4xl font-thin text-white">
							+
						</div>
					</div>
					<div
						className={`my-4  text-sm transition-all duration-400 ${
							dropdown.number !== 2
								? 'z-[-1] my-0 h-0 opacity-0'
								: ''
						}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id quos mollitia praesentium explicabo dolorem labore,
						ea laboriosam aliquam laudantium tenetur molestiae
						maiores consequatur iusto voluptatibus, sint est saepe
						ex veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Id quos mollitia praesentium explicabo
						dolorem labore, ea laboriosam aliquam laudantium tenetur
						molestiae maiores consequatur iusto voluptatibus, sint
						est saepe ex veritatis.
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComboPrize
