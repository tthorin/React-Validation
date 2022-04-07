const validateName = (name) => {
    let output = {css: "valid", message: ""};
    if (name.trim().length === 0) {
        output.message = "Name is required";
        output.css = "invalid";
    }
    
    return output;
}
const validateAddress = (address) => {
    let output = {css: "valid", message: ""};
    if (address.trim().length === 0) {
        output.message = "Address is required";
        output.css = "invalid";
    }
    
    return output;
}
const validateAge = (age) => {
    let output = {css: "valid", message: ""};
    if (age < 18 ) {
        output.message = "Age must be 18 or older";
        output.css = "invalid";
    }
    else if (age > 100) {
        output.message = "Age must be less than 100";
        output.css = "invalid";
    }
    return output;
}

export {validateName, validateAge, validateAddress};