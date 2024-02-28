import StakingPage from "@/features/staking/components/page";

export default function Page() {
  return (
    <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
        XION Staking
      </h1>
      <StakingPage />
    </main>
  );
}
