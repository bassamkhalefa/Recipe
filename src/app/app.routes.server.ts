import { Component } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  {
    path: "",
    renderMode: RenderMode.Server
  },
  {
    path: 'category/:categoryName',
    renderMode: RenderMode.Server
  }
  ,
  {
    path: 'mealdetails/:mealID',
    renderMode: RenderMode.Server
  }



];
