import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2>Hello world</h2>
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
}
