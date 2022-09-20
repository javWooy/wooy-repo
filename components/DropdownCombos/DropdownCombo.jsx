import React, { useState } from 'react'

const DropdownCombo = ({
	title = 'Dropdown default title',
	items = [
		{
			title: 'Dropdown default item 1',
			description: (
				<p>
					default item1 text{' '}
					<span className="text-green-500">
						we are all gonna make it.
					</span>
				</p>
			),
		},
		{
			title: 'Dropdown default item 2',
			description: (
				<p>
					default item2 text{' '}
					<span className="text-red-500">
						we are all gonna make it.
					</span>
				</p>
			),
		},
		{
			title: 'Dropdown default item 3',
			description: (
				<p>
					default item3 text{' '}
					<span className="text-purple-500">
						we are all gonna make it.
					</span>
				</p>
			),
		},
	],
}) => {
	const [dropdown, setDropwdown] = useState({ open: false, number: null })

	const handleDropdownInteraction = (number) => {
		if (number === dropdown.number) {
			setDropwdown({ open: false, number: null })
		} else setDropwdown({ open: true, number: number })
	}
	return (
		<div className="">
			<h3 className="mb-5 text-2xl font-semibold text-orange1">
				{title}
			</h3>
			<div className="">
				{items.map((item, itemIndex, index) => (
					<div
						key={index}
						className="flex w-full flex-col border-b-[1px] border-white text-lg text-white"
					>
						<div
							className="flex cursor-pointer items-center justify-between pb-2.5 pt-2.5 "
							onClick={() => {
								handleDropdownInteraction(itemIndex)
							}}
						>
							<h3>{item.title}</h3>
							<div className="mr-2 text-4xl font-thin text-white">
								+
							</div>
						</div>
						<div
							className={`my-4 text-sm transition-all duration-400 ${
								dropdown.number !== itemIndex
									? 'z-[-1] my-0 h-0 opacity-0'
									: ' mb-12'
							}`}
						>
							{item.description}
						</div>
					</div>
				))}
				{/* <div className="flex w-full flex-col border-b-[1px] border-white text-lg text-white">
					<div
						className="flex cursor-pointer items-center justify-between pb-3 pt-1 "
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
				</div> */}
			</div>
		</div>
	)
}

export default DropdownCombo
