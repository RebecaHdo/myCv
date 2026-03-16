from rest_framework import viewsets

from recipes.models.recipe import Recipe
from recipes.serializers.recipe_serializer import RecipeSerializer


class RecipeViewSet(viewsets.ModelViewSet):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
