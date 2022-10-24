import { Component, OnInit} from '@angular/core';
import { User } from 'src/models/user.model';
import {Observable} from 'rxjs'
import { BitcoinService } from 'src/services/bitcoin.service.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rate!: number
  user!: User
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.bitcoinService.getCoinRate().subscribe(val => this.rate = val)
  }

}
