import { useEffect, useState, useRef } from 'react';

function Letras({text}) {
    
    let numeroLetras=0;
    for(let i=0;i<text.length;i++){
        if (text[i]!=" "){
            numeroLetras++;
        }
    }

    return (
        <>
        <p>LETRAS</p>
        <p>{numeroLetras}</p>
        </>
        
    );
}

export default Letras;