from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Question, UserAnalytics
from .serializers import QuestionSerializer
from django.contrib.auth.models import User

class QuestionView(APIView):
    def get(self, request, format=None):
        questions = Question.objects.all().order_by('?')[:5]
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

class AnalyticsView(APIView):
    def get(self, request, format=None):
        user = request.user
        analytics = UserAnalytics.objects.get(user=user)
        data = {
            "total_questions_answered": analytics.total_questions_answered,
            "correct_answers": analytics.correct_answers,
            "average_difficulty": analytics.average_difficulty,
        }
        return Response(data)
