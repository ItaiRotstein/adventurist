import { Link } from "react-router-dom";
import parse from "html-react-parser";

export const PostPreview = ({ post }) => {
    // Function to extract the first paragraph from the post content
    const extractFirstParagraph = (htmlContent) => {
        const matches = htmlContent.match(/<p>(.*?)<\/p>/); // Matches the first <p>...</p>
        return matches ? matches[0] : ""; // Returns the first paragraph or an empty string if not found
    };

    return (
        <div className="max-w-2xl mx-auto my-8 p-4 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">{post.title}</h1>
            <img src={post.img} alt={post.title} />
            <div className="prose text-clr8 mt-4">
                {parse(extractFirstParagraph(post.content))}
            </div>
            <div className="mt-4">
                <Link className="btn-main" to={`/post/${post._id}`}>
                    המשך לקרוא
                </Link>
            </div>
        </div>
    );
};