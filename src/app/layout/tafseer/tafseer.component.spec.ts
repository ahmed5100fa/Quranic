import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafseerComponent } from './tafseer.component';

describe('TafseerComponent', () => {
  let component: TafseerComponent;
  let fixture: ComponentFixture<TafseerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TafseerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TafseerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
