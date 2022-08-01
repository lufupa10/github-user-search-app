import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText : string = ""
	@Input() type: string = "button";

  @Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

  constructor() {}

  ngOnInit(): void {}


	onClick() {
		this.btnClick.emit();
  }

}
