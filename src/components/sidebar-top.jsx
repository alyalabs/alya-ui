import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarTop = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-sidebar__top', className)} ref={ref}>{children}</div>
  )
})

export default SidebarTop
