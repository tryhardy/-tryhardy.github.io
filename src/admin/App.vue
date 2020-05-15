<template lang="pug">
  .maincontent__wrapper
    header.header-admin
        .header-admin__top
          .container.container--flex
            .header-admin__left
              .user
                .user__avatar
                  .avatar 
                    img(src="../images/content/user.jpg").avatar__img
                .user__name Наталия Гаращенко
              .header-admin__title Панель администрирования
            .header-admin__right
              a(href="/").logout Выйти
        .header-admin__bottom
          .container
            nav.menu-admin
              - var menuList = ["Обо мне", "Работы", "Отзывы"]
              ul.menu-admin__list
                each item in menuList
                  li.menu-admin__item
                    a(href="#").menu-admin__link #{item}
        
    section.admin-section.admin-about
      .container
        .admin-section__header
          h1.admin-section__title Блок "Обо мне" 
          button.add-group Добавить группу
        .admin-about__wrapper
          ul.groups__list
            li.groups__item
              .group
                form.group__form
                  .group__row
                    .group__input
                      input(type="text" name="GroupTitle" placeholder="Название новой группы")
                    .group__buttons
                      button.group__button.group__button--yes ДА                     
                      button.group__button.group__button--no НЕТ


                  .group__row
                    ul.group__cells
                      li.group__cell
                    .group__add-cells
                      .group__input
                        input(type="text" name="GroupItem" placeholder="Новый навык").group__cell-name
                      .group__input
                        input(type="number" name="GroupItemValue" value="100").group__cell-value
                      .group__add
                        button.group__button ADD
            
            li.groups__item
              .group
                form.group__form
                  .group__row
                    .group__input
                      input(type="text" name="GroupTitle" placeholder="Название новой группы" value="Workflow" disabled)
                    .group__buttons
                      button.group__button.group__button--yes ДА                     
                      button.group__button.group__button--no НЕТ
                  .group__row
                    - var list = [["Git", "100"], ["Terminal", "90"], ["Gulp", "50"], ["Webpack", "70"]];
                    ul.group__cells
                      each item in list
                        li.group__cell
                          input(name="CellName" type="text" value=`${item[0]}` disabled).group__cell-name
                          input(name="CellValue" type="text" value=`${item[1]}` disabled).group__cell-value
                          .group__buttons
                            button.group__button.group__button--edit EDIT                     
                            button.group__button.group__button--delete DELETE


                    .group__add-cells
                      .group__input
                        input(type="text" name="GroupItem" placeholder="Новый навык").group__cell-name
                      .group__input
                        input(type="number" name="GroupItemValue" value="100").group__cell-value
                      .group__add
                        button.group__button ADD
            
            li.groups__item
              .group
                form.group__form
                  .group__row
                    .group__input
                      input(type="text" name="GroupTitle" placeholder="Название новой группы" value="Workflow" disabled)
                    .group__buttons
                      button.group__button.group__button--yes ДА                     
                      button.group__button.group__button--no НЕТ
                  .group__row
                    - var list = [["Git", "100"], ["Terminal", "90"], ["Gulp", "50"], ["Webpack", "70"]];
                    ul.group__cells
                      each item in list
                        li.group__cell
                          input(name="CellName" type="text" value=`${item[0]}` disabled).group__cell-name
                          input(name="CellValue" type="text" value=`${item[1]}` disabled).group__cell-value
                          .group__buttons
                            button.group__button.group__button--edit EDIT                     
                            button.group__button.group__button--delete DELETE
                    .group__add-cells
                      .group__input
                        input(type="text" name="GroupItem" placeholder="Новый навык").group__cell-name
                      .group__input
                        input(type="number" name="GroupItemValue" value="100").group__cell-value
                      .group__add
                        button.group__button ADD







</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import '../styles/blocks/*.pcss';

  body {
    margin: 0;
  }

  .container--flex {
    display: flex;
    align-items: center;
  }

  .header-admin {

    &__top {
      width: 100%;
      background-color: #424267;
      color: white;
      padding: 15px 0;
    }

    &__left {
      display: flex;
      align-items: center;
      flex: 1;
    }
    
    &__title {
      font-size: 14px;
      opacity: .5;
    }
    
  }

  .logout {
    font-size: 14px;
    opacity: .5;
  }

  .user {
    display: flex;
    align-items: center;
    margin-right: 1.875rem;

    &__name {
      font-size: 18px;
      font-weight: 600;
    }

    &__avatar {
      min-width: 3.125rem;
      width: 3.125rem;
      height: 3.125rem;
      margin-right: 1.875rem;
    }
  }

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
        color: #383bcf;
        font-weight: 600;
        border-bottom: 2px solid currentColor;
      }
    }
  }

  .admin-section {
    padding-top: 60px;
    background-color: #f6f9fe;

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 60px;
    }

    &__title {
      font-weight: bold;
      font-size: 21px;
      margin-right: 40px;
    }
  }


</style>