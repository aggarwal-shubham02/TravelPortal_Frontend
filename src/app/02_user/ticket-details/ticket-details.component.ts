import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/user.interface';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from '../services/user.service';
import { ticketDetails } from 'src/app/models/ticketDetails.interface';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit{

  User : user;
  id : string ;
  Ticket : tickets;
  ticketDetails : ticketDetails[];
  editTicket: any;
  constructor(
    private router: Router,
    private userservice: UserService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // this.User = JSON.parse(localStorage.getItem('user')) as user;
    this.route.params.subscribe(params => {
      this.id = JSON.parse(params['id']);
    });
    // this.id = JSON.stringify(this.User.tickets[0].id);
    console.log(this.id)
    this.userservice.getTicketById(this.id)
    .subscribe((ticket : tickets) => {
       // localStorage.setItem("ticket",JSON.stringify(ticket));
       this.Ticket=ticket;
       this.ticketDetails=ticket.ticketDetails;
    console.log(this.Ticket);
  })
  }
  backToHome() {
    //this.router.navigateByUrl('/mytickets');
    
    this.router.navigateByUrl("/mytickets");
  }
  
  signOut() {
    this.router.navigateByUrl('/signin');
  }
}

