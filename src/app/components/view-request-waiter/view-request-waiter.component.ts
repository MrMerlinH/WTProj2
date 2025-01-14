import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-view-request-waiter',
  templateUrl: './view-request-waiter.component.html',
  styleUrls: ['./view-request-waiter.component.css']
})
export class ViewRequestWaiterComponent implements OnInit {

  allRequests: any = []
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getRequests().subscribe(res =>
      {
        this.allRequests = res;
        this.allRequests = this.allRequests.filter((o: any) => {return o.status === 1})
        console.log(this.allRequests)
  
      })
  }

  requestProcessed(reqId: number){
      console.log(reqId)
  }

}
