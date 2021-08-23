import React,{useState} from 'react'

export const Feedback = () => {
    
    const [state, setState] = useState({
        fname: "",
        lname: ""
    });

    console.log(state)
  
    const submit = event => {
        const value = event.target.value;
      setState({ ...state,[event.target.name]: value });
      
    };
  
    console.log(state);
    return (
      <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <input
          name="fname"
          
          type="text"
          placeholder="Enter your First Name"
          onChange={submit}
        />
        <input
          name="lname"
          
          type="text"
          placeholder="Enter your First Name"
          onChange={submit}
        />
        
      </div>
    );
  };