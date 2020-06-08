<template lang="pug">
  .recalls-add-component
    button(@click="showAddButton").add-button.add-button--square
      //.add-button__icon
      p.add-button__text Добавить отзыв
                    
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    methods: {
      ...mapActions('recalls', ['addButton']),
      showAddButton(){
        this.addButton();
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../default.pcss";
  .recalls-add-component {
    width: 100%;
    display: flex;
  }

  ..add-button--square {
    padding: 50px;
  }

</style>