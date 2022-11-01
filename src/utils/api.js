import axios from "axios";

export const getTopics = () => {
  return axios
    .get(`https://backend-nc-news-jl.herokuapp.com/api/topics`)
    .then(({ data }) => {
      return data;
    });
};

export const getArticles = (topic) => {
  return axios
    .get(`https://backend-nc-news-jl.herokuapp.com/api/articles`, {
      params: { topic },
    })
    .then(({ data }) => {
      return data;
    });
};