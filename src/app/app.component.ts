import {Component, OnInit} from '@angular/core';
import {ipcRenderer, remote, webFrame} from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    if (this.isElectron()) {
      this.ipcRenderer = require('electron').ipcRenderer;
      this.webFrame = require('electron').webFrame;
      this.remote = require('electron').remote;

      this.childProcess = require('child_process');
      this.fs = require('fs');
    }
  }

  ngOnInit(): void {
    if (this.isElectron()) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', this.ipcRenderer);
      console.log('NodeJS childProcess', this.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  isElectron() {
    return window && window['process'] && window['process'].FromType;
  }
}
