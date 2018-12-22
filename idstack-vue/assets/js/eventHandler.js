var app = new Vue ({
    el:"#app",
    data:{
        counterButton1:0,
        counterButton2:0
    },
    methods:{
        incrementButton1:function() {
            this.counterButton1 += 1
        },
        incrementButton2:function() {
            this.counterButton2 += 1
        }
    }
})