import Card from '../../Components/Card/Card';
import {Animated} from "react-animated-css";
import { useEffect, useState } from 'react';
import './News.scss'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
const News = () => {

    const [stories, setStories] = useState(null)
    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
        params: {category: 'generalnews', region: 'US'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
      };
      
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setStories(response.data.items.result)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
if(stories)    
    return (
        <div className='news'>
        
            <h1 className='news__title'>News</h1>
       
            <ul className='news__cards'>
                {stories.map((story,index)=>{
                return (
                        <li className = "news__card">
                            <a href={story.link}>
                                <Animated animationIn="fadeInUp" animationInDelay = {500*index} animationOut="fadeOut" isVisible={true}>
                                    <Card  title ={story.title} img= {story.main_image?story.main_image.original_url:null} body={story.summary}/>
                                </Animated>
                            </a>
                        </li>
                 )
            })}
            </ul>
        

      
            
            
            
        </div>
    );
    else{
        return(<Loading/>)
       
    }
}

export default News;