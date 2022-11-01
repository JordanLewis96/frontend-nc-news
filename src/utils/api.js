import axios from "axios";

export const getArticles = () => {
    return axios
      .get(`https://backend-nc-news-jl.herokuapp.com/api/articles`)
      .then(({data}) => {
          console.log(data)
        return data;
      });
  };