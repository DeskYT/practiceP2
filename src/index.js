import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
console.log(Vue)
Vue.use(VueAxios, axios)


new Vue({
    el: '#app',
    data: {
        students: [],
        search: ''
    },
    mounted: function (){
        Vue.axios.get("http://46.101.212.195:3000/students").then(response => {
           console.log(response.data)
           this.students = response.data
        });
    }
})