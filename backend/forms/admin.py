from django.contrib import admin

# Register your models here.
from .models import SubscriptionEmail,ContactForm,CorporateEnquiryForm,CatanForm


class SubscriptionEmailDisplay(admin.ModelAdmin):
    list_display = ('email', 'datetime')
    search_fields = ('email',)

class ContactFormDisplay(admin.ModelAdmin):
    list_display = ('email','firstName','lastName','message', 'datetime')
    search_fields = ('email','firstName','lastName',)

class CorporateEnquiryFormDisplay(admin.ModelAdmin):
    list_display = ('email','firstName','lastName','phone','company','budget', 'datetime')
    search_fields = ('email','firstName','lastName',)

class CatanFormDisplay(admin.ModelAdmin):
    list_display = ('email','firstName','lastName','phone','referal','insta', 'datetime')
    search_fields = ('email','firstName','lastName',)

admin.site.register(SubscriptionEmail,SubscriptionEmailDisplay)

admin.site.register(ContactForm,ContactFormDisplay)

admin.site.register(CorporateEnquiryForm,CorporateEnquiryFormDisplay)

admin.site.register(CatanForm,CatanFormDisplay)