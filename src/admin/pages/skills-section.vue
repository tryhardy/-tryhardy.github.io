<template lang="pug">
    section.admin-section.admin-about
        .container
            .admin-section__header(v-if="opened")
                h1.admin-section__title Блок "Обо мне" 
            .admin-section__header(v-else)
                h1.admin-section__title Блок "Обо мне" 
                button(@click.prevent="openAddGroup").add-group Добавить группу
            .admin-about__wrapper
                skills
</template>

<script>
import skills from '../components/skills/skills'
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        skills
    },
    methods: {
        ...mapActions('categories', ['addGroupButtonClicked']),
        openAddGroup() {
            this.addGroupButtonClicked();
        }
    },
    computed: {
        ...mapState('categories', {
            opened: state => state.AddGroupButton
        })
    }
}
</script>

<style lang="postcss">

</style>