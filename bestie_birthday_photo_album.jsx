export default function BestieBirthdayAlbum() {
  const memories = [
    {
      year: "Year 1",
      title: "The Beginning",
      text: "The start of nearly ten years of laughter, chaos, loyalty, and the kind of friendship that becomes part of who you are.",
    },
    {
      year: "Middle Years",
      title: "Growing Up Together",
      text: "From random photos and inside jokes to long talks and big life moments, every season somehow became better with you in it.",
    },
    {
      year: "Now",
      title: "Twenty",
      text: "A whole decade of friendship later, and somehow you are still one of the most beautiful parts of my life. Happy 20th birthday.",
    },
  ];

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      caption: "Add your first favorite photo here",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      caption: "A memory that still makes you smile",
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
      caption: "A photo that feels like home",
    },
    {
      src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
      caption: "One of your favorite chaos moments",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
      caption: "A soft memory",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      caption: "A photo for the present version of you both",
    },
  ];

  const reasons = [
    "You make ordinary days feel important.",
    "You have stayed through every version of life.",
    "You are funny without trying and comforting without effort.",
    "You hold memories in such a special way.",
    "You deserve to be celebrated loudly and lovingly.",
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fb_0%,#fffdfb_40%,#fff8f0_100%)] text-zinc-800">
      <section className="relative overflow-hidden border-b border-white/60">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-12 -left-10 h-40 w-40 rounded-full bg-pink-200 blur-3xl" />
          <div className="absolute top-24 right-8 h-44 w-44 rounded-full bg-rose-100 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
                for the bestie of nearly 10 years
              </p>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Happy 20th,
                <span className="block italic text-rose-500">my favorite person</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 md:text-lg">
                A little corner of the internet made only for you. For the photos, the memories, the laughter, and all the years that turned friendship into family.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#gallery"
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Open the album
                </a>
                <a
                  href="#letter"
                  className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:-translate-y-0.5"
                >
                  Read the birthday note
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 4).map((photo, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[28px] bg-white p-2 shadow-xl ${
                    index === 1 || index === 2 ? "translate-y-6" : ""
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="h-56 w-full rounded-[22px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur"
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-400">
                {memory.year}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{memory.title}</h2>
              <p className="mt-4 leading-7 text-zinc-600">{memory.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-rose-400">photo album</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Little pieces of us</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-500">
            Replace these with your real photos and captions. The layout is already set up so it feels like a dreamy birthday scrapbook.
          </p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo, index) => (
            <figure
              key={index}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-white/80 bg-white p-3 shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full rounded-[22px] object-cover"
              />
              <figcaption className="px-2 pb-1 pt-4 text-sm leading-6 text-zinc-600">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-[1.1fr,0.9fr] md:px-10">
        <div className="rounded-[30px] bg-zinc-900 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-rose-300">ten years later</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">And I would still choose you</h2>
          <p className="mt-6 max-w-2xl leading-8 text-zinc-300">
            Some people enter your life and become a memory. You entered mine and became part of the way I understand love, loyalty, comfort, and home. Thank you for being there across the messy years, the funny years, the hard years, and the beautiful ones too.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/80 bg-white/90 p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-rose-400">why you are loved</p>
          <div className="mt-4 space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl bg-rose-50 px-4 py-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                <p className="leading-7 text-zinc-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="letter" className="mx-auto max-w-4xl px-6 pb-24 pt-8 md:px-10">
        <div className="rounded-[32px] border border-white/80 bg-white p-8 shadow-lg md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-rose-400">birthday letter</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">To my best friend</h2>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-zinc-700 md:text-base">
            <p>
              Happy 20th birthday, my love. It feels unreal that we have known each other for nearly ten years, and somehow every year only gives me more reasons to be grateful for you.
            </p>
            <p>
              Thank you for being the person I can laugh with until nothing makes sense, the person I can sit with in silence, and the person whose presence has shaped so many of my favorite memories.
            </p>
            <p>
              You have been part of my growing up, and that means more than I can ever explain properly. I hope this year gives you softness, joy, confidence, answered prayers, and beautiful surprises. I hope you feel deeply loved today, because you truly are.
            </p>
            <p>
              Here is to everything we have lived through already, and everything still waiting for us. Happy birthday forever.
            </p>
            <p className="pt-4 text-lg italic text-rose-500">Love always, your bestie.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
