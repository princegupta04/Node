// console.log("hello world");
// class User{
//     constructor(name ,password){
//         this.name= name ;
//         this.password =password;
//     }
//     get password(){
//        return this._password.toUpperCase();
//     }
//     set password(value){
//        this._password = value; 
//     }
// }
// const prince =  new User("prince", "hhf.com");
// console.log(prince.name)
// console.log(prince.password)

// ==============closure ================
function myFunction(){
    let name = "prince";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}

const res = myFunction();