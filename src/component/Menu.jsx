import React from "react";
import Fruit from "./images/camera_article.jpg";

/*const MenuWraaper = styled.section`
    display: flex;
    justify-content: center;`

const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 900px;
    height: 1000px;
    align-content: space-around;`

const menuImgDiv = styled.div`
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const imgDiv = styled.div` 
height:300px;
display: flex;
flex-direction: column;
justify-content: center;`

const juicyImg = styled.img`
height: 250px;
`
const menuTitle =styled.div`
    text-align: center;
    color: #290101;
    font-size: 25px;
`
*/


function MenuImg({title,price,imgURL})
{
    return(
        <div>
        <a/>
         <img src={imgURL}/>
         <h2>{title}<br /> {price} </h2>
        </div>

    );
}


export default function Menu()
{
   return( 
        <div>
            <div>
            <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

            <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit} />
            </div>
        </div>
   );
}