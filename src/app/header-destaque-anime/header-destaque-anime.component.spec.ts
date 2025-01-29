import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDestaqueAnimeComponent } from './header-destaque-anime.component';

describe('HeaderDestaqueAnimeComponent', () => {
  let component: HeaderDestaqueAnimeComponent;
  let fixture: ComponentFixture<HeaderDestaqueAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDestaqueAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDestaqueAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
