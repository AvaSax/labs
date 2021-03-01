import { FormGroup } from '@angular/forms';

export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  middlename: string;
  phone: string;
  email: string;
  birth: string;
  age?: number;
  type: number;
  form?: FormGroup;
}

export enum MyWorkerType {
  IT_Department,
  Sales_Department,
  Delivery_Department,
  Law_Department,
}