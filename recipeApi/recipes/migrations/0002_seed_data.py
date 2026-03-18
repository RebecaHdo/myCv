from django.db import migrations

def create_initial_data(apps, schema_editor):
    User = apps.get_model("auth", "User")
    Ingredient = apps.get_model("recipes", "Ingredient")
    Tag = apps.get_model("recipes", "Tag")
    Recipe = apps.get_model("recipes", "Recipe")
    RecipeIngredient = apps.get_model("recipes", "RecipeIngredient")
    Step = apps.get_model("recipes", "Step")

    # User
    user, _ = User.objects.get_or_create(
        username="chef",
        defaults={"email": "chef@test.com", "password": "password123"}
    )

    # Ingredients
    ingredients = ["Tomate", "Cebolla", "Pollo", "Aceite", "Sal", "Pimienta"]
    ingredient_objs = {}
    for name in ingredients:
        ing, _ = Ingredient.objects.get_or_create(name=name)
        ingredient_objs[name] = ing

    # Tags
    tags = ["Fácil", "Rápido", "Cenas"]
    tag_objs = {}
    for t in tags:
        tag, _ = Tag.objects.get_or_create(name=t)
        tag_objs[t] = tag

    # Recipe
    recipe, _ = Recipe.objects.get_or_create(
        title="Pollo a la plancha",
        author_id=user.id,  # asignamos por id en lugar de instancia
        description="Pollo delicioso y rápido",
        prep_time=10,
        cook_time=15,
        servings=2,
        difficulty="easy",
    )
    recipe.tags.set([tag_objs["Fácil"].id, tag_objs["Rápido"].id])
    recipe.save()

    # Ingredient's recipe
    RecipeIngredient.objects.get_or_create(recipe=recipe, ingredient=ingredient_objs["Pollo"], quantity=1, unit="kg")
    RecipeIngredient.objects.get_or_create(recipe=recipe, ingredient=ingredient_objs["Aceite"], quantity=2, unit="cucharadas")
    RecipeIngredient.objects.get_or_create(recipe=recipe, ingredient=ingredient_objs["Sal"], quantity=1, unit="cucharadita")
    RecipeIngredient.objects.get_or_create(recipe=recipe, ingredient=ingredient_objs["Pimienta"], quantity=0.5, unit="cucharadita")

    # Steps
    Step.objects.get_or_create(recipe=recipe, step_number=1, instruction="Calienta la sartén con aceite.")
    Step.objects.get_or_create(recipe=recipe, step_number=2, instruction="Sazona el pollo con sal y pimienta.")
    Step.objects.get_or_create(recipe=recipe, step_number=3, instruction="Cocina el pollo hasta que esté dorado por ambos lados.")

class Migration(migrations.Migration):
    dependencies = [
        ('recipes', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(create_initial_data),
    ]
