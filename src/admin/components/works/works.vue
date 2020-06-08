<template lang="pug">
    .works-component
        .admin-section__wrapper(v-if="addButton")
            .admin-addwork__wrapper(v-if="editButton")
                worksEdit
            .admin-addwork__wrapper(v-else)
                worksAdd
        .admin-section__wrapper.admin-section__wrapper--no-bg
            .admin-addwork__wrapper
                worksList

                    
</template>

<script> 
    import worksAdd from '../works-add/works-add'
    import worksEdit from '../works-edit/works-edit'
    import worksList from '../works-list/works-list'
    import $axios from '../../requests';
    import { mapActions, mapState } from 'vuex';

    const token = localStorage.getItem('token') || '';


    export default {
        components: {
            worksAdd,
            worksList,
            worksEdit
        },
        methods: {
        },
        computed: {
            ...mapState('works', {
                addButton: state => state.addBtn,
                editButton: state => state.editBtn
            })
        }
    }
</script>

<style lang="postcss">
@import "../../default.pcss";
  
</style>