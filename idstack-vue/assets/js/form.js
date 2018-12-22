var app = new Vue ({
    el:"#app",
    data:{
        hello:"Hello World",
        name:"",
        address:"",
        gender:"",
        hobbies:[],
        province:"",
        provinces:[{
            id:1,
            name:"DKI Jakarta"
        },{
            id:2,
            name:"Banten"
        },{
            id:3,
            name:"Jawa Barat"
        }]
    },
    methods:{
        hobbiesAdd:function(val) {
            this.hobbies.push(val)
        }
    },
    computed:{

    },
    watch:{
       
    }
})