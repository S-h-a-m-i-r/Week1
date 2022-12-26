import React from 'react';
import Posts from './Array';
const Key =(props)=>{
    <Posts/>
    const sideBar = (

<ul>
    {props.Posts.map((post)=>
    <li key = {post.id}>{post.title}</li>)}
</ul>        
      );

      const content = 
        <div>
            {props.Posts.map((post)=>
            <div key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>

            </div>
            
            )}
        </div>
      

return (
    <>
    {sideBar}
    {content}
    </>
)


}



export default Key;