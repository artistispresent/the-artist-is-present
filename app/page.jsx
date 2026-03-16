export default function InterviewWebsite() {
  const featuredInterview = {
    title: "Episode 001 — Tobias Kielinger",
    subtitle: "Episode 001 • Inside the mind of a Berlin artist",
    category: "Featured Conversation",
    date: "Published Interview",
    location: "Berlin, Germany",
    medium: "Visual Art",
    runtime: "Runtime forthcoming",
    description:
      "A cinematic long-form conversation exploring artistic identity, process, memory, and the tension between image and presence.",
    cta: "Watch Interview",
  };

  const interviews = [
    {
      name: "Episode 001 — Tobias Kielinger",
      medium: "Visual Art",
      status: "Episode 001",
      description:
        "A reflective filmed conversation centered on artistic process, space, and the emotional architecture of making work.",
    },
    {
      name: "Episode 002 — To Be Announced",
      medium: "Music",
      status: "In Development",
      description:
        "A forthcoming conversation with a musician exploring sound, process, and artistic presence.",
    },
    {
      name: "Episode 003 — Future Artist",
      medium: "Cross-disciplinary",
      status: "Planned",
      description:
        "A future interview with an artist working across disciplines including art, culture, food, movement, or music.",
    },
  ];

  const values = [
    "Presence in the moment",
    "Presence in the creation",
    "Long-form storytelling",
    "All mediums of art",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Interview Archive
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
                The Artist Is Present
              </h1>
            </div>
            <nav className="flex flex-wrap gap-5 text-sm text-neutral-600">
              <a href="#about" className="transition hover:text-black">
                About
              </a>
              <a href="#interviews" className="transition hover:text-black">
                Interviews
              </a>
              <a href="#mission" className="transition hover:text-black">
                Mission
              </a>
              <a href="#contact" className="transition hover:text-black">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Long-form video interview series
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Long-form conversations where artists tell their story across all
            mediums of art.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 md:text-lg">
            The Artist Is Present is a series that allows an artist to tell
            their story through long-form content that overviews all mediums of
            art. The artist is present in the moment, present in the creation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#interviews"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Enter Archive
            </a>
            <a
              href="#about"
              className="rounded-2xl border border-black/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-black/5"
            >
              Read the Concept
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              {featuredInterview.category}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {featuredInterview.title}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
              {featuredInterview.subtitle}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
              {featuredInterview.location} • {featuredInterview.medium} •{" "}
              {featuredInterview.runtime}
            </p>
            <p className="mt-5 text-sm leading-7 text-neutral-700">
              {featuredInterview.description}
            </p>

            <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-black/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/nnE0kaPN3dY"
                title="Episode 001 — Tobias Kielinger"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
              <span className="text-sm text-neutral-500">
                {featuredInterview.date}
              </span>
              <button className="rounded-xl border border-black px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                {featuredInterview.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              About the series
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Present in the moment. Present in the creation.
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base leading-8 text-neutral-700">
            <p className="font-medium text-neutral-900">
              The Artist Is Present
              <br />
              <span className="font-normal italic">
                An original concept by Vetaliah Davis.
              </span>
            </p>
            <p>
              The Artist Is Present is a global interview and storytelling
              series spotlighting artists working across art, food, culture,
              music, and movement. Through intimate conversations and visual
              documentation, the series explores creative process, presence, and
              identity, centering artists from around the world and the
              environments that shape their work.
            </p>
            <p>
              Each episode is created in hopes of examining the nature of the
              artistic process directly from the artist’s lived experience.
              Rather than focusing solely on outcomes, the series lingers in
              process, exploring how ideas form, how artists stay present with
              their work, and what it means to create with intention in a
              constantly moving world.
            </p>
            <p>
              This is a space for listening, observing, and honoring the act of
              creation as it unfolds.
            </p>
          </div>
        </div>
      </section>

      <section
        id="interviews"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Archive
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Interviews and conversations
            </h3>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm text-neutral-500">
            Editorial, minimal, cinematic
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interviews.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {item.medium}
                </span>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-neutral-700">
                  {item.status}
                </span>
              </div>
              <h4 className="mt-6 text-2xl font-semibold tracking-tight">
                {item.name}
              </h4>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                {item.description}
              </p>
              <button className="mt-8 text-sm font-medium underline underline-offset-4">
                View details
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="mission" className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Series principles
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-lg font-medium tracking-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Contact
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              For interview inquiries, collaborations, and artist features.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
              This space can become your official home base for The Artist Is
              Present, with artist pages, embedded videos, written reflections,
              and a submission or inquiry form.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <div className="space-y-4 text-sm text-neutral-700">
              <div>
                <p className="text-neutral-500">Email</p>
                <p className="mt-1 font-medium text-black">
                  Veevandee@gmail.com
                </p>
              </div>
              <div>
                <p className="text-neutral-500">Instagram</p>
                <p className="mt-1 font-medium text-black">
                  @itsvetaliahdavis
                </p>
              </div>
              <div>
                <p className="text-neutral-500">YouTube</p>
                <p className="mt-1 font-medium text-black">
                  Add your YouTube channel link
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
