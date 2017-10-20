import { Component, OnInit } from '@angular/core';
import { Hero  } from './hero.modal';
import { HeroesService } from './heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(private heroesService: HeroesService) { }

  ngOnInit() {
	  this.heroesService.getHeroes()
		  .then(heroes => this.heroes = heroes);
  }

}
