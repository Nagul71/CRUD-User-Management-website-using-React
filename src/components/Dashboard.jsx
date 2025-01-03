import React, { useEffect,useContext } from 'react'
import Topbar from './Topbar'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {findIndexById} from '../common/helper'
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
import { Dashboardcontext } from '../context/Dashboardcontextcomponent';


function Dashboard() {
  let {user,setUser} = useContext(UserContext) 
  let data = useContext(Dashboardcontext)
  console.log(data)
  let navigate = useNavigate()
    

    const deleteUser = (id)=>{

      let index = findIndexById(user,id)
      if(index!==-1)
      {
        user.splice(index,1)
        setUser([...user])

      }
      else{
        alert("Invalid Range")
      }

    }

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
    <Topbar></Topbar>
      <div id="content">
        
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">

            {
                data.map((e,i)=>{
                    return <Card data={e} key={i}/>
                })
            }

            </div>
        <div className="row">
          <h1 className="h3 mb-0 text-gray-800">User Management</h1>
          <br></br><br></br>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Subscription</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((e)=>{
                    return <>
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.age}</td>
                      <td>{e.gender}</td>
                      <td>{e.subscription?<>Active</>:<>In Active</>}</td>
                      <td>
                        <Button variant="primary" onClick={()=>navigate(`/Edit/${e.id}`)}>Edit</Button>
                        &nbsp;
                        <Button variant="danger"onClick={()=>deleteUser(e.id)}>Delete</Button>
                      </td>
                    </tr>
                    </>
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Dashboard