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
                            .new-work__image
                                p.new-work__image-desc Перетащите или нажмите кнопку для загрузки изображения
                                button.add-button Загрузить
                                button.add-button.add-button--cancel.add-button--preview Изменить превью
                            .new-work__info
                                form.add-form
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
        }
    }, 
    components: {

    }
}
</script>

<style lang="postcss">
    @import "../default.pcss";
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
        }
        }
    }

</style>