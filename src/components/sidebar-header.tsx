import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarHeaderProps = React.ComponentPropsWithoutRef<'header'>

const SidebarHeader = forwardRef<HTMLElement, SidebarHeaderProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <header {...props} className={clsx('alya-sidebar__header', className)} ref={ref}>{children}</header>
  )
})

export default SidebarHeader
