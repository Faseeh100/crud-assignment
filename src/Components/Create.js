import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin" : "*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        axios.post(
            "https://66b21c7d1ca8ad33d4f69b4d.mockapi.io/crud-project",
            {name: name, 
            email: email,
            
        }
        )

        .then(() => {
          history("/read");
        });
    };


  return <>
  <div className="d-flex justify-content-between m-2">
  <h2>Create</h2>
  <Link to="/read">
  <button className="btn btn-primary">Show Data</button>
  </Link>
  </div>
  <form>
  <div className="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control"
    onChange={(e) => setName(e.target.value)}
    />
  </div>


  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" 
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>


  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  
  </>
}

export default Create
