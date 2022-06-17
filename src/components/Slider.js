import React from 'react';
import './slider.css';

import  OwlCarousel  from 'react-owl-carousel';

const Slider = ()=>{
    const images=[
        "https://cdn.wallpapersafari.com/62/71/8qrfzv.jpg",
        "https://cdn.wallpapersafari.com/62/71/8qrfzv.jpg",
        "https://i.pinimg.com/originals/db/68/cd/db68cd1f3a07b219baa73093c39d2789.jpg",
        "https://wallpapers.com/images/high/vesemir-the-witcher-3-wild-hunt-hd-wallpaper-s0xovw414cqb6mqq.jpg",
        "https://wallpaperaccess.com/full/147237.png",
        "https://cdn.wallpapersafari.com/62/71/8qrfzv.jpg",
        "https://i.pinimg.com/originals/db/68/cd/db68cd1f3a07b219baa73093c39d2789.jpg",
        "https://wallpapers.com/images/high/vesemir-the-witcher-3-wild-hunt-hd-wallpaper-s0xovw414cqb6mqq.jpg"
    ]
    
    return (
        <div className="slider">
            <div className='slider__inner'>
                <OwlCarousel className='owl-theme' items={5} autoPlay={true} margin={12} loop nav>
                    {images.map((image,index)=>{
                        return  <div className='img-container'>
                                    <img src={`${image}`} alt=""/>
                                </div>
                    })
                }
                </OwlCarousel>
            </div>
        </div>
    )
}


export default Slider;