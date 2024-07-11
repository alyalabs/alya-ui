import React, {forwardRef} from 'react'
import clsx from 'clsx'

import {
  useAlyaUI
} from '@/context/alya-ui-context'

import IcArrowLeft from '@/icons/ic_arrow_left.svg?react'

const VARIANT_ONE = 'one'
const VARIANT_TWO = 'two'

const PageHeader = forwardRef(function ({
  variant = VARIANT_ONE,
  onArrowClick,
  className,
  children,
  ...props
}, ref) {
  const { page } = useAlyaUI()

  function handleArrowClick(event) {
    if (onArrowClick instanceof Function) {
      onArrowClick(event)
    }
  }

  function renderArrow() {
    return (
      <button className="alya-page-header__arrow" onClick={handleArrowClick}>
        <IcArrowLeft/>
      </button>
    )
  }

  function renderTitle() {
    if (page.title) {
      return (<h1 className="alya-page-header__title">{page.title}</h1>)
    }
  }
  function renderSubtitle() {
    if (page.subtitle) {
      return (<h2 className="alya-page-header__subtitle">{page.subtitle}</h2>)
    }
  }
  function renderDescription() {
    if (page.description) {
      return (<p className="alya-page-header__description">{page.description}</p>)
    }
  }

  if (variant === VARIANT_ONE) {
    return (
      <header {...props} className={clsx('alya-page-header alya-page-header--one', className)} ref={ref}>
        {renderArrow()}
        <div className="alya-page-header__titles">
          {renderTitle()}
          {renderSubtitle()}
          {renderDescription()}
        </div>
      </header>
    )
  }

  if (variant === VARIANT_TWO) {
    return (
      <header {...props} className={clsx('alya-page-header alya-page-header--two', className)} ref={ref}>
        <div className="alya-page-header__row">
          <div className="alya-page-header__left">
            {renderArrow()}

            <div className="alya-page-header__titles">
              {renderTitle()}
              {renderSubtitle()}
              {renderDescription()}
            </div>
          </div>
          <div className="alya-page-header__right">
          </div>
        </div>
      </header>
    )
  }
})

export default Object.assign(PageHeader, {
  VARIANT_ONE,
  VARIANT_TWO,
})
