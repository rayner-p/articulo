from rest_framework import  serializers
from  .models import articulo
#permite transportar los datos a traves de la red, formato j.son u otros.
class articuloSerializer (serializers.ModelSerializer):
    class Meta:
        model = articulo
        fields = '__all__' #doble _