# creating our custom user model here
from django.contrib.auth.models import AbstractUser,BaseUserManager
from django.db import models
from django.core.validators import RegexValidator
import uuid
from django.contrib.auth.models import User

def generate_unique_id():
    return str(uuid.uuid4())[:7]

class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile')
    # New fields
    bio = models.TextField(blank=True)
    member_id = models.CharField(max_length=7, default=generate_unique_id, editable=False)
    def save(self, *args, **kwargs):
        # Generate member_id only if it's not set
        if not self.member_id:
            self.member_id = generate_unique_id()
        super().save(*args, **kwargs)

