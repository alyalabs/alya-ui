import React, {forwardRef} from 'react'
import clsx from 'clsx'

const PageTitles = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-page__titles', className)} ref={ref}>{children}</div>
  )
})

export default PageTitles
