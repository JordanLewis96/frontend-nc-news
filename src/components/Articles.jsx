import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import { useParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => { 
        console.log(err);
      });
  }, [topic]);

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
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
          );
        })}
      </ul>
    </>
  );
}