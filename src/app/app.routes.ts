import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PledgeComponent } from './pledge/pledge.component';
import { QuizComponent } from './quiz/quiz.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'intro',
        component:IntroComponent
    },
    {
        path: 'pledge',
        component:PledgeComponent
    },
    {
        path: 'quiz',
        component:QuizComponent
    },
    {
        path: 'thanks',
        component:ThanksComponent
    }


];
