import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components/Header";
import { useOrganization } from "@clerk/nextjs";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600">
            Please sign in to access the dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <OrganizationContent />
        </div>
      </main>
    </div>
  );
}

function OrganizationContent() {
  

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Organization Content
        </h2>
        <p className="text-gray-600">
          This content will change based on the selected organization. Use
          client-side components and the useOrganization hook to dynamically
          render organization-specific content.
        </p>
      </div>
    </div>
  );
}
