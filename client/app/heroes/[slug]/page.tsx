interface HeroProps {
  params: Promise<{ slug: string }>;
}

export default async function Hero({ params }: HeroProps) {
  const { slug } = await params;

  return (
    <main className="flex-1 flex mx-auto flex-col">
      <h1>Hero: {slug}</h1>
    </main>
  );
}
