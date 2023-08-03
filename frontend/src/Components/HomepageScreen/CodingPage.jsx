import React from 'react'
import ImageCoding from '../../assets/JavaScript frameworks-rafiki.svg'
import { NavLink } from 'react-router-dom'


function CodingPage(props) {
  return (
    <>
        <div className="codingContainer container">
            {/* <h1 className='title'>Coding Compiler</h1> */}
            <h1 className='title'>{props.title}</h1>
            <div className="codingSection">
                <div className="codingInfo codingsec">
                    <div className="infoCoding infoDetails">
                    All The <mark>Logic</mark> That you need to Learn and Practice <mark> JavaScript </mark> will be Accomplished by this <mark> Js Text Editor </mark> .
                    {/* {props.info} */}
                    </div>
                    <NavLink 
                    // to='/editor/javaScript'
                    to={props.path}
                    ><button className="btn">Get Started</button></NavLink>
                </div>
                <div className="codingimage codingsec">
                    <img
                     src={ImageCoding} 
                    //  src={props.image}
                     alt="image1" className='CodingImg' />
                </div>
            </div>
        </div>
    </>
  )
}

export default CodingPage

/*
const movieName = [
    {
        id: 0,
        channel:"MXPlayer Webseries Origin",
        name:"Avenger EndGame",
        image:"https://th.bing.com/th/id/OIP.kYAa20CTeU-iRwvR8wourgHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.github.com/faizan619"
    },
    {
        id:1 ,
        channel:"Netflix Webseries Origin",
        name:"The bar Girl",
        image: "https://images.unsplash.com/photo-1681412327205-af22c0849ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        link:"https://www.google.com"
    },
    {
        id: 2,
        channel:"Netflix Webseries Origin",
        name:"Civil War",
        image:"https://th.bing.com/th/id/OIP.05vxDnXbSn7a8vtJ2QoLjQHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.facebook.com"
    },
    {
        id: 3,
        channel:"MXPlayer Webseries Origin",
        name:"Avenger EndGame",
        image:"https://th.bing.com/th/id/OIP.kYAa20CTeU-iRwvR8wourgHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.github.com/faizan619"
    },
    {
        id: 4,
        channel:"Netflix Webseries origin",
        name:"Captail America",
        image:"https://th.bing.com/th/id/OIP.64imA3Bjr5R2OnMNmdSj_gHaEo?w=260&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.instagram.com"
    },
    {
        id: 5,
        channel:"Netflix Webseries Origin",
        name:"The bar Girl",
        image: "https://images.unsplash.com/photo-1681412327205-af22c0849ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        link:"https://www.google.com"
    },
    {
        id: 6,
        channel:"Netflix Webseries Origin",
        name:"Civil War",
        image:"https://th.bing.com/th/id/OIP.05vxDnXbSn7a8vtJ2QoLjQHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.facebook.com"
    },
    {
        id: 7,
        channel:"MXPlayer Webseries Origin",
        name:"Avenger EndGame",
        image:"https://th.bing.com/th/id/OIP.kYAa20CTeU-iRwvR8wourgHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.github.com/faizan619"
    },
    {
        id: 8,
        channel:"Netflix Webseries origin",
        name:"Captail America",
        image:"https://th.bing.com/th/id/OIP.64imA3Bjr5R2OnMNmdSj_gHaEo?w=260&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.instagram.com"
    },
    {
        id: 9,
        channel:"Netflix Webseries Origin",
        name:"Civil War",
        image:"https://th.bing.com/th/id/OIP.05vxDnXbSn7a8vtJ2QoLjQHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
        link:"https://www.facebook.com"
    },
    
]
export default movieName;

  {movieName.map((val,index)=>{
         return(
            <Card 
            // key={val.id}
                image={val.image} 
                series={val.channel} 
                name={val.name} 
                link={val.link}
            />
        );
      })} 
 */