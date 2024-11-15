import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarBottomProps = React.ComponentPropsWithoutRef<'div'>

const SidebarBottom = forwardRef<HTMLDivElement, SidebarBottomProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <div {...props} className={clsx('alya-sidebar__bottom', className)} ref={ref}>{children}</div>
  )
})

export default SidebarBottom

