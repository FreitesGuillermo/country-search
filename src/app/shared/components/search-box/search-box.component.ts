import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy  {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;


  @Input()
  public placeholder: String ='';

  @Input()
  public initialValue: String ='';


  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebaunce = new EventEmitter<string>();

  emitValue (value: string) :void {
    this.onValue.emit (value);
  }
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(400)
      )
      .subscribe( value => {
        this.onDebaunce.emit(value)
      })

    }
    ngOnDestroy(): void {
     this.debouncerSuscription?.unsubscribe();
    }


  onKeyPress( searchTerm: string) {
    this.debouncer.next(searchTerm);

  }

}
