import { type ReactNode } from 'react'

export interface ServiceItem {
  icon: ReactNode
  photo?: string
  photoAlt?: string
  title: string
  desc: string
}