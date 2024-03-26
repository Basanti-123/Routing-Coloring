import { useState } from 'react';
import { Form } from 'react-bootstrap';

export const Checkbox = () => {
 const [checks, setChecks] = useState({
    selectAll: false,
    cow: false,
    dog: false,
    elephent: false,
    fish: false
 });
  
    return (
    <div className='container'>
        <div className='row'>
       <div  className="mb-3">
        <Form>
          <Form.Check inline label="Select All" type="checkbox" checked={checks.selectAll} 
          onChange={()=> {
            setChecks((prev)=>
            {return{...prev, selectAll:!checks.selectAll,
                cow: !checks.selectAll,
                dog: !checks.selectAll,
                elephent: !checks.selectAll,
                fish: !checks.selectAll,

            }})
          }} />
          <Form.Check inline label="Cow" type="checkbox" checked={checks.cow} 
          onChange={()=> {
            setChecks((prev)=>
            {return{...prev, 
                cow: !checks.cow,
            }})
          }}
          />
          <Form.Check inline label="Dog" type="checkbox" checked={checks.dog}
          onChange={()=> {
            setChecks((prev)=>
            {return{...prev, 
                dog: !checks.dog,
            }})
          }}
          />
          <Form.Check inline label="Elephent" type="checkbox"  checked={checks.elephent}
          onChange={()=> {
            setChecks((prev)=>
            {return{...prev, 
                elephent: !checks.elephent,
            }})
          }}
          />
          <Form.Check inline label="fish" type="checkbox" checked={checks.fish} 
          onChange={()=> {
            setChecks((prev)=>
            {return{...prev, 
                fish: !checks.fish,
            }})
          }}
          /> 
          </Form>
        </div>
     
        </div>

    </div>
  )
}

