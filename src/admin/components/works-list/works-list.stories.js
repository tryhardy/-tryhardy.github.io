import worksList from './works-list.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

export default {
    title: "works-list"
}

export const defaultView = () => ({
    components: {worksList},
    methods,
    template: `
    <worksList
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}