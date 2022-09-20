const ModalWrapper = ({ children }) => {
	return (
		<div className="fixed z-30 flex h-full w-full items-center justify-center backdrop-brightness-[30%]">
			<div className="flex rounded-lg bg-white">{children}</div>
		</div>
	)
}

export default ModalWrapper
