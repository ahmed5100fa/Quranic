import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTafseerComponent } from './sub-tafseer.component';

describe('SubTafseerComponent', () => {
  let component: SubTafseerComponent;
  let fixture: ComponentFixture<SubTafseerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTafseerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTafseerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
