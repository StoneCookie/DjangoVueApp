from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobPositionViewSet, DivisionViewSet, UserProfileViewSet, StatisticsViewSet, \
                   TaskViewSet, WeeklyTaskViewSet, TeamsViewSet, login, refresh_token, logout, competition

router = DefaultRouter()
router.register(r'job-positions', JobPositionViewSet)
router.register(r'divisions', DivisionViewSet)
router.register(r'users', UserProfileViewSet)
router.register(r'statistics', StatisticsViewSet)
router.register(r'teams', TeamsViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'weekly-tasks', WeeklyTaskViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('login', login, name='login'),
    path('refresh-token', refresh_token, name='refresh-token'),
    path('logout', logout, name='logout'),
    path('competition', competition, name = 'competition'),
    # path('competition/currentcompetitions', currentcompetitions, name = 'currentcompetitions')
    # path('searchcompetitions')
]
