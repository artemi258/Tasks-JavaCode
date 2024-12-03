// Как затипизировать класс Store?

interface IUser {
  id: string;
  name: string;
}

interface IStore {
  data: IUser[];
  addObject(object: IUser): void;
  removableObject(id: string): void;
  getObject(id: string): IUser | undefined;
}

class Store implements IStore {
  data: IUser[];

  constructor() {
    this.data = [];
  }
  addObject(object: IUser): void {
    this.data.push(object);
  }
  removableObject(id: string): void {}

  getObject(id: string): IUser | undefined {
    return this.data.find((item) => item.id === id);
  }
}

const userStore = new Store();

const a: IUser = { id: "1", name: "Vasya" };

userStore.addObject(a);

const x = userStore.getObject("1"); // x: any

console.log(x);
