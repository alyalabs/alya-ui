import React, {forwardRef} from 'react'
import clsx from 'clsx'

import {
  useAlyaUI
} from '@/context/alya-ui-context'

import { ArrowLeft } from 'lucide-react'

const PageHeader = forwardRef(function ({
  showBackButton = false,
  small = false,
  
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
        <button className="alya-page-header__back-button" onClick={handleBackButtonClick}>
          <ArrowLeft/>
        </button>
      )
    }
  }

  function renderTitle() {
    if (page.title) {
      return (<h1 className="alya-page-header__title">{page.title}</h1>)
    }
  }
  
  function renderDescription() {
    if (page.description) {
      return (<p className="alya-page-header__description">{page.description}</p>)
    }
  }

  return (
    <header {...props}
      className={clsx('alya-page-header', {
        'alya-page-header_show-back-button': showBackButton,
        'alya-page-header_small': small,
      }, className)}
      ref={ref}
    >
      <div className="alya-page-header__row">
        <div className="alya-page-header__left">
          {renderBackButton()}

          <div className="alya-page-header__titles">
            {renderTitle()}
            {renderDescription()}
          </div>
        </div>
        <div className="alya-page-header__right">
        </div>
      </div>
    </header>
  )
})

export default PageHeader
