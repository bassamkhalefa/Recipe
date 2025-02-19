import { Routes } from '@angular/router';
import { MealsComponent } from './components/meals/meals.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "", component: AppComponent, children: [

            { path: "", redirectTo: 'category/All', pathMatch: 'full' },
            {


                path: "category/:categoryName", component: MealsComponent,

            }
            , {
                path: "mealdetails/:mealID", component: MealDetailsComponent
            }]
    }

]