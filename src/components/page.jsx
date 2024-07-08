import React, {forwardRef} from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import fadeVariants from '@/animations/fade-variants'

import PageHeader from '@/components/page-header'

const Page = forwardRef(function ({
  className,
  children,
  ...props
}, ref) {
  return (
    <motion.div
      {...props}
      className={clsx('alya-page', className)}
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

export default Object.assign(Page, {
  Header: PageHeader
})