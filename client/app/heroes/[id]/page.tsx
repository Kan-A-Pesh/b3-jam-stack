import ErrorBanner from "@/components/error-banner";
import StrapiClient from "@/data/strapi";

interface HeroProps {
  params: Promise<{ id: number }>;
}

export default async function Hero({ params }: HeroProps) {
  const { id } = await params;

  const heroResponse = await StrapiClient.GET(`/heroes/{id}`, {
    params: {
      path: {
        id,
      },
    },
  });

  if (!heroResponse.data?.data || heroResponse.error) {
    return <ErrorBanner message={heroResponse.error?.error.message} />;
  }

  return (
    <main className="flex-1 flex mx-auto flex-col">
      <h1>{heroResponse.data.data.name}</h1>
    </main>
  );
}
