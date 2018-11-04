Vue.component("product",{
    props:["pr"],
  
    template:`<div class='product'>
        <h3> {{ pr.title }} </h3>
        <label>{{ number_format(pr.price) }}</label>
        <hr>
        <p> {{ pr.description }} </p>
    </div>`,
    methods:{
        number_format(number) {
            return "Rp. "+number.toLocaleString()
        }
    }
})