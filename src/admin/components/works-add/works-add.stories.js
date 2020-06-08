import worksAdd from './works-add.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

export default {
    title: "works-add"
}

export const defaultView = () => ({
    components: {worksAdd},
    methods,
    template: `
    <worksAdd 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}