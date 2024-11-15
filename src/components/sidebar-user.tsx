import React, {forwardRef} from 'react'
import clsx from 'clsx'

type SidebarUserProps = React.ComponentPropsWithoutRef<'div'> & {
  user: {
    name: string
    username: string
    picture: string
  }
}

const SidebarUser = forwardRef<HTMLDivElement, SidebarUserProps>(function ({
  user = {},
  className,
  children,
  ...props
}, ref) {
  return (
    <div
      {...props}
      className={clsx('alya-sidebar__user', className)}
      ref={ref}
    >
      <div className="alya-sidebar__user-picture">
        <img src={user.picture} alt={user.name}/>
      </div>
      
      <div className="alya-sidebar__user-info">
        <div className="alya-sidebar__user-name">
          {user.name}
        </div>
        <div className="alya-sidebar__user-username">
          {user.username}
        </div>
      </div>
    </div>
  )
})

export default SidebarUser

