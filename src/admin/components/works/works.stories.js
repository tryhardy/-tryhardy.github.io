import works from './works.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

export default {
    title: "works"
}

export const defaultView = () => ({
    components: {works},
    methods,
    template: `
    <works 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}