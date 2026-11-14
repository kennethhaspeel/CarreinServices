import vragen from "./Components/faq.json";
const FaqPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold py-4">Veelgestelde vragen</h1>
      {vragen.map((item, index) => (
        <details
          key={index}
          className="group rounded-lg border border-slate-700 py-2"
          open
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold marker:content-none focus-visible:outline-2 focus-visible:outline-blue-500 [&::-webkit-details-marker]:hidden">
            {item.vraag}
           
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-slate-300">
            {item.antwoord}
          </p>
        </details>
      ))}
      <aside className="mt-14 rounded-xl border border-blue-600/50 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Je vraag niet gevonden?</h2>
          <p className="mt-2 text-slate-300">
            Neem gerust contact met ons op. We helpen je graag verder.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://wa.me/32471875540"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
            >
              Stel je vraag via WhatsApp
            </a>
            <a
              href="tel:+32471875540"
              className="rounded-lg border border-slate-500 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              Bel 0471 87 55 40
            </a>
          </div>
          <a
            href="mailto:info@carreinservices.be"
            className="mt-4 inline-block text-sm text-slate-300 underline"
          >
            info@carreinservices.be
          </a>
        </aside>
    </>
  );
};

export default FaqPage;
