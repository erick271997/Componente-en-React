import React from 'react';
import ReactDom from 'react-dom/client';
import {Greeting} from './Greeting';
import {Usercard} from  './Greeting';
//import Product, {Navbar}from './Product'
//import { Button } from './Button';
//import { TaskCard } from './Task';
//import {Saludar} from './Saludar'


const root = ReactDom.createRoot(document.getElementById('root'));

const user =[
    {
        id: 1,
        name: 'erick',
        image: 'https://robohash.org/user2'
    },
    {
        id: 2,
        name: 'stiven',
        image: 'https://robohash.org/user3'
    }
]

root.render(<>


   {/*  <Button text='saludar'/> */}

{/* <TaskCard/> */}
{/* <Saludar/> */}

   {/*  <Button text="clik"/>
    <Button text= "Play"/>
    <Button text="Go to"/> */}
    {/* <Usercard
    name= "erick"
    amount= {3000}
    married={true}
    point={[99, 33.3, 22.2]}
    address={{street: "123 Main street", city:"New York"}}
    greet={function(){alert("mundo")}}
/>
<Usercard
    name= "stiven"
    amount= {5000}
    married={false}
    point={[95, 23.3, 12.6]}
    address={{street: "123 Main street", city:"Buenaventura"}}
   
/> */}

</>
);
