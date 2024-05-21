import { Metadata } from "next";

export const generateMetadata = async () => {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "product.description",
  } as Metadata;
};

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello, World</h1>
    </main>
  );
}
