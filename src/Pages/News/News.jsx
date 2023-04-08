import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import './News.scss'
import axios from 'axios';
const News = () => {

    const [stories, setStories] = useState(null)
    const options = {
        method: 'GET',
        url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list',
        params: {template: 'CURRENCY', id: 'usdjpy'},
        headers: {
          'X-RapidAPI-Key': '75314fef5emsh7d6d2517a00cb45p109bfbjsn4ab2c57e96a6',
          'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
        }
      };
      
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data.stories);
            setStories(response.data.stories)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
if(stories)    
    return (
        <div className='news'>
            <h1>News</h1>
            <div className='news'>
            <ul className='news__cards'>
                {stories.map((story)=>{
                return (
                        <a href={story.shortURL}>
                            <li className='news__card'>
                            <Paper elevation={3}>
                            <h3>{story.title}</h3>
                            <img src={story.thumbnailImage}></img>
                            </Paper>
                            </li>
                        </a>
                 )
            })}
            </ul>
            </div>

      
            
            
            
        </div>
    );
}

export default News;