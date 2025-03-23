import { Component } from '@angular/core';
import { TafseerService } from '../../shared/services/Tafseer/tafseer.service';
import { SurahName } from '../../shared/interfaces/tafseer-inter';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-tafseer',
  imports: [RouterLink],
  templateUrl: './tafseer.component.html',
  styleUrl: './tafseer.component.scss'
})
export class TafseerComponent {
  constructor(private route: ActivatedRoute , private _TafseerService: TafseerService){}

  surahNames!: SurahName;
  getSurahNames(){
    return this._TafseerService.getSurahName().subscribe({
      next: (data) => {
        this.surahNames = data;
      },
      error: (error) => console.error(error)
    })
  }

  ngOnInit(): void {
    this.getSurahNames();
  }

    ngAfterViewInit(): void {
      if (typeof window !== 'undefined') {
        AOS.init({ duration: 800 });
      }
    }
}
