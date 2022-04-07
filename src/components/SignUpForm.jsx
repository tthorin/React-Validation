import {useState} from "react"
import { validateName, validateAge,validateAddress } from "./validate";
import SignUpInput from "./SignUpInput";
import Attending from "./Attending";

const SignUpForm = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [daysAttending,setDaysAttending] = useState([{day:"Friday",attending:false},{day:"Saturday",attending:false},{day:"Sunday",attending:false}]);
      
    return (
      <section className='form'>
        <SignUpInput label="Name" value={name} type="text" setValue={setName} validationFunc={validateName} />
        <SignUpInput label="Age" value={age} type="number" setValue={setAge} validationFunc={validateAge} />
        <SignUpInput label="Address" value={address} type="text" setValue={setAddress} validationFunc={validateAddress} />
        <Attending attending={daysAttending} setAttending={setDaysAttending} />
      </section>
    )
}

export default SignUpForm;