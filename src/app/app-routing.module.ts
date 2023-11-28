import { ParerntComponentComponent } from './parernt-component/parernt-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponentComponent } from './other-component/other-component.component';

const routes: Routes = [
  {
    path:'parent-component',
    component: ParerntComponentComponent,
    children:[
      {path: 'lazy-component', loadChildren: () => import('./lazymodule/lazymodule.module').then(m => m.LazymoduleModule)},
      {path: 'child-component', component:OtherComponentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
