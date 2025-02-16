import "./styles.css";

export const metadata = {
  title: "三目並べ",
  description: "Reactチュートリアルの三目並べ",
  icons: {
    icon: "/assets/icon.ico",
  },
  openGraph: {
    type: "website",
    title: "三目並べ",
    description: "Reactチュートリアルの三目並べ",
    siteName: "三目並べ！",
    url: "https://narumitouzai.github.io/ReactTutorial/",
    images: {
      url: "/assets/ogp.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    type: "website",
    title: "三目並べ",
    description: "Reactチュートリアルの三目並べ",
    siteName: "三目並べ！",
    url: "https://narumitouzai.github.io/ReactTutorial/",
    images: {
      url: "/assets/ogp.png",
      type: "image/png",
      width: 1200,
      height: 630,
    },
    card: "summary",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
