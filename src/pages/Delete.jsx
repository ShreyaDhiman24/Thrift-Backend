import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
// import { SubCollection } from './home/shreya/Documents/Projects/BookifyFirebase/myapp/src/context/Firebase.jsx/sub-collection'

const Delete = () => {
    console.log("delete")
    const handleAcceptClick = () => {
      // Call the SubCollection function here
        // SubCollection();                                                                                              
    };
    return ({

        handleAcceptClick
    }
    )
}
export default Delete;