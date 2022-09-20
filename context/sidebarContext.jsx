import { useState, createContext } from 'react'

export const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
	const [helpModalIsOpen, setHelpModalIsOpen] = useState(false)

	return (
		<SidebarContext.Provider
			value={{ helpModalIsOpen, setHelpModalIsOpen }}
		>
			{children}
		</SidebarContext.Provider>
	)
}
