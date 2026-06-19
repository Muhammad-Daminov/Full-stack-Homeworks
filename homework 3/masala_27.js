const phone = {
 battery: 23, 
 
 needsCharging(){
    return this.battery < 20 ? true : false
 }
}
console.log(phone.needsCharging());
