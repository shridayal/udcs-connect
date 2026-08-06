from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .models import Notification
from .serializers import NotificationSerializer


class NotificationListView(ListAPIView):
    queryset = Notification.objects.all().order_by('-created_at')
    serializer_class = NotificationSerializer
    permission_classes = [AllowAny]