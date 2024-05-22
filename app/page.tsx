import { Metadata } from "next";

export const generateMetadata = async () => {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "product.description",
  } as Metadata;
};

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello, World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sortedUsers = _.orderBy(users, ["name"]);

          console.log(sortedUsers);
        }}
      >
        Show
      </button>
    </main>
  );
}
