<template lang ="html">

  <div  class="container">
    <div  class="row">
      <div class="col ">
        <h3> ¿Estas seguro que deseas eliminar este artículo?  </h3>
        <p> Título : {{this.element.title }} </p>
        <p> Autor : {{this.element.author }} </p>
        <p> Descripción : {{this.element.description }} </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-button v-on:click="deleteArticulo" variant="danger"> Eliminar </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from  'axios';
import swal from 'sweetalert'
    export default {
     data (){
        return {
          articuloId: this.$route.params.articuloId,
          element: {
          title: '',
          author:'',
          description:''
          }
        }
     },
     methods: {
        getArticulo (){
            const path = `http://127.0.0.1:8000/api/v1.0/articulos/${this.articuloId}/`
            axios.get(path).then((response) => {

            this.element.title= response.data.title
            this.element.author= response.data.author
            this.element.description= response.data.description

              })
              .catch ((error) =>{
              console.log(error)
              })

        },
        deleteArticulo (){
            const path = `http://127.0.0.1:8000/api/v1.0/articulos/${this.articuloId}/`
            axios.delete(path).then((response) => {
              location.href = '/articulos'
            })
            .catch ((error) => {
              swal("No es posible eliminar el artículo", "", "error")
            })
       }
     },
     created (){
        this.getArticulo()
     }

    }

</script>

<style lang="css" scoped>
</style>
