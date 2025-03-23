import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';
import { TafseerService } from '../../../shared/services/Tafseer/tafseer.service';
import { TafseerAyah, TafseerName } from '../../../shared/interfaces/tafseer-inter';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-tafseer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sub-tafseer.component.html',
  styleUrls: ['./sub-tafseer.component.scss']
})
export class SubTafseerComponent implements AfterViewInit {
  surahTafseer!: TafseerAyah;
  surahNumber!: number;
  ayahNumber: number = 1;
  tafseerNames!: TafseerName;
  selectedTafseerId!: number;

  constructor(private _TafseerService: TafseerService, private _ActivatedRoute: ActivatedRoute) {}

  getTafseerNames() {
    this._TafseerService.getTafseerName().subscribe(tafseer => {
      this.tafseerNames = tafseer;
    });
  }

  getSurahTafseer(tafseer_id: number, sura_number: number, AyahNumber: number) {
    this._TafseerService.getTafseerbyAyahNumber(tafseer_id, sura_number, AyahNumber).subscribe({
      next: (data) => {
        this.surahTafseer = data;
      },
      error: (error) => console.error(error)
    });
  }

  searchTafseer() {
    if (!this.selectedTafseerId || !this.surahNumber || !this.ayahNumber) {
      alert("⚠️ من فضلك اختر التفسير والسورة ورقم الآية!");
      return;
    }
    this.getSurahTafseer(this.selectedTafseerId, this.surahNumber, this.ayahNumber);
  }

  @ViewChild('tafseerText') tafseerText!: ElementRef;

  copyTafseer() {
    if (this.tafseerText) {
      const tafseerText = this.tafseerText.nativeElement.innerText;

      navigator.clipboard.writeText(tafseerText).then(() => {
      }).catch(err => {
        console.error("❌ فشل في النسخ:", err);
      });
    } else {
      alert("⚠️ لم يتم العثور على نص التفسير!");
    }
  }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {
      this.surahNumber = params['id'];
      this.ayahNumber = 1; // إعادة تعيين الآية عند تغيير السورة
    });

    this.getTafseerNames();
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 800 });
    }
  }
}
