Vue.component("myfooter",{
    props:["ft"],
    template:`
        <footer>
            <center> <span v-html='ft'> </span> </center>
        </footer>
    `
})