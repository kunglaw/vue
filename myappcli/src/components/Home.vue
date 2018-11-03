<template>
  <div>
      <h1> Home </h1>
      <p> {{ msg }} </p>
  </div>
</template>
<script>
// import something from Something
export default {
  name: 'Home',
  components:{

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>