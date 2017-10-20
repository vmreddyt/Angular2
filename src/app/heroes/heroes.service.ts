import { Injectable } from '@angular/core';
import { MockHeroes } from './mock-heroes';

@Injectable()
export class HeroesService {

  constructor() { }
  getHeroes() {
	  return Promise.resolve(MockHeroes);
  }
}
