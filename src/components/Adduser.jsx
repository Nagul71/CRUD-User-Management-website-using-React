import React , {useState,useContext} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../App';


function Adduser() {
  let {user,setUser} = useContext(UserContext)

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [age,setAge] = useState("")
  let [gender,setGender] = useState("")
  let [subscription,setSub] = useState(false)

  let navigate = useNavigate()

  const handleSubmit=()=>{
    let data = {name,email,age,gender,subscription};
    data.id = user.length?user[user.length-1].id+1:1;

    user.push(data);
    setUser([...user]);

    navigate('/');



  }

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">ADDING USER</h1>
          </div>
          <div className="row">
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" onChange={(e)=>{setAge(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
                <Form.Select defaultuser={user} setUser = {setUser}alue="null" onChange={(e)=>{setGender(e.target.value)}}>
                  <option value="null">-- Select --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </Form.Select>
            </Form.Group>
          

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Subscription" checked={subscription} onChange={(e)=>{setSub(e.target.checked)}}/>
            </Form.Group>
            <Button variant="primary" onClick={()=>handleSubmit()}>
              Submit
            </Button>
          </Form>

            </div>
      </div>
  </div>
  </div>
  </>
}

export default Adduser