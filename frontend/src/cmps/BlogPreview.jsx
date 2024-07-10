import { useEffect, useState } from "react";
import { PostPreview } from "./post/PostPreview";
import { getPostById } from "../service/post.service";

export const BlogPreview = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const id = '6684056fb9ba6dccdff5dff2'
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(id);
        setSelectedPost(fetchedPost);
      } catch (error) {
        console.error('Failed to fetch post:', error);
        // Handle the error as needed, e.g., set an error state, show a message, etc.
      }
    };
    fetchPost();
  }, []);
  return (
    selectedPost && <PostPreview post={selectedPost}/>
  )
}