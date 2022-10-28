import { Component, OnInit} from '@angular/core';
import { User } from 'src/models/user.model';
import {lastValueFrom, Observable} from 'rxjs'
import { BitcoinService } from 'src/app/services/bitcoin.service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rate!: number
  user!: User
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser()
    this.rate = await lastValueFrom(this.bitcoinService.getCoinRate())
  }

}
