var app = new Vue({
    el:"#app",
    data:{
        img:{
            src:"./assets/img/digimon.png",
            tag:"digimon"
        },
        menu:{
            home:{
                href:"./home.html"
            },
            about:{
                href:"./about.html"
            }
        },
        footerText:"Belajar vue JS &copy; 2018",
        niggalation:"color:blue; font-size:30px"
        
    },
    methods:{
       changeImage:function() {
        if( this.img.tag === "digimon") {
            this.img.src = "./assets/img/gecko.jpg"
            this.img.tag = "gecko"
        } else {
            this.img.src = "./assets/img/digimon.png"
            this.img.tag = "digimon"
        }
       }
    }
    
})