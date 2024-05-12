import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '<your title>',
    template: '%s | <your title>',
  },
  description: '<your description>',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
