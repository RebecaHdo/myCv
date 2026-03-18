from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from django.contrib.auth.models import User
from recipes.models.ingredient import Ingredient
from recipes.models.recipe import Recipe
from datetime import datetime


class TestRecipeWithIngredientsAPI(APITestCase):

    def setUp(self):
        self.user, _ = User.objects.get_or_create(username="testuser")

    def test_create_recipe_with_ingredients(self):

        ingredient1, _ = Ingredient.objects.get_or_create(name="Tomate")
        ingredient2, _ = Ingredient.objects.get_or_create(name="Queso")

        url = reverse("recipe-list")

        title = f"Pizza-{datetime.now()}"

        data = {
            "title": title,
            "description": "Receta italiana",
            "prep_time": 20,
            "cook_time": 15,
            "servings": 2,
            "difficulty": "easy",
            "author": self.user.id,
            "ingredients": [
                {"id": ingredient1.id, "quantity": 200, "unit": "g"},
                {"id": ingredient2.id, "quantity": 100, "unit": "g"}
            ]
        }

        response = self.client.post(url, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        recipe = Recipe.objects.get(title=title)

        self.assertEqual(recipe.recipeingredient_set.count(), 2)
