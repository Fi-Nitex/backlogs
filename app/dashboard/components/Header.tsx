"use client";

import { SignOutButton, UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export function Header() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "2.5rem",
                  height: "2.5rem",
                },
              },
            }}
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <h2 className="font-semibold text-lg">{user.firstName}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <SignOutButton>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </nav>
    </header>
  );
}
