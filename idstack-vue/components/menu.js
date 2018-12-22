Vue.component("mymenu",{
  props:["menus"],
  template:`
    <nav>
      <ul>
          <li> <a v-bind:href='menus.home.href'>Home</a> </li>
          <li> <a v-bind:href='menus.about.href'>About</a> </li>
      </ul>
    </nav>
    
  `  
})