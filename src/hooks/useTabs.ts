import React, { useState, useEffect } from 'react'

type Tab = {
  label: string
  props?: Record<string, any>
}

type UseTabsReturn = {
  tabs: Tab[]
  currentTab: number
  changeTab: (index: number, props?: Record<string, any>) => void
  updateTab: (index: number, props: Record<string, any>) => void
}

export default function useTabs(arr: Tab[] = []): UseTabsReturn {
  const [tabs, setTabs] = useState<Tab[]>(arr)
  const [currentTab, setCurrentTab] = useState<number>(0)

  useEffect(() => {
    setTabs(arr)
  }, [arr])

  function changeTab(index: number, props: Record<string, any> = {}) {
    if (props) {
      setTabs((tabs) =>
        tabs.map((tab, i) => {
          if (i === index)
            return {
              ...tab,
              props: {
                ...tab.props,
                ...props,
              },
            }

          return tab
        })
      )
    }

    setCurrentTab(index)
  }

  function updateTab(index: number, props: Record<string, any>) {
    setTabs((tabs) =>
      tabs.map((tab, i) => {
        if (i === index)
          return {
            ...tab,
            props: {
              ...tab.props,
              ...props,
            },
          }

        return tab
      })
    )
  }

  return {
    tabs,
    currentTab,
    changeTab,
    updateTab
  }
}
