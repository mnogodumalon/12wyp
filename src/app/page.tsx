import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Cycles() {
  {
    const cycles = await db.query.cycle.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });

    console.log(cycles);
    return cycles.map((cycle) => (
      <div className="cycle">
        <div key={cycle.id}>{cycle.name}</div>
        <img src={cycle.url} />
      </div>
    ));
  }
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sing in above
        </div>
      </SignedOut>
      <SignedIn>
        <Cycles />
      </SignedIn>
      Hello
    </main>
  );
}
