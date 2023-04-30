// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {useLocation} from "react-router-dom";
// import NewsItem from "./NewsItem";
//
// const NewsListByFilters = () => {
//     const [articles, setArticles] = useState([]);
//     const location = useLocation();
//     const category = new URLSearchParams(location.search).get('category');
//
//     useEffect(() => {
//
//         axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`)
//             .then((response) => {
//                 console.log(response);
//                 setArticles(response.data.articles);
//             })
//
//             .catch((error) => {
//                 console.log(error);
//                 // setError(error);
//                 // setIsLoading(false);
//             });
//
//     }, [category])
//
//
//     console.log(articles);
//
//
//     return (
//         <div>
//
//             {articles.map((article, index) => (
//                <NewsItem
//                    key={index}
//                    title={articles[index].title}
//                    description={articles[index].description}
//                    urlToImage={articles[index].urlToImage}
//                    url={articles[index].urlToImage}
//
//                />
//             ))}
//         </div>
//     )
// }
//
// export default NewsListByFilters

// CHAT GPT BELOW

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NewsItem from './NewsItem';
import Sidebar from './Sidebar';

const NewsListByFilters = () => {
    const [articles, setArticles] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        country: '',
        searchTerm: '',
    });

    const location = useLocation();
    const initialCategory = new URLSearchParams(location.search).get('category');

    useEffect(() => {
        if (initialCategory) {
            setFilters((prevFilters) => ({ ...prevFilters, category: initialCategory }));
        }
    }, [initialCategory]);

    // useEffect(() => {
    //     const { category, country, searchTerm } = filters;
    //     const apiUrl = 'https://newsapi.org/v2/top-headlines';
    //     const apiKey = process.env.REACT_APP_API_KEY;
    //
    //     let query = `?pageSize=50&language=en&apiKey=${apiKey}`;
    //
    //     if (category) query += `&category=${category}`;
    //     if (country) query += `&country=${country}`;
    //     if (searchTerm) query += `&q=${searchTerm}`;
    //
    //     axios
    //         .get(apiUrl + query)
    //         .then((response) => {
    //             console.log(response);
    //             setArticles(response.data.articles);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [filters]);

    useEffect(() => {
        const { category, country, searchTerm } = filters;
        const apiUrl = 'https://newsapi.org/v2/top-headlines';
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(searchTerm);

        let query = `?pageSize=50&language=en&apiKey=${apiKey}`;

        if (category) query += `&category=${category}`;
        if (country) query += `&country=${country}`;
        if (searchTerm) query += `&q=${searchTerm}`;

        axios
            .get(apiUrl + query)
            .then((response) => {
                console.log(response);
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filters]);

    const handleFilterChange = ({ filterType, value }) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    console.log(articles);
    // console.log(searchTerm);

    return (
        <div className="news-app">
            <Sidebar onFilterChange={handleFilterChange} />
            <div className="news-list">
                {articles.map((article, index) => (
                    <NewsItem
                        key={index}
                        title={article.title}
                        description={article.description}
                        urlToImage={article.urlToImage}
                        url={article.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsListByFilters;



