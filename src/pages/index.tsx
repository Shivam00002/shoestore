import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Myhome } from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Myhome/>
  </>
  )
}
