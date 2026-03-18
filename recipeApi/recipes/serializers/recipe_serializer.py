from rest_framework import serializers
from recipes.models.recipe import Recipe
from recipes.models.recipe_ingredient import RecipeIngredient
from recipes.models.ingredient import Ingredient


class RecipeIngredientInputSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    quantity = serializers.FloatField()
    unit = serializers.CharField()


class RecipeSerializer(serializers.ModelSerializer):

    ingredients = RecipeIngredientInputSerializer(many=True, write_only=True, required=False)

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

        ingredients_data = validated_data.pop("ingredients", [])

        recipe = Recipe.objects.create(**validated_data)

        for item in ingredients_data:
            RecipeIngredient.objects.create(
                recipe=recipe,
                ingredient_id=item["id"],
                quantity=item["quantity"],
                unit=item["unit"]
            )

        return recipe

    def update(self, instance, validated_data):

        ingredients_data = validated_data.pop("ingredients", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        if ingredients_data is not None:
            # deleted
            instance.recipeingredient_set.all().delete()

            # create new
            for item in ingredients_data:
                RecipeIngredient.objects.create(
                    recipe=instance,
                    ingredient_id=item["id"],
                    quantity=item["quantity"],
                    unit=item["unit"]
                )

        return instance

class RecipeIngredientOutputSerializer(serializers.Serializer):
    id = serializers.IntegerField(source="ingredient.id")
    name = serializers.CharField(source="ingredient.name")
    quantity = serializers.FloatField()
    unit = serializers.CharField()


class RecipeOutputSerializer(serializers.ModelSerializer):

    ingredients = serializers.SerializerMethodField()

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

    def get_ingredients(self, obj):
        recipe_ingredients = obj.recipeingredient_set.all()
        return RecipeIngredientOutputSerializer(recipe_ingredients, many=True).data
