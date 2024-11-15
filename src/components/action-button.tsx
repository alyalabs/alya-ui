import React, {forwardRef} from 'react'
import clsx from 'clsx'

const VARIANT_ONE = 'one'
const VARIANT_TWO = 'two'

type ActionButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: typeof VARIANT_ONE | typeof VARIANT_TWO
  icon?: React.ReactNode
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(function ({
  variant = VARIANT_ONE,
  icon,
  className,
  children,
  ...props
}, ref) {
  return (
    <button
      {...props}
      className={clsx(
        'alya-action-button',
        {
          'alya-action-button--one': variant === VARIANT_ONE,
          'alya-action-button--two': variant === VARIANT_TWO,
        },
        className
      )}
      ref={ref}
    >
      <div className="alya-action-button__icon">
        {icon}
      </div>
      {children}
    </button>
  )
})

export default Object.assign(ActionButton, {
  VARIANT_ONE,
  VARIANT_TWO,
})
