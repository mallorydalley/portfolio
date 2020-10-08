import React, {useState, useEffect} from 'react';

function About(props){

    return(
        <div>
            <div>
                <img src='https://lh3.googleusercontent.com/proxy/bmMxlvOUcpkSHCC_Nqjci7z5tM-XtsWb0Od454HAcT716N6ciItorGN1B_cYBrtRODRutUwsdiTYynJ9UaSk0G10jNDu7FBinShuEKNFjcWRO8rjFwrlCtOwNORLVLnwYr1SdTKLsVjwGw7LhPIICuEgCWvkDqYbS0aZw1TWYHBpOzYGtv_nu0M17FuZXrUWb-epu85A0cK4IG0EmnXV7ZeaEkemcCMF2qNdlW0oQkf8yX96Jgumwo0pCgoU5E5Nb4wz'/>
                About
            </div>
            <button className='btn btn-info btn-lg'>Download my CV</button>
            <div>
                <span>A little about me</span>
                <p>I started my career in marketing. While I loved marketing, I realized there were some parts of it I loved more. Mainly working with websites and design. So I made the jump and attended a coding bootcamp where I learned JavaScript, React.js, Node.js, PostgreSQL, HTML5, CSS3, and more. 

Designing has always been my favorite, and whether that’s working with Photoshop or designing a website from CSS, I thoroughly enjoy it. Collaborating on a project is real treat, so if you have a project in mind, I’d love to hear from you
<br />

When I’m not working I love hiking, playing sports, video games, and being in the outdoors. </p>
            </div>
        </div>
    )
}

export default About;