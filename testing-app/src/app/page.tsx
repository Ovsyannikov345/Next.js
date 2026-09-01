import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col g-4">
      <h1>This is home page</h1>
      <Link href={"/static-page"}>To static page</Link>
      <Link href={"/dynamic-rendering/1"}>To dynamic page</Link>
    </div>
  );
}
