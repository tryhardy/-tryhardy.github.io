<template lang="pug">
    .maincontent__wrapper
        headline
            user(
                userpic="https://picsum.photos/200/200"
                username="Наталия Гаращенко"
            )
            adminMenu



</template>

<script>
    import  {headline} from "../../components/headline/headline"
    import  {adminMenu} from "../../components/admin-menu/adminMenu"
    import  {user} from "../../components/user/user"

    export default {
        components: {
            headline,
            adminMenu,
            user
        }
    }
</script>