<template lang="pug">
    .skill-list-component
        form.skill-list__form
            ul.skill-list__cells
                li.skill-list__cell(v-for="skill in skills" :key="skill.id")
                    .skill-list__cell-wrapper
                        input(name="CellName" type="text" :value="skill.title" disabled).skill-list__cell-name
                    .skill-list__cell-wrapper.skill-list__cell-wrapper--number
                        input(name="CellValue" type="text" :value="skill.percent" disabled).skill-list__cell-value
                    .skill-list__buttons
                        .skill-list__buttons-active
                            button.skill-list__button.skill-list__button--edit                     
                            button(type="button" @click.prevent="removeCurrentSkill(skill)").skill-list__button.skill-list__button--delete 
                        .skill-list__buttons-inactive
                            button.skill-list__button.skill-list__button--yes                    
                            button.skill-list__button.skill-list__button--no

                    
</template>
<script>
    import SimpleVueValidator from 'simple-vue-validator';  
    import { mapActions } from 'vuex'; 
    const Validator = SimpleVueValidator.Validator;
    const token = localStorage.getItem('token') || '';

    
    export default {
        mixins: [SimpleVueValidator.mixin],
        validators: {
        },
        props: [
            'cat'
        ],
        data() {
            return {
                category: {
                    type: Array,
                    default: () => [],
                    required: true
                },
                skills: this.cat.skills
            }
        },
        methods: {
            ...mapActions('categories', ['removeSkill', "fetchCategories"]),
            removeCurrentSkill(skillId) {
                this.removeSkill(skillId)
            }
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

        &__cell {
            display: flex;
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
                display: none;
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