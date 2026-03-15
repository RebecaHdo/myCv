from django.db import models
from django.contrib.auth.models import User
from .tag import Tag


class Recipe(models.Model):

    DIFFICULTY_CHOICES = [
        ("easy", "Easy"),
        ("medium", "Medium"),
        ("hard", "Hard"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    difficulty = models.CharField(
        max_length=10,
        choices=DIFFICULTY_CHOICES
    )

    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.IntegerField()

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="recipes"
    )

    tags = models.ManyToManyField(Tag, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
