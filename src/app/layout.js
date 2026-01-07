import './globals.css'

export const metadata = {
  title: 'Projects Quantum - Construction & Quantity Surveying',
  description: 'Leading construction engineering and quantity surveying services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}
