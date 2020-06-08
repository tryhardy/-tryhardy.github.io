<template lang="pug">
    .skill-list-each-component
        .skill-list__mode(v-if="editMode")
            .skill-list__cell-wrapper
                input(name="CellName" type="text" v-model="skill.title").skill-list__cell-name
                .error {{ validation.firstError('skill.title') }}
            .skill-list__cell-wrapper.skill-list__cell-wrapper--number
                input(name="CellValue" type="text" v-model="skill.percent").skill-list__cell-value
                .error {{ validation.firstError('skill.percent') }}
            .skill-list__buttons
                .skill-list__buttons-inactive
                    button(type="button" @click.prevent="editCurrentSkill").skill-list__button.skill-list__button--yes                    
                    button(type="button" @click.prevent="editMode=false").skill-list__button.skill-list__button--no
        .skill-list__mode(v-else)
            .skill-list__cell-wrapper
                input(name="CellName" type="text" :value="skill.title" disabled).skill-list__cell-name
            .skill-list__cell-wrapper.skill-list__cell-wrapper--number
                input(name="CellValue" type="text" :value="skill.percent" disabled).skill-list__cell-value
            .skill-list__buttons
                .skill-list__buttons-active
                    button(type="button" @click.prevent="editMode=true").skill-list__button.skill-list__button--edit                 
                    button(type="button" @click.prevent="removeCurrentSkill(skill)").skill-list__button.skill-list__button--delete 

                    
</template>
<script>
    import SimpleVueValidator from 'simple-vue-validator';  
    import { mapActions, mapState } from 'vuex'; 
    const Validator = SimpleVueValidator.Validator;
    const token = localStorage.getItem('token') || '';

    
    export default {
        mixins: [SimpleVueValidator.mixin],
        validators: {
            "skill.title": function (value) {
                return Validator.custom(function () {
                    if(Validator.isEmpty(value)){
                        return "Поле не может быть пустым"
                    }
                }) 
            },
            "skill.percent": function (value) {
                return Validator.custom(function () {
                    if (!Validator.isEmpty(value)) {
                        var number = value;
                        if (isNaN(number)) {
                            return 'Можно ввести только число'
                        } if(number > 100) {
                            return 'Значение не может превышать 100%'
                        } 
                    } else {
                            return 'Поле не может быть пустым'
                    }
                });
            },
        },
        props: {
            skill: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        data() {
            return {
                editedSkill: {...this.skill},
                editMode: false
            }
        },
        methods: {
            ...mapActions('categories', ['removeSkill', 'editSkill', "fetchCategories"]),
            removeCurrentSkill(skill) {
                this.removeSkill(skill);
            },
            async editCurrentSkill() {
                try {
                    await this.editSkill(this.skill);
                } catch (error) {
                    console.log(error)
                } finally {
                    this.editMode = false;
                }
            }
        },
        computed: {
            ...mapState('categories', {
            categories: state => state.categories
            }),
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
            position: relative;

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

    .error {
        position: absolute;
        color: red;
        bottom: -10px;
    }

</style>