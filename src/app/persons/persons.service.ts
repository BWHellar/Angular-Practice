import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PersonsService {
  personsChanged = new Subject<string[]>();

  persons: string[];

  constructor(private http: HttpClient) {}

    fetchPersons() {
      this.http
      .get<any>('https://swapi.co/api/people')
      .pipe(map(resData => {
        return resData.results.map(character => character.name);
      }))
      .subscribe(transData => {
        this.personsChanged.next(transData);
      });
    }


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
