import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("shows if the variable isDisabled starts  false", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    expect(component.isDisabled).toEqual(false);
  });

  it("shows if the variable type starts with button", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    expect(component.type).toEqual("button");
  });

  it("shows if the variable buttonText starts with empty", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    expect(component.buttonText).toEqual("");
  });
});
