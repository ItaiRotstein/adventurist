import { useState } from "react";
import { formatDistanceToNow } from 'date-fns';
import { he } from 'date-fns/locale';

import { Icon } from "../Icon";
import { addCommentToPost } from "../../service/post.service";
export const Comments = ({ selectedPost }) => {
    const [newComment, setNewComment] = useState('');
    const [commentAuthorName, setCommentAuthorName] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setCommentAuthorName(event.target.value.slice(0, 15)); // Limit the author name to 15 characters
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newComment.trim() || !commentAuthorName.trim()) return; // Prevent adding empty comments or author names

        try {
            const commentData = {
                id: Math.random().toString(36).slice(2, 11),
                author: commentAuthorName,
                content: newComment,
                date: new Date()
            };
            await addCommentToPost(selectedPost._id, commentData);
            selectedPost.comments.push(commentData);
            setNewComment('');
            setCommentAuthorName('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    return (
        <div>
            <h3 className="pb-8 text-xl">תגובות ({selectedPost.comments.length})</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 bg-white p-2 mb-4 rounded"
                        value={commentAuthorName}
                        onChange={handleAuthorChange}
                        placeholder="הקלידו שם..."
                        maxLength="15"
                        required
                    />
                    <textarea
                        className="w-full h-24 border border-gray-300 bg-white p-2 mb-2 rounded"
                        placeholder="הקלידו תגובה..."
                        value={newComment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="btn-main !bg-clr2 !rounded">הוסף תגובה</button>
                    </div>
                </form>
                {/* Comments list */}
                <ul>
                    {selectedPost.comments.map(comment => (
                        <li key={comment.id} className="border border-gray-300 p-2 my-4 rounded">
                            <div className="flex items-center">
                                <Icon icon="IoPersonCircle" className="me-2 text-3xl text-clr4" />
                                <h4 className="font-bold text-lg text-clr2">{comment.author}</h4>
                            </div>
                            <div className="ps-10">
                                <p className="text-sm pt-1 pb-3">{formatDistanceToNow(new Date(comment.date), { addSuffix: true, locale: he })}</p>
                                <p>{comment.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};