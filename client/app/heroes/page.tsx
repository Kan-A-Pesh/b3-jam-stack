import StrapiClient from "@/data/strapi";
import ErrorBanner from "@/components/error-banner";
import Image from "next/image";
import Link from "next/link";

export default async function HeroesPage() {
  const heroesResponse = await StrapiClient.GET("/heroes");

  if (!heroesResponse.data?.data || heroesResponse.error) {
    return <ErrorBanner message={heroesResponse.error?.error.message} />;
  }

  return (
    <main className="flex-1 flex mx-auto flex-col w-full container p-4 md:p-8 lg:p-16">
      <h1 className="text-2xl font-bold mb-4">Heroes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroesResponse.data.data.map((hero) => (
          <Link href={`/heroes/${hero.id}`} key={hero.id}>
            <div
              key={hero.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                src={hero.avatar?.url ?? ""}
                alt={hero.name ?? "Hero avatar"}
                className="w-full h-48 object-cover"
              />

              <h2 className="text-lg font-semibold p-4">{hero.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
