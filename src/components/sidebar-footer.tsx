import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarFooterProps = React.ComponentPropsWithoutRef<'footer'>

const SidebarFooter = forwardRef<HTMLElement, SidebarFooterProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <footer {...props} className={clsx('alya-sidebar__footer', className)} ref={ref}>{children}</footer>
  )
})

export default SidebarFooter
