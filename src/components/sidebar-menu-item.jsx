import React, {forwardRef} from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const SidebarMenuItem = forwardRef(function ({
  href,
  icon,
  className,
  children,
  ...props
}, ref) {
  return (
    <li {...props} className={clsx('alya-sidebar__menu-item', className)} ref={ref}>
      {(href)
        ? (
          <NavLink
            className={({ isActive, isPending }) => isPending ? 'is-pending' : isActive ? 'is-active' : ''}
            to={href}
          >
            {(icon) ? (
              <div className="alya-sidebar__menu-icon">
                {icon}
              </div>
            ) : null}
            {children}
          </NavLink>
        )
        : (
          children
        )}
    </li>
  )
})

export default SidebarMenuItem
