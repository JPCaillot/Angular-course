import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  // static true since we'll be using that on ngOnInit as well
  // Could pass CockpitComponent in the app, instead of the string, for example

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      // @ViewChild reference
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      // TWO-WAY BINDING
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // @ViewChild reference
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      // TWO-WAY BINDING
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  constructor() {}

  ngOnInit(): void {}
}
