import './globals.css'
import { Inter } from 'next/font/google'

// 건축 포트폴리오에 어울리는 깔끔한 산세리프 폰트
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata = {
  title: 'Portfolio | Architecture',
  description: 'Minimalist Architecture Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/* antialiased: 폰트를 렌더링할 때 계단 현상을 없애고 매끄럽게 만듭니다 (건축 선처럼) */}
      <body className={`${inter.className} antialiased text-neutral-800 bg-neutral-50`}>
        {children}
      </body>
    </html>
  )
}