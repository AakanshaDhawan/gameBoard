from django.shortcuts import render
from django.http import (
    JsonResponse, HttpResponseRedirect, HttpResponse, Http404)
# from .forms import UserRegisterForm
import json

# Create your views here.
from .models import SubscriptionEmail,ContactForm,CorporateEnquiryForm,CatanForm

def SubscriptionRegisterApi(request):
    status = False
    message = 'Error in form'
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        SubscriptionEmail.objects.create(email=email)
        status= True
        message="Subscriber added"

    context = {
        'status': status,
        'message': message,
    }

    return JsonResponse(context)

def ContactFormApi(request):
    status = False
    message = 'Error in form'
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        firstName = data['firstName']
        lastName = data['lastName']
        message = data['message']
        ContactForm.objects.create(email=email,firstName=firstName,lastName=lastName,message=message)
        status= True
        message="Contact added"

    context = {
        'status': status,
        'message': message,
    }

    return JsonResponse(context)

def CorporateEnquiryFormRegisterApi(request):
    status = False
    message = 'Error in form'
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        firstName = data['firstName']
        lastName = data['lastName']
        phone = data['phone']
        budget = data['budget']
        company = data['company']
        CorporateEnquiryForm.objects.create(email=email,firstName=firstName,lastName=lastName,company=company,phone=phone,budget=budget)
        status= True
        message="Enquiry added"

    context = {
        'status': status,
        'message': message,
    }

    return JsonResponse(context)

def CatanFormRegisterApi(request):
    status = False
    message = 'Error in form'
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        firstName = data['firstName']
        lastName = data['lastName']
        phone = data['phone']
        referal = data['referal']
        insta = data['insta']
        CatanForm.objects.create(email=email,firstName=firstName,lastName=lastName,referal=referal,phone=phone,insta=insta)
        status= True
        message="Catan contact added"

    context = {
        'status': status,
        'message': message,
    }

    return JsonResponse(context)

