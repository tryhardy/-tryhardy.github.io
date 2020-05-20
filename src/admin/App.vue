<template lang="pug">
    .maincontent__wrapper
        form.form
          input(type="text" placeholder="login" v-model="user.login")
          input(type="password" placeholder="password" v-model="user.password")
          button(type="submit") Login
      
</template>

<script>

    import {Validator} from 'simple-vue-validator';

    export default {
      data() {
        return {
          mixins: [SimpleVueValidator.mixin],
          validators: {
            "user.login": function (value) {
              return Validator.custom(function () {

              })               
            }
          },
          user: {
            login: 'user',
            password: '1234'

          }
        }
      }
    }
</script>
