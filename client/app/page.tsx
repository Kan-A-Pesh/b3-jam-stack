import ErrorBanner from "@/components/error-banner";
import StrapiClient from "@/data/strapi";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageResponse = await StrapiClient.GET("/index-page");

  if (!pageResponse.data?.data || pageResponse.error) {
    return {
      title: "Oops",
      description: pageResponse.error?.error.message ?? "Something went wrong",
    };
  }

  return {
    title: pageResponse.data.data.title,
    description: pageResponse.data.data.description,
  };
}

export default async function Index() {
  const pageResponse = await StrapiClient.GET("/index-page");

  if (!pageResponse.data?.data || pageResponse.error) {
    return <ErrorBanner message={pageResponse.error?.error.message} />;
  }

  return (
    <main className="flex-1 flex mx-auto flex-col w-full container p-4 md:p-8 lg:p-16">
      <h1 className="text-2xl font-bold">{pageResponse.data.data.title}</h1>
      <p>{pageResponse.data.data.description}</p>
    </main>
  );
}
