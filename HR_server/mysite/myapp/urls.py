from django.urls import path
from . import views


urlpatterns = [
      path('', views.NEWHOMEPAGE, name='New home page'),
    path('Home', views.HOME, name='Home'),
    path('Add', views.ADD, name='Add'),
    path('Delete', views.DELETE, name='Delete'),
    path('Edit', views.EDIT, name='Edit'),
    path('login', views.LOGIN, name='login'),
    path('Search_result', views.SEARCH_RESULT, name='Search_result'),
    path('VacationForm', views.VACATIONFORM, name='VacationForm'),
    path('Vacations', views.VACATION, name='Vacations'),
    path('add/1/', views.add, name='addd'),
    path('check/', views.check, name='check'),
    path('delete/<int:id>', views.delete, name='check3'),
    path('check/Id/<int:id>', views.check_id, name='check2'),
    path('check/name/<str:name>', views.check_name, name='checkname'),
    path('check/request/<int:id>', views.check_request, name='request'),
    path('check/allrequest/', views.check_requests, name='request'),
    path('getallrequest/', views.get_all, name='request'),
    path('search/<str:name>', views.get_by_name, name='search'),
    path('get/Id/<int:id>', views.get_by_id, name='get'),
    path('check/duration/<int:id>', views.check_duration, name='duration'),
    path('save/request/', views.save_request, name='req'),
    path('delete/request/<int:id>',views.delete_request,name="del"),
    path('accept/request/<int:id>',views.accept_request,name="del")
]
