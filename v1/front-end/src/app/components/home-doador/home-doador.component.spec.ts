import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDoadorComponent } from './home-doador.component';

describe('HomeDoadorComponent', () => {
  let component: HomeDoadorComponent;
  let fixture: ComponentFixture<HomeDoadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDoadorComponent]
    });
    fixture = TestBed.createComponent(HomeDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
