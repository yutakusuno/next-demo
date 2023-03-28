import Link from "next/link";
import { getSortedPostsData, getAllPostIds } from "../../lib/posts";

export const metadata = {
  title: "top",
};

async function getPosts() {
  const allPosts = await getSortedPostsData();
  return allPosts;
}

export default async function Home() {
  const posts = await getPosts();
  const res: { params: { id: string } }[] = await getAllPostIds();

  return (
    <>
      <section>
        <h1>
          read
          {res.map((v) => (
            <Link href="posts/pre-rendering" key={v.params.id}>
              {v.params.id}!
            </Link>
          ))}
        </h1>
        <h2>Blog</h2>
        <ul>
          {posts.map(({ id, date, title }) => (
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
