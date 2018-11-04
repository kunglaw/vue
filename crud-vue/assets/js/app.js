var app = new Vue({
    el:"#app",
    data:{
        title:"",
        price:0,
        description:"",
        products:[
            {title:"Asus ROG RAM 16GB",
            price:15000000,
            description:"Ajegile ini computer gaming"},
            {title:"Corsair RAM 16GB",
            price:2000000,
            description:"keren cuy"},
            {title:"Samsung Harddisk 1TB",
            price:1500000,
            description:"nyimpen berapa anime tuuh ?"},
        ]

    },
    computed:{
        
    },
    methods:{
        add_product:function(title,price,description){
            alert("hello")
            this.products.push({
                title,
                price,
                description
            })
        }
    }
})