<template lang="pug">
    .works-item-component
        .works__item-picture
            img(:src='photo()').works__item-img
            .tags.tags--work
                .tags__list(v-for="tag in tags()" :key="tag")
                    .tags__item 
                        .tags__close {{tag}}
        .works__item-content
            h3.works__item-header {{work.title}}
            p.works__item-desc {{work.description}}
            a(:href="work.link").works__item-link {{work.link}}
            .works__item-buttons
                button(@click.prevent ='editCurWork').works__item-button.works__item-button--edit Править
                button(@click.prevent="removeCurWork").works__item-button.works__item-button--remove Удалить

                    
</template>

<script> 
    import { mapActions, mapState } from 'vuex';
    import $axios from '../../requests';

    export default {
        props: [
            'work'
        ],
        methods: {
            ...mapActions('works', ['removeWork', 'addButtonClicked', 'editButtonClicked']),
            removeCurWork() {
                const workId = this.work.id;
                this.removeWork(workId)
            },
            editCurWork(){
                this.editButtonClicked(this.work)
            },
            tags () {
                let str = this.work.techs;
                let array = str.split(',')
                return array;
            },
            photo () {
                let baseUrl = 'https://webdev-api.loftschool.com/';
                let photoUrl = baseUrl + this.work.photo;
                return photoUrl;
            }
        },
        computed: {
        }
    }
    
</script>

<style lang="postcss">
@import "../../default.pcss";
  
</style>