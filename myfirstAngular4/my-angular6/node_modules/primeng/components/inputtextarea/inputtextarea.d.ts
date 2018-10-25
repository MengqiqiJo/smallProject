import { ElementRef, OnInit, DoCheck, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class InputTextarea implements OnInit, DoCheck {
    el: ElementRef;
    ngModel: NgModel;
    autoResize: boolean;
    rows: number;
    cols: number;
    onResize: EventEmitter<any>;
    rowsDefault: number;
    colsDefault: number;
    filled: boolean;
    constructor(el: ElementRef, ngModel: NgModel);
    ngOnInit(): void;
    ngDoCheck(): void;
    onInput(e: any): void;
    updateFilledState(): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    onKeyup(e: any): void;
    resize(event?: Event): void;
}
export declare class InputTextareaModule {
}
