import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarTopProps = React.ComponentPropsWithoutRef<'div'>

const SidebarTop = forwardRef<HTMLDivElement, SidebarTopProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-sidebar__top', className)} ref={ref}>{children}</div>
  )
})

export default SidebarTop
