import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByID } from "../utils/api.js";

export default function ArticleByID() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(article_id)
      .then(( singleArticle ) => {
        setArticle(singleArticle.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <li className="listItem" key={article.article_id}>
              <p className="articleDate"> Date & Time of publish - {new Date(article.created_at).toLocaleString()}</p>
              <p className="articleTitle"> {article.title}</p>
              <hr className="lineBelowTitle"></hr>
              <p className="articleTopic"> {article.topic}</p>
              <p className="articleAuthor"> Authored by - {article.author}</p>
              <p className="articleBody"> {" "}{article.body}</p>
              <p className="articleVotes">Votes - {article.votes}</p>
              <p className="articleCommentCount">Comments -{article.comment_count}</p>
            </li>
  )
}