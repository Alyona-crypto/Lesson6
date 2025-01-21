class Abonent {
    constructor(name, phone) {
      this._name = name;
      this._phone = phone;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    set phone(newPhone) {
      this._phone = newPhone;
    }
  
    get details() {
      return `Name: ${this._name}, Phone: ${this._phone}`;
    }
  }
  
  const user1 = new Abonent("Anna", "123-456-789");
  const user2 = new Abonent("Max", "987-654-321");
  const user3 = new Abonent("Polina", "555-555-555");
  
  user1.name = "Alyona";
  user2.phone = "111-111-111";
  
  console.log(user1.details); // Name: Anastasia, Phone: 123-456-789
  console.log(user2.details); // Name: Max, Phone: 111-111-111
  console.log(user3.details); // Name: Polina, Phone: 555-555-555
  