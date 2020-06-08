<template lang="pug">
  .recalls-component
    .recall
        ul.recall__list(v-if="addBtn")
            li.recall__item(v-for="recall in recalls" :key="recall.id")
                recallsList(:recall="recall")
        ul.recall__list(v-else)
                li.recall__item.recall__item--addwork
                    recallsAdd
                li.recall__item(v-for="recall in recalls" :key="recall.id")
                    recallsList(:recall="recall")

                    
</template>

<script>
    import recallsAdd from '../recalls-add/recalls-add';
    import recallsList from '../recalls-list/recalls-list';     
    import { mapActions, mapState } from 'vuex';
    const token = localStorage.getItem('token') || '';


    export default {
        components: {
            recallsAdd,
            recallsList
        },
        methods: {
            ...mapActions('recalls', ['fetchRecalls']),
        },
        computed: {
            ...mapState('recalls', {
                recalls: state => state.recalls,
                addBtn: state => state.addBtn
            }),
        },
        created() {
            this.fetchRecalls()
        }
    }
</script>

<style lang="postcss" scoped>
  @import "../../default.pcss";
  .recall {
    &__list {
        display: flex; 
        flex-wrap: wrap;
    }

    &__item {
        flex: 1 1 20%;
        width: calc((100%/4) -1%);
        max-width: calc((100%/4) -1%);
        background-color: white;
        margin-right: 1.5%;
        margin-bottom: 1.5%;
        box-shadow: 0.3125rem 0 1.25rem rgba(0,0,0,.07);

        &:nth-child(4n) {
            margin-right: 0;
        }

        @include desktop {
            width: calc((100%/3) -1%);
            max-width: calc((100%/3) -1%);
            flex: 1 1 30%;

            &:nth-child(4n) {
                margin-right: 1.5%;
            }
            &:nth-child(3n) {
                margin-right: 0;
            }
        }

        @include tablets {
            flex: 1 1 40%;
            width: 48%;
            max-width: 48%;
            margin-bottom:20px;

            &:nth-child(2n) {
                margin-right: 0;
            }

            &:nth-child(3n) {
                margin-right: 20px;
            }

            &:nth-child(2n+1) {
                margin-right: 20px;
            }
        }

        @include phones {
            margin-right: 0;
            flex: 1 1 100%;
            min-width: 100%;
        }

        &-wrapper {
            padding: 0px 20px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        &--addwork {
            display: flex;
        }

        &-picture {
            position: relative;
        }

        &-content {
            padding: 25px 10px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        &-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 25px;
        }

        &-desc {
            font-size: 16px;
            line-height: 1.5;
            font-weight: 600;
            color: gray;
            margin-bottom: 25px;
            flex: 1;
        }

        &-link {
            text-decoration: none;
            font-weight: 700;
            color: blue;
            margin-bottom: 40px;
            display: block;
        }

        &-buttons {
            display: flex;
            justify-content: space-between;
        }

        &-button {
            background-color: transparent;
            color: $light-gray;
            font-weight: 500;
            font-size: 16px;
            padding: 10px;
            position: relative;
            padding-right: 30px;

            &:focus {
                outline: none;
            }

            &--edit {
                background-image: svg-load('pencil.svg', fill=blue, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: 15px;
                background-position: right center;
            }

            &--remove {
                background-image: svg-load('remove.svg', fill=red, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: 15px;
                background-position: right center;
            }
        }

        &-author {
            display: flex;
            padding: 30px 0px;
            border-bottom: 1px solid $light-gray;
            align-items:center;
        }

        &-name {
            font-weight: bold;
            font-size: 18px;
        }

        &-position {
            font-weight: 600;
            color: gray;
        }

    }

    &__avatar {
        min-width: 50px;
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }
}

</style>