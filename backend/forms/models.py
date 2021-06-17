from django.db import models

# Create your models here.
class SubscriptionEmail(models.Model):
    email = models.CharField(max_length=100, blank=False)
    datetime = models.DateTimeField(auto_now=True)

class ContactForm(models.Model):
    firstName= models.CharField(max_length=30, blank=True)
    lastName= models.CharField(max_length=30, blank=True)
    email= models.CharField(max_length=100, blank=False)
    message=models.TextField()
    datetime = models.DateTimeField(auto_now=True)

class CorporateEnquiryForm(models.Model):
    firstName= models.CharField(max_length=30, blank=True)
    lastName= models.CharField(max_length=30, blank=True)
    email= models.CharField(max_length=100, blank=False)
    company= models.CharField(max_length=100, blank=True)
    phone= models.CharField(max_length=20, blank=True)
    budget= models.CharField(max_length=12, blank=True)
    datetime = models.DateTimeField(auto_now=True)

class CatanForm(models.Model):
    firstName= models.CharField(max_length=30, blank=True)
    lastName= models.CharField(max_length=30, blank=True)
    email= models.CharField(max_length=100, blank=False)
    insta= models.CharField(max_length=50, blank=True)
    phone= models.CharField(max_length=20, blank=True)
    referal= models.CharField(max_length=30, blank=True)
    datetime = models.DateTimeField(auto_now=True)