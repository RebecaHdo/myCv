from rest_framework import serializers
from recipes.models.recipe import Recipe
from recipes.models.recipe_ingredient import RecipeIngredient


class RecipeIngredientInputSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    quantity = serializers.FloatField()
    unit = serializers.CharField()


class RecipeSerializer(serializers.ModelSerializer):

    ingredients = RecipeIngredientInputSerializer(many=True, write_only=True)

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
            "ingredients"
        ]

    def create(self, validated_data):

        ingredients_data = validated_data.pop("ingredients")

        recipe = Recipe.objects.create(**validated_data)

        for item in ingredients_data:
            RecipeIngredient.objects.create(
                recipe=recipe,
                ingredient_id=item["id"],
                quantity=item["quantity"],
                unit=item["unit"]
            )

        return recipe
