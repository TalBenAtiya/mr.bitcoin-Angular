import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketHistoryData: { x: string[], y: number[] } = {
    x: [],
    y: [],
  }

  ngOnInit(): void {
    this.bitcoinService.getMarketPriceHistory().subscribe(values => {
      values.forEach(value => {
        this.marketHistoryData.y.push(value.y)
        this.marketHistoryData.x.push(new Date(value.x * 1000).toLocaleDateString())
      })
    })

    console.log('marketHistoryData:', this.marketHistoryData)
  }
}
