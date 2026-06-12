let year = +prompt("Yilni kiriting: ");
if ((year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0)){
    console.log(year + " Kabisa yili!");
}else console.log(year + " Kabisa ili emas!")