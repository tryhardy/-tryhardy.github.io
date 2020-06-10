<template lang="pug">
    .works-add-component
        .admin-section__second-header
            h2.admin-section__second-title Добавление работы
        .admin-section__container
            .new-work 
                form().add-form
                    label(for="file-work").new-work__image
                        p.new-work__image-desc Перетащите или нажмите кнопку для загрузки изображения
                        .add-button Загрузить
                        .new-work__image-loaded(:style="{backgroundImage:`url(${renderedPhoto})`}")
                        button.add-button.add-button--cancel.add-button--preview Изменить превью
                    input(id="file-work" title="file" type="file" @change="handleFileChange").file-hidden
                    .new-work__info
                        .add-form__row
                            label.add-form__label Название
                            input(type="text" v-model="work.title").add-form__input
                            .add-form__error {{ validation.firstError('work.title') }}
                        .add-form__row
                            label.add-form__label Ссылка
                            input(type="text" v-model="work.link").add-form__input
                            .add-form__error {{ validation.firstError('work.link') }}
                        .add-form__row
                            label.add-form__label Описание
                            textarea(v-model="work.description").add-form__textarea
                            .add-form__error {{ validation.firstError('work.description') }}
                        .add-form__row
                            label.add-form__label Добавление тэга
                            input(@keyup.enter.prevent="addTag" v-model="work.tags").add-form__input
                            .tags.tags--form
                                .tags__list
                                    .tags__item(v-for='tag in tags')
                                        a(@click.prevent="deleteTag").tags__close {{tag}}
                            .add-form__error {{ validation.firstError('work.tags') }}
                        .add-form__row
                            .add-form__column.add-form__column--buttons
                                button(@click.prevent="cancel").add-button.add-button--cancel Отмена
                                button(type="submit" @click.prevent="addNewWork").add-button Сохранить
                   
</template>

<script> 
    import SimpleVueValidator from 'simple-vue-validator';
    import axios from 'axios';
    import { renderer } from '../../helpers/pictures';
    import { mapActions, mapState } from 'vuex';

    const Validator = SimpleVueValidator.Validator.create({templates: {
        url: 'Введенное значение не является URL'
    }});
    const token = localStorage.getItem('token') || '';


    export default {
        mixins: [SimpleVueValidator.mixin],
        validators: {
            "work.title": function (value) {
                return Validator.custom(function () {
                if(Validator.isEmpty(value)){
                    return "Поле не может быть пустым"
                }
                }) 
            },
            "work.description": function (value) {
                return Validator.custom(function () {
                if(Validator.isEmpty(value)){
                    return "Поле не может быть пустым"
                }
                }) 
            },
            "work.link": function (value) {
                return Validator.custom(function () {
                if(Validator.isEmpty(value)){
                    return "Поле не может быть пустым"
                }
                }) 
            },
            'work.tags': function (value) {
                return Validator.custom(function () {
                    if(Validator.isEmpty(value)){
                        return "Поле не может быть пустым"
                    }
                }) 
            },
        },
        data() {
            return {
                work: {
                    title: '',
                    techs: '',
                    photo:{},
                    link: '',
                    description: '',
                },
                tags: [],
                author: '',
                renderedPhoto: '' 
            }
        }, 
        methods: {
            ...mapActions('works', ['addWork', 'addButtonClicked']),
            handleFileChange(event) {
                const photo=event.target.files[0];
                this.work.photo = photo;
                renderer(photo).then(pic => {
                    this.renderedPhoto = pic;
                })
            },
            addNewWork(){
                this.validate()
                .then(success => {
                    this.work.techs = this.tags.toString();
                    const workData = new FormData;
                    workData.append('title', this.work.title);
                    workData.append('techs', this.work.techs);
                    workData.append('photo', this.work.photo);
                    workData.append('link', this.work.link);
                    workData.append('description', this.work.description);

                    this.addWork(workData);
                    this.addButtonClicked();
                    })
                .catch(error => {
                    console.log(error)
                })
            },
            addTag(event){
                this.tags.push(event.target.value);
                this.work.tags = '';
            },
            deleteTag(event){
                this.tags = this.tags.filter(item => {
                    if (item != event.target.innerText) {
                        return item;
                    }
                })
            },
            cancel(){
                this.addButtonClicked();
            }
        }
    }
</script>

<style lang="postcss">
@import "../../default.pcss";
  
</style>