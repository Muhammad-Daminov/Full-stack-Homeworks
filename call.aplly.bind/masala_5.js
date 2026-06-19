const account = {
    balance: 123
}
Object.defineProperty(account, 'balance',{
    enumerable: false
});
console.log(account);