import adminMenu from './adminMenu.vue';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

const methods = {
    onItemCanged:action("onItemCanged")
}

export default {
    title: "Admin-menu"
}

export const defaultView = () => ({
    components: {adminMenu},
    methods,
    template: `
    <adminMenu 
        @ItemCanged="onItemCanged"
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}