import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarMenuProps = React.ComponentPropsWithoutRef<'ul'>

const SidebarMenu = forwardRef<HTMLUListElement, SidebarMenuProps>(function ({
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
