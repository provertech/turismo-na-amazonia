'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

type RevealProps = React.PropsWithChildren<{
  delay?: number
  y?: number
  duration?: number
  once?: boolean
}>

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
}: React.PropsWithChildren<{ delay?: number; duration?: number; once?: boolean }>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}


