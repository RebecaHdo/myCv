from rest_framework import viewsets

from recipes.models.recipe import Recipe
from recipes.serializers.recipe_serializer import RecipeSerializer


class RecipeViewSet(viewsets.ModelViewSet):

    queryset = Recipe.objects.all()

    def get_serializer_class(self):
        if self.action in ["list", "retrieve"]:
            return RecipeOutputSerializer
        return RecipeSerializer

