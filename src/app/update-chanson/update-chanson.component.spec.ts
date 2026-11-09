import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChansonComponent } from './update-chanson.component';

describe('UpdateChansonComponent', () => {
  let component: UpdateChansonComponent;
  let fixture: ComponentFixture<UpdateChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateChansonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
