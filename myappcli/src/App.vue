<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view/>
   
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import MenuAdmin  from "@/components/Admin/MenuAdmin";
import Header from "@/components/Header"
export default {
  name: 'App',
  components:{
    Menu ,MenuAdmin, Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 30px;
}
</style>
