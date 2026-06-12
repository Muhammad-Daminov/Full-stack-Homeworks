const getLoginFromEmail = (email) => {
    const parts = email.split('@');
    return parts[0];
};

console.log(getLoginFromEmail('ali@gmail.com'));