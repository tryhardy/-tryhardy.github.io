<template lang="pug">
    section.admin-section.admin-recall
        .container
            .admin-section__header
                h1.admin-section__title Блок "Отзывы"
            .admin-section__wrapper(v-show="addBtn")
                .admin-recall__wrapper
                  recallsAddForm
                    
            .admin-section__wrapper.admin-section__wrapper--no-bg
                .admin-about__wrapper
                    recalls
            
</template>

<script>
    import recalls from '../components/recalls/'
    import recallsAddForm from '../components/recalls-add-form/';
    import { mapActions, mapState } from 'vuex';

    export default {
      components: {
        recalls,
        recallsAddForm
      },
      computed: {
        ...mapState('recalls', {
          addBtn: state => state.addBtn,
          editBtn: state => state.editBtn
        }),
      }  
    }
</script>

<style lang="postcss">
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
        padding-top: 0;
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
        padding: 50px;

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
          text-align: left;
          flex: 1;
        }
    }
}

</style>