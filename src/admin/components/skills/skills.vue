<template lang="pug">
  .skills
    ul.skills__list     
      li.skills__item(v-for="cat in categories" :key="cat.id")
        addGroup(:cat="cat", :catName="cat.category")

                    
</template>

<script>
  import addGroup from "../add-groups/add-group";
  import { mapActions, mapState } from 'vuex';
  const token = localStorage.getItem('token') || '';


  export default {
    components: {
      addGroup
    },
    methods: {
      ...mapActions('categories',['fetchCategories']),
    },
    computed: {
      ...mapState('categories', {
        categories: state => state.categories
      })
    },
    created() {
        this.fetchCategories();
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../default.pcss";

  .skills {
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

</style>