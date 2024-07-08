import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarFooter = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <footer {...props} className={clsx('alya-sidebar__footer', className)} ref={ref}>{children}</footer>
  )
})

export default SidebarFooter
