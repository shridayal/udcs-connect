from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import CurrentUserView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('me/', CurrentUserView.as_view(), name='current-user'),
]