const createLogin = (fullName) => {

    let lowerName = fullName.toLowerCase();
    let parts = lowerName.split(' ');
    
    let firstName = parts[0];
    let lastName = parts[1];

    let login = firstName[0] + '.' + lastName;

    return login;
};

console.log(createLogin('ALI Valiyev')); 