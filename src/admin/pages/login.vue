<template lang="pug">
  .auth
    .auth__wrapper
      form(class="auth__form" @submit.prevent="login")
        .auth__title
          h1.auth__header Авторизация
        .auth__close
          button.auth__close-button
        .auth__row
          label.auth__label Логин
            .auth__icon.auth__icon--login
              image(src="../images/icons/user.svg")
            input(class="auth__input" type="text" placeholder="login" v-model="user.name" autocomplete="username")
          .error-box(style="color:red") {{ validation.firstError('user.name') }}
        .auth__row
          label.auth__label Пароль
            .auth__icon.auth__icon--password
            input(class="auth__input" type="password" placeholder="password" v-model="user.password" autocomplete="current-password")
          .error-box(style="color:red") {{ validation.firstError('user.password') }}
        .auth__row
          button(type="submit").auth__button
          .error-box(style="color:red")#error-auth
            
</template>

<script>
    import $axios from '../requests'
    import SimpleVueValidator from 'simple-vue-validator';
    import { mapActions} from 'vuex';
    const Validator = SimpleVueValidator.Validator;

    export default {
      mixins: [SimpleVueValidator.mixin],
      validators: {
        "user.name": function (value) {
          return Validator.custom(function () {
            if(value.length <= 4){
              return "Логин должен быть более 4 символов"
            }
          }) 
        },
        "user.password": function (value) {
          return Validator.custom(function () {
            if(value.length <= 7){
              return "Пароль должен содержать 8 и более символов"
            }
          }) 
        }                      
      },
      data() {
        return {
          user: {
            name: '',
            password: ''
          }
        }
      },
      methods: {
        ...mapActions('user', ['getUserInfo']),
        login() {
          this.$validate()
          .then((success) => {
            if (success) {
              $axios.post('/login', {
                name: this.user.name,
                password: this.user.password
              })
              .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                this.getUserInfo()
                this.$router.replace('/')
              })
              .catch (error => {
                if (error) {
                  console.log("Не удалось отправить запрос на сервер")
                }
              })
            } else {
              console.log("Не удалось пройти валидацию")
            }
          })
          .catch ((error) => {
            
          })
        }
      },
      created() {
      }
      
    }
</script>

<style lang="postcss" scoped>
  @import "../default.pcss";
  .maincontent {
    width:100%;
    height: 100%;
    flex: 1;
  }

  .auth {
    width:100%;
    height: 100vh;
    background-image: url("../../images/content/admin-bg.jpg");
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__form {
      @include phones {
        width: 100%;
      }
    }
    

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: $text-color;
      opacity: .5;
      top: 0;
    }

    &__close {
      &-button {
        position: absolute;
        top: 20px;
        right: 30px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        background-image: svg-load('remove.svg', fill=$text-color, width=100%, height=100%);
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;
      }
    }

    &__button {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 1.875rem 6.25rem;
      color: #fff;
      border-radius: 30px 5px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-content: center;
      justify-content: center;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200%;
        background: -webkit-gradient(linear,left top,right top,from(#4a00ed),color-stop(50%,#9300e8),to(#4a00ed));
        background: linear-gradient(90deg,#4a00ed 0,#9300e8 50%,#4a00ed);
        transition: all .3s;
      }
      
      &:after {
        content: "Отправить";
        position: relative;
      }

      &:hover:before {
        left: -100%;
      }

      &:focus {
        outline: none;
      }
    }

    &__row {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      flex-direction: column;

      @include phones {
        margin-bottom: 60px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__wrapper {
      z-index: 9999;
      background-color: white;
      position: relative;
      padding: 55px 70px;
      min-width: 35rem;

      @include phones {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__header {
      color: $text-color;
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 36px;
      text-align: center;

      @include phones {
        margin-bottom: 60px;
      }
    }

    &__label {
      display: flex;
      flex-direction: column;
      padding-left: 50px;
      position: relative;
      border-bottom: 1px solid $text-color;
      color: $light-gray;
      font-weight: 600;
      width: 100%;
      transition: all .3s;
    }

    &__input {
      border: none;
      padding: 25px 0;
      font-weight: 600;
      font-size: 18px;
      flex: 1;

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {color:$light-gray;}
      &::-moz-placeholder          {color:$light-gray;}
      &:-moz-placeholder           {color:$light-gray;}
      &:-ms-input-placeholder      {color:$light-gray;}
    }

    &__icon {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 0;
      bottom: 15px;

      &--login {
        background-image: svg-load('user.svg', fill=$light-gray, width=100%, height=100%);
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: center;
      }

      &--password {
        background-image: svg-load('lock.svg', fill=$light-gray, width=100%, height=100%);
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: center;
      }
    }
  }
</style>