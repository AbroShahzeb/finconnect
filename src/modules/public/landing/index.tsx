import { Navbar, Hero } from "./components";

export const Landing = () => {
  return (
    <main className="w-full min-h-screen bg-surface-2 flex flex-col gap-8 px-4 md:px-10">
      <div className="max-w-[1110px] mx-auto w-full">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};
