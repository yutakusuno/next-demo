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
        <h1>
          read
          {postData.map(({ id }) => (
            <Link href={`posts/${id}`} key={id}>
              {id}!
            </Link>
          ))}
        </h1>
        <h2>Blog</h2>
        <ul>
          {postData.map(({ id, date, title, contentHtml }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
