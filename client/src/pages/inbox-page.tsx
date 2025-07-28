import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useQuery } from "@tanstack/react-query";
import { useIsMobile } from "@/hooks/use-mobile";
import type { User } from "@shared/schema";

export default function InboxPage() {
  const isMobile = useIsMobile();
  const { data: user } = useQuery<User>({ queryKey: ["/api/user"] });

  return (
    <div className="flex h-screen overflow-hidden">
      {!isMobile && <Sidebar currentUser={user} />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentUser={user} />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold canvas-dark mb-4">Inbox</h2>
            <p>This is the Inbox page.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
