
// GENERIC PERSONA
class Person {
  constructor(name = 'Anonymous', age = 0 ){
    this.name = name,
    this.age = age
  }
  getGreeting(){
    return`Hi ${this.name} !`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }

}

const me = new Person('Parasar', 30);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


// STUDENT PERSONA
class Student extends Person {
  constructor(name, age, major) {
      super(name, age);
      this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let description  = super.getDescription();
    if (this.hasMajor()) {
      description += ` and has a major in ${this.major}`;
    }
    return description;
  }

}


const st = new Student('Ka', 2, 'science');
console.log(st.getGreeting());
console.log(st.getDescription());

// TRAVELELR PERSONA
// Overwrite homelocations in getDescription
class Traveller extends Student {
  constructor (name, age, major, location ){
    super(name,age,major);
    this.location = location;
  }

  hasLocation(){
      return !!this.location;
  }

  getDescription(){
    let description = super.getDescription();
    if (this.hasLocation()) {
      description += `and is from ${}`;
    }
  }

}

export default Person;
