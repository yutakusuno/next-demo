import Link from "next/link";

export const metadata = {
  title: "top",
};

export default function Home() {
  return (
    <>
      <section>
        <h1>
          read <Link href="/posts">post page!</Link>
        </h1>
      </section>
    </>
  );
}
