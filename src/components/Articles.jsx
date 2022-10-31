import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return (
            <li className="listItem" key={article.article_id}>
              <p className="articleTitle"> {article.title}</p>
              <p className="articleTopic"> Topic - {article.topic}</p>
              <p className="articleAuthor"> Author - {article.author}</p>
              <p className="articleBody"> {" "}{article.body}</p>
              <p className="articleDate"> Date - {new Date(article.created_at).getFullYear()}</p>
              <p className="articleVotes">Votes - {article.votes}</p>
              <p className="articleCommentCount">Comments -{article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}