<template lang="pug">
    .header-component
        header.header-admin
            .header-admin__wrapper
                .container.container--flex.container--align-c
                    .header-content
                        slot
                    .header-admin__title Панель администрирования
                    a(@click.prevent="logoutUser").logout Выйти
                    
</template>
<script>
import { mapActions} from 'vuex';

export default {
    props: ["hideContent"],
    computed: {   },
    methods: {
        ...mapActions('user', ['logout']),
        logoutUser(){
            this.logout();
            this.$router.replace('/login')
        }
    }
    
}
</script>

<style lang="postcss" scoped>
    .header-admin {
        &__wrapper {
            width: 100%;
            background-color: #424267;
            color: white;
            padding: 15px 0;
        }

        &__center {
            display: flex;
            align-items: center;
            flex: 1;
        }

        &__title {
            font-size: 14px;
            opacity: .5;
            flex: 1;
        }

        &__logout {
            flex: 1;
            text-align: right;
        }
    }
    .logout {
        font-size: 14px;
        opacity: .5;
        text-decoration: underline;
    }
</style>