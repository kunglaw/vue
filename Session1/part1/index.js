var app = new Vue({
    el:"#app",
    data:{
        message:"Hello Vue!"
    }
});

setTimeout(function(){
    app.message = 'CHANGED'
},2000);