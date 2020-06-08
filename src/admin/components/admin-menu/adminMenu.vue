<template lang="pug">
    .menu-component
        .container
            nav.menu-admin
              ul.menu-admin__list
                li(
                    v-for="item in menu" :key="item.id"
                    :class="{'active' : activeItemId === item.id}"
                    @click="changeItem(item)"
                  ).menu-admin__item
                    router-link(
                        :to="item.href"
                    ).menu-admin__link {{item.title}}

                    
</template>
<script>
    const menu = [
        {id: 0, title: "Обо мне", href:"/"},
        {id: 1, title: "Работы", href:"/works"},
        {id: 2, title: "Отзывы", href:"/recall"},
    ]

    export default {
        data() {
            return {
                menu,
                activeItemId: 0,
            }
        },
        methods: {
            changeItem(item) {
              this.activeItemId = item.id
              this.$emit("ItemCanged", item);
            }
        },
        mounted(){
          if (window.location.hash == '#' + this.menu[0].href){
            this.activeItemId = this.menu[0].id
          } else if (window.location.hash == '#' + this.menu[1].href) {
            this.activeItemId = this.menu[1].id
          } else if (window.location.hash == '#' + this.menu[2].href) {
            this.activeItemId = this.menu[2].id
          }
        }
    }
</script>

<style lang="postcss" scoped>
    @import "../../default.pcss";
    .menu-admin {

    &__list {
      display: flex;

      @include phones {
        //justify-content: center;
      }
    }

    &__link {
      padding: 30px;
      display: block;
      text-decoration: none;
      font-weight: normal;
      color: inherit;

      @include phones {
        padding: 1rem;
      }
    }

    .active {
      .menu-admin__link {
        color: $blue-color;
        font-weight: 600;
        border-bottom: 2px solid currentColor;
      }
    }
  }
</style>