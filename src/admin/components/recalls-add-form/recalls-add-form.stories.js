import recalls from './recalls-add-form';
import "../../default.pcss";
import { action } from "@storybook/addon-actions";

const methods = {
    onItemCanged:action("onItemCanged")
}

export default {
    title: "recalls-add-form"
}

export const defaultView = () => ({
    components: {recallsAddForm},
    methods,
    template: `
    <recallsAddForm 
    />
    `
});

defaultView.story ={
    name: "Дефолтный компонент"
}