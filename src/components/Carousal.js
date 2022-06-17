import React, { useEffect, useState } from 'react';
import './carousal.css';
//import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousal = ()=>{
    const [index,setIndex] = useState(0);

    const images = [
        "https://wallpaperaccess.com/full/147237.png",
        "https://cdn.wallpapersafari.com/62/71/8qrfzv.jpg",
        "https://i.pinimg.com/originals/db/68/cd/db68cd1f3a07b219baa73093c39d2789.jpg",
        "https://wallpapers.com/images/high/vesemir-the-witcher-3-wild-hunt-hd-wallpaper-s0xovw414cqb6mqq.jpg"]

    useEffect(()=>{
        const time = setInterval(()=>{
            setIndex(index+1);
            if(index>3){
                setIndex(0);
            }
            console.log(index);
        },2000);

        return ()=>{clearInterval(time)};
    },[])

    return<>
            <div className="carousal">
                <div className='layer'> </div>
                <div className='carousal__inner'>
                    {images.map((image,idx)=>{
                        return(
                            <div key={idx} className='image_container' style={{transform:`translateX(${index*100-idx*100}%)`}}>
                                <img src={`${images[idx]}`} alt="" />
                            </div>
                        )
                    })}
                   
                </div>
            </div>
        </>

    
}

export default Carousal;