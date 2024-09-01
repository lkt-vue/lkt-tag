import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktTag.vue";


const LktTag: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-tag') === undefined) app.component('lkt-tag', libComponent)
    },
};

export default LktTag;