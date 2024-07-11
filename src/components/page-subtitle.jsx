import React, {forwardRef} from 'react'
import clsx from 'clsx'

const PageSubtitle = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <h2 {...props} className={clsx('alya-page__subtitle', className)} ref={ref}>{children}</h2>
  )
})

export default PageSubtitle
