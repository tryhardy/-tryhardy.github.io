<template lang="pug">
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
                    ul.groups__list
                        li.groups__item
                            .group
                                form(v-on:submit.prevent="submit").group__form
                                    .group__row.group__row--name.active
                                        .group__input.group__input--name
                                          input(
                                            type="text" 
                                            v-model="groupAdd.name" 
                                            name="GroupTitle" 
                                            placeholder="Название новой группы"
                                          ).group__input-name
                                          .group__error {{ validation.firstError('groupAdd.name') }}
                                        .group__buttons
                                            .group__buttons-active
                                                button.group__button.group__button--edit                     
                                                button.group__button.group__button--delete 
                                            .group__buttons-inactive
                                                button(type="submit").group__button.group__button--yes                    
                                                button.group__button.group__button--no


                                    .group__row.group__row--skills
                                        ul.group__cells
                                            li.group__cell
                                        .group__add-cells
                                            .group__input.group__input--cell-name
                                              input(
                                                type="text" 
                                                name="GroupItem" 
                                                placeholder="Новый навык"
                                                v-model="groupAdd.skillName"
                                                ).group__cell-name
                                              .group__error {{ validation.firstError('groupAdd.skillName') }}
                                            .group__input.group__input--value
                                              input(
                                                type="text" 
                                                name="GroupItemValue" 
                                                value="100"
                                                v-model="groupAdd.isNumber"
                                                ).group__cell-value
                                              .group__error {{ validation.firstError('groupAdd.isNumber') }}
                                            .group__add
                                                button(type="button" @click="addGroup").group__button.group__button-plus +
                        
                        li.groups__item
                            .group
                                form.group__form
                                    .group__row.group__row--name.active
                                        .group__input.group__input--name
                                          input(
                                            type="text" 
                                            name="GroupTitle" 
                                            placeholder="Название новой группы" 
                                            value="Workflow"
                                            v-model="group.name" 
                                          ).group__input-name
                                          .group__error {{ validation.firstError('group.name') }}
                                        .group__buttons
                                            .group__buttons-active
                                                button.group__button.group__button--edit                     
                                                button.group__button.group__button--delete 
                                            .group__buttons-inactive
                                                button.group__button.group__button--yes                    
                                                button.group__button.group__button--no
                                    .group__row.group__row--skills
                                        - var list = [["Git", "100"], ["Terminal", "90"], ["Gulp", "50"], ["Webpack", "70"]];
                                        ul.group__cells
                                            each item in list
                                                li.group__cell
                                                    .group__cell-wrapper
                                                        input(name="CellName" type="text" value=`${item[0]}` disabled).group__cell-name
                                                    .group__cell-wrapper.group__cell-wrapper--number
                                                        input(name="CellValue" type="text" value=`${item[1]}` disabled).group__cell-value
                                                    .group__buttons
                                                        .group__buttons-active
                                                            button.group__button.group__button--edit                     
                                                            button.group__button.group__button--delete 
                                                        .group__buttons-inactive
                                                            button.group__button.group__button--yes                    
                                                            button.group__button.group__button--no
                                        .group__add-cells
                                            .group__input.group__input--cell-name
                                                input(
                                                  type="text" 
                                                  name="GroupItem" 
                                                  placeholder="Новый навык"
                                                  v-model="group.skillName"
                                                  ).group__cell-name
                                                .group__error {{ validation.firstError('group.skillName') }}
                                            .group__input.group__input--value
                                              input(
                                                type="text" 
                                                name="GroupItemValue" 
                                                value="100"
                                                v-model="group.isNumber"
                                                ).group__cell-value
                                              .group__error {{ validation.firstError('group.isNumber') }}
                                            .group__add
                                                button.group__button.group__button-plus +
        
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
    import SimpleVueValidator from 'simple-vue-validator';
    

    const Validator = SimpleVueValidator.Validator.create({templates: {
      url: 'Введенное значение не является URL'
    }});

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
            name: 'Новая группа',
            skillName: 'Новый навык',
            isNumber: "100"
          },

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
          user
      },
        methods: {
            handleMenuChange(item) {
                this.$router.push(item.href);
            },
            errorVisible() {

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
            addGroup(e) {
              let form = e.target.closest(".group__form")
              console.log(form)
            }
        }
    }
</script>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
    @import "./default.pcss";

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

    &__row {
      position: relative;
    }

    &__input {
      position: relative;
    }

    &__error {
      //display: none;
      position: absolute;
      top: 100%;
      color: red;
      //background-color: #cd1515;
      //color: white;
      //padding: 15px 20px;

      /*&:before {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        transform: rotate(45deg) translateX(-50%);
        left: 50%;
        bottom: 50%;
        background-color: #cd1515;
      }*/
    }

    &__cell-value {

    }

    &__cell-wrapper {
      flex: 1;

      &--number {
        max-width: 100px;
        position:relative;

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

        input {
          max-width: 40px;
        }
      }
    }

    input {
      border: none;
      width: 100%;
      font-size: 16px;
      border-bottom: 1px solid transparent;
      transition: all .3s;
      position: relative;
      

      &[disabled] {
        background: transparent;
      }

      &:focus {
        outline: none;
      }
    }

    &__buttons {
      display: flex;
      align-items: center;
    }

    &__cell {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        padding-bottom: 30px;
      }

      &-value {
        max-width: 60px;
      }

      &-name {
        flex: 1 1 100%;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      min-height: 100%;
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

      &--cell-name {
        margin-right: 10px;
        border-bottom: 1px solid black;
        padding: 0;
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

    .group__input--name {
      border-bottom: 1px solid black;
    }

    .group__cell-name,
    .group__cell-value {
      border-bottom: 1px solid black;
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