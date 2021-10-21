import React, { useState } from 'react'

export default function UploadPosts() {

    const [formData, setFormData] = useState({
        file: {},
        caption: ""
    })

    const hadnleFileChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.files[0]
            }
        })
    }

    return(
        <div>
            <form>
                <input onLoad={hadnleFileChange} name="file" type="file"></input><br/>
                <input name="caption" type="text" placeholder="caption"></input><br/>
                <button type="submit">Submit</button><br/>
            </form>
        </div>
    )
}

