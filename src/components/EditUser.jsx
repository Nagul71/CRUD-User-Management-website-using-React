import React , {useState,useEffect,useContext} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useNavigate,useParams} from 'react-router-dom'
import { findIndexById } from '../common/helper';
import { UserContext } from '../App';

function EditUser() {
  let {user,setUser} = useContext(UserContext)

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [age,setAge] = useState("")
  let [gender,setGender] = useState("")
  let [subscription,setSub] = useState(false)

  let navigate = useNavigate()
  let {id} = useParams()

  const handleSubmit=()=>{
    let index = findIndexById(user,Number(id))
    let data = {id:Number(id),name,email,age,gender,subscription}
    user.splice(index,1,data)
    setUser([...user])
    navigate('/')



  }

 

  const GetData = ()=>{
    let index = findIndexById(user,Number(id))
    if(index!==-1)
    {
      setName(user[index].name)
      setEmail(user[index].email)
      setAge(user[index].age)
      setGender(user[index].gender)
      setSub(user[index].subscription)
 
    }
    else{
      alert("Invalid Id")
    }
  }

  useEffect(()=>{
    if(id)
      GetData()
  },[])

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">EDITING USER</h1>
          </div>
          <div className="row">
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e)=>{setAge(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
                <Form.Select defaultvalue={gender} onChange={(e)=>{setGender(e.target.value)}}>
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

export default EditUser