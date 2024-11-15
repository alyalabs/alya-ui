import React, {forwardRef} from 'react'
import clsx from 'clsx'

type PageTitleProps = React.HTMLAttributes<HTMLHeadingElement>

const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <h1 {...props} className={clsx('alya-page__title', className)} ref={ref}>{children}</h1>
  )
})

export default PageTitle
