import { CounterService } from "./couterservice.service";
import { Injectable } from "@angular/core";

@Injectable()

export class UsersService {
    counter1 = 0;
    counter2 = 0;
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.countServices1(this.counter1+1);
        this.counter1++;
      }
    
      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.countServices2(this.counter2+1);
        this.counter2++;
      }
}