import { createContext, useState, ReactNode } from 'react'

export const GeneralContext = createContext<GeneralContextData>({} as GeneralContextData)

interface GeneralContextData {
  sidebar: boolean
  setSidebar: (toogle: boolean) => void
  currentPage: string
  setCurrentPage: (page: string) => void
}

interface GeneralContextProviderProps {
  children: ReactNode
}

export function GeneralContextProvider({ children }: GeneralContextProviderProps) {
  const [currentPage, setCurrentPage] = useState('Home')
  const [sidebar, setSidebar] = useState(false)

  return (
    <GeneralContext.Provider value={{sidebar, setSidebar, currentPage, setCurrentPage}}>
      {children}
    </GeneralContext.Provider>
  )
}
