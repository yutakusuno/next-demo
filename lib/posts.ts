// See: https://nextjs.org/learn/basics/data-fetching/blog-data

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostData = ExtractedPostData & {
  id: string;
  contentHtml: string;
};

type ExtractedPostData = {
  date: string;
  title: string;
};

export const getSortedPostsData = async () => {
  const allPostsData: PostData[] = await getAllPostsData();

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

const getAllPostsData = async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const postData: PostData = await getPostDataFromFileName(fileName);
      return postData;
    })
  );
  return allPostsData;
};

const getPostDataFromFileName = async (fileName: string) => {
  const id = fileName.replace(/\.md$/, "");
  const postData: PostData = await getPostDataFromId(id);
  return postData;
};

export const getPostDataFromId = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as ExtractedPostData),
  };
};
