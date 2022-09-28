import React from "react"
import memesData from "../memesData.js"

//  create default function that returns elements for Main part of page,



export default function Meme(){

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.lenght)
        const url = memesArray[randomNumber].url
        console.log(url)

    }
    return (
 

       <main className="Meme">
         
            <div className="InputForm">
             <input type="text" placeholder="Shut up"></input>
             <input type="text" placeholder="and take my money"></input></div>
           <button onClick={getMemeImage}><p className="ButtonText">Get a new meme image</p></button>
         
          </main>
       
    )
}