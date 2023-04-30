import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    // const [sources, setSources] = useState([]);

    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');

    useEffect(() => {


        // const getArticles = async () => {
        //         const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`)
        //         setArticles(response.data.articles)
        //         console.log(response)
        // }

        // getArticles()

        axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response);
                // setSources(response.data.sources);
                setArticles(response.data.articles);


            })

            .catch((error) => {
                console.log(error);
                // setError(error);
                // setIsLoading(false);
            });

    }, [category])


    console.log(articles);


    return (
        <div>

            {/*{sources.map((article, index) => (*/}
            {/*    <ul key={index}>*/}
            {/*        <li>{sources[index].name}</li>*/}
            {/*        <li>{sources[index].description}</li>*/}
            {/*        <li>{sources[index].url}</li>*/}
            {/*    </ul>*/}
            {/*))}*/}
            {articles.map((article, index) => (
               <NewsItem
                   key={index}
                   title={articles[index].title}
                   description={articles[index].description}
                   urlToImage={articles[index].urlToImage}
                   url={articles[index].urlToImage}

               />
                // <ul key={index}>
                //         <li>{articles[index].author}</li>
                //         <li>{articles[index].title}</li>
                //         <li>{articles[index].description}</li>
                // </ul>
            ))}
        </div>
    )
}

export default NewsList