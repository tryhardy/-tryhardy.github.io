import user from './user.vue';
import "../../default.pcss";
import {bgGray} from "../../../../.storybook/decor.js";

export default {
    title: "User",
    //decorators: [bgGray]
}

export const defaultView = () => ({
    components: {user},
    template: `
    <user
        userpic="https://picsum.photos/200/300"
        username="Наталия Гаращенко"

    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
} 