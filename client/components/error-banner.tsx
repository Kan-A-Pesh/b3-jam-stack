interface ErrorProps {
  title?: string;
  message?: string;
}

export default function ErrorBanner({ title, message }: ErrorProps) {
  return (
    <div className="w-full bg-red-100 p-4 text-red-500">
      <h1 className="text-2xl font-bold">{title ?? "Oops"}</h1>
      <p>{message ?? "Something went wrong"}</p>
    </div>
  );
}
