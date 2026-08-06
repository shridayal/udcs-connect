from rest_framework import serializers
from .models import Student, Faculty


class StudentSerializer(serializers.ModelSerializer):
    program = serializers.StringRelatedField()

    class Meta:
        model = Student
        fields = [
            'id',
            'student_id',
            'roll_number',
            'name',
            'program',
            'semester',
            'phone',
            'academic_year',
        ]


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [
            'id',
            'name',
            'designation',
            'qualification',
            'specialization',
            'phone',
        ]