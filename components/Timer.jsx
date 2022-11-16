import React from 'react'
import { useCountdown } from '../hooks/useCountdown'

const Timer = ({ time, className, size = 'big', theme = 'dark' }) => {
	const [days, hours, minutes, seconds] = useCountdown(time)

	return (
		<div
			className={`flex w-full items-center justify-center gap-2 ${className}`}
		>
			<div
				className={`flex flex-col items-center justify-center ${
					size == 'big' ? 'gap-0' : 'gap-1'
				}`}
			>
				<div
					className={`flex ${
						size == 'big'
							? 'gap-1.5'
							: size == 'small'
							? 'gap-0.75'
							: 'gap-1'
					} text-2xl`}
				>
					<p
						className={`rounded ${
							theme == 'dark' ? 'bg-black/6.25' : 'bg-white/90'
						} font-bold text-black ${
							size == 'big'
								? 'py-1.5 px-3'
								: size == 'small'
								? 'py-0.25 px-2 text-lg'
								: 'py-0.5 px-2'
						}`}
					>
						{days}
					</p>
				</div>
				<p
					className={`${
						size == 'big'
							? 'text-sm font-bold'
							: size == 'small'
							? 'text-xs font-semibold'
							: 'text-sm font-bold'
					}	 ${
						theme == 'dark'
							? 'text-black'
							: 'mt-1 !font-semibold text-white/90'
					} `}
				>
					DAY
				</p>
			</div>
			<div className="relative bottom-[0.75rem] text-white">
				<span>:</span>
			</div>
			<div
				className={`flex flex-col items-center justify-center ${
					size == 'big' ? 'gap-0' : 'gap-1'
				}`}
			>
				<div
					className={`flex ${
						size == 'big'
							? 'gap-1.5'
							: size == 'small'
							? 'gap-0.75'
							: 'gap-1'
					} text-2xl`}
				>
					<p
						className={`rounded ${
							theme == 'dark' ? 'bg-black/6.25' : 'bg-white/90'
						} font-bold text-black ${
							size == 'big'
								? 'py-1.5 px-3'
								: size == 'small'
								? 'py-0.25 px-2 text-lg'
								: 'py-0.5 px-2'
						}`}
					>
						{hours}
					</p>
				</div>
				<p
					className={`${
						size == 'big'
							? 'text-sm font-bold'
							: size == 'small'
							? 'text-xs font-semibold'
							: 'text-sm font-bold'
					} ${
						theme == 'dark'
							? 'text-black'
							: 'mt-1 !font-semibold text-white/90'
					} `}
				>
					HR
				</p>
			</div>
			<div className="relative bottom-[0.75rem] text-white">
				<span>:</span>
			</div>
			<div
				className={`flex flex-col items-center justify-center ${
					size == 'big' ? 'gap-0' : 'gap-1'
				}`}
			>
				<div
					className={`flex ${
						size == 'big'
							? 'gap-1.5'
							: size == 'small'
							? 'gap-0.75'
							: 'gap-1'
					} text-2xl`}
				>
					<p
						className={`rounded ${
							theme == 'dark' ? 'bg-black/6.25' : 'bg-white/90'
						} font-bold text-black ${
							size == 'big'
								? 'py-1.5 px-3'
								: size == 'small'
								? 'py-0.25 px-2 text-lg'
								: 'py-0.5 px-2'
						}`}
					>
						{minutes}
					</p>
				</div>
				<p
					className={`${
						size == 'big'
							? 'text-sm font-bold'
							: size == 'small'
							? 'text-xs font-semibold'
							: 'text-sm font-bold'
					} ${
						theme == 'dark'
							? 'text-black'
							: 'mt-1 !font-semibold text-white/90'
					} `}
				>
					MIN
				</p>
			</div>
			<div className="relative bottom-[0.75rem] text-white">
				<span>:</span>
			</div>
			<div
				className={`flex flex-col items-center justify-center ${
					size == 'big' ? 'gap-0' : 'gap-1'
				}`}
			>
				<div
					className={`flex ${
						size == 'big'
							? 'gap-1.5'
							: size == 'small'
							? 'gap-0.75'
							: 'gap-1'
					} text-2xl`}
				>
					<p
						className={`rounded ${
							theme == 'dark' ? 'bg-black/6.25' : 'bg-white/90'
						} font-bold text-black ${
							size == 'big'
								? 'py-1.5 px-3'
								: size == 'small'
								? 'py-0.25 px-2 text-lg'
								: 'py-0.5 px-2'
						}`}
					>
						{seconds}
					</p>
				</div>
				<p
					className={`${
						size == 'big'
							? 'text-sm font-bold'
							: size == 'small'
							? 'text-xs font-semibold'
							: 'text-sm font-bold'
					} ${
						theme == 'dark'
							? 'text-black'
							: 'mt-1 !font-semibold text-white/90'
					} `}
				>
					SEC
				</p>
			</div>
		</div>
	)
}

export default Timer
