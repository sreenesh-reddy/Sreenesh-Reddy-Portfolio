import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import * as React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sreenesh Reddy Portfolio',
  description: 'Coded by Sreenesh Reddy',
}

export default function RootLayout({children} :{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

