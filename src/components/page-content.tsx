import React, {forwardRef} from 'react'
import clsx from 'clsx'

const PADDING_ZERO = 'alya-page__content__padding-zero'

type PageContentProps = React.ComponentProps<'div'> & {
  padding?: boolean
}

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(function ({
  padding,

  className,
  children,
  ...props
}, ref) {
  return (
    <div
      {...props}
      className={clsx('alya-page__content', className)}
      ref={ref}
    >{children}</div>
  )
})

export default PageContent