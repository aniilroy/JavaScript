// Objects Methods
const myObject = {
    firstName: 'Anil',
    lastName: 'Roy',
    birthYear: 2000,
    job: 'programmer',
    friends: ['Mukul', 'Sopan', 'Nidhi'],
    hasDrivingLicense: true,

    calAge: function(){
        //console.log(this); //'this' refers to the object
        this.age = 2029 -this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calAge()} years old ${this.job}, and he has ${this.hasDrivingLicense? 'a' : 'no'} driving license.`;
    }
};
console.log(myObject.calAge()); //object method access by Dot operator
console.log(myObject.getSummary());


