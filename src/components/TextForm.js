import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert('success', 'Converted to Uppercase')
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert('success', 'Converted to Lowercase')
    }

    const handleClearClick = () => {
        setText("")
        props.showAlert('success', 'All text cleared')
    }

    const handleMergeClick = () => {
        let str = ""
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ' || text[i] === '\n') continue;
            str = str.concat(text[i])
        }
        setText(str)
        props.showAlert('success', 'All white spaces removed')
    }

    const countWords = (text) => {
        const arr = text.split('\n')
        let cnt = 0
        for (let j = 0; j < arr.length; j++) {
            let s = arr[j];
            for (let i = 0; i < s.length;) {
                while (i < s.length && (s[i] === ' ')) i++
                if (i === s.length) break
                cnt++
                while (i < s.length && s[i] !== ' ') i++
            }
        }
        return cnt
    }

    const getBackgroundColor = () => {
        if (props.mode === 'light') return 'white'
        if (props.mode === 'dark') return '#131517'
        if (props.mode === 'blue') return '#083AA9'
        if (props.mode === 'red') return '#C21010'
    }

    const getBtnColor = () => {
        if (props.mode === 'light') return 'success'
        if (props.mode === 'dark') return 'warning'
        if (props.mode === 'blue') return 'primary'
        if (props.mode === 'red') return 'danger'
    }

    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: getBackgroundColor(), color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${getBtnColor()} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${getBtnColor()} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${getBtnColor()} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className={`btn btn-${getBtnColor()} mx-1 my-1`} onClick={handleMergeClick}>Remove Whitespace</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>

    )
}
