export default function Home() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", letterSpacing: "2px" }}>
          THE ARTIST IS PRESENT
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#cccccc",
          }}
        >
          A global interview and storytelling series by Vetaliah Davis exploring
          artists working across art, food, culture, music, and movement.
          Through intimate conversations and visual documentation, the series
          examines the creative process directly from the artist's lived
          experience.
        </p>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Episode 001 — Tobias Kielinger
        </h2>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/nnE0kaPN3dY"
            title="The Artist Is Present — Tobias Kielinger"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
