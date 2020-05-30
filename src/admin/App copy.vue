<template lang="pug">
  .router
    template(v-if="false")
    template(v-else)
      .maincontent__wrapper
        headline
            user(
                userpic="https://picsum.photos/200/200"
                username="Артем Селиванов"
            )
        adminMenu(
            @itemChanged="handleMenuChange"
        )  
        router-view

    .maincontent__wrapper
      headline
          user(
              userpic="https://picsum.photos/200/200"
              username="Артем Селиванов"
          )
      adminMenu(
          @itemChanged="handleMenuChange"
      )  

      section.admin-section.admin-about
        .container
            .admin-section__header
                h1.admin-section__title Блок "Обо мне" 
                button.add-group Добавить группу
            .admin-about__wrapper
                .skills
                  ul.groups__list
                      li.groups__item
                        addGroup
                      
                      li(v-for="cat in category" :key="cat.id").groups__item
                        addGroup(
                          :cat-id="cat.id"
                          :cat-name="cat.category"
                          :cat-skills="cat.skills"
                          @createCategory="createCategory"
                          @skillAdded="addSkill"
                          )
      
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
                            .new-recall__image
                                .new-recall__avatar
                                button.add-button.add-button--cancel Добавить фото
                            .new-recall__info
                                form.add-form
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
    import  headline from "./components/headline/headline"
    import  adminMenu from "./components/admin-menu/adminMenu"
    import  user from "./components/user/user"
    import  addGroup from "./components/add-groups/add-group"
    
    import SimpleVueValidator from 'simple-vue-validator';
    import axios from "axios";

    const Validator = SimpleVueValidator.Validator.create({templates: {
      url: 'Введенное значение не является URL'
    }});
    const baseUrl = 'https://webdev-api.loftschool.com/';
    const catUrl = baseUrl+'/categories';
    const token = localStorage.getItem('token') || "";

    axios.defaults.baseURL = baseUrl;
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

    export default {
      mixins: [SimpleVueValidator.mixin],
      validators: {
        "group.name": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "group.skillName": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "group.isNumber": function (value) {
          return Validator.custom(function () {
            if (!Validator.isEmpty(value)) {
              var number = parseInt(value);
              if (isNaN(number)) {
                return 'Можно ввести только число'
              }
              if(number > 100) {
                return 'Значение не может превышать 100%'
              }
            } else {
              return 'Поле не может быть пустым'
            }

          });
        },
        "groupAdd.name": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "groupAdd.skillName": function (value) {
          return Validator.custom(function () {
            if(Validator.isEmpty(value)){
              return "Поле не может быть пустым"
            }
          }) 
        },
        "groupAdd.isNumber": function (value) {
          return Validator.custom(function () {
            if (!Validator.isEmpty(value)) {
              var number = parseInt(value);
              if (isNaN(number)) {
                return 'Можно ввести только число'
              }
              if(number > 100) {
                return 'Значение не может превышать 100%'
              }
            } else {
              return 'Поле не может быть пустым'
            }

          });
        },

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
        },
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
          isNumber: '100',
          group: {
            title: '',
          },
          category:[],
          groupAdd: {
            name: '',
            skillName: '',
            isNumber: "100"
          },

          editWork: {
            name: '',
            url: '',
            desc: '',
          },

          review: {
            name: '',
            position: '',
            desc: ''
          }
        }
      },
      components: {
          headline,
          adminMenu,
          user,
          addGroup
      },
      created() {
          this.fetchCategory();
          this.fetchSkills();
      },
      methods: {
          handleMenuChange(item) {
              this.$router.push(item.href);
          },
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
          createCategory(title) {
            console.log(title)
            this.$validate()
            .then((success) => {
              if (success) {
                  axios.post('/categories', {title: title})
                  .then(response => {
                      this.category.unshift(response.data);
                  })
                  .catch (error => {
                      console.log(error.response.data.errors.title[0])
                  })
              } else {
                  console.log('Не удалось пройти валидацию')
              }
            })
            .catch(error=> {             
            })
          },
          fetchCategory() {
              axios.get("/user")
              .then(response => {
                  const user = response.data.user.id;
                  axios.get(`/categories/${user}`)
                  .then (response => {
                    
                      this.category = response.data;
                  })
                  .catch(error => {

                  })
              })
              .catch(error => {
              })
          },
          fetchSkills() {
              axios.get("/user")
              .then(response => {
                  const user = response.data.user.id;
                  axios.get(`/skills/${user}`)
                  .then (response => {
                      this.category.skills = response.data;
                      console.log(this.category)
                  })
                  .catch(error => {

                  })
              })
              .catch(error => {
              })
          },
          addSkill(newSkill) {
            this.category = this.category.map(cat => {
                console.log(cat.id)
                if(cat.id === newSkill.category) {
                    cat.skills.push(newSkill);
                }
            })
          }
      }
    }
