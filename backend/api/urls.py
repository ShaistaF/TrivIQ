from django.urls import path
from .views import QuestionView, AnalyticsView

urlpatterns = [
    path('questions/', QuestionView.as_view(), name='questions'),
    path('analytics/', AnalyticsView.as_view(), name='analytics'),
]
