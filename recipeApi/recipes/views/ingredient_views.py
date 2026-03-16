from rest_framework import viewsets

from recipes.models.ingredient import Ingredient
from recipes.serializers.ingredient_serializer import IngredientSerializer


class IngredientViewSet(viewsets.ModelViewSet):

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
