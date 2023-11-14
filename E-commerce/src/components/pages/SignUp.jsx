import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css'

const SignUp = () => {
  const [EmailID, setEmailID] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const ValidateForm = (e) =>{
    e.preventDefault();
    if(EmailID.length === 0)
        {
          alert("Invalid Email")
          return
        }
        if(Password.length < 8)
        {
          alert("Password must 8 chars")
          return
        }
        if(Password.Text == confirmPassword.text){
          alert("Password doesnt match")
          return
        }
        
        let countUpperCase = 0
        let countLowerCase = 0
        let countDigit = 0
        let countSpecialChars = 0

        for(let i=0;i<Password.length;i++){
          const specialChars = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '(',
            ')',
            '_',
            '-',
            '+',
            '=',
            '[',
            ']',
            '{',
            '}',
            ':',
            ';',
            '<',
            '>',
          ]
          if(specialChars.includes(Password[i])){
            countSpecialChars++
          }
          else if(!isNaN(Password[i]*1)){
            countDigit++
          }
          else{
            if(Password[i] == Password[i].toUpperCase()){
              countUpperCase++
            }
        }
           
            if(Password[i] == Password[i].toLowerCase()){
            countLowerCase++
            }
        }
    
    if(countLowerCase == 0){
      alert('Invalid Form, 0 lower case letters in password')
      return
    }
    if(countUpperCase == 0){
      alert('Invalid Form, 0 upper case in password')
      return
    }
    if(countDigit == 0){
      alert('Invalid Form, 0 digits in password')
      return
    }
    if(countSpecialChars == 0){
      alert('Invalid Form, No special characters in password')
      return
    }
    
    alert('Form is Valid!!');
    
  }
  return (
    <>
    <Form><br/><br/>
    <h1 className="text-dark d-flex justify-content-center">Sign Up</h1>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="text-dark">Email ID</Form.Label>
    <Form.Control type="email" placeholder="abc@example.com" onChange={(e)=>setEmailID(e.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label htmlFor="inputPassword5" className="text-dark">Password</Form.Label>
    <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
    />
    </Form.Group>
    <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers,
    and must not contain spaces, or emoji.
    </Form.Text><br/><br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label htmlFor="inputPassword5" className="text-dark">Confirm Password</Form.Label>
    <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
    placeholder="Re-Enter Password"
    onChange={(e)=>setconfirmPassword("e.target.value")}
    />
    <br/><br/>

    <Button className="btn-login" variant="primary" onClick={()=>{ValidateForm()}}>Login</Button>{' '}
    
    </Form.Group>
    </Form>
    </>
      
  )
}

export default SignUp