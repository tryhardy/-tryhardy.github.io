<template lang="pug">
    section.admin-section.admin-about
        .container
            .admin-section__header
                h1.admin-section__title Блок "Обо мне" 
                button.add-group Добавить группу
            .admin-about__wrapper
                skills
</template>

<script>
import skills from '../components/skills/skills'

export default {
    components: {
        skills
    }
}
</script>

<style lang="postcss">

</style>