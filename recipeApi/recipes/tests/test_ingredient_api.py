from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from datetime import datetime

from recipes.models.ingredient import Ingredient


class IngredientAPITest(APITestCase):

    def test_create_ingredient(self):
        url = reverse("ingredient-list")

        ingredient_name = f"Prueba-Tomate-{datetime.now()}"

        data = {
            "name": ingredient_name
        }

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        ingredients_tomato = Ingredient.objects.filter(name=ingredient_name)

        self.assertEqual(len(ingredients_tomato), 1)


    def test_update_ingredient(self):

        url = reverse("ingredient-list")
        
        ingredient_name = f"Prueba-Tomate-{datetime.now()}"

        data = {
            "name": ingredient_name
        }

        response = self.client.post(url, data)

        ingredient = Ingredient.objects.get(name=ingredient_name)

        url = reverse("ingredient-detail", args=[ingredient.id])

        ingredient_name_updated = ingredient_name+"Cherry"
        data = {"name": ingredient_name_updated}

        response = self.client.patch(url, data)

        ingredient.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(ingredient.name, ingredient_name_updated)

    def test_delete_ingredient(self):

        url = reverse("ingredient-list")

        ingredient_name = f"Prueba-Tomate-{datetime.now()}"

        data = {
            "name": ingredient_name
        }

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        ingredient_id = response.data["id"]

        url = reverse("ingredient-detail", args=[ingredient_id])

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        ingredients = Ingredient.objects.filter(name=ingredient_name)

        self.assertEqual(ingredients.count(), 0)
