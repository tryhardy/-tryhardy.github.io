<template lang="pug">
    .menu-component
        .container
            nav.menu-admin
              ul.menu-admin__list
                li(
                    v-for="item in menu" :key="item.id"
                    :class="{'active' : activeItemId === item.id}"
                  ).menu-admin__item
                    router-link(
                        :to="item.href"
                        @click="changeItem(item)"
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
              console.log(item)
              this.activeItemId = item.id
              this.$emit("ItemCanged", item);
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .menu-admin {

    &__list {
      display: flex;
    }

    &__link {
      padding: 30px;
      display: block;
      text-decoration: none;
      font-weight: normal;
      color: inherit;
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