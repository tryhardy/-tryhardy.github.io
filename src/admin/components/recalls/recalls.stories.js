import recalls from './recalls.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

const methods = {
    onItemCanged:action("onItemCanged")
}

export default {
    title: "recalls"
}

export const defaultView = () => ({
    components: {recalls},
    methods,
    template: `
    <recalls 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}