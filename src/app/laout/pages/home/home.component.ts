import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import AOS from 'aos';
import { PrayingTimeService } from '../../../shared/services/PrayingTime/praying-time.service';
import { formatDate } from '@angular/common';
import { Timings } from '../../../shared/interfaces/praytimeinter';

@Component({
  selector: 'app-home',
  imports:[RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute , private _PrayingTimeService:PrayingTimeService) {}

  prayingTime!:Timings;

  getPrayingTime() {
    const today = new Date();
    const formattedDate = formatDate(today, 'dd-MM-yyyy', 'en');

    this._PrayingTimeService.getPrayingTime(formattedDate).subscribe({
      next: (res) => {
        this.prayingTime = res.data.timings;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getPrayingTime();
  }













  ngAfterViewInit(): void {
    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 800 });
    }

    // Scroll to fragment if available
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => { // Delay to ensure AOS is initialized first
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    });
  }
}
