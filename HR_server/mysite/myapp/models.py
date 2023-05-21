from enum import unique
from django.db import models

class Employee (models.Model):
    Id= models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=255)
    Email = models.CharField(max_length=255,unique=True)
    Address = models.CharField(max_length=255)
    Number = models.IntegerField(unique=True)
    Gender = models.CharField(max_length=255)
    Status = models.CharField(max_length=255)
    Available = models.IntegerField()
    Actual = models.IntegerField()
    Salary = models.IntegerField()
    DOB = models.CharField(max_length=255)

class Request (models.Model):
    Id= models.IntegerField(primary_key=True)
    Duration= models.IntegerField()
    From = models.CharField(max_length=255)
    To = models.CharField(max_length=255)
    Reason= models.TextField()
# Create your models here.
