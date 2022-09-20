import React from 'react'
import PressableButton from '../Wrappers/PressableButton'

const EventCard = ({ event }) => {
	return (
		<div className="flex w-full flex-col overflow-hidden rounded-xl border-2">
			<img className="h-full object-cover" src={event.image} alt="" />
			<div className="h-full bg-black p-4">
				<div className="border-b-[1.5px] border-white/20 pb-5">
					<h3 className="mb-1 leading-4 text-white">{event.name}</h3>
					<p className="text-xs text-orange1">{event.company}</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 py-3.5 px-5">
					<p className=" font-semibold text-white">
						Starts on {event.startDate}
					</p>
					<PressableButton
						className="text-xs child:!px-0"
						disabled={true}
					>
						JOIN POOL
					</PressableButton>
				</div>
			</div>
		</div>
	)
}

export default EventCard
