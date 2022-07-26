import twitter from './svgs/twitter.svg'
import telegram from './svgs/telegram.svg'
import discord from './svgs/discord.svg'
import reddit from './svgs/reddit.svg'

const Community = () => {
        // const social = ['block.png','ho.png', 'nft.png', 'logo.png']

    return ( 
        <div className="community"> 
            {/* 08091A */}
            <h4>
                Our Community
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a repudiandae, beatae corrupti consequatur minus nemo explicabo cum quos incidunt itaque illo sint maiores, eos illum quidem asperiores voluptate quo aut sequi in.
             Tenetur veritatis alias eum fuga ipsum, natus deleniti laudantium eaque illo porro.</p>
             <div className="social">
                <div> <img src={ twitter } alt="" /> <button>Join</button></div>
                <div> <img src={telegram} alt="" /> <button>Join</button></div>
                <div> <img src={discord} alt="" /> <button>Join</button></div>
                <div> <img src={reddit} alt="" /> <button>Join</button></div>
             </div>
        </div>
     );
}
 
export default Community ; 
    