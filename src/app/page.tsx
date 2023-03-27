import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

export const metadata = {
  title: "top",
};

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section>
        <h1>
          read <Link href="/posts">post page!</Link>
        </h1>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
