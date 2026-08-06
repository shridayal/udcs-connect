from django.db import models
from django.conf import settings


class Program(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20, unique=True)
    duration_years = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Student(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    student_id = models.CharField(max_length=30, unique=True)
    roll_number = models.CharField(max_length=30, unique=True)
    name = models.CharField(max_length=150)
    program = models.ForeignKey(Program, on_delete=models.SET_NULL, null=True)
    semester = models.PositiveIntegerField()
    phone = models.CharField(max_length=15, blank=True)
    academic_year = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=100)
    qualification = models.CharField(max_length=150, blank=True)
    specialization = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.name