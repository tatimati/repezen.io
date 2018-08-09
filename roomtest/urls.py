from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'roomtest.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'',include('roommaker.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
