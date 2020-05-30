import skills from './skills.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

const methods = {
    onItemCanged:action("onItemCanged")
}

export default {
    title: "Skills"
}

export const defaultView = () => ({
    components: {skills},
    methods,
    template: `
    <skills 
        @ItemCanged="onItemCanged"
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}