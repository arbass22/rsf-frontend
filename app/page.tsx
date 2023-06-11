"use client";

import Header from "./components/header";

export default function Index(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
      </div>
    </div>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Welcome to <code>Flowbite</code> on <code>Next.js</code>!
          </h1>
        </header>
      </section>
    </div>
  );
}
