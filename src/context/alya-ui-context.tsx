import React, { createContext, useContext, useState, useEffect } from 'react'

type Page = {
  title: string,
  subtitle: string,
  description: string,
  indicator: string,
  buttons: any[],
}

type AlyaUIProviderProps = React.PropsWithChildren

type AlyaUIContext = {
  page: Page,
  setPage: (obj: Page) => void,
  updatePage: (obj: Page) => void,
}

const defaultValue: AlyaUIContext = {
  page: {
    title: '',
    subtitle: '',
    description: '',
    indicator: '',
    buttons: [],
  },
  setPage: () => {},
  updatePage: () => {},
}

const AlyaUIContext = createContext<AlyaUIContext>(defaultValue)

export function AlyaUIProvider(props: AlyaUIProviderProps) {
  const pageInitialState: Page = {
    title: '',
    subtitle: '',
    description: '',
    indicator: '',
    buttons: [],
  }

  const [page, setPage] = useState(pageInitialState)

  return (
    <AlyaUIContext.Provider value={{
      page: page,

      setPage(obj: Page) {
        setPage({
          ...pageInitialState,
          ...obj
        })
      },

      updatePage(obj: Page) {
        setPage((page) => ({
          ...page,
            ...obj
        }))
      },
    }}>
      <div className="alya">
        {props.children}
      </div>
    </AlyaUIContext.Provider>
  )
}

export function useAlyaUIContext() {
  return useContext(AlyaUIContext)
}

export function useAlyaUI() {
  return useAlyaUIContext()
}

export function usePage(props: Page) {
  const { page, setPage } = useAlyaUIContext()

  useEffect(() => {
    setPage(props)
  }, [])

  return page
}


