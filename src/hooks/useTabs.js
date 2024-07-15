import React, { useState, useEffect } from 'react'

export default function useTabs(arr = []) {
  const [tabs, setTabs] = useState(arr)
  const [currentTab, setCurrentTab] = useState(0)

  useEffect(() => {
    setTabs(arr)
  }, [arr])

  function changeTab(index, props = {}) {
    if (params) {
      setTabs((tabs) => tabs.map((tab, i) => {
        if (i === index) return {
          ...tab,
          props: {
            ...tab.props || {},
            ...props
          }
        }

        return tab
      }))
    }

    setCurrentTab(index)
  }

  function updateTab(index, props) {
    setTabs((tabs) => tabs.map((tab, i) => {
      if (i === index) return {
        ...tab,
        props: {
          ...tab.props || {},
          ...props
        }
      }

      return tab
    }))
  }

  return {
    tabs, currentTab, changeTab, updateTab
  }
}
