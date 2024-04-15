import { Component, Input, EventEmitter, Output,OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('ngOnInit() called', this.postImg)
  }
  ngOnInit() {
    console.log('ngOnInit() called', this.postImg)
  }
  ngOnChanges() {
    console.log('ngOnChanges() called')

  }
  ngDoCheck() {
    console.log('ngDocCheck() called')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentChecked() called')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() called')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy() called')
  }
}
