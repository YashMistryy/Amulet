# signals for creating user profile when user object is created
from django.dispatch import receiver
from django.db.models.signals import (post_save)
from django.contrib.auth.models import User
from users.models import UserProfile
import logging

@receiver(post_save,sender=User)
def update_user_profile(sender,instance,created,**kwargs):
    if created:
        logging.info("User created signal recieved -> creating his/her user profile")
        UserProfile.objects.create(user=instance)