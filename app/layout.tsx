import "./styles.css";

export const metadata = {
  title: "三目並べ",
  description:
  "Reactチュートリアルの三目並べ",
  icons: "/assets/icon.ico",

  openGraph: {
    title: "三目並べ",
    description:
      "Reactチュートリアルの三目並べ",
    images: [{
      url: "/assets/ogp.png",
      width: 1200,
      height: 630
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/ogp.png"]
  },
};

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
