var app = new Vue({
    el:"#app",
    data:{
        header:"<h1> IdStack - Vue JS </h1> <hr>",
        message:"Hello World",
        show:false,
        hobbies:[
            "animes",
            "memes"
        ],
        height:17,
        width:10,
        wide:0,
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
        number_format:function(number) {
            return "Rp. "+number.toLocaleString()
        },
        computed_var:function(){
            return 
        },
        box_wide:function() {
            return this.wide = this.height * this.width 
       
        }
    },
    methods:{
        test_methods(){
            alert("bisa gak ? ")
        }
    }
})

