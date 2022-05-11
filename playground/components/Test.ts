import {h} from "vue";
import {Ref} from "#app"
export default defineNuxtComponent({

    name: "TestRenderer",

    props: {
        template: {
            type: String,
            required: true
        }
    },

    setup(props){


        const test = ref(0);

        provide("test", test)


        return {
            test
        }
    },


    render(){
        return h({
            template: this.template,

            setup(){

                const test = inject<Ref<number>>('test');
                return {
                    test
                }
            }
        })
    }
})