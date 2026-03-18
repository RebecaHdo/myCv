from django.urls import path, include
from rest_framework.routers import DefaultRouter

from recipes.views.ingredient_views import IngredientViewSet
from recipes.views.recipe_views import RecipeViewSet


router = DefaultRouter()

router.register("ingredients", IngredientViewSet, basename="ingredient")
router.register("recipes", RecipeViewSet, basename="recipe")


urlpatterns = [
    path("", include(router.urls)),
]
