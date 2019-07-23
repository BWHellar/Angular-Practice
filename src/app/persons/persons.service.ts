import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PersonsService {
  persons: string[] = ['Brass', 'Lyra', 'Gishath', 'Goreclaw', 'Neheb', 'Yuriko'];
  addPerson(name: string){
    this.persons.push(name);
    console.log(this.persons);
  }
}
