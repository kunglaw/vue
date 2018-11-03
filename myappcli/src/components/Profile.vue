<template>
  <div>
      <h2> Profile </h2>
      <div> Hello, {{ user.firstName }} , Your age is {{ user.age}} </div>
      <div v-text="user.description"></div>
      <div> password : 
          <span v-if='user.showPassword'> {{ user.password }} </span> 
          <span v-else>*************</span>
          <button v-on:click='showPassword()' > Show password </button> 
      </div>
      <div> 
         
      </div> 

      <h5> Watch out !! another list</h5>
      <span v-html="simpleTag"></span>

  </div>
</template>
<script>
export default {
  name: 'Profile',
  data () {
    return {
      user: {
          firstName: 'Aries Dimas',
          lastName: 'Yudhistira',
          password:"999999",
          age: 27,
          description: 'Like all web technologies and stuff. ',
          showPassword:false,
          hobbies:[
              "animes","9GAG","PUBG"
          ]
      },
      simpleTag:"<ul><li>First</li><li> Second</li></ul>"
    }
  },
  methods:{
      showPassword:function(){
          if(this.user.showPassword === false){
            this.user.showPassword = true
          }else{
            this.user.showPassword = false
          }
      }
  }

}
</script>