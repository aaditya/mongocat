import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabasesComponent } from './databases/databases.component';
import { CollectionsComponent } from './collections/collections.component';
import { ViewCollectionComponent } from './view-collection/view-collection.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'databases',
    component: DatabasesComponent
  },
  {
    path: 'databases/:dbName',
    component: CollectionsComponent
  },
  {
    path: 'databases/:dbName/:collectionName',
    component: ViewCollectionComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
