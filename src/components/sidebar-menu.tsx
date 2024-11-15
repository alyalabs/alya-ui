import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarMenu = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <ul {...props} className={clsx('alya-sidebar__menu', className)} ref={ref}>
      {children}
    </ul>
  )
})

export default SidebarMenu
