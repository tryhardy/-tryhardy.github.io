<template lang="pug">
    section.admin-section.admin-addwork
        .container
            .admin-section__header
                h1.admin-section__title Блок "Работы"
            works
</template>

<script>
import works from '../components/works'


export default {
    components: {
        works
    }
}
</script>

<style lang="postcss">
    @import "../default.pcss";
    .add-form {
        display: flex;
        width: 100%;

        @include tablets {
            flex-wrap: wrap;
        }
    }
    .file-hidden {
        display: none;
    }
    .new-work {
        display: flex;
        justify-content: space-between;

        @include tablets {
        flex-direction: column;
        max-width: 480px;
        margin: auto;
        }

        &__info {
        flex: 1 1 45%;
        margin-right: 0px;
        @include tablets {
            margin: 0px -10px;
        }
        }

        &__image-loaded {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &__image {
        border: 2px dashed #a1a1a1;
        height: 300px;
        width: 100%;
        background-color: #dee4ed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        flex: 1 1 45%;
        margin-right: 20px;
        cursor: pointer;
        position: relative;

        &:focus {
            outline: none;
        }


        @include tablets {
            padding: 40px;
            min-height: 300px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        &-desc {
            font-weight: 600;
            text-align: center;
            margin-bottom: 25px;
            color: gray;
        }
        }
    }

</style>