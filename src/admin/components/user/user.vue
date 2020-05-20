<template lang="pug">
    .user-component
      .user
          .user__avatar
              .avatar 
                  img(:src="userpic").avatar__img
          .user__info  
              .user__name {{username}}
</template>

<script>
export default {
    props: ['userpic', 'username']
}
</script>

<style lang="postcss" scoped>

.user {
  display: flex;
  align-items: center;
  width: 100%;

  &__info {
    display: flex;
    flex: 1;
    align-items: center;

  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    margin-right: 1.875rem;
  }

  &__avatar {
    min-width: 3.125rem;
    width: 3.125rem;
    height: 3.125rem;
    margin-right: 1.875rem;
  }
}

.avatar {
  overflow: hidden;
  border-radius:50%;
  height: 100%;

  &--shadow {
    box-shadow: 0px 10px 15px rgba(0,0,0,0.5);
  }
}

.avatar__img {
  display: block;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
}



</style>