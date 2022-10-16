import React from 'react'
import PropTypes from 'prop-types'

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
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>

                    <div class={`form-check form-check-inline text-${getTextColor()}`}>
                        <input class="form-check-input" onClick={props.lightMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Light</label>
                    </div>
                    <div class={`form-check form-check-inline text-${getTextColor()}`}>
                        <input class="form-check-input" onClick={props.darkMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Dark</label>
                    </div>
                    <div class={`form-check form-check-inline text-${getTextColor()}`}>
                        <input class="form-check-input" onClick={props.blueMode} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">Blue</label>
                    </div>
                    <div class={`form-check form-check-inline text-${getTextColor()}`}>
                        <input class="form-check-input" onClick={props.redMode} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                        <label class="form-check-label" for="inlineRadio4">Red</label>
                    </div>

                    {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div> */}
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
