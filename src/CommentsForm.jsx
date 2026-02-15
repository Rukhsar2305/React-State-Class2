import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }

    return(
        <div>
            <h4>Write a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange}/>
                <br></br><br></br>

                <label>Remarks: </label>
                <textarea value={formData.remarks} placeholder="add remarks" onChange={handleInputChange}></textarea>
                <br></br><br></br>

                <label>Rating: </label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}