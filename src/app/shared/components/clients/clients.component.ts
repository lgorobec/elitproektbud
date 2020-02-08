import {Component, OnInit} from '@angular/core';
import {Client} from '../../models/client.model';
import {ClientService} from '../../services/client.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  clients: Client;

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients()
        .pipe(first())
        .subscribe((data: Client) => {
          if (data) {
            this.clients = data;
          }
    });
  }

}
