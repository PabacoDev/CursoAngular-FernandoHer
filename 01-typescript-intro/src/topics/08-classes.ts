

export class Person{

     constructor(public firstName: string, public lastname: string, private address: string = 'No Address') {
     }
}

// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, public realName: string){
//         super(realName, 'New York');
//     }
// }


export class Hero {

    constructor(public alterEgo: string, public age: number, public realName: string, public Person: Person){
    }
}

const person  = new Person('Tony', 'Stark' , 'New York')
const ironman = new Hero('Ironman', 45, 'Tony', person);

console.log(ironman)