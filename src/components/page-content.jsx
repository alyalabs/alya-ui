import React, {forwardRef} from 'react'
import clsx from 'clsx'

const PageContent = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-page__content', className)} ref={ref}>{children}</div>
  )
})

export default PageContent
