import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/user.interface';
import { tickets } from 'src/app/models/tickets.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-ticket-list',
  templateUrl: './user-ticket-list.component.html',
  styleUrls: ['./user-ticket-list.component.css']
})
export class UserTicketListComponent implements OnInit{

  User : user;
  Tickets : tickets[];
  p: number = 1;

  
  
  constructor( 
    private router: Router,
    private route : ActivatedRoute,
    private userservice : UserService
  ) { }
  
  ngOnInit() {
    
    this.User = JSON.parse(localStorage.getItem('user')) as user;
    this.Tickets = this.User.tickets;

  }

   getDetails(id) {
     console.log(id)
      this.router.navigate(['/details',JSON.stringify(id)]);
   }

}