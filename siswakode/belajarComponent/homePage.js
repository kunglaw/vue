const homepage = Vue.component("homepage",{
    data:function(){
        return {
            title:"Yudhistira.id",
            description:"Be Fullsatck Developer"
        }
    },
    template:`
        <section class='container content'>
            <h1>{{ title }}</h1>
            <div>{{ description }}</div>
            <hr>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor obcaecati corrupti 
            quas quae distinctio laborum, assumenda vero ex accusamus optio inventore porro voluptates 
            amet, molestias omnis ut asperiores ad?
            </p>

            <p>
            Inventore, non quis. Unde delectus necessitatibus, commodi velit expedita eos cum optio
            porro, dolore amet beatae. Ex provident repudiandae molestiae est eveniet, aspernatur 
            accusantium autem doloremque asperiores! Cumque, at minima.
            </p>
            
            <p>
            Dolore debitis, distinctio veniam error natus nam omnis. Maiores voluptas beatae vero. 
            Laboriosam dolores repellendus cupiditate labore vero deleniti ex, voluptatum tenetur. 
            Quia perferendis dolore quisquam nam eos. Neque, earum?
            </p>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ab molestiae laboriosam est deleniti alias veniam esse ipsa tempora vitae 
            in cupiditate odit quae laudantium architecto nihil adipisci, voluptates dolorum 
            obcaecati!
            </p>

        </section>
    `
})