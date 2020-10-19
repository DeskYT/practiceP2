import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
console.log(Vue)
Vue.use(VueAxios, axios)

/*
new Vue({
    el: '#app',
    data: {
        students: [],
        search: ''
    },
    mounted: function (){
        this.students = students;
    }
})*/