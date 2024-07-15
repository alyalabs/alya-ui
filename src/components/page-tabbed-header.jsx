import React, {forwardRef} from 'react'
import clsx from 'clsx'

import {
  useAlyaUI
} from '@/context/alya-ui-context'

import { ArrowLeft } from 'lucide-react'
''
const PageTabbedHeader = forwardRef(function ({
  tabs,
  currentTab,
  changeTab,
  updateTab,
  
  showBackButton = false,
  onBackButtonClick,

  className,
  children,
  ...props
}, ref) {
  const { page } = useAlyaUI()

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
  
  function renderSubtitle() {
    if (page.subtitle) {
      return (<h2 className="alya-page-tabbed-header__subtitle">{page.subtitle}</h2>)
    }
  }

  function renderTabs() {}

  return (
    <header {...props}
      className={clsx('alya-page-tabbed-header', {
        'alya-page-tabbed-header_show-back-button': showBackButton,
      }, className)}
      ref={ref}
    >
      <div className="alya-page-tabbed-header__row">
        <div className="alya-page-tabbed-header__left">
          {renderBackButton()}

          <div className="alya-page-tabbed-header__titles">
            {renderTitle()}
            {renderSubtitle()}
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
