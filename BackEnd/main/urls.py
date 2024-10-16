from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    path('about/', views.AboutView.as_view(), name="about"),
    path('contact/', views.ContactView.as_view(), name="contact"),
    path('projects/', views.ProjectListView.as_view(), name="projects"),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name="project_detail"),
    path('pricing/', views.PricingView.as_view(), name="pricing"),
    
    # API endpoints for React components
    path('api/pricing-plans/', views.pricing_plans_api, name='pricing_plans_api'),
    path('api/projects/', views.projects_api, name='projects_api'),
    path('api/contact-form/', views.submit_contact_form, name='submit_contact_form'),
]
