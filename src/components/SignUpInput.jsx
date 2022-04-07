import { useState } from 'react';
import '../App.css';

const SignUpInput = ({type,label,value,setValue,validationFunc}) => {
    const [touched,setTouched] = useState(false);

    let validateMsg = "";
    let nameCss = ""
    if (touched) {
        let validationResult = validationFunc(value);
        validateMsg = validationResult.message;
        nameCss = validationResult.css;
    }

    return (
        <div className={nameCss}>
          <label>{label}:</label>
          <input type={type}
            value={value}
            onChange={e => setValue(e.target.value)}
            onBlur={()=>setTouched(true)} 
          />
          <p className="validation-msg">{validateMsg}</p>
        </div>

    )
}

export default SignUpInput;
