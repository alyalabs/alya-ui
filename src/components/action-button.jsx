import React, {forwardRef} from 'react'
import clsx from 'clsx'

const VARIANT_ONE = 'one'
const VARIANT_TWO = 'two'

const ActionButton = forwardRef(function ({
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
        'alya-action-btn',
        {
          'alya-action-btn--one': variant === VARIANT_ONE,
          'alya-action-btn--two': variant === VARIANT_TWO,
        },
        className
      )}
      ref={ref}
    >
      <div className="alya-action-btn__icon">
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
