from django.urls import path
from . import views

app_name = 'articles'
urlpatterns = [
    path('articles', views.article_list, name='article_list'),
    path('articles/<int:article_pk>', views.article_detail, name='article_detail'),
    path('articles/<int:article_pk>/comments', views.comment_list, name='comment_list'),
    path('comments/<int:comment_pk>', views.comment_detail, name='article_detail'),
    # path('articles/like', views.like_article, name='like_article')
    path('articles/<int:article_pk>/likes', views.like_article, name='like_article'),
]