</script>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
    @import "./default.pcss";
    @import "../styles/blocks/*.pcss";

  body {
    margin: 0;
  }

  p {
    line-height: 1.5;
  }

  .maincontent {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #f6f9fe;
    background-image: url("../images/content/admin-bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &__wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .container {
    max-width: 1080px;

    @include phones {
      width: 100%;
    }
  }

  .container--flex {
    display: flex;
    align-items: center;
  }

  .groups {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      flex: 1 1 48%;
      padding: 25px 15px 30px;
      background-color: white;
      margin-right: 30px;
      margin-top: 30px;
      max-width: 48.8%;
      box-shadow: 5px 0 20px rgba(0,0,0,0.07);

      &:first-child {
        margin-top: 0px;
      }

      &:nth-child(2) {
        margin-top: 0px;
      }

      &:nth-child(2n) {
        margin-right: 0px;
      }

      @include tablets {
        margin-right: 1rem;
      }

      @include phones {
        flex: 1 1 100%;
        min-width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }

  .group {
    height: 100%;

    &__wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    

    &__input {
      border: none;
      border-bottom: 1px solid transparent;
      padding: 10px 0;
      transition: all .3s;

      

      &--name {
        min-width: 60%;
      }

      &--value {
        max-width: 60px;
        position: relative;
        margin-right: 30px;
        border-bottom: 1px solid black;
        padding: 0;

        &:after {
          content: "%";
          position:absolute;
          right: 10%;
          color: #414c63;
          font-weight: 400;
          top: 50%;
          transform: translateY(-50%);
        }
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
      &::-webkit-input-placeholder { font-weight: 600; color:$light-gray;}
      &::-moz-placeholder          { font-weight: 600; color:$light-gray;}
      &:-moz-placeholder           { font-weight: 600; color:$light-gray;}
      &:-ms-input-placeholder      { font-weight: 600; color:$light-gray;}

    }

    &__row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @include tablets {
        flex-wrap: nowrap;
      }

      &--skills {
        flex: 1 1 100%;
        flex-direction: column;
      }
    }

    &__row--name {
        padding : 0px 0px 20px 10px;
        border-bottom: 1px solid #dedee0;
    }

    &__add-cells {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__cell-value {
      padding: 15px 5px;
      position: relative;
    }

    &__cell-name {
      padding: 15px 10px;
      margin-right: 10px;

      &::-webkit-input-placeholder { font-weight: 500; color:$light-gray;}
      &::-moz-placeholder          { font-weight: 500; color:$light-gray;}
      &:-moz-placeholder           { font-weight: 500; color:$light-gray;}
      &:-ms-input-placeholder      { font-weight: 500; color:$light-gray;}
      &:placeholder                { font-weight: 500; color:$light-gray;}
    }
  }

  .add-group {
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    color: $blue-color;
    padding: 10px 10px 10px 40px;
    position: relative;

    @include phones {
      margin-top: 30px;
    }

    &:focus {
      outline: none;
    }

    &:before {
      content: "+";
      position: absolute;
      width: 1.875rem;
      height: 1.875rem;
      left: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      color: white;
      background: linear-gradient(45deg, #006aed, #3f35cb);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      font-weight: 600;
    }
  }

  .group__button {
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

  .group__buttons {
    &-active {
      display: flex;
    }
    &-inactive {
      display: none;
    }
  }

  .active {
    .group__buttons-active {    
      display: none;
    }
    .group__buttons-inactive {
      display: flex;
    }
  }

  .group__button-plus {
      font-size: 30px;
      font-weight: 600;
      color: $blue-color;
      position: relative;
      content: "+";
      width: 40px;
      height: 40px;
      color: white;
      background: linear-gradient(45deg, #006aed, #3f35cb);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      font-weight: 600;
    }
  
  .admin-addwork {
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