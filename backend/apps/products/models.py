from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=100)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField(blank=True, null=True)
    image=models.ImageField(upload_to="image")
    
    is_available=models.BooleanField(default=True)
    is_featured=models.BooleanField(default=False)
    
    create_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.name