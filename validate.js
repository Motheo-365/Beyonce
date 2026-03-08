//Motheo Morena u24666981

/*   Create a single JavaScript file to validate the user’s input on the form. The form should not submit until the content of the all input elements is correct

    //Personal Details
    Name and surname are longer than 1 character each.
    Username is at least 3 characters long.
    Date of birth shows that the person is at least 16 years old (use only the
    year to calculate this).

    Email address is valid, containing an “@” and a “.”
    Phone number is exactly 10 digits long.

    //Password
    Password contains: at least one number, at least one letter and is at least
    8 characters long.
    Confirm password matches password.

*/




//Declaration of Varaibles
    let name = document.getElementById('name'/*+'surname'*/);
    let surname = document.getElementById('surname');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let phoneNum = document.getElementById('cellno');
    let signUpForm = document.getElementById('sign-up');
    let dob = document.getElementById('date');
    let submit = document.getElementById('submit');
    let clear = document.getElementById('reset');
    let showPassword= document.getElementById('showp')

    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('c-password');

//Event Listeners
    name.addEventListener('focusout',validateName);
    surname.addEventListener('focusout', validateSurname);
    username.addEventListener('focusout', validateUsername);
    dob.addEventListener('focusout', validateAge);
    email.addEventListener('focusout', validateContacts);
    phoneNum.addEventListener('focusout', validateContacts);
    password.addEventListener('focusout', validatePassword);
    confirmPassword.addEventListener('focusout', validatePassword);

    submit.addEventListener('submit', function(event) {
        if (!validateAge()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

//Functions to validate the inputs in the Personal Details Section
    function validateName(){
        const nameValue = name.value;

            if (!nameValue ||  nameValue.length<2){
                nameMessage.textContent = "Please enter a name with more than 1 digit.";
                return false;
            }

            else{
                nameMessage.textContent = " ";
                console.log('Name is valid.');
                return true;
            }
    }

    function validateSurname(){
        const surnameValue = surname.value;

            if (!surnameValue || surnameValue.length<2){
                surnameMessage.textContent = "Please enter a name with more than 1 digit.";
                return false;
            }

            else{
                surnameMessage.textContent = " ";
                console.log('Surname is valid.');
                return true;
            }

    }

    function validateUsername(){
        const usernameValue = username.value;

            if(usernameValue.length < 3){
                usernameMessage.textContent = "Username should be at least 3 characters long.";
                return false;
            }

            else{
                usernameMessage.textContent = " ";
                console.log('Username is valid.');
                return true;
            }

        }

        function validateAge() {
            let currentDate = new Date();
            let dobValue = dob.value;
            if (!dobValue) {
                yearMessage.textContent = "Please enter your date of birth.";
                return false;
            }
        
            let birthDate = new Date(dobValue);
            if (birthDate > currentDate) {
                yearMessage.textContent = "Date of birth cannot be in the future.";
                return false;
            }
        
            let age = currentDate.getFullYear() - birthDate.getFullYear();
            let monthDifference = currentDate.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
                age--;
            }
        
            if (age < 16) {
                yearMessage.textContent = "Age is under 16.";
                return false;
            } else {
                yearMessage.textContent = "";
                console.log('Age is valid.');
                return true;
            }
        }
    
//Function to validate Contact Details
    function isValidEmail(email) {
        const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailChar.test(email);
    }

    // Function to validate phone number
        function isValidPhoneNumber(phoneNumber) {
            const phoneNumDigits = /^\d{10}$/;
            return phoneNumDigits.test(phoneNumber);
        }

        function validateContacts(){
            const emailValue = email.value;
            const phoneNumValue = phoneNum.value;
            let contactsMessage = document.getElementById('contactsMessage');
        
            let validEmail = isValidEmail(emailValue);
            let validPhone = isValidPhoneNumber(phoneNumValue);
        
            if (!validEmail) {
                contactsMessage.textContent = "Invalid email address. Check for '@' and '.'.";
                return false;
            }
        
            if (!validPhone) {
                contactsMessage.textContent = "Phone number should be exactly 10 digits long.";
                return false;
            }
        
            contactsMessage.textContent = "";
            console.log('Contact details are valid.');
            return true;
        }

//Functions to validate and confirm the Passwords
    function validatePassword() {
        let passwordValue = password.value;
        const passwordChar = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
        if (!passwordChar.test(passwordValue)) {
            confirmPasswordMessage.textContent = "Password must be at least 8 characters long, contain at least one letter and one number.";
            return false;
        } 
        
        else {
            let confirmPasswordValue = confirmPassword.value;
        
            if (confirmPasswordValue != passwordValue) {
                confirmPasswordMessage.innerHTML = "Passwords do not match.";
                return false;
            } 
            
            else {
                confirmPasswordMessage.textContent = "";
                console.log('Passwords match.');
                return true;
            }
        }
    }

    //submit only when all field are correct
        function validateSubmit(){
            const isNameValid = validateName();
            const isSurnameValid = validateSurname();
            const isUsernameValid = validateUsername();
            const isAgeValid = validateAge();
            const areContactsValid = validateContacts();
            const isPasswordValid = validatePassword();

            if (nameMessage.textContent || surnameMessage.textContent || usernameMessage.textContent ||  yearMesage.textContent || contactsMessage.textContent || confirmPasswordMessage.textContent){
                submitMessage.textContent= " Ensure that all fields are filled in correctly.";
                return false;
            }

            return isNameValid && isSurnameValid && isUsernameValid && isAgeValid && areContactsValid && isPasswordValid && isConfirmPasswordValid;
        }

     submit.addEventListener('click', validateSubmit);   

