import React, {forwardRef} from 'react'
import clsx from 'clsx'

const SidebarTitle = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <h2 {...props} className={clsx('alya-sidebar__title', className)} ref={ref}>
      {children}
    </h2>
  )
})

export default SidebarTitle
