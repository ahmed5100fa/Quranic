import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./layout/additions/nav/nav.component";
import { HomeComponent } from "./laout/pages/home/home.component";
import { FooterComponent } from "./layout/additions/footer/footer.component";
import { SubTafseerComponent } from "./layout/additions/sub-tafseer/sub-tafseer.component";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent, SubTafseerComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService){}
  title = 'quran';
}
