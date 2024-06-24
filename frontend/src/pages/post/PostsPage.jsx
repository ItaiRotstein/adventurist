import { useEffect, useState } from 'react';

import { getPosts } from "../../service/post.service";
import { PostPreview } from "../../cmps/post/PostPreview";

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        // Handle the error as needed, e.g., set an error state, show a message, etc.
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="main-layout">
      <h1>חוויות</h1>
      {posts.map(post => (
        <PostPreview key={post._id} post={post} />
      ))}
    </div>
  );
}