import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PersonsService {
  personsChanged = new Subject<string[]>();

  public persons: string[] = ['Brass', 'Lyra', 'Gishath', 'Goreclaw', 'Neheb', 'Yuriko'];

  addPerson(name: string){
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string){
    this.persons = this.persons.filter(persons => {
      return persons !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
