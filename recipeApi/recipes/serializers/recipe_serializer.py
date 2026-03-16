from rest_framework import serializers
from recipes.models.recipe import Recipe


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = [
            "id",
            "title",
            "description",
            "prep_time",
            "cook_time",
            "servings",
            "difficulty",
            "author",
        ]
