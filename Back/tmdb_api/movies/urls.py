from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('movies', views.movies_data, name="movies"),
    path('movies/search', views.movies_data, )
]