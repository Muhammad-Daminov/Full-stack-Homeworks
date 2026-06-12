const check_Password = (pass) => {
    let newpass = "";
    let uppper_count = 0;
    let digit_count = 0;
    let max_count = pass.length;
    if (max_count >= 8){
        for (let i in pass) {
            
         
            if (pass[i] >= 'A'&& pass[i] <= 'Z') {
                uppper_count++;
            }
            if (pass[i] >= '0' && pass[i] <= '9'){
                digit_count++;
            }
        }
     
    }else console.log("Password kamida 8 ta belgidan iborat bolshi shart");

    if (digit_count > 0 && uppper_count > 0 ){
        console.log("MUvaffaqiyatli saqlandi!");
    }else console.log("Kamida 1 raqam va 1 ta katta harf bolshi shart!")
    
} 

const password = prompt("Enter your password: ");
check_Password(password);