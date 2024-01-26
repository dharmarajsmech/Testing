import React from 'react'
import { useState,useEffect } from 'react'
//export default function effect() {
    function ExampleComponenet(){
    const [ data,setData]=useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .them(Response => Response.json())
        .them(result => setData(result));
  return () => {

    } ; 
        },[]);
return (
    <div>
        {data ? (
            <p>Data: {JSON.stringify(data)} </p>
        ):(
            <p>Loading...</p>
        )}
    </div>
  );
}
