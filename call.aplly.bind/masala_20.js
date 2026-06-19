function createPerson() {
  return {
    firstName: "",
    lastName: "",
    get fullName() { return this.firstName + " " + this.lastName; },
    set fullName(val) {
      [this.firstName, this.lastName] = val.split(" ");
    }
  };
}

const p = createPerson();
p.fullName = "Ali Valiyev";
console.log("firstName:", p.firstName); 
console.log("lastName:",  p.lastName);