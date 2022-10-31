import axios from "axios";

export const getArticles = () => {
    return axios
      .get(`https://be-nc-news-je123.herokuapp.com/api/articles`)
      .then(({data}) => {
          console.log(data)
        return data;
      });
  };