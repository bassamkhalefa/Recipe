import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit {
  categories: any;
  meals: any;

  constructor(private _MealsService: MealsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof document != "undefined") {
      this._MealsService.getAllcatogery().subscribe((res) => {

        this.categories = res.meals


      })



      this._ActivatedRoute.paramMap.subscribe((params) => {
        const categoryname = params.get("categoryName")
        if (categoryname) {
          this._MealsService.getMealsByCategory(categoryname).subscribe((res) => {
            this.meals = res.meals
          })

        }
      })

    }


  }






}
