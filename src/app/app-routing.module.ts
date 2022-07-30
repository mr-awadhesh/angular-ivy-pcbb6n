import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QDetailsComponent } from './components/q-details/q-details.component';
const routes: Route[] = [
  {path:'quotes',component: QuotesComponent},
  {path:'details/:id',component: QDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
