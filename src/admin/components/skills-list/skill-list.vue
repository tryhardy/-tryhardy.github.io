<template lang="pug">
    .skill-list-component
        form.skill-list__form
            ul.skill-list__cells
                li.skill-list__cell(v-for="skill in cat.skills" :key="skill.id")
                    skillListEach(:skill="skill")

                    
</template>
<script>
    import skillListEach from '../skills-list-each/skill-list-each'
   
    export default {
        components: {
            skillListEach
        },
        props: [
            'cat'
        ],
        methods: {
        }      
    }
</script>

<style lang="postcss">
    @mixin desktopHd() {
        @media screen and (max-width: $bp-desktop-hd) {
            @content;
        }
    }

    @mixin desktop() {
        @media screen and (max-width: $bp-desktop) {
            @content;
        }
    }

    @mixin tablets() {
        @media screen and (max-width: $bp-tablets) {
            @content;
        }
    }

    @mixin phones() {
        @media screen and (max-width: $bp-phones) {
            @content;
        }
    }

    .skill-list-component {
        height:100%;
    }


    .skill-list {

        &__row {
            position: relative;

            @include tablets {
                flex-wrap: nowrap;
            }

            &--skills {
                flex: 1 1 100%;
                flex-direction: column;
            }
        }

        &__mode {
            display: flex;
            flex: 1;
        }

        &__cell {
            display: flex;
            flex-direction: column;
        }

        &__cells {
            margin-bottom: 20px;
        }

        &__cell-wrapper {
            flex: 1;
            display: flex;

            input {
                width: 100%;
                background-color: transparent;
                font-size: 1rem;
                border: none;
                border-bottom: 1px solid transparent;
                -webkit-transition: all .3s;
                transition: all .3s;
                position: relative;

                &:focus {
                    outline: none;
                }
            }

            &--number {
                max-width: 6.25rem;
                position: relative;

                input {
                    max-width: 2.5rem;
                }

                &:after {
                    content: "%";
                    position: absolute;
                    left: 35px;
                    color: #414c63;
                    font-weight: 400;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
        }

        &--number {
            max-width: 100px;
            position:relative;


            input {
            max-width: 40px;
            }           

        }

        &__cell-name {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 100%;
            flex: 1 1 100%;
            padding: 0.9375rem 0.625rem;
            margin-right: 0.625rem;
        }

        &__cell-value {
            padding: 0.9375rem 0.3125rem;
            position: relative;
        }

        &__buttons {
            display: flex;
            align-items: center;

            &-active {
                display: flex;
            }
            &-inactive {
                display: flex;
            }
        }

        .active {
            .skill-list__buttons-active {    
                display: none;
            }
            .skill-list__buttons-inactive {
                display: flex;
            }

            .skill-list__input--name {
                border-bottom: 1px solid black;
            }

            .skill-list__cell-name,
            .skill-list__cell-value {
                border-bottom: 1px solid black;
            }
        }

        &__button {
            background-color: transparent;
            width: 15px;
            height: 15px;
            padding: 0;
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }

            &:focus {
                outline: none;
            }

            &--edit {
                background-image: svg-load('pencil.svg', fill=gray, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            &--delete {
                background-image: svg-load('trash.svg', fill=gray, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            &--yes {
                background-image: svg-load('tick.svg', fill=green, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            &--no {
                background-image: svg-load('remove.svg', fill=red, stroke=red, width=100%, height=100%);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }
        }
    }

</style>