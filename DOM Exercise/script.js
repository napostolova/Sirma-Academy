function getFormvalue() {
    event.preventDefault();
    
    let firstName = document.querySelector('input[name="fname"]');
    let lastName = document.querySelector('input[name="lname"]');

    console.log(firstName.value);
    console.log(lastName.value);
} 