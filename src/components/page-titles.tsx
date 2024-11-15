import React, {forwardRef} from 'react'
import clsx from 'clsx'

type PageTitlesProps = React.HTMLAttributes<HTMLDivElement>

const PageTitles = forwardRef<HTMLDivElement, PageTitlesProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-page__titles', className)} ref={ref}>{children}</div>
  )
})

export default PageTitles
