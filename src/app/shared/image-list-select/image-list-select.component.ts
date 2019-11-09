import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent), // 等待用自己
      multi: true, // 多个地方可以用
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent), // 等待用自己
      multi: true, // 多个地方可以用
    },
  ],
})
export class ImageListSelectComponent implements OnInit, ControlValueAccessor {
  @Input() title = '选择';
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: Array<string> = [];
  @Input() useSvgIcon: boolean = false;
  @Input() itemWidth: string = '80px';

  selected: string;
  private propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() { }

  writeValue(obj: any): void {
    this.selected = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }
  /*
  private _value : string;
  public get value() : string {
    return this._value;
  }
  public set value(v : string) {
    this._value = v;
  }
  */

  onChange(idx: number) {
    this.selected = this.items[idx];
    this.propagateChange(this.selected);
  }

  validate(c: FormControl): {[key: string]: any} {
    return this.selected ? null : {
      imageListInvalid: {
        valid: false,
      }
    }
  }

}
