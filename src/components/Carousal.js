import React, { useEffect, useState } from 'react';
import './carousal.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousal = ()=>{
    const [index,setIndex] = useState(0);

    const images = [
        "https://wallpaperaccess.com/full/147237.png",
        "https://cdn.wallpapersafari.com/62/71/8qrfzv.jpg",
        "https://i.pinimg.com/originals/db/68/cd/db68cd1f3a07b219baa73093c39d2789.jpg",
        "https://wallpapers.com/images/high/vesemir-the-witcher-3-wild-hunt-hd-wallpaper-s0xovw414cqb6mqq.jpg"]

    

    return<>
            <div className="carousal">
                <div className='layer'> </div>
                
                <OwlCarousel items={1} dots={true} loop nav autoPlay={true}>
                    {images.map((image,idx)=>{
                            return(
                                <div key={idx} className='image_container'>
                                    <img src={`${image}`} alt="" />
                                </div>
                            )
                        })}
                </OwlCarousel>
                
                
                
            </div>
        </>

    
}

export default Carousal;