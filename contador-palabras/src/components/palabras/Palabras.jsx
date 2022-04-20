import { useEffect, useState, useRef } from 'react';

function Palabras({ text }) {

    let numeroPalabras = 0;
    text = text.replace(/\r?\n/g, " ");
    const myArray = text.split(" ");
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] != "" && myArray[i] != "\n") {
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