import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import './contact.css'

const Contact = () => {
  const [fullname,setFullName]=useState("")
  const [email,setEmailID]=useState("");
  const [typemsg,setTypemsg]=useState("");
  const checkForm=()=>{
    if(fullname.length == 0)
    {
      alert("Enter Correct Full Name")
      return
    }
    if(email.length == 0)
    {
      alert("Invalid EmailID")
      return
    }
    if(typemsg.length == 0)
    {
      alert("Type Message")
      return
    }
    alert("Your Message Sent!!, Thank You For Contacting Us")
  }
  return (
    <>   
    <h1 className="text-dark d-flex justify-content-center">Contact Us</h1>
    <div class="container">
    <div class="row justify-content-center border border-10">
    <div className="container-sm-fluid d-flex flex-column m-5 col-4">
    <Form>
      <FontAwesomeIcon className="text-dark" icon={faLocationDot}/>
      <Form.Label className="text-dark">Address</Form.Label><br/>
      <Form.Text muted>
        4671 sugar Camp road,<br/>
        Owatonna, Minnesota,<br/>
        55060
      </Form.Text><br/><br/>
      <FontAwesomeIcon className="text-dark" icon={faPhone}/>
      <Form.Label className="text-dark">Phone</Form.Label><br/>
      <Form.Text  muted>
        507-475-60945-6094
        </Form.Text><br/><br/>
        <FontAwesomeIcon className="text-dark" icon={faEnvelope}/>
      <Form.Label className="text-dark">Email</Form.Label><br/>
      <Form.Text muted>
            wrub7d78i0e@temperary-mail.net
      </Form.Text><br/><br/>
    </Form>
    </div>
    </div>
    <div className="container-sm-fluid">
    <h1 className="text-dark d-flex justify-content-center">Send Message</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="text-dark">Full Name</Form.Label>
      <Form.Control className="input" type="text" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className=" text-dark">Email ID</Form.Label>
      <Form.Control className="input" type="email" placeholder="Email ID" onChange={(e)=>setEmailID(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className= "text-dark">Type Message</Form.Label>
      <Form.Control className="input" type="text" placeholder="Type Your Message..." onChange={(e)=>setTypemsg(e.target.value)}  />
      </Form.Group>
      <Button className="" variant="primary" onClick={()=>{checkForm()}}>Send</Button>
    </div>
    </div>
    

    
    </>
  )
}

export default Contact