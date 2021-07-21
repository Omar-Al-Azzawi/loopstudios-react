import React, { useState } from 'react'
import data from "../data-desktop"

const Creationdesktop = () => {
    const[cards, setCards] = useState(data)

    return (
        <section className="creation-desktop">
         <div className="title">
         <h2>our creations</h2>
        <div className="btn-container">
             <button className="btn">SEE ALL</button>
         </div> 
         </div>
         <section>
             {cards.map((card) =>{
                 const{id, image, title} = card
                 return(
                     <article key={id}>
                        <div>
                        <img src={image} aly="creation card"/>
                        </div>
                        <h3>{title}</h3>
                     </article>
                 )
             })}
         </section>   
        </section>
    )
}

export default Creationdesktop;

