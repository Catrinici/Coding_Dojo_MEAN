import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';

import { PublicComponent } from "app/public/public.component";
import { PersonalComponent } from "app/personal/personal.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'notes', component: NotesComponent,
        children:[
            { path: 'public', component: PublicComponent },
            { path: 'personal', component: PersonalComponent }
        ]
 }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
