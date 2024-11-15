import React, {forwardRef, useEffect} from 'react'
import clsx from 'clsx'

import {
  useAlyaUI
} from '@/context/alya-ui-context'

import { ArrowLeft } from 'lucide-react'

type PageTabbedHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  tabs: {
    name: string
    component: React.ComponentType
    props?: any
  }[]
  currentTab: number
  changeTab: (tab: number) => void
  updateTab: (tab: number) => void

  showBackButton?: boolean
  small?: boolean

  onBackButtonClick?: React.MouseEventHandler
}

const PageTabbedHeader = forwardRef<HTMLDivElement, PageTabbedHeaderProps>(function ({
  tabs,
  currentTab,
  changeTab,
  updateTab,
  
  showBackButton = false,
  small = false,

  onBackButtonClick,

  className,
  children,
  ...props
}, ref) {
  const { page } = useAlyaUI()

  useEffect(() => {
    console.log(tabs, currentTab)
  }, [])

  function handleBackButtonClick(event) {
    if (onBackButtonClick instanceof Function) {
      onBackButtonClick(event)
    }
  }

  function renderBackButton() {
    if (showBackButton) {
      return (
        <button className="alya-page-tabbed-header__back-button" onClick={handleBackButtonClick}>
          <ArrowLeft/>
        </button>
      )
    }
  }

  function renderTitle() {
    if (page.title) {
      return (<h1 className="alya-page-tabbed-header__title">{page.title}</h1>)
    }
  }
  
  function renderDescription() {
    if (page.description) {
      return (<p className="alya-page-tabbed-header__description">{page.description}</p>)
    }
  }

  function renderTabs() {
    return tabs.map((tab, i) => {
      return (
        <button
          key={i}
          className={clsx('alya-page-tabbed-header__tab', {
            'alya-page-tabbed-header__tab_active': i === currentTab
          })}
          onClick={() => changeTab(i)}
        >
          {tab.name}
        </button>
      )
    })
  }

  return (
    <header {...props}
      className={clsx('alya-page-tabbed-header', {
        'alya-page-tabbed-header_show-back-button': showBackButton,
        'alya-page-tabbed-header_small': small,
      }, className)}
      ref={ref}
    >
      <div className="alya-page-tabbed-header__row">
        <div className="alya-page-tabbed-header__left">
          {renderBackButton()}

          <div className="alya-page-tabbed-header__titles">
            {renderTitle()}
            {renderDescription()}
          </div>
        </div>
        <div className="alya-page-tabbed-header__right">
        </div>
      </div>

      <div className="alya-page-tabbed-header__row">
        <div className="alya-page-tabbed-header__tabs">
          {renderTabs()}
        </div>
      </div>
    </header>
  )
})

export default PageTabbedHeader
