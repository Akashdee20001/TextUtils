import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="container">
            <div className="card my-5">
                <div className="card-header">
                    About Us
                </div>
                <div className="card-body">
                    <h5 className="card-title">Manipulate your text as you like</h5>
                    <p className="card-text">TextUtils, as the name implies is a text uitlity application where the user can
                        perform various text manipulation techniques. For example, converting to uppercase, conevrting
                        to lowercase, removing extra whitespaces, counting words, counting characters and many more.
                        So what are you waiting for? Go on and manipulate your text as much as you want.</p>
                    <Link to="/" className="btn btn-primary">Manipulate Your Text</Link>
                </div>
            </div>
        </div>

    )
}
