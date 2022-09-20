import React from 'react'

const PressableButton = ({
	children,
	color = 'orange',
	className,
	disabled = false,
	onClick,
	padding = 'px-8 py-2',
	rounded = 'rounded-md',
}) => {
	let colorClass
	switch (color) {
		case 'orange':
			colorClass = 'bg-orange1 hover:bg-orange2'
			break
		case 'blue':
			colorClass = 'bg-blue1 hover:bg-blue2'
			break
		case 'green':
			colorClass = 'bg-green1 hover:bg-green2'
			break
		default:
			break
	}

	if (disabled) {
		colorClass =
			'bg-gray-200 cursor-default hover:bottom-[3px] hover:right-[3px] text-gray-400'
	}
	return (
		<button
			className={`relative top-[3px] left-[3px] h-full w-full ${rounded} bg-black ${className} `}
			disabled={disabled ? true : false}
			onClick={onClick}
		>
			<div
				className={`relative bottom-[3px] right-[3px] h-full w-full ${rounded} border-2 border-black ${colorClass} ${padding} font-semibold shadow-lg transition-all ${
					!disabled ? 'hover:bottom-0 hover:right-0' : ''
				} hover:shadow-none`}
			>
				{children}
			</div>
		</button>
	)
}

export default PressableButton
