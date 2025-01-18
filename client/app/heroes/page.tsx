export default async function HeroesPage() {
  return (
    <main className="flex-1 flex mx-auto flex-col w-full container p-4 md:p-8 lg:p-16">
      <h1 className="text-2xl font-bold mb-4">Heroes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Hero 1</h2>
          <p>Story about the hero 1</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Hero 1</h2>
          <p>Story about the hero 1</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Hero 1</h2>
          <p>Story about the hero 1</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Hero 1</h2>
          <p>Story about the hero 1</p>
        </div>
      </div>
    </main>
  );
}
