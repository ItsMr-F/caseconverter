import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function TextForm(props) {
    // Upper case Code
    const uppercase = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
    }
    // lower case code 
    const lowercase = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
    }
    // first letter upper case 
    // const titleCase=(text)=> {

    //     // converting first letter to uppercase
    //     let capitalized = text.charAt(0).toUpperCase() + text.slice(1);

    //     let NewText = capitalized;
    //     setText(NewText);
    //     // return capitalized;
    // }
    // const titleCase = (text) => {
    //     let lowerStr = text.toLowerCase();
    //     let splitStr = lowerStr.split(" ");
    //     for (let i = 0; i < splitStr.length; i++) {

    //     }
    // program to convert first letter of a string to uppercase

    // take input
    // const string = prompt('Enter a string: ');

    // const result = capitalizeFirstLetter(string);

    // console.log(result);
    // Directly return the joined string
    //     let NewText = splitStr.join(' ');
    //     setText(NewText);
    // }
    //  = text.charAt(0).toUpperCase() + text.slice(1);


    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="mb-3">
                <h2>{props.heading}</h2>

                <textarea className="form-control texthere" rows="6" value={text} onChange={handleOnchange} placeholder="Enter Your Text"  ></textarea>

                <div className="btns">
                    {/* CONVERT TO UPPERCASE  */}

                    <button className="upbtn btn btn-primary my-3" onClick={uppercase}>Convert To Upper Case</button>

                    {/* CONVERT TO LOWERCASE  */}

                    <button className="lowbtn btn btn-primary my-3 mx-4" onClick={lowercase}>Convert To Lower Case</button>

                    {/* FIRST LETTER CAPITALIZE  */}

                    {/* <button className="btn btn-primary my-3 mx-4" onClick={titleCase}>Capitalize First Letter</button> */}

                    <CopyToClipboard text={text}>
                        <button className="copybtn btn btn-secondary my-3 mx-4">Copy To Clipboard</button>
                    </CopyToClipboard>
                </div>
            </div>
        </>
    )
}
