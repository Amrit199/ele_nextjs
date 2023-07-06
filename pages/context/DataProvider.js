import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [leto, setLeto] = useState([])
    const [data, setData] = useState([])
    const [headline, setHeadline] = useState("electricity")
    const [topstories, setTopstories] = useState([])
    
    useEffect(() => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=norway+${headline}&sortBy=publishedAt&apiKey=9932a81d52f24e0a941e532102c02251`
          )
          .then((response) => {
            const filterData = response.data.articles.filter(article => article.author && article.urlToImage)
            setData(filterData);
            localStorage.setItem('data', JSON.stringify(filterData))
          });
      }, [headline]);

    // useEffect(() => {
    //     axios
    //     .get(
    //       `https://newsapi.org/v2/everything?q=electricity&sortBy=
    //       publishedAt&apiKey=9932a81d52f24e0a941e532102c02251`
    //     )
    //     .then((response) => {
    //         const filterData = response.data.articles.filter(article => article.author && article.urlToImage)
    //       setTopstories(filterData);
    //     }); 
    // }, [])
    return(
        <DataContext.Provider value={{ leto, setLeto, headline, setHeadline, data, setData, topstories, setTopstories}}>
            {children}
        </DataContext.Provider>
    )
}

export const DataAuth = () => {
    return useContext(DataContext)
}