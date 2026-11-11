type PagePlaceholderProps = {
  title: string;
};

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <main className="px-4 py-12 text-white sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{title}</h1>
    </main>
  );
}
