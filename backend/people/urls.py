from django.urls import path
from .views import StudentProfileView, FacultyListView

urlpatterns = [
    path('students/profile/', StudentProfileView.as_view(), name='student-profile'),
    path('faculty/', FacultyListView.as_view(), name='faculty-list'),
]