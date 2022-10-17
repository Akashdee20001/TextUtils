import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const getTextColor = () => {
        if (props.mode === 'light') return 'dark'
        else return 'light'
    }

    const getBackgroundColor = () => {
        if (props.mode === 'light') return 'light'
        if (props.mode === 'dark') return 'dark'
        if (props.mode === 'blue') return 'primary'
        if (props.mode === 'red') return 'danger'
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${getBackgroundColor()}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-check-inline text-${getTextColor()}`}>
                        <input className="form-check-input" onClick={props.lightMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Light</label>
                    </div>
                    <div className={`form-check form-check-inline text-${getTextColor()}`}>
                        <input className="form-check-input" onClick={props.darkMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Dark</label>
                    </div>
                    <div className={`form-check form-check-inline text-${getTextColor()}`}>
                        <input className="form-check-input" onClick={props.blueMode} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Blue</label>
                    </div>
                    <div className={`form-check form-check-inline text-${getTextColor()}`}>
                        <input className="form-check-input" onClick={props.redMode} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                        <label className="form-check-label" htmlFor="inlineRadio4">Red</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}
