from django.db import models

class Question(models.Model):
    text = models.TextField()
    difficulty = models.IntegerField()
    correct_answer = models.CharField(max_length=255)
    wrong_answers = models.JSONField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.text

class UserAnalytics(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    total_questions_answered = models.IntegerField(default=0)
    correct_answers = models.IntegerField(default=0)
    average_difficulty = models.FloatField(default=0.0)

    def update_analytics(self, difficulty, is_correct):
        self.total_questions_answered += 1
        if is_correct:
            self.correct_answers += 1
        self.average_difficulty = ((self.average_difficulty * (self.total_questions_answered - 1)) + difficulty) / self.total_questions_answered
        self.save()
