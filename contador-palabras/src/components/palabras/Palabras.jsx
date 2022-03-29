import { useEffect, useState, useRef } from 'react';

function Palabras({text}) {
    
    let numeroPalabras=0;
    const myArray=text.split(" ");
    for (let i=0;i<myArray.length;i++){
        if (myArray[i]!=""){
            numeroPalabras++;
        }
    }

    return (
        <>
        <p>PALABRAS</p>
        <p>{numeroPalabras}</p>
        </>
        
    );
}

export default Palabras;