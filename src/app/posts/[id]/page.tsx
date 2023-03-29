import Link from "next/link";
import Image from "next/image";
import { getAllPostIds, getPostDataFromId } from "../../../../lib/posts";
import type { PostData } from "../../../../lib/posts";
import Date from "../../../../components/date";
import NotFound from "../../not-found";

export const metadata = {
  title: "post",
};

export const generateStaticParams = async () => {
  const res = getAllPostIds();
  return res.map((v) => ({
    id: v.params.id,
  }));
};

const Post = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const postData: PostData = await getPostDataFromId(id);

  if (postData.id == "error") return NotFound();

  return (
    <>
      <h1>
        post
        <Image
          src="/images/profile.png"
          height={144}
          width={144}
          alt="Your Name"
        />
      </h1>
      <ul>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </ul>
      <h2>
        <Link href="/">top page!</Link>
      </h2>
    </>
  );
};

export default Post;
