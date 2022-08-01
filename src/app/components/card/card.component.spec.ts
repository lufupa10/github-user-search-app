import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { GithubService } from 'src/app/services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CardComponent],

      providers: [GithubService],
    }).compileComponents();
  });

  it("should create the card", () => {
    const fixture = TestBed.createComponent(CardComponent);

    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should show if showRepo receives false", () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component.showRepo).toEqual(false);
  });

  it("should show if the repos variable starts empty array", () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component.repos).toEqual([]);
  });

  it("should show if the stars variable starts empty array", () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component.stars).toEqual([]);
  });

  it("should show if the order variable starts empty", () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component.order).toEqual("");
  });
});
