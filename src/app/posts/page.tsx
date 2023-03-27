import Link from "next/link";
import type { FC } from "react";

const Post: FC = () => {
  return (
    <>
      <h1>post</h1>
      <h2>
        <Link href="/">top page!</Link>
      </h2>
    </>
  );
};
export default Post;
