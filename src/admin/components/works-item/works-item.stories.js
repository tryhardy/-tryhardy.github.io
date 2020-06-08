import worksItem from './works-item.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

export default {
    title: "works-item"
}

export const defaultView = () => ({
    components: {worksItem},
    methods,
    template: `
    <worksItem
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}