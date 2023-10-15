class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  tenants: any[] = [];

  constructor(public door: boolean, protected key: Key) {}

  comeIn(person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(true, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
