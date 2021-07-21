import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { agents } from "../dummyData/agent_data.json";
import { customers } from "../dummyData/customer_data.json";
import { calls } from "../dummyData/call_data.json";
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor() { }


  getAgentData(): Observable<Array<User>> {
    return of(agents);
    // return agents;
  }
  getCustomerData(): Observable<Array<Customer>> {
    return of(customers)
  }
  getCallData(): Observable<Array<Call>> {
    return of(calls)
  }

}


