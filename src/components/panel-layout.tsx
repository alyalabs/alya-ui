import React, {forwardRef} from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import fadeVariants from '@/animations/fade-variants'

type PanelLayoutProps = React.ComponentProps<typeof motion.div>

const PanelLayout = forwardRef<HTMLDivElement, PanelLayoutProps>(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <motion.div
      {...props}
      className={clsx('alya-panel-layout', className)}
      ref={ref}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={fadeVariants}
    >
      {children}
    </motion.div>
  )
})

export default PanelLayout