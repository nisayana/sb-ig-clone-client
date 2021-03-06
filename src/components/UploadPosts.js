import React, { useState } from 'react'

export default function UploadPosts() {

    const [formData, setFormData] = useState({
        file: {},
        caption: ""
    })


    const handleChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const hadnleFileChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.files[0]
            }
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {file, caption} = formData

        let formDataObj = new FormData()

        formDataObj.append("file", file)
        formDataObj.append("caption", caption)

        fetch("http://localhost:3001/posts", {
            "method": "POST",
            "body": formDataObj 
        })
        .then(resp => resp.json())
        .then(json => {
            debugger
        })
        .catch(error => console.error(error))
    }

    return(
        <div>
            <form>
                <input onChange={hadnleFileChange} name="file" type="file"></input><br/>
                <input onChange={handleChange} value={formData.caption} name="caption" type="text" placeholder="caption"></input><br/>
                <button type="submit">Submit</button><br/>
            </form>
        </div>
    )
}

