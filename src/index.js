import Vue from 'vue'
import axios from 'axios'

new Vue({
    el: '#app',
    data: {
        students: [],
        coincidence: ""
    },
    mounted: function (){
        axios.get("http://46.101.212.195:3000/students").then(response => {
           console.log(response.data)
           this.students = response.data
        });
    },
    updated() {
        console.log(this.coincidence)
    }
})