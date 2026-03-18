from django.db import models
from .recipe import Recipe


class Step(models.Model):

    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="steps"
    )

    step_number = models.IntegerField()
    instruction = models.TextField()

    class Meta:
        ordering = ["recipe","step_number"]

    def __str__(self):
        return f"Step {self.step_number} - {self.recipe.title}"
