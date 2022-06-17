import React from 'react';
import './bottom.css';

const BottomSection = ()=>{

    return (
        <div className="bottom">
            <div className='bottom_inner'>
                <div className='explore'>
                    <div className='layer'></div>
                    <div className='text'><h2>Explore</h2></div>
                    <img src="https://image.shutterstock.com/image-photo/picture-boy-wearing-pith-helmet-260nw-314554445.jpg" alt=""/>
                    <div className='notification'></div>
                </div>
                <div className='games'>
                    <div className='layer'></div>
                    <img src="https://cdn2.unrealengine.com/Unreal+Engine%2Findustry%2Fgames%2FNews_UEWeb_Games_blog_share_img3-1200x630-1fbacc68fcbff51163d2ecf620015252ad841aee.jpg" alt=""/>
                    <div className='text'><h2>Games</h2></div>
                    <div className='leaderboard'></div>
                </div>
            </div>
        </div>
    )
}


export default BottomSection;