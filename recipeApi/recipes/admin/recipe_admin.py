from django.contrib import admin
from ..models.recipe import Recipe
from ..models.step import Step

class StepInline(admin.TabularInline):
    model = Step
    extra = 1

class RecipeAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "difficulty", "prep_time")
    search_fields = ("title", "author__username")
    inlines = [StepInline]

admin.site.register(Recipe, RecipeAdmin)
