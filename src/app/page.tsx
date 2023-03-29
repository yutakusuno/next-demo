import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import type { PostData } from "../../lib/posts";

export const metadata = {
  title: "top",
};

const Home = async () => {
  const postData: PostData[] = await getSortedPostsData();

  return (
    <>
      <section>
        <h1>Blog</h1>
        <ul>
          {postData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`posts/${id}`}>{title}</Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
