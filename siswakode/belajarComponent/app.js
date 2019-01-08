const routes = [
    { path:"/", component:homepage },
    { path:"/about", component:aboutpage },
    { path:"/post", component:postpage }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el:"#app",
    data:{
        brand:"Yudhistira.id"
    },
    methods: {
        
    },
})