# forms.py
from django import forms
from .models import ContactProfile

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactProfile
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': '*Full name..', 'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'placeholder': '*Email..', 'class': 'form-control'}),
            'subject': forms.TextInput(attrs={'placeholder': '*Subject..', 'class': 'form-control'}),
            'message': forms.Textarea(attrs={'placeholder': '*Message..', 'class': 'form-control', 'rows': 6}),
        }
