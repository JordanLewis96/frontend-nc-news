import { useState, useEffect } from "react";
import { fetchComments, fetchArticleByID } from "../utils/api.js";
import { useParams } from "react-router-dom";

export default function ListOfComments() {
  const [allComments, setAllComments] = useState([]);
  const [articleTitle, setArticleTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setAllComments(comments);
      setIsLoading(false);
    }) 
    fetchArticleByID(article_id).then(({ article }) => {
      console.log(article);
        setArticleTitle(article.title);
    });
  }, [article_id]);


  if (isLoading) return <p>Loading, One moment please...</p>;
  return (
    <div>
      <h3 className="ArticleTitleMessage">All Comments for: </h3>
      <h2 className="ArticleTitleComments" >{articleTitle}</h2>
      <h2>

      {allComments.map((comment) => { 
          return (
            <div>
              {" "}
              <li className="listItem">
                <p className="CommentBody">{comment.body}</p>
                <p className="CommentVotes">Likes: {comment.votes}</p>
                <p className="CommentAuthor">Author: {comment.author}</p>
                <p className="CommentId">{comment.article_id}</p>
                <p className="CommentDate">Posted: {new Date(comment.created_at).toLocaleString()}</p>
              </li>
            </div>
          );
        })}
      </h2>
    </div>
  );
}