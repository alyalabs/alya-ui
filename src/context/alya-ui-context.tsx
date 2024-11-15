import React, { createContext, useContext, useState, useEffect } from 'react'

const defaultValue = {}

const AlyaUIContext = createContext(defaultValue)

export function AlyaUIProvider(props) {
  const pageInitialState = {
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

      setPage(obj) {
        setPage({
          ...pageInitialState,
          ...obj
        })
      },

      updatePage(obj) {
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

export function usePage(props) {
  const { page, setPage } = useAlyaUIContext()

  useEffect(() => {
    setPage(props)
  }, [])

  return page
}


