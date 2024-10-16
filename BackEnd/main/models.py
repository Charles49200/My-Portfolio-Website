from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    link_view = models.URLField(max_length=200)
    link_source = models.URLField(max_length=200)

    def __str__(self):
        return self.title

class PricingPlan(models.Model):
    plan_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=100)
    features = models.TextField()

    def __str__(self):
        return self.plan_name

class ContactProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
