import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { getPostById } from "../../service/post.service";
import { ClipLoader } from "react-spinners";
import { Icon } from "../../cmps/Icon";
import { Comments } from "../../cmps/post/Comments";

export const PostPage = () => {
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);

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
  }, [id]);

  if (!selectedPost) return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
      <ClipLoader size={100} />
    </div>
  );
  return (
    <div className="max-w-2xl my-8">
      <img className="mb-4" src={selectedPost.img} alt={selectedPost.title} />
      <div className="main-layout">
        <h1 className="text-2xl text-center font-bold">{selectedPost.title}</h1>
        <ul className="flex justify-center gap-4 py-4 my-4 border-t border-b text-sm text-gray-500">
          {/* <li>קטגוריה: {selectedPost.category}</li> */}
          <li className="border-e pe-3">
            <Icon icon="IoPersonCircle" className="inline me-2 text-clr3 text-[16px]" />
            מאת: {selectedPost.author}
          </li>
          <li className="border-e pe-3">
            <Icon icon="IoCalendarClearOutline" className="inline me-2 text-clr3" />
            {new Date(selectedPost.createdAt).toLocaleDateString()}
          </li>
          <li>
            <Icon icon="GrContact" className="inline me-2 text-clr3"></Icon>
            {selectedPost.comments.length} תגובות
          </li>
        </ul>
        <div className="prose">
          {parse(selectedPost.content)}
        </div>
        <hr className="my-8" />
        <Comments selectedPost={selectedPost} />
      </div>
    </div>
  );
};