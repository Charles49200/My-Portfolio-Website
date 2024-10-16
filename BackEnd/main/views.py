from django.shortcuts import render
from django.http import JsonResponse
from .models import Project, PricingPlan, ContactProfile
from .forms import ContactForm
from django.views import generic
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
import json

class AboutView(generic.TemplateView):
    template_name = 'Components/AboutContent.js'

class HomeView(generic.TemplateView):
    template_name = 'Components/MainSection.js'

class ContactView(generic.FormView):
    template_name = 'Components/Form.js'
    form_class = ContactForm
    success_url = "/"

    def form_valid(self, form):
        form.save()
        messages.success(self.request, 'Thank you for contacting us!')
        return super().form_valid(form)

class ProjectListView(generic.ListView):
    model = Project
    template_name = 'Components/WorkCard.js'

class ProjectDetailView(generic.DetailView):
    model = Project
    template_name = 'Components/WorkCard.js'

class PricingView(generic.ListView):
    model = PricingPlan
    template_name = 'Components/PricingCard.js'

# API for fetching all pricing plans (for React component)
def pricing_plans_api(request):
    plans = PricingPlan.objects.all().values()
    return JsonResponse(list(plans), safe=False)

# API for fetching all projects (for React component)
def projects_api(request):
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)

# API for handling contact form submission
@csrf_exempt
def submit_contact_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = ContactForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({'status': 'success'}, status=200)
        return JsonResponse({'status': 'error', 'errors': form.errors}, status=400)
    return JsonResponse({'status': 'invalid method'}, status=400)
