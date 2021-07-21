import { AuthService } from '../services/auth.service';
import { Call } from '../models/call';
import { FetchDataService } from '../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CustomerComponent implements OnInit {
  customers: Array<Customer> = []
  calls: Array<Call> = []
  activeId = 0;
  content: any
  constructor(private dataService: FetchDataService, private authService: AuthService,
    config: NgbModalConfig, private modalService: NgbModal) {

    config.backdrop = 'static';
    config.keyboard = false;
    config.size = 'lg'
  }
  opentable = false;

  ngOnInit(): void {

    // this.dataService.getAgentData().subscribe(data => {
    //   this.agents = data
    //   // console.log(data)
    // })
    this.dataService.getCustomerData().subscribe(data => {

      this.customers = data.filter(x => x.agentId == this.authService.currentUserValue.agentId ||
        this.authService.currentUserValue.admin)
      // console.log(data)
    })


    // this.agents=this.dataService.getData();
  }
  showCalls(customerId: number) {

    this.dataService.getCallData().subscribe(data => {
      this.calls = data.filter(x => (x.agentId == this.authService.currentUserValue.agentId ||
        this.authService.currentUserValue.admin) && x.customerId == customerId)

      console.log(this.calls)

    })

  }
  open(content: any) {
    this.modalService.open(content)
  }
}