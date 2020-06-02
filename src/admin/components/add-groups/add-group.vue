<template lang="pug">
    .group-component
        form(v-on:submit.prevent="createNewCategory").group__form
            .group__row.group__row--name.active
                .group__input.group__input--name
                    input(
                    type="text" 
                    v-model="category.title" 
                    name="GroupTitle" 
                    placeholder="Название новой группы"
                    ).group__input-name
                    .group__error#error-val {{ validation.firstError('category.title') }}
                .group__buttons.active
                    .group__buttons-active
                        button.group__button.group__button--edit                     
                        button.group__button.group__button--delete 
                    .group__buttons-inactive
                        button(type="submit").group__button.group__button--yes                    
                        button(@click.prevent="removeCurCategory").group__button.group__button--no  
            .group__wrapper
                skillList(:cat="cat")
                skill(:cat="cat")        
</template>


<script>
    import SimpleVueValidator from 'simple-vue-validator';  
    import skill from '../add-skill/skill';
    import skillList from '../skills-list/skill-list'
    import { mapActions, mapState } from 'vuex';
    import axios from 'axios';

    const Validator = SimpleVueValidator.Validator;
    const token = localStorage.getItem('token') || "";


    export default {
        mixins: [SimpleVueValidator.mixin],
        validators: {
            "category.title": function (value) {
                return Validator.custom(function () {
                    if(Validator.isEmpty(value)){
                        return "Поле не может быть пустым"
                    }
                }) 
            },
            "skill.name": function (value) {
                return Validator.custom(function () {
                    if(Validator.isEmpty(value)){
                        return "Поле не может быть пустым"
                    }
                }) 
            },
            "skill.isNumber": function (value) {
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
        components: {
            skill,
            skillList
        },
        props: {
            cat: {
                type: Object,
                default: () => {},
                required: false
            }
        },
        data() {
            return {
                category: {
                    title: this.cat.category,
                    id: this.cat.id
                }
            }
        },
        methods: {
            ...mapActions('categories',['addCategory', 'fetchCategories', 'removeCategory']),
            addSkill(newSkill) {
                this.$emit("skillAdded", newSkill)
            },
            createNewCategory() {
                this.addCategory(this.category.title)
                this.category.title = '';
                this.fetchCategories();
            },
            removeCurCategory() {
                const id = this.category.id;
                this.removeCategory(id);
                this.fetchCategories();
            }
            
        }
    }
</script>

<style lang="postcss" scoped>
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
    
    .group {
        &-component {
            height: 100%;;
        }
        &__form {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        &__input {
            border: none;
            border-bottom: 1px solid transparent;
            padding: 10px 0;
            transition: all .3s;

            &--name {
                min-width: 60%;
                flex: 1;
                margin-right: 20px;
                position: relative;
            }
        }

        &__row {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;

            @include tablets {
                flex-wrap: nowrap;
            }

            &--skills {
                flex: 1 1 100%;
                flex-direction: column;
            }

            &--name {
                padding : 0px 0px 20px 10px;
                border-bottom: 1px solid #dedee0;
            }
        }

        &__input-name {
            border: none;
            width: 100%;
            font-weight: 600;
            
            font-size: 18px;
            color: #414c63;

            &[disabled] {
                background-color: transparent;
                font-weight: 600;
            }

            &[value] {
                background-color: transparent;
                font-weight: 600;
            }

            &:focus {
                outline: none;
            }

            &::-webkit-input-placeholder { font-weight: 600; color:$light-gray;}
            &::-moz-placeholder          { font-weight: 600; color:$light-gray;}
            &:-moz-placeholder           { font-weight: 600; color:$light-gray;}
            &:-ms-input-placeholder      { font-weight: 600; color:$light-gray;}

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

        &__buttons {
            &-active {
            display: none;
            }
            &-inactive {
            display: flex;
            }
        }

        .active {
            .group__buttons-active {    
            display: flex;
            }
            .group__buttons-inactive {
            display: none;
            }
        }
    }

    .group__error {
        position: absolute;
        top: 100%;
        color: red;
    }
</style>