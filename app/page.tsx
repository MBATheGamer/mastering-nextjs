"use client";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

export const generateMetadata = async () => {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "product.description",
  } as Metadata;
};

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      <h1>Hello, World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
