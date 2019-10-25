import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {ServerInfo} from '../../server/server-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  servers: ServerInfo[];

  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.loadServers();
  }

  loadServers() {
    this.serverService.listServers().subscribe(value => {
      this.servers = value;
    });
  }
}
