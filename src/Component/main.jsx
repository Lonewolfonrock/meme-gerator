import React,{useState} from "react";
import memedata from './data'







function Structure(){
    const [meme, setmeme] = useState({
        toptext:"",
        bottomtext:"",
        randomimage:"images/20180703190744-rollsafe-meme.jpeg"
    })

    console.log(memedata.data)
    const [allimages,setimages]=useState(memedata.data.memes)
    
    
    
    function handlechange(event){
        const {name,value} = event.target
        setmeme(prememe =>({
            ...prememe,
            [name]:value
        }))
    }

    function getmemeimages(){
        const randomimage =Math.floor(Math.random() * allimages.length)
        const url = allimages[randomimage].url
        setmeme(prememe =>({
            ...prememe,
            randomimage:url
        }))
    }

    return(
        <div className="main">
            <h1>Meme Generator</h1>
        <div className="form">
            <input type="text" 
                placeholder="Starting Text" 
                className="textfield" 
                id="start"
                name="toptext"
                value={meme.toptext}
                onChange={handlechange}
                />

            <input type="text" 
                placeholder="Ending Text" 
                className="textfield" 
                id="end"
                name="bottomtext"
                value={meme.bottomtext}        
                onChange={handlechange}    
            />

            <button
            className="form-button"
            onClick={getmemeimages}

            >Get new Meme image</button>
        </div>
        <div class="meme-container">
            <img src={meme.randomimage} alt="API failuer System cant load this image chose another image"  className="img"/>
            <h2 class="meme-top-text">{meme.toptext}</h2>
            <h2 class="meme-bottom-text">{meme.bottomtext}</h2>
        </div>

        
        

        
        </div>

        
    
    )
    


}

export default Structure