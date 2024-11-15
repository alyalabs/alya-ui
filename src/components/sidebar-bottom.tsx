import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarBottom = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-sidebar__bottom', className)} ref={ref}>{children}</div>
  )
})

export default SidebarBottom

