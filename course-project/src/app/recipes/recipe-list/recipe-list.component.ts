import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription;
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/e7/1a/f0/e71af0538515da869052a27d0cdcd5e7.jpg'),
  //   new Recipe('Another Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/e7/1a/f0/e71af0538515da869052a27d0cdcd5e7.jpg')
  // ];

  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeClicked(recipe: Recipe) {
  //   this.recipeClicked.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
