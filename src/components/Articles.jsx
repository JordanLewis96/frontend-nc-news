import { useEffect, useState } from "react";
import { getArticles } from "../utils/api.js";
import { useParams, Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((data) => {
        setLoading(true)
        setArticles(data.articles);
        setLoading(false)
      })
      .catch((err) => { 
        console.log(err);
      });
  }, [topic]);

  if (isLoading) {
    return <p>Loading, One moment please...</p>;
  }

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return (
            <li className="listItem" key={article.article_id}>
              <p className="articleDate"> Date & Time of publish - {new Date(article.created_at).toLocaleString()}</p>
              <Link to={`/articles/${article.article_id}`}><p className="articleTitle"> {article.title}</p></Link>
              <hr className="lineBelowTitle"></hr>
              <p className="articleTopic"> {article.topic}</p>
              <p className="articleAuthor"> Authored by - {article.author}</p>
              <p className="articleBody"> {" "}{article.body}</p>
              <p className="articleVotes"> ArticleRating: 📰{article.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}