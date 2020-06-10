<template lang="pug">
  .router
    template(v-if="$route.meta.needAuth")
      .login
        router-view
    template(v-else)
      .admin
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

</template>

<script>
    import  headline from "./components/headline/headline"
    import  adminMenu from "./components/admin-menu/adminMenu"
    import  user from "./components/user/user";
    import { mapActions, mapState } from 'vuex'; 

    export default {
      data() {
        return {
        }
      },
      components: {
          headline,
          adminMenu,
          user,
      },
      methods: {
        ...mapActions('user', ['getUserInfo']),
        handleMenuChange(item) {
            this.$router.push(item.href);
        },
      },
      created(){
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

      &:before {
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
    }

    &--preview {
      display: none;

      @include tablets {
        display: none;
        margin-bottom: 25px;
        margin-top: -25px;
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
        flex: 1;
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