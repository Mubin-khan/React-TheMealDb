import React, { useState } from 'react';
import Header from '../Header/Header';
import Meals from '../Meals/Meals';

const Parent = () => {
   
    const [dproducts, setdproduct] = useState("");

    const searchResult = evnt =>{
        setdproduct(evnt.target.value); 
    }

    return (
        <div>
            
            {/* <input type="text" onChange={searchResult}/> */}
            <Header searchResult={searchResult}></Header>
            <Meals dproducts={dproducts}></Meals> 
        </div>
    );
};

export default Parent;