let user = prompt(">>> ")

switch(user){
    case "admin":
        console.log("Welcome, admin")
        break
    case "teacher":
        console.log("Welcome, teacher")
        break
    case "student":
        console.log("Welcome, student")
        break
    default:
        console.log("User type not found!")
}