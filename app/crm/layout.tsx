import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/crm/sidebar";
import { Providers } from "@/components/crm/theme-provider";
export default async function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row dark:bg-zinc-950 dark:text-white">
        <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
    </Providers>
  );
}