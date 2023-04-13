
import { AreaChart,Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Stocks.scss';
import {Animated} from "react-animated-css";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import {AnimatePresence,motion} from "framer-motion"
import Loading from '../../Components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const Stocks = ({handleMoney}) => {
    
    const [flip, setFlip] = useState(false)
    const stocks = ["aapl", "amzn", "meta", "goog", "nflx", "msft", "tsla", "uber"]
    const sample_data = [
        {
            date: '2021-08-01',
            Price: 100
        }
    ];
    const [current_stock, setStock] = useState("aapl")
    const [data, setData] = useState(null)
    const [stockInfo, setStockInfo] = useState(null)
    const [prevStockInfo, setPrevStockInfo] = useState(null);
    
    const options = {
        method: 'GET',
        url: `https://yahoo-finance127.p.rapidapi.com/price/${current_stock}`,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };


 const submitHandler = (e) => { 
        e.preventDefault();
        if(e.target.stock.value!="")
        setStock(e.target.stock.value)
        setFlip(!flip)
 }  

 const handleBuy = () =>{
    toast.success("Purchased 1 stock of "+current_stock.toUpperCase())
    handleMoney(-1*stockInfo.regularMarketPrice.raw)
 }
 const handleSell = ()=>{
    toast.success("Sold 1 stock of "+current_stock.toUpperCase())
    handleMoney(1*stockInfo.regularMarketPrice.raw)
 }


    useEffect(() => {
        axios.request(options).then(function (response) {
            
           
            response.data.regularMarketChangePercent.raw = 100*(response.data.regularMarketChangePercent.raw);
            response.data.regularMarketChangePercent.raw = parseFloat((response.data.regularMarketChangePercent.raw).toFixed(2));
            response.data.marketCap.raw = parseFloat((response.data.marketCap.raw/1000000000).toFixed(2));


            console.log(response.data);
            setStockInfo(response.data)
            prevStockInfo?setPrevStockInfo(stockInfo):setPrevStockInfo(response.data)
                options.url = `https://yahoo-finance127.p.rapidapi.com/historic/${current_stock}/5d/90d`
                return axios.request(options)
        }).then(function (response) {

            const date = response.data.timestamp.map((item) => {
                return new Date(item * 1000).toLocaleDateString()
            })
            const price = response.data.indicators.quote[0].close
            setData(date.map((item, index) => {
                return {
                    date: item,
                    Price: Number(price[index].toFixed(2))
                }
            }))

            
      
            
        })
        
    .catch(function (error) {
            console.error(error);
        });
    }, [current_stock])
if(data&&stockInfo&&prevStockInfo)
    return (
        
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
          {/* <ToastContainer hideProgressBar={true}/>                                                */}
        <div className='stocks'>
            <h1 className='stocks__title'>Stocks</h1>
            <form className='stocks__search' onSubmit={submitHandler} action="submit">
            <input className='stocks__input' name="stock" type="text" />
            <button className='stocks__go'>GO</button>
            </form>
            <div className='stocks__dashboard'>
               
                <div className='stocks__component' >
                    <ResponsiveContainer >
                        <AreaChart

                            data={data}>
                                   <defs>
                                       <linearGradient id="color_gradient" x1="0" y1="0" x2="0" y2="1">
                                             <stop offset="5%" stopColor="#e76f51" stopOpacity={0.5}/>
                                             <stop offset="95%" stopColor="#e76f51" stopOpacity={0}/>
                                           </linearGradient>
                                   </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date"  />
                            <YAxis  
                            tickFormatter={(t) => {
                                
                                return `$${t}`
                            }
      }
  />
                            <Tooltip labelFormatter={value => {
                                return `Date : ${value}`;
                            }}
                            formatter={value => {
                                return `$${value}`;
                            }}
                            />
                            <Legend />
                            <Area type="monotone" dataKey="Price" stroke="#e76f51" fillOpacity={1} fill="url(#color_gradient)" activeDot={{ r: 8 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                    <button></button>
                </div>
                
                <div className='stocks__list'>
                    <ul className='stocks__list-items'>
                        {stocks.map((stock) => {
                            return (
                                <li onClick={() => {setStock(stock);
                                setFlip(!flip)
                                }} className=  {(stock===current_stock)?"stocks__list-item stocks__list-item--selected ":"stocks__list-item "} >
                                    <h3>
                                        {stock.toLocaleUpperCase()}
                                        
                                    </h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
           
           
            </div>
            <div className='stocks__small-dashboard'>
               <div className='stocks__details'>
                   
                    <div className='stocks__card'>
                    <AnimatePresence >
                    {flip&&
                     <motion.div
                   
                    animate={{rotateY:-360}}
                    transition = {{duration:1}}
                    exit={{rotateY:-360}}
                   
                    >
                        <h3 className='stocks__card-title'>{current_stock.toUpperCase()}</h3>
                   
                    </motion.div>
                    }
                    {!flip&&
                     <motion.div
                   
                    animate={{rotateY:360}}
                    transition = {{duration:1}}
                    exit={{rotateY:360}}
                    >
                        <h3 className='stocks__card-title'>{current_stock.toUpperCase()}</h3>
                   
                    </motion.div>
                    }
                    </AnimatePresence>
                   
                        <p className='stocks__card-body'>$
                        <CountUp decimals={2} start={prevStockInfo.regularMarketPrice.raw} end={stockInfo.regularMarketPrice.raw} />
                        </p>
                   
                    </div>
                   
                   
                   
                   
                    <div className='stocks__card'>
                        <h3 className='stocks__card-title'>Currency</h3>
                        <p className='stocks__card-body'>USD</p>
                    </div>
                   
                   
                      <div className='stocks__card'>
                        <h3 className='stocks__card-title'>Market Cap</h3>
                        <p className='stocks__card-body'>$
                        <CountUp start={prevStockInfo.marketCap.raw} end={stockInfo.marketCap.raw} />B
                        </p>
                    </div>
                    <div className='stocks__card'>
                        <h3 className='stocks__card-title'>Regular Market Change</h3>
                        <p className={(stockInfo.regularMarketChangePercent.fmt.charAt(0)==="-")?"stocks__card--neg":"stocks__card--pos"}>
                   
                        <CountUp decimals={2} start={prevStockInfo.regularMarketChangePercent.raw} end={stockInfo.regularMarketChangePercent.raw} />
                        %
                        </p>
                    </div>
               </div>
               
               
               <div className='stocks__actions'>
                   
                   <div className='stocks__card stocks__card--button stocks__buy' onClick={handleBuy}>
                            <h3 className='stocks__card-title'>Buy</h3>
                        </div>
                        <div className='stocks__card stocks__card--button stocks__sell' onClick={handleSell}>
                            <h3 className='stocks__card-title' >Sell</h3>
                        </div>
               </div>

            </div>

        </div>
        </Animated>
    );
else
return(<Loading/>)
}

export default Stocks;
