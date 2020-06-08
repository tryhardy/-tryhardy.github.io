import recallsAdd from './recalls-add.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

const methods = {
    onItemCanged:action("onItemCanged")
}

export default {
    title: "recalls-add"
}

export const defaultView = () => ({
    components: {recallsAdd},
    methods,
    template: `
    <recallsAdd 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}