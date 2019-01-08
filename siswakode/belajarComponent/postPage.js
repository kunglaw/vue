//import cardComponent from "./components/cardComponent" // pakai require bisa tak ? 
//const cardComponent = require("./components/cardComponent")

const postpage = Vue.component("postpage",{
    props:[],
    data:function() {
        return {

        }
    },
    components:{
        cardComponent
    },
    template:`
        <div class='container content'>
            <h1> Posts </h1>
            <hr>

            <cardComponent 
                title="test saja" 
                description="ini hanya test saja"
                id="1"
                image=""></cardComponent>


        </div>
    
    `
})