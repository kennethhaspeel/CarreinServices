const Banner = () => {
  return (
    <aside
      role="note"
      className="flex items-center gap-3 px-4 py-3 text-sm text-white sm:px-6"
    >
      <span
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold"
      >
        i
      </span>

      <p className="leading-relaxed">
        <span className="font-semibold">Let op:</span> we gebruiken veilige,
        milieuvriendelijke producten die geschikt zijn voor uw matras. Na de
        reiniging is de matras weer snel te gebruiken.
      </p>
    </aside>
  );
};

export default Banner;
