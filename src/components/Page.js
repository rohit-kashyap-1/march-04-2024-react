import React from 'react'

//props: {name:'',email:'',}
// export default function Page(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//             <img src={props.image} width={300} />

//             <hr /></div>
//     )
// }

export default function Page({title,description,image,link}) {
  // const {title,description,image} = props
    return (
        <div className='item'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} className='imgg' />
            <a href={link}>Get Started</a>
            <hr />
        </div>
        
    )
}
