import Vue from 'vue';
import Router from 'vue-router';

import { authenticationService } from '../_services';
import { Role } from '../_helpers';
import AdminPage from '../admin/AdminPage';
import LoginPage from '../login/LoginPage';
import PrvaStran from '../home/PrvaStran';
import ProstovoljciDomacaStran from '../Prostovoljci/ProstovoljciDomacaStran';
import DomoviDomacaStran from '../Domovi/DomoviDomacaStran';
import registracijaProstovoljciPage from '../Prostovoljci/registracijaProstovoljciPage';
import prostovoljciInboxPage from '../Prostovoljci/prostovoljciInboxPage';
import prostovoljciDomaStran from '../Prostovoljci/prostovoljciDomaStran';
import prostovoljciProfilePage from '../Prostovoljci/prostovoljciProfilePage';
import prostovoljciInfoZaDomPage from '../Prostovoljci/prostovoljciInfoZaDomPage';
import prostovoljciRegistracijaZaDomPage from '../Prostovoljci/prostovoljciRegistracijaZaDomPage';
import prostovoljciMessagePage from '../Prostovoljci/prostovoljciMessagePage';
import DomoviLogIn from '../Domovi/DomoviLogIn';
import DomoviRegistracije from '../Domovi/DomoviRegistracija';
import DomoviProfilnaStran from '../Domovi/DomoviProfilnaStran';
import DomoviTermini from '../Domovi/DomoviTermini';
import DomoviNabiralnik from '../Domovi/DomoviNabiralnik';
import instancaChata from '../Chat/instancaChata';
import DomoviNovTermin from '../Domovi/DomoviNovTermin';
import instancaChataProstovoljec from '../Chat/instancaChataProstovoljec';
import ProstovoljciTerminiDoma from '../Prostovoljci/ProstovoljciTerminiDoma';
import DomoviDodajTermin from '../Domovi/DomoviDodajTermin';


Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: PrvaStran
        },
        { 
            path: '/admin', 
            component: AdminPage, 
            meta: { authorize: [Role.Admin] } 
        },
        { 
            path: '/login', 
            component: LoginPage 
        },
        { 
            path: '/vstopnaStran', 
            component: PrvaStran 
        },
        { 
            path: '/prostovoljec', 
            component: ProstovoljciDomacaStran 
        },
        { 
            path: '/domovi', 
            component: DomoviDomacaStran
        },
        { 
            path: '/registracijaProstovoljci', 
            component: registracijaProstovoljciPage
        },

        { 
            path: '/prostovoljciInbox', 
            component: prostovoljciInboxPage
        },

        { 
            path: '/prostovoljciDoma', 
            component: prostovoljciDomaStran
        },

        { 
            path: '/prostovoljciProfile', 
            component: prostovoljciProfilePage
        },

        { 
            path: '/prostovoljciInfoZaDom',
            component: prostovoljciInfoZaDomPage
        },

        { 
            path: '/prostovoljciRegistracijaDom', 
            component: prostovoljciRegistracijaZaDomPage
        },

        { 
            path: '/prostovoljciMessage', 
            component:  prostovoljciMessagePage
        },
        {
            path: '/prijavadom',
            component:DomoviLogIn
        },
        {
            path: '/registracijadom',
            component:DomoviRegistracije
        },
        {
            path: '/domacastrandom',
            component:DomoviDomacaStran
        },
        {
            path: '/profilnastrandom',
            component:DomoviProfilnaStran
        },
        {
            path: '/domdolocitermin',
            component:DomoviTermini
        },
        {
            path: '/nabiralnikdom',
            component:DomoviNabiralnik
        },
        {
            path: '/instancaSporocila',
            component:instancaChata
        },
        {
            path: '/novTermin',
            component:DomoviNovTermin
        },
        {
            path: '/instancaSporocilaProstovoljec',
            component:instancaChataProstovoljec
        },
        {
            path: '/terminiDoma',
            component:ProstovoljciTerminiDoma
        },
        {
            path: '/addDate',
            component:DomoviDodajTermin
        },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;
    
    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/vstopnaStran', query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role)) {
            // role not authorised so redirect to home page
            return next({ path: '/' });
        }
    }

    next();
})