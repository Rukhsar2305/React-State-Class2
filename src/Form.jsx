import { useState } from "react"

export default function Form() {

    let [formData, setformData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })

    let handleInputChange = (event) => {
       
        setformData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input 
                placeholder="Enter your full name" 
                type="text" value={formData.fullName} 
                id="fullName" name="fullName" 
                onChange={handleInputChange}
            />
            <br></br><br></br>
            <label htmlFor="UserName">User Name: </label>
            <input 
                placeholder="Enter your user name" 
                type="text" value={formData.userName} 
                id="userName" name="userName" 
                onChange={handleInputChange}
            />
            <br></br><br></br>
            <label htmlFor="Password">Password: </label>
            <input 
                placeholder="Enter your Password" 
                type="password" value={formData.password} 
                id="password" name="password" 
                onChange={handleInputChange}
            />
            <br></br><br></br>
            <button>Submit</button>
        </form>
    )
}