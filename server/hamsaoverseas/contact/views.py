from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

# Create your views here.
@csrf_exempt 
def sendConatctDetails(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        message = request.POST.get('message')

        email_subject="Hamsa Overseas Contact Data"
        email_from="test@gmail.com"
        email_to="test@gmail.com"
        email_message = "Name: {}\n\nEmail: {}\n\nMobile: {}\n\nMessage: {}\n\n".format(name,email,mobile,message)
        print(email_message)

        #send_mail(email_subject,email_message,email_from,[email_to],fail_silently=False,)

        return JsonResponse({"statusMessage": "Message sent successfully"}, status=200)


@csrf_exempt 
def sendEnquiryDetails(request):
    

    return HttpResponse(status=200)