import React from 'react'
import interactiveImg from "../images/desktop/image-interactive.jpg"

const Interactive = () => {
    return (
        <>
           <section className="interactive">
            <div>
                <img src={interactiveImg} alt="" />
            </div>
            <div className="interactive-text">
                <h2>the leader in interactive vr</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.</p>
            </div>
           </section> 
        </>
    )
}

export default Interactive
