<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div>
        <h2>
          Listado de Artículos
         </h2>
         <br>
         <b-button size="sm" :to="{ name: 'newArticulo'}" variant="primary"> Nuevo Artículo </b-button>

        </div>
         <br>

         <div class="col-md-12">
          <b-table striped hover :items="articulos" :fields="fields">
              <template v-slot:cell(action)="data">
                <b-button size="sm" variant="primary" :to="{ name:'editArticulo' , params: {articuloId: data.item.id} }">
                  Editar
                </b-button>
                <b-button size="sm" variant="danger" :to="{ name:'deleteArticulo' , params: {articuloId: data.item.id} }">
                  Eliminar
                </b-button>
              </template>
          </b-table>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
  data (){
    return {
    fields :[
      {key: 'title', label: 'Título'},
      {key: 'author', label: 'Autor'},
      {key: 'description', label: 'Descripción'},
      {key: 'Action', label: ''}
      ],
      articulos: []
    }
  },
  methods: {
    getArticulos(){

      const path = 'http://127.0.0.1:8000/api/v1.0/articulos/'
      axios.get(path).then((response) => {
      this.articulos = response.data
    })
    .catch((error) =>{
    console.log(error)
    })
  },
  getArticuloID (){
      const path = `http://127.0.0.1:8000/api/v1.0/articulos/${this.articuloId}/`
      axios.get(path).then((response) => {

        this.element.title= response.data.title
        this.element.author= response.data.author
        this.element.description= response.data.description
      })
      .catch((error) =>{
        console.log(error)
      })

    },
   deleteArticulo (){


    }
},
    created() {
    this.getArticulos()

    }
}
</script>

<style lang="css" scoped>
</sytle>
