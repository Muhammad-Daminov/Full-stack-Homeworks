function isKabisa(date) {
    const data = new Date();
    
    if (data.getUTCFullYear % 4 == 0 && data.getUTCFullYear % 400){
        console.log(data.getUTCFullYear() + " - Kabisa yili");
    }else console.log(data.getUTCFullYear() + " - Kabisa yili emas")
}

isKabisa();