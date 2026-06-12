const phoneNumber = (phone) => {
    let countryCode = phone.slice(0, 4);
    let code = phone.slice(4, 6);
    let phone1 = phone.slice(6, 9);
    let phone2 = phone.slice(9, 11);
    let phone3 = phone.slice(11, 13);
    
    return `${countryCode} (${code}) ${phone1}-${phone2}-${phone3}`
}

let phone = '+998977525022'
console.log(phoneNumber(phone))