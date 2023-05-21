from email.headerregistry import Address
from tokenize import Number
from urllib import response
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
import json
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from .models import Employee, Request

@csrf_protect 
@ensure_csrf_cookie
def HOME(request):
  template = loader.get_template('Home.html')
  return HttpResponse(template.render())
@csrf_protect 
@ensure_csrf_cookie
def ADD(request):
  template = loader.get_template('Add.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def DELETE(request):
  template = loader.get_template('Delete.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def EDIT(request):
  template = loader.get_template('Edit.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def LOGIN(request):
  template = loader.get_template('login.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def SEARCH_RESULT(request):
  template = loader.get_template('Search_result.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def VACATIONFORM(request):
  template = loader.get_template('VacationForm.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def VACATION(request):
  template = loader.get_template('Vacations.html')
  return HttpResponse(template.render())

@csrf_protect 
@ensure_csrf_cookie
def NEWHOMEPAGE(request):
  template = loader.get_template('New home page.html')
  return HttpResponse(template.render())



@csrf_protect
def add(request):
  data=json.loads(request.body)
  id=data['Id']
  name=data['Name']
  address= data['Address']
  number=data['Number']
  email=data['Email']
  gender=data['Gender']
  status=data['Status']
  vacation=data['Vacation']
  actual=data['Actual']
  salary=data['Salary']
  dob=data['DOB']
  try:
    emp = Employee(Id=id,Name=name,Address=address,Number=number,Email=email,Gender=gender,Status=status,Available=vacation,Actual=actual,Salary=salary,DOB=dob)
    emp.save()
    response="success"
  except:
    response="failed"
  return HttpResponse(response)


@csrf_protect
def check(request):
    data=json.loads(request.body)

    if(data['Type']==1):

     if(Employee.objects.filter(Id=data['id'])):
        response1="True"
     else:
       response1="false"

     if(Employee.objects.filter(Email=data['email'])):
       response2="True"
     else:
        response2="false"
    
     if(Employee.objects.filter(Number=data['number'])):
       response3="True"
     else:
       response3="false"

     response={
       "r1":response1,
       "r2":response2,
       "r3":response3,
     }
    else:

        emp = Employee.objects.get(Id=data['id'])
          

        if(Employee.objects.filter(Email=data['email'])):
           response2="True"
        else:
          response2="false"
    
        if(Employee.objects.filter(Number=data['number'])):
          response3="True"
        else:
          response3="false"

        if(emp.Email == data['email']):
          response2 = "false"
        

        if(emp.Number == int(data['number'])):
          response3 = "false"
        
         
           
        response={
        "r2":response2,
        "r3":response3,
        }

    return JsonResponse(response)


def get_by_id(request,id):

    emp=Employee.objects.get(Id=id)
    context={
      "Id":emp.Id,
      "Name":emp.Name,
      "Email":emp.Email,
      "Address":emp.Address,
      "Number":emp.Number,
      "Gender":emp.Gender,
      "Status":emp.Status,
      "Available":emp.Available,
      "Actual":emp.Actual,
      "Salary":emp.Salary,
      "DOB":emp.DOB
    }
    return JsonResponse(context)

def check_id(request,id):

    if(Employee.objects.filter(Id=id)):
      response="True"
    else:
      response="false"
    return HttpResponse(response)

def check_name(request,name):

    if(Employee.objects.filter(Name__icontains=name)):
      response="True"
    else:
      response="false"
    return HttpResponse(response)

@csrf_protect
def delete(request,id):
  try:

    if(Request.objects.get(Id=id)):
      req = Request.objects.get(Id=id)
      req.delete()
  except:
    response = "No Reuests"
  try:
    emp = Employee.objects.get(Id=id)
    emp.delete()
    response="success"
  except:
    response="failed"

  
  return HttpResponse(response)

def get_by_name(request,name):
    context=[]
    emp=Employee.objects.filter(Name__icontains=name)
    for obj in emp:
     context += [{
      "Id":obj.Id,
      "Name":obj.Name }]
    return JsonResponse(context,safe=False)

def check_request(request,id):

    

    if(Employee.objects.filter(Id=id)):
      if(Request.objects.filter(Id=id)):
        response="True"
      else:
        response="false"
    else:
      response="Not found"
      
    return HttpResponse(response)

def check_duration(request,id):

    emp=Employee.objects.get(Id=id)
    response=emp.Available
    return HttpResponse(response)

def save_request(request):
  data=json.loads(request.body)
  id=data['id']
  From=data['from']
  to= data['to']
  Reason=data['reason']
  duration=data['duration']

  
  try:
    req = Request(Id=id,From=From,To=to,Reason=Reason,Duration=duration)
    req.save()
    response="success"
  except:
    response="failed"
  return HttpResponse(response)

def check_requests(request):

    if(Request.objects.all()):
        response="True"
    else:
      response="Not found"
      
    return HttpResponse(response)



def get_all(request):
    context=[]
    req=Request.objects.all()
    for obj in req:
      emp=Employee.objects.get(Id=obj.Id)
      context += [{
        "Id":emp.Id,
        "Name":emp.Name,
        "From":obj.From,
        "To":obj.To,
        "Reason":obj.Reason }]
    return JsonResponse(context,safe=False)

@csrf_protect
def delete_request(request,id):
  try:
    req = Request.objects.get(Id=id)
    req.delete()
    response="success"
  except:
    response="failed"
  return HttpResponse(response)   

@csrf_protect
def accept_request(request,id):
  try:
    emp=Employee.objects.get(Id=id)
    req = Request.objects.get(Id=id)
    value = req.Duration
    emp.Actual=emp.Actual+value
    emp.Available=emp.Available-value
    emp.save()
    req.delete()
    response="success"
  except:
    response="failed"
  return HttpResponse(response)  
