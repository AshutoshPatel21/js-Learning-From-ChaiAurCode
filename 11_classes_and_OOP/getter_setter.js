class User{
    constructor(email, password){
        this.email=email
        this.password= password
    }

    get _email(){
        return this.email
    }
    set _email(value){
        this.email=value
    }

    get _password(){
       return this.password
    }

    set _password(value){
        this.password=value
    }
}

const chai= new User('ashu@fff',"123")
console.log(chai.email);

