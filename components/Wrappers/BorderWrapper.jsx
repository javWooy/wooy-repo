const BorderWrapper = ({
	children,
	className,
	rounded = 'rounded-xl',
	outline,
	position,
	contraPosition,
	borderColor,
}) => {
	return (
		<div
			className={`relative w-full border-[1.5px] bg-black ${borderColor} ${contraPosition} ${rounded} ${className} `}
		>
			<div
				className={`relative overflow-hidden ${position} ${rounded}  h-full w-full ${
					outline ? outline : ''
				} `}
			>
				{children}
			</div>
		</div>
	)
}

export default BorderWrapper
