<template lang="pug">
    section.admin-section.admin-addwork
        .container
            .admin-section__header
                h1.admin-section__title Блок "Работы"
            .admin-section__wrapper
                .admin-addwork__wrapper
                    .admin-section__second-header
                        h2.admin-section__second-title Редактирование работы
                    .admin-section__container
                        .new-work 
                            form.add-form
                                label(for="file-work").new-work__image
                                    p.new-work__image-desc Перетащите или нажмите кнопку для загрузки изображения
                                    .add-button Загрузить
                                    .new-work__image-loaded(:style="{backgroundImage:`url(${renderedPhoto})`}")
                                    button.add-button.add-button--cancel.add-button--preview Изменить превью
                                input(id="file-work" name="file" type="file" @change="handleFileChange").file-hidden
                                .new-work__info
                                    .add-form__row
                                        label.add-form__label Название
                                        input(type="text" v-model="editWork.name").add-form__input
                                        .add-form__error {{ validation.firstError('editWork.name') }}
                                    .add-form__row
                                        label.add-form__label Ссылка
                                        input(type="text" v-model="editWork.url").add-form__input
                                        .add-form__error {{ validation.firstError('editWork.url') }}
                                    .add-form__row
                                        label.add-form__label Описание
                                        textarea(v-model="editWork.desc").add-form__textarea
                                        .add-form__error {{ validation.firstError('editWork.desc') }}
                                    .add-form__row
                                        label.add-form__label Добавление тэга
                                        input.add-form__input
                                        .tags.tags--form
                                            .tags__list
                                                .tags__item 
                                                    a.tags__close Html
                                                .tags__item
                                                    a.tags__close CSS
                                    .add-form__row
                                        .add-form__column.add-form__column--buttons
                                            button.add-button.add-button--cancel Отмена
                                            button.add-button Сохранить
            .admin-section__wrapper.admin-section__wrapper--no-bg
                .admin-about__wrapper
                    .admin-addwork__wrapper
                        .works
                            ul.works__list
                                li.works__item.works__item--addwork
                                    button.add-button.add-button--square
                                        .add-button__icon
                                        p.add-button__text Добавить работу
                                li.works__item
                                    .works__item-picture
                                        img(src='https://picsum.photos/300/200').works__item-img
                                        .tags.tags--work
                                            .tags__list
                                                .tags__item 
                                                    a.tags__close Html
                                                .tags__item
                                                    a.tags__close CSS
                                    .works__item-content
                                        h3.works__item-header Сайт школы образования
                                        p.works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                        a(href="").works__item-link loftschool.com
                                        .works__item-buttons
                                            button.works__item-button.works__item-button--edit Править
                                            button.works__item-button.works__item-button--remove Удалить
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator';
import axios from 'axios';
import { renderer } from '../helpers/pictures'
const Validator = SimpleVueValidator.Validator.create({templates: {
      url: 'Введенное значение не является URL'
    }});

export default {
    mixins: [SimpleVueValidator.mixin],
    validators: {
        "editWork.name": function (value) {
            return Validator.custom(function () {
            if(Validator.isEmpty(value)){
                return "Поле не может быть пустым"
            }
            }) 
        },
        "editWork.desc": function (value) {
            return Validator.custom(function () {
            if(Validator.isEmpty(value)){
                return "Поле не может быть пустым"
            }
            }) 
        },
        "editWork.url": function (value) {
            return Validator.custom(function () {
            if(Validator.isEmpty(value)){
                return "Поле не может быть пустым"
            } else {
                return Validator.value(value).url().templates.url;
            }
            }) 
        }
    },
    data() {
        return {
            editWork: {
                name: '',
                url: '',
                desc: '',
            },
            photo:{},
            title: '',
            author: '',
            renderedPhoto: '' 
        }
    }, 
    components: {},
    methods: {
        handleFileChange(event) {
            // this.photo=event.tagret.files[0];
            // const formData = new FormData();
            // FormData.append('photo', this.photo);
            // FormData.append('title', this.title);
            // FormData.append('author', this.author);
            // axios.post('/works', formData)

            const photo=event.target.files[0];
            renderer(photo).then(pic => {
                this.renderedPhoto = pic;
            })
        }
    }
}
</script>

<style lang="postcss">
    @import "../default.pcss";
    .add-form {
        display: flex;
        width: 100%;

        @include tablets {
            flex-wrap: wrap;
        }
    }
    .file-hidden {
        display: none;
    }
    .new-work {
        display: flex;
        justify-content: space-between;

        @include tablets {
        flex-direction: column;
        max-width: 480px;
        margin: auto;
        }

        &__info {
        flex: 1 1 45%;
        margin-right: 0px;
        @include tablets {
            margin: 0px -10px;
        }
        }

        &__image-loaded {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &__image {
        border: 2px dashed #a1a1a1;
        height: 300px;
        width: 100%;
        background-color: #dee4ed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        flex: 1 1 45%;
        margin-right: 20px;
        cursor: pointer;
        position: relative;

        &:focus {
            outline: none;
        }


        @include tablets {
            padding: 40px;
            min-height: 300px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        &-desc {
            font-weight: 600;
            text-align: center;
            margin-bottom: 25px;
            color: gray;
        }
        }
    }

</style>