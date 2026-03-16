from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from django.contrib.auth.models import User
from recipes.models.recipe import Recipe


class RecipeAPITest(APITestCase):

    def setUp(self):
        self.user = User.objects.create(username="testuser")

    def test_create_recipe(self):

        url = reverse("recipe-list")

        data = {
            "title": "Pasta Carbonara",
            "description": "Receta italiana",
            "prep_time": 10,
            "cook_time": 15,
            "servings": 2,
            "difficulty": "easy",
            "author": self.user.id
        }

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Recipe.objects.count(), 1)

    def test_update_recipe(self):

        recipe = Recipe.objects.create(
            title="Pasta",
            description="Test",
            prep_time=10,
            cook_time=10,
            servings=2,
            difficulty="easy",
            author=self.user
        )

        url = reverse("recipe-detail", args=[recipe.id])

        data = {
            "title": "Pasta Carbonara"
        }

        response = self.client.patch(url, data)

        recipe.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(recipe.title, "Pasta Carbonara")

    def test_delete_recipe(self):

        recipe = Recipe.objects.create(
            title="Pasta",
            description="Test",
            prep_time=10,
            cook_time=10,
            servings=2,
            difficulty="easy",
            author=self.user
        )

        url = reverse("recipe-detail", args=[recipe.id])

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Recipe.objects.count(), 0)
