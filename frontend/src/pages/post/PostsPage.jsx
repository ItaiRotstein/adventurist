import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { getPosts } from "../../service/post.service";
import { PostPreview } from "../../cmps/post/PostPreview";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); 
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
       
      } finally {
        setIsLoading(false); 
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) { 
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
        <ClipLoader size={100} />
      </div>
    );
  }

  return (
    <div className="main-layout">
      <h1 className="text-3xl text-center mt-4">חוויות</h1>
      {posts.map(post => (
        <PostPreview key={post._id} post={post} />
      ))}
    </div>
  );
}