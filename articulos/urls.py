from  rest_framework import routers
from .viewset import articuloViewSet

# SimpleRouter Sirve para declarar las rutas para el post, get, put, delete, etc
router = routers.SimpleRouter()
router.register('articulos', articuloViewSet)

urlpatterns = router.urls  # registra las rutas de nuestro proyecto