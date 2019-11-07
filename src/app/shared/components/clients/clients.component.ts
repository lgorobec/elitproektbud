import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client.model';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  clients: Client;

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe((data: Client) => {
      if (data) {
        this.clients = data;
      }
    });
  }

}
