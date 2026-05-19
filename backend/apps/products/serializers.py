from rest_framework import serializers
from apps.products.models import Product

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    
    class Meta:
        model=Product
        fields="__all__"
        
    def get_image(self, obj):
        if obj.image:
            return obj.image.url
        return None