export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Main App</a>
            <a href="/blog">Blog Home</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
