import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAnimeComponent } from './area-anime.component';

describe('AreaAnimeComponent', () => {
  let component: AreaAnimeComponent;
  let fixture: ComponentFixture<AreaAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
