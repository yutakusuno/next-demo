import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";

export const metadata = {
  title: "post",
};

const Post: FC = () => {
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
      <h2>
        <Link href="/">top page!</Link>
      </h2>
    </>
  );
};
export default Post;
