import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProviderComponent } from './display-provider.component';

describe('DisplayProviderComponent', () => {
  let component: DisplayProviderComponent;
  let fixture: ComponentFixture<DisplayProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
