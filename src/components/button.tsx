import React, { useState, useEffect, forwardRef } from 'react'
import clsx from 'clsx'

const VARIANT_PRIMARY = ''
const VARIANT_SECONDARY = 'secondary'
const VARIANT_TERTIARY = 'tertiary'

const ICON_LEFT = 'left'
const ICON_RIGHT = 'right'
const ONLY_ICON = 'only-icon'

const SIZE_SMALL = 'sm'
const SIZE_MEDIUM = 'md'
const SIZE_LARGE = 'lg'
const SIZE_EXTRA_LARGE = 'xl'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: typeof VARIANT_PRIMARY | typeof VARIANT_SECONDARY | typeof VARIANT_TERTIARY
  size?: typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_LARGE | typeof SIZE_EXTRA_LARGE
  uppercase?: boolean
  icon?: React.ReactNode
  iconSide?: typeof ICON_LEFT | typeof ICON_RIGHT
  onlyIcon?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ({
  variant = VARIANT_PRIMARY,
  size,
  uppercase = false,
  icon,
  iconSide = ICON_LEFT,
  onlyIcon = false,
  className,
  children,
  ...props
}, ref) {

  function renderOnlyIcon() {
    if (icon && onlyIcon) {
      return (
        <div className="alya-button__icon">
          {icon}
        </div>
      )
    }
  }

  function renderIconLeft() {
    if (!onlyIcon && icon && iconSide === 'left') {
      return (
        <div className="alya-button__icon alya-button__icon--left">
          {icon}
        </div>
      )
    }
  }

  function renderIconRight() {
    if (!onlyIcon && icon && iconSide === 'right') {
      return (
        <div className="alya-button__icon alya-button__icon--right">
          {icon}
        </div>
      )
    }
  }

  return (
    <button
      {...props}
      className={clsx(
        'alya-button',
        {
          'alya-button_secondary': variant === VARIANT_SECONDARY,
          'alya-button_tertiary': variant === VARIANT_TERTIARY,
        },
        {
          'alya-button_sm': size === SIZE_SMALL,
          'alya-button_lg': size === SIZE_LARGE,
          'alya-button_xl': size === SIZE_EXTRA_LARGE,
        },
        {
          'alya-button_uppercase': uppercase,
        },
        {
          'alya-button_only-icon': onlyIcon,
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
  VARIANT_SECONDARY,
  VARIANT_TERTIARY,

  ICON_LEFT,
  ICON_RIGHT,
  ONLY_ICON,

  SIZE_SMALL,
  SIZE_LARGE,
  SIZE_EXTRA_LARGE,
})