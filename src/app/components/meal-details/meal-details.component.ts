import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit {

  mealDetalis: any
  constructor(private _mealsService: MealsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof document != 'undefined') {
      this._activatedRoute.paramMap.subscribe((parms) => {
        const mealID = parms.get('mealID')
        if (mealID) {
          this._mealsService.getMealDetalis(mealID).subscribe((res) => {
            this.mealDetalis = res.meals[0]
          })
        }

      })
    }



  }

  getIngredients(mealDetalis: any) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = `strIngredient${i}`;
      const measure = `strMeasure${i}`;

      if (this.mealDetalis[ingredient]) {
        ingredients.push({
          Ingredient: this.mealDetalis[ingredient],
          measure: this.mealDetalis[measure],
        });
      }
    }
    return ingredients;
  }



}
