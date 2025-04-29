export class Employee {
    private _id: number;
    private _name: string;
    private _email: string;
    private _department: string;
    private _createAt: string;
    private _updateAt: string;
  
    constructor(
      id: number,
      name: string,
      email: string,
      department: string,
      createAt?: string,
      updateAt?: string
    ) {
      this._id = id;
      this._name = name;
      this._email = email;
      this._department = department;
      this._createAt = createAt || new Date().toISOString().split('T')[0];
      this._updateAt = updateAt || new Date().toISOString().split('T')[0];
    }
  
  
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get email(): string {
      return this._email;
    }
  
    set email(value: string) {
      this._email = value;
    }
  
    get department(): string {
      return this._department;
    }
  
    set department(value: string) {
      this._department = value;
    }
  
    get createAt(): string {
      return this._createAt;
    }
  
    set createAt(value: string) {
      this._createAt = value;
    }
  
    get updateAt(): string {
      return this._updateAt;
    }
  
    set updateAt(value: string) {
      this._updateAt = value;
    }
  }
  