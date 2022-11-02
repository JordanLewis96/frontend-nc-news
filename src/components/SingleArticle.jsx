import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleByID } from "../utils/api.js";
import Votes from "./Votes";

export default function ArticleByID() {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(article_id)
      .then(( singleArticle ) => {
        setLoading(true);
        setArticle(singleArticle.article);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading, One moment please...</p>;
  }

  return (
    <li className="listItem" key={article.article_id}>
              <p className="articleDate"> Date & Time of publish - {new Date(article.created_at).toLocaleString()}</p>
              <p className="articleTitle"> {article.title}</p>
              <hr className="lineBelowTitle"></hr>
              <p className="articleTopic"> {article.topic}</p>
              <p className="articleAuthor"> Authored by - {article.author}</p>
              <p className="articleBody"> {" "}{article.body}</p>
              <Votes className="articleVotes" article_id={article_id} votes={article.votes}></Votes>
              <p className="articleCommentCount">Comments -{article.comment_count}</p>
            </li>
  )
}