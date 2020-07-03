import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import newArticulo from '@/components/Articulo/createArticulo'
import listArticulo from '@/components/Articulo/listArticulo'
import editArticulo  from '@/components/Articulo/editArticulo'
import deleteArticulo from '@/components/Articulo/deleteArticulo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/articulos',
      name: 'listArticulo',
      component: listArticulo
    },
    {
      path: '/articulos/new',
      name: 'newArticulo',
      component: newArticulo
    },
   {
      path: '/articulos/:articuloId/edit',
      name: 'editArticulo',
      component: editArticulo
    },
   {
      path: '/articulos/:articuloId/delete',
      name: 'deleteArticulo',
      component: deleteArticulo
    }
  ],
  mode: 'history'
})
