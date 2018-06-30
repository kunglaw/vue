var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!',
      angka:0
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      print:function(angka)
      {
         this.angka = angka * 100;
      }

    }
  })

