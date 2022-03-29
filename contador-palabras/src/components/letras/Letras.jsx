import { useEffect, useState, useRef } from 'react';

function Letras({text}) {
    
    let numeroLetras=0;
    for(let i=0;i<text.length;i++){
        if (text[i]!=" "){
            numeroLetras++;
        }
    }
    let numeroPalabras=0;
    for(let i=0;i<text.length;i++){
        if (text[i]==" "){
            numeroPalabras++;
        }
    }

    return (
        <>
        <p>LETRAS</p>
        <p>{numeroLetras}</p>
        <p>PALABRAS</p>
        <p>{numeroPalabras}</p>
        </>
        
    );
}

export default Letras;