import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Logout from '@/components/Logout'
import { NextAuthConfig } from '@/configs/NextAuthConfig'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'My first NextJS app',
    template: '%s | My first NextJS app'
  },
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(NextAuthConfig)

  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className="flex justify-between items-center">
          <div className="logo">LOGOTYPE</div>
          <nav>
            {
              !!session && <Logout />
            }
            {
              !session && <span><Link href="/login">Login</Link></span>
            }
            <Link className="mx-4" href="/">Home</Link>
            <Link className="mx-4" href="/users">Users</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html >
  )
}
