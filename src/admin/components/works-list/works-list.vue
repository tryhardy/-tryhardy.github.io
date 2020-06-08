<template lang="pug">
    .works-list-component
        ul.works__list(v-if="addBtn")
            li.works__item(v-for='work in works' :key="work.id")
                worksItem(:work="work")
        ul.works__list(v-else)
            li.works__item.works__item--addwork
                button(@click.prevent="openAddWorkSection").add-button.add-button--square
                    p.add-button__text Добавить работу
            li.works__item(v-for='work in works' :key="work.id")
                worksItem(:work="work")

                    
</template>

<script> 
    import { mapActions, mapState } from 'vuex';
    import $axios from '../../requests';
    import worksItem from '../works-item/works-item';

    export default {
        components: {
            worksItem
        },
        computed: {
            ...mapState('works', {
                works: state => state.works,
                addBtn: state => state.addBtn

            }),
        },
        methods: {
            ...mapActions('works', ['fetchWorks', 'addButtonClicked']),
            openAddWorkSection(){
                this.addButtonClicked();
            }
        },
        created() {
            this.fetchWorks();
        }
    }
    
</script>

<style lang="postcss">
@import "../../default.pcss";
  
</style>