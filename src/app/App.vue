export * from './authentication.service';
export * from './user.service';
export * from './home.service';
<template>
    <router-view></router-view>
</template>

<script>
import { authenticationService } from '../_services';
import { router, Role } from '../_helpers';


export default {
    name: 'app',
    data () {
        return {
            currentUser: null
        };
    },
    computed: {
        isAdmin () {
            return this.currentUser && this.currentUser.role === Role.Admin;
        }
    },
    created () {
        authenticationService.currentUser.subscribe(x => this.currentUser = x);
    },
    methods: {
        logout () {
            authenticationService.logout();
            router.push('/login');
        }
    }
};
</script>