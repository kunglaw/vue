const cardComponent = Vue.component("mycard", {
    props:["image","title","description","id"],
    data:function() {
        return {
            urlPost:`#/post/detail/${id}`
        }
    },
    template:`
        <div class='card col-md-3'>
            <img class="card-img-top" v-bind:src="image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <a v-bind:href="urlPost" class="btn btn-primary"> Detail </a>
            </div>

        </div>
    `
})

// module.exports = mycard