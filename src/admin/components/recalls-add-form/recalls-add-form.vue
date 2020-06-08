<template lang="pug">
  .recalls-add-form-component
    .edit-recall-block(v-if="editBtn")
      .admin-section__second-header
        h2.admin-section__second-title Редактировать отзыв
      .admin-section__container
          .new-recall 
              form(@submit.prevent="editCurrentRecall").add-form
                  label(for="file-work").new-recall__image
                      .new-recall__avatar
                        .new-recall__image-loaded(:style="{backgroundImage:`url(${renderedBackground()})`}")
                      .add-button.add-button--cancel(v-if="previewButton") Изменить превью
                      .add-button.add-button--cancel(v-else) Добавить фото
                  input(id="file-work" name="file" type="file" @change="handleFileEdit").file-hidden
                  .new-recall__info
                      .add-form__row
                          .add-form__column
                              label.add-form__label Имя автора
                                  input(v-model="editedRecall.author").add-form__input
                              .add-form__error {{ validation.firstError('editedRecall.author') }}
                          .add-form__column
                              label.add-form__label Титул автора
                                  input(v-model="editedRecall.occ").add-form__input
                              .add-form__error {{ validation.firstError('editedRecall.occ') }}
                      .add-form__row
                          label.add-form__label Описание
                              textarea(v-model="editedRecall.text").add-form__textarea
                          .add-form__error {{ validation.firstError('editedRecall.text') }}
                      
                      .add-form__row
                      .add-form__column.add-form__column--buttons.add-form__column--right
                          button(@click.prevent="closeAddForm").add-button.add-button--cancel Отмена
                          button(type="submit").add-button Сохранить
    .new-recall-block(v-else)
      .admin-section__second-header
        h2.admin-section__second-title Новый отзыв
      .admin-section__container
          .new-recall 
              form(@submit.prevent="addNewRecall").add-form
                  label(for="file-work").new-recall__image
                      .new-recall__avatar
                        .new-recall__image-loaded(:style="{backgroundImage:`url(${renderedPhoto})`}")
                      .add-button.add-button--cancel(v-if="previewButton") Изменить превью
                      .add-button.add-button--cancel(v-else) Добавить фото
                  input(id="file-work" name="file" type="file" @change="handleFileChange").file-hidden
                  .new-recall__info
                      .add-form__row
                          .add-form__column
                              label.add-form__label Имя автора
                                  input(v-model="review.author").add-form__input
                              .add-form__error {{ validation.firstError('review.author') }}
                          .add-form__column
                              label.add-form__label Титул автора
                                  input(v-model="review.occ").add-form__input
                              .add-form__error {{ validation.firstError('review.occ') }}
                      .add-form__row
                          label.add-form__label Описание
                              textarea(v-model="review.text").add-form__textarea
                          .add-form__error {{ validation.firstError('review.text') }}
                      
                      .add-form__row
                      .add-form__column.add-form__column--buttons.add-form__column--right
                          button(@click.prevent="closeAddForm").add-button.add-button--cancel Отмена
                          button(type="submit").add-button Сохранить

                    
</template>

