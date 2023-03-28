import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";
import { getAllPostIds, getPostData } from "../../../../lib/posts";
import type { PostData } from "../../../../lib/posts";

export const metadata = {
  title: "post",
};

export async function generateStaticParams() {
  const res = await getAllPostIds();
  return res.map((v) => ({
    id: v.params.id,
  }));
}

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const postData: PostData = getPostData(id);
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
        {postData.date}
      </ul>
      <h2>
        <Link href="/">top page!</Link>
      </h2>
    </>
  );
}
