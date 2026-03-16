export const metadata = {
  title: "The Artist Is Present",
  description:
    "An interview and storytelling series by Vetaliah Davis exploring artists across art, culture, music, food, and movement."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
