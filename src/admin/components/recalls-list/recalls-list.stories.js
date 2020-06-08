import recallsList from './recalls-list.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

export default {
    title: "recalls-list"
}

export const defaultView = () => ({
    components: {recallsList},
    methods,
    template: `
    <recallsList 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}