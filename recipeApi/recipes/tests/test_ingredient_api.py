from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from recipes.models.ingredient import Ingredient


class IngredientAPITest(APITestCase):

    def test_create_ingredient(self):
        url = reverse("ingredient-list")

        data = {
            "name": f"Tomate-{uuid.uuid4()}"
        }

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ingredient.objects.count(), 1)


    def test_update_ingredient(self):
        ingredient = Ingredient.objects.create(name="Tomate")

        url = reverse("ingredient-detail", args=[ingredient.id])

        data = {"name": "Tomate Cherry"}

        response = self.client.patch(url, data)

        ingredient.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(ingredient.name, "Tomate Cherry")

    def test_delete_ingredient(self):
        ingredient = Ingredient.objects.create(name="Tomate")

        url = reverse("ingredient-detail", args=[ingredient.id])

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Ingredient.objects.count(), 0)
