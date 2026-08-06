from django.db import models


class Notification(models.Model):
    CATEGORY_CHOICES = (
        ('academic', 'Academic'),
        ('department', 'Department'),
        ('event', 'Event'),
        ('emergency', 'Emergency'),
    )

    TARGET_ROLE_CHOICES = (
        ('all', 'All'),
        ('student', 'Student'),
        ('faculty', 'Faculty'),
        ('alumni', 'Alumni'),
    )

    title = models.CharField(max_length=200)
    message = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    target_role = models.CharField(max_length=20, choices=TARGET_ROLE_CHOICES, default='all')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title