<script>
  import SimpleVueValidator from 'simple-vue-validator';
  import { mapActions, mapState } from 'vuex';
  import { renderer } from '../../helpers/pictures';
  const token = localStorage.getItem('token') || '';

  const Validator = SimpleVueValidator.Validator;

  export default {
    data() {
      return {
          review: {
            author: '',
            occ: '',
            text: '',
            photo: {}
          },
          renderedPhoto: '',
          previewButton: false
      }
    },
    mixins: [SimpleVueValidator.mixin],
    validators: {
      "review.author": function (value) {
        return Validator.custom(function () {
          if(Validator.isEmpty(value)){
            return "Поле не может быть пустым"
          }
        }) 
      },
      "review.occ": function (value) {
        return Validator.custom(function () {
          if(Validator.isEmpty(value)){
            return "Поле не может быть пустым"
          }
        }) 
      },
      "review.text": function (value) {
        return Validator.custom(function () {
          if(Validator.isEmpty(value)){
            return "Поле не может быть пустым"
          }
        }) 
      },

      // "editRecall.author": function (value) {
      //   return Validator.custom(function () {
      //     if(Validator.isEmpty(value)){
      //       return "Поле не может быть пустым"
      //     }
      //   }) 
      // },
      // "editRecall.occ": function (value) {
      //   return Validator.custom(function () {
      //     if(Validator.isEmpty(value)){
      //       return "Поле не может быть пустым"
      //     }
      //   }) 
      // },
      // "editRecall.text": function (value) {
      //   return Validator.custom(function () {
      //     if(Validator.isEmpty(value)){
      //       return "Поле не может быть пустым"
      //     }
      //   }) 
      // },

      
    },
    methods: {
      ...mapActions('recalls', ['addRecall', 'fetchRecalls', 'addButton', 'editCurRecall']),
      addNewRecall() {
        this.$validate()
        .then((success) => {
          if (success) {
            const recallData = new FormData;
            recallData.append('photo', this.review.photo);
            recallData.append('author', this.review.author);
            recallData.append('occ', this.review.occ);
            recallData.append('text', this.review.text);

            this.addRecall(recallData);
            this.addButton();

            this.review.photo = {};
            this.review.author = '';
            this.review.occ = '';
            this.review.text = '';
            this.renderedPhoto = '';
            this.previewButton = false;
          }
        })
        .catch((error)=> {
            console.log('Не удалось пройти валидацию')
        })
      },
      editCurrentRecall() {
        //this.$validate()
        //.then((success) => {
        //  if (success) {
            console.log(this.editedRecall.photo)
            var editRecallData = {
              'photo': this.editedRecall.photo,
              'author': this.editedRecall.author,
              'occ': this.editedRecall.occ,
              'text': this.editedRecall.text,
              'id': this.editedRecall.id
            }
            
            this.editCurRecall(editRecallData);
            this.fetchRecalls();
          //}
        //})
        //.catch((error)=> {
        //    console.log('Не удалось пройти валидацию')
        //})
      },
      handleFileChange(event) {
        const photo=event.target.files[0];
        this.review.photo = photo;
        renderer(photo).then(pic => {
            this.renderedPhoto = pic;
            this.previewButton = true;
        })
      },
      handleFileEdit(event) {
        const editedPhoto = event.target.files[0];
        this.editedRecall.photo = editedPhoto;
        renderer(editedPhoto).then(pic => {
            this.renderedPhoto = pic;
        })
      },
      closeAddForm(){
        this.addButton();
      },
      renderedBackground(){
        const baseUrl = 'https://webdev-api.loftschool.com/';
        let photoUrl = baseUrl + this.editedRecall.photo;
        if(this.editedRecall.photo  && this.renderedPhoto) {
          return this.renderedPhoto;
        } else {
          this.previewButton = true;
          return photoUrl;
        }
      }

    },
    computed: {
      ...mapState('recalls', {
        editBtn: state => state.editBtn,
        editedRecall: state => state.editedRecall
      })
    },
    created() {
      this.fetchRecalls();
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../default.pcss";

  .admin-section__second-title {
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 1.875rem;
  }

  .new-recall {
    display: flex;
    justify-content: space-between;

    @include phones {
        flex-direction: column;
    }

    &__image {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      flex: 1 1 20%;
      margin-right: 25px;

        @include phones {
            margin-right: 0px;
            margin-bottom: 20px;
        }
    }

    &__avatar {
        border-radius: 50%;
        width:200px;
        height:200px;
        background-color: #dee4ed;
        position:relative;

        &:before {
            content:"";
            background-image: svg-load('user.svg', fill=white, width=100%, height=100%);
            background-repeat: no-repeat;
            background-size: 100px;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        @include tablets {
            width: 150px;
            height: 150px;

            &:before {
                background-size: 80px;
            }
        }

        @include phones {
            width:200px;
            height:200px;
            margin-bottom: 20px;
        }
    }

    &__info {
        flex: 1 1 80%;
    }
  }

  .new-recall__image {
    background-color: transparent;
    margin-right: 40px;
    cursor: pointer;
    &:focus {
      outline: none;
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
      position: relative;

    }

    &__column {
      display: flex;
      flex: 1 1 50%;
      max-width: 48%;
      position: relative;

      @include tablets {
        max-width: 10044%;
      }

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
      position: relative;
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
      position: relative;
    }

    &__error {
      color: red;
      font-weight: 500;
      position: absolute;
      top: 100%;
    }
  }

  .add-button--cancel {
    text-align: center;
  }

  .new-recall__avatar {
    overflow: hidden;
  }

  .new-recall__image-loaded {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>