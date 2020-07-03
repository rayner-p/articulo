from  rest_framework import  viewsets
from .models import articulo
from .serializer import articuloSerializer
# nos permite crear el crud de los objetos de nuestro modelo
class articuloViewSet(viewsets.ModelViewSet):

        queryset = articulo.objects.all()
        serializer_class = articuloSerializer

