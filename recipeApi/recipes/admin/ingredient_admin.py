from django.contrib import admin
from ..models.ingredient import Ingredient
from ..models.recipe_ingredient import RecipeIngredient

class RecipeIngredientInline(admin.TabularInline):
    model = RecipeIngredient
    extra = 1

class IngredientAdmin(admin.ModelAdmin):
    list_display = ("name",)
    inlines = [RecipeIngredientInline]

admin.site.register(Ingredient, IngredientAdmin)
