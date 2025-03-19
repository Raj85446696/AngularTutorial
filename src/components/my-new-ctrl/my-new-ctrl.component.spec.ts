import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewCtrlComponent } from './my-new-ctrl.component';

describe('MyNewCtrlComponent', () => {
  let component: MyNewCtrlComponent;
  let fixture: ComponentFixture<MyNewCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNewCtrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNewCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
