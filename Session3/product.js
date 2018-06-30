var tableMahasiswa = new Vue({
    el:"#tableApp",
    data:{
        listMahasiswa:[
            {nim:1200969712,name:"Fadil Hakim",department:"Information System"},
            {nim:1200322145,name:"Baskoro",department:"Information System"}
        ]
    },
    methods:{
        addMahasiswa:function()
        {
            alert("add mahasiswa sukses");
        },
        deleteMahasiswa:function(nim)
        {   
            alert("delete mahassiswa sukses");
        },
        updateMahasiswa:function(nim)
        {
            alert("update mahasiswa sukses")
        }
    }

})