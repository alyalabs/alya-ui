import React, { useState, useEffect, forwardRef } from 'react'
import clsx from 'clsx'

const VARIANT_ONE = 'one'
const VARIANT_TWO = 'two'
const VARIANT_THREE = 'three'
const VARIANT_FOUR = 'four'

const SIZE_SMALL = 'small'

const ICON_SIDE_LEFT = 'left'
const ICON_SIDE_RIGHT = 'right'

const Button = forwardRef(function ({
  variant = VARIANT_ONE,
  size,
  icon,
  iconSide = ICON_SIDE_LEFT,
  onlyIcon,
  className,
  children,
  ...props
}, ref) {

  function renderOnlyIcon() {
    if (icon && onlyIcon) {
      return (
        <div className="alya-btn__icon">
          {icon}
        </div>
      )
    }
  }

  function renderIconLeft() {
    if (icon && iconSide === 'left') {
      return (
        <div className="alya-btn__icon alya-btn__icon--left">
          {icon}
        </div>
      )
    }
  }

  function renderIconRight() {
    if (icon && iconSide === 'right') {
      return (
        <div className="alya-btn__icon alya-btn__icon--right">
          {icon}
        </div>
      )
    }
  }

  return (
    <button
      {...props}
      className={clsx(
        'alya-btn',
        {
          'alya-btn--one': variant === VARIANT_ONE,
          'alya-btn--two': variant === VARIANT_TWO,
          'alya-btn--three': variant === VARIANT_THREE,
          'alya-btn--four': variant === VARIANT_FOUR,
        },
        {
          'alya-btn--small': size === SIZE_SMALL,
        },
        {
          'alya-btn--only-icon': onlyIcon,
        },
        className
      )}
      ref={ref}
    >
      {renderIconLeft()}
      {renderOnlyIcon()}
      {children}
      {renderIconRight()}
    </button>
  )
})

export default Object.assign(Button, {
  VARIANT_ONE,
  VARIANT_TWO,
  VARIANT_THREE,
  VARIANT_FOUR,

  SIZE_SMALL,

  ICON_SIDE_LEFT,
  ICON_SIDE_RIGHT,
})