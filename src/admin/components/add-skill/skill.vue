<template lang="pug">
    .add-skill-component
        div 
        form(@submit.prevent="addNewSkill").add-skill
            .add-skill__input.add-skill__input--cell-name
                input(
                type="text" 
                name="GroupItem" 
                placeholder="Новый навык"
                v-model="skill.title"
                ).add-skill__cell.add-skill__cell-name
                .add-skill__error {{ validation.firstError('skill.name') }}
            .add-skill__input.add-skill__input--value
                input(
                type="text" 
                name="GroupItemValue" 
                value="100"
                v-model="skill.percent"
                ).add-skill__cell.add-skill__cell-value
                .add-skill__error {{ validation.firstError('skill.percent') }}
            .add-skill__add
                button(type="submit").add-skill__button.add-skill__button-plus +


                    
</template>
<script>
    import SimpleVueValidator from 'simple-vue-validator';
    import { mapActions } from 'vuex';

    const Validator = SimpleVueValidator.Validator;
    

    
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
        props: [
            'cat'
        ],
        data() {
            return {
                skill: {
                    title: '',
                    percent: 0,
                    category: this.cat.id
                },
            }
        },
        methods: {
            ...mapActions('categories', ['addSkill']),
            addNewSkill() {
                this.$validate()
                .then((success) => {
                    if (success) {
                        const skillData = {
                            title: this.skill.title,
                            percent: this.skill.percent,
                            category: this.skill.category
                        };
                        this.addSkill(skillData)
                        this.skill.title="";
                        this.skill.percent = 0;
                    }
                })
                .catch(error=> {
                    console.log('Не удалось пройти валидацию')
                })
            }
        }
        
    }
</script>

<style lang="postcss">
    .add-skill {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &__cell-name {
            margin-right: 10px;

            &::-webkit-input-placeholder { font-weight: 500; color:$light-gray;}
            &::-moz-placeholder          { font-weight: 500; color:$light-gray;}
            &:-moz-placeholder           { font-weight: 500; color:$light-gray;}
            &:-ms-input-placeholder      { font-weight: 500; color:$light-gray;}
            &:placeholder                { font-weight: 500; color:$light-gray;}
        }

        &__cell {
            border: none;
            width: 100%;
            font-size: 16px;
            border-bottom: 1px solid transparent;
            transition: all .3s;
            position: relative;
            padding: 15px 20px 15px 10px;
            

            &[disabled] {
                background: transparent;
            }

            &:focus {
                outline: none;
            }
        }

        &__input {
            border: none;
            border-bottom: 1px solid transparent;
            padding: 0.625rem 0;
            -webkit-transition: all .3s;
            transition: all .3s;
            min-width: 5rem;
        }

        &__cell-name,
        &__cell-value {
        }

        &__input--cell-name {
            margin-right: 0.625rem;
            border-bottom: 1px solid $text-color;
            padding: 0;
        }

        &__input, 
        &__row {
            position: relative;
        }

        &__input--value {
            max-width: 3.75rem;
            position: relative;
            margin-right: 1.875rem;
            border-bottom: 1px solid $text-color;
            padding: 0;
            
            &:after {
                content: "%";
                position: absolute;
                right: 10%;
                color: #414c63;
                font-weight: 400;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }

        &__button {
            background-color: transparent;
            width: 0.9375rem;
            height: 0.9375rem;
            padding: 0;
            margin-right: 0.625rem;
        }

        &__button-plus {
            font-size: 1.875rem;
            color: #383bcf;
            position: relative;
            content: "+";
            width: 2.5rem;
            height: 2.5rem;
            color: #fff;
            background: linear-gradient(45deg,#006aed,#3f35cb);
            border-radius: 50%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            font-size: 1.3125rem;
            font-weight: 600;
            margin-right: 0;

            &:focus {
                outline: none;
            }
        }

        button[type=button] {
            cursor: pointer;
            background-color: transparent;
        }

        .group__button:last-child {
            margin-right: 0;
        }

    }

    .add-skill__error {
        position: absolute;
        top: 100%;
        color: red;
    }

</style>