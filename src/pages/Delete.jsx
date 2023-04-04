import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useContext } from 'react';
import SubCollection from "../context/Firebase";



const Delete = () => {
    const { SubCollection } = useContext(SubCollection);
    
    console.log("delete")
    const handleAcceptClick = () => {
      // Call the SubCollection function here
         SubCollection();  
         alert("Order Accepted")                                                                                            
    };
    return ({
        handleAcceptClick
    }
    )
}
export default Delete;