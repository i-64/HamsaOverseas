from django.urls import path

from . import views

urlpatterns = [
    path('feedback/', views.sendConatctDetails, name='sendConatctDetails'),
    path('enquiry/', views.sendEnquiryDetails, name='sendEnquiryDetails'),
]