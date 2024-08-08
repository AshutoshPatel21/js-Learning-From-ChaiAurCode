function User(name,pass){
    this.name=name;
    this.pass=pass
    Object.defineProperty(this, '_name',{
        get: function(){
            return this.name.toUpperCase;
        },
        set: function(value){
            this.name=value;
        }
    })

    Object.defineProperty(this,'_pass',{
        get:function(){
            return this.pass;
        },

        set:function(value){
            this.pass=value
        }
    })
}

const chai= new User('ashu','123')
console.log(chai.name)
console.log(chai.pass)