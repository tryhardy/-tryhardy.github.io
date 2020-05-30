<template lang="pug">
    section.admin-section.admin-recall
        .container
            .admin-section__header
                h1.admin-section__title Блок "Отзывы"
            .admin-section__wrapper
                .admin-recall__wrapper
                    .admin-section__second-header
                        h2.admin-section__second-title Новый отзыв
                    .admin-section__container
                        .new-recall 
                            form.add-form
                                button.new-recall__image
                                    .new-recall__avatar
                                    button.add-button.add-button--cancel Добавить фото
                                .new-recall__info
                                    .add-form__row
                                        .add-form__column
                                            label.add-form__label Имя автора
                                                input(v-model="review.name").add-form__input
                                            .add-form__error {{ validation.firstError('review.name') }}
                                        .add-form__column
                                            label.add-form__label Титул автора
                                                input(v-model="review.position").add-form__input
                                            .add-form__error {{ validation.firstError('review.position') }}
                                    .add-form__row
                                        label.add-form__label Описание
                                            textarea(v-model="review.desc").add-form__textarea
                                        .add-form__error {{ validation.firstError('review.desc') }}
                                    
                                    .add-form__row
                                    .add-form__column.add-form__column--buttons.add-form__column--right
                                        button.add-button.add-button--cancel Отмена
                                        button.add-button Сохранить
                    
            .admin-section__wrapper.admin-section__wrapper--no-bg
                .admin-about__wrapper
                    .admin-addwork__wrapper
                        .recall
                            ul.recall__list
                                li.recall__item.recall__item--addwork
                                    button.add-button.add-button--square
                                        .add-button__icon
                                        p.add-button__text Добавить отзыв
                                li.recall__item
                                    .recall__item-wrapper
                                        .recall__item-author
                                            .recall__avatar
                                                .avatar
                                                    img(src='https://picsum.photos/200/300').avatar__img
                                            .recall__author-info
                                                h3.recall__item-name Иван Иванов
                                                p.recall__item-position Президент РФ
                                    
                                        .recall__item-content
                                            p.recall__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                            .recall__item-buttons
                                                    button.recall__item-button.recall__item-button--edit Править
                                                    button.recall__item-button.recall__item-button--remove Удалить
            
</template>

<script>
    import SimpleVueValidator from 'simple-vue-validator';

    const Validator = SimpleVueValidator.Validator.create({templates: {
      url: 'Введенное значение не является URL'
    }});

    export default {
      mixins: [SimpleVueValidator.mixin],
      validators: {
        "review.name": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "review.position": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "review.desc": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        
      },
      data() {
        return {
          review: {
            name: '',
            position: '',
            desc: ''
          }
        }
      },
      components: {},
      methods: {
        submit() {
        this.$validate()
        .then((success) => {
            if (success) {
            console.log('Validation succeeded!');
            }
        })
        .catch((error)=> {
            console.log('Validation failed!')
        })
        },
      }
    }
</script>

<style lang="postcss" scoped>
@import "../default.pcss";

.admin-section {
    padding-top: 60px;
    flex: 1;

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 60px;

      @include phones {
        flex-wrap:wrap;
        padding: 0 1.6rem;
      }
    }

    &__title {
      font-weight: bold;
      font-size: 21px;
      margin-right: 40px;

      @include phones {
        width: 100%;
        margin-right: 0;
      }
    }

    &__wrapper {
      background-color: white;
      box-shadow: 0.3125rem 0 1.25rem rgba(0,0,0,.07);
      padding: 30px 20px;
      margin-bottom: 30px;
      
      &--no-bg {
        background-color: transparent;
        box-shadow: none;
        padding: 30px 0px;
      }
    }

    &__second-header {
      border-bottom: 1px solid $light-gray;
      padding: 0 10px;
      margin-bottom: 50px;
    }

    &__second-title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 30px;
    }

    &__container {
      padding: 0 10px;
    }
  }

.add-button {
    border-radius: 40px;
    padding: 20px 50px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(45deg,#006aed,#3f35cb);
    font-size: 16px;

    &:focus {
        outline: none;
    }

    &--cancel {
        background: transparent;
        color: $blue-color;
        text-transform: none;

        @include tablets {
        padding-left: 0;
        padding-right: 0px;
        }
    }

    &--square {
        border-radius: 0;
        width: 100%;
        text-transform: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include phones {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        }
    }

    &--preview {
        display: none;

        @include tablets {
        display: none;
        margin-bottom: 25px;
        margin-top: -25px;
        }
    }

    &__icon {
        content: "";
        border: 2px solid white;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-image: svg-load('remove.svg', fill=white, width=100%, height=100%);
        background-repeat: no-repeat;
        background-size: 40px;
        background-position: 50%;
        transform: rotate(45deg);
        margin-bottom: 20px;

        @include phones {
        width: 80px;
        height: 80px;
        background-size: 20px;
        margin-bottom: 0;
        margin-right: 20px;
        }
    }

    &__text {
        text-align: center;
        width: 80%;
        text-align: center;
        line-height: 1.5;
        font-size: 16px;

        @include phones {
        width: auto;
        }
    }
}
.add-form {
    font-size: 16px;
    font-weight:600;
    width: 100%;
    display: flex;
    &__row {
      margin-bottom: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

    }

    &__column {
      display: flex;
      flex: 1 1 50%;
      max-width: 48%;

      &--buttons {
        text-align: right;
        max-width: 100%;
        display: flex;
        justify-content: flex-end;

        @include tablets {
          justify-content: center;

          .add-button--cancel {
            margin-right: 20px;
          }
        }
      }

      &--right {
        justify-content: flex-end;

        @include tablets {
          .add-button--cancel {
            margin-right: 20px;
          }
        }

        @include phones {
          justify-content: center;
        }
      }

      @include tablets {
        min-width: 70%;
        margin-bottom: 30px;
      }

      @include phones {
          margin-bottom: 0;
          min-width: 100%;
          margin-bottom: 20px;
        }
    }

    &__label {
      width: 100%;
    }

    &__input {
      width: 100%;
      border: 0;
      padding: 20px 0;
      border-bottom: 1px solid currentColor;
      font-weight: inherit; 
      font-size: inherit;
      color: $text-color;
    
      &:focus {
        outline: none;
      }
    }
    
    &__textarea {
      resize: vertical;
      width: 100%;
      border: 1px solid $light-gray;
      padding: 20px;
      margin-top: 10px;
      min-height: 150px;

      &:focus {
        outline: none;
      }
    }

    &__label {
      color: $light-gray;
      
    }
  }
</style>