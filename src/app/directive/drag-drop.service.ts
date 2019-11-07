import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface DragData {
  tag: string; // 用于标记拖拽标签的唯一标识
  data: any;
}

@Injectable()
export class DragDropService {

  private _dragData = new BehaviorSubject<DragData>(null);

  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  clearData(): void {
    this._dragData.next(null);
  }
}
