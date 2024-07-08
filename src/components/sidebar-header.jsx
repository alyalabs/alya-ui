import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarHeader = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <header {...props} className={clsx('alya-sidebar__header', className)} ref={ref}>{children}</header>
  )
})

export default SidebarHeader
