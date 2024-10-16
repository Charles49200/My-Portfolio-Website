from django.contrib import admin
from .models import Project, PricingPlan, ContactProfile

admin.site.register(Project)
admin.site.register(PricingPlan)
admin.site.register(ContactProfile)
