import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuranservService } from '../../shared/services/Quran/quranserv.service';
import { BehaviorSubject } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quran',
  imports: [NgFor , NgIf],
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {
  surahs: any[] = [];
  @ViewChild('tafseerText') tafseerText!: ElementRef;
  counter = new BehaviorSubject(0);

  constructor(private _QuranservService: QuranservService) {}


  copyTafseer(tafseerText: string) {
    if (tafseerText) {
      navigator.clipboard.writeText(tafseerText).then(() => {
      }).catch(err => {
        console.error("❌ فشل في النسخ:", err);
      });
    } else {
      alert("⚠️ لا يوجد نص لنسخه!");
    }
  }




  shareTafseer(tafseerText: string) {
    if (tafseerText) {
      const shareData = {
        title: 'الآية',
        text: tafseerText,
        url: window.location.href // يمكن تعديل هذا إذا كنت ترغب في مشاركة رابط مختلف
      };

      navigator.share(shareData).then(() => {
      }).catch(err => {
        console.error("❌ فشل في المشاركة:", err);
      });
    } else {
      alert("⚠️ لم يتم العثور على نص التفسير!");
    }
  }


  getSurah() {
    this._QuranservService.getAllQuran().subscribe((response) => {
      this.surahs = response.data.surahs;
    });
  }

  next() {
    this.counter.next(this.counter.value + 1);
  }

  prev() {
    this.counter.next(this.counter.value - 1);
  }

  ngOnInit() {
    this.getSurah();
  }
}
