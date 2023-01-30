import { Inter } from "@next/font/google";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "@/graphql/queries";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">My posts: </h1>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
}
