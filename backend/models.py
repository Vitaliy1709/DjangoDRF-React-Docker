from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name, self.description


class User(models.Model):
    username = models.CharField(max_length=50)
    group = models.ForeignKey(Group, related_name="group_users", on_delete=models.PROTECT)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username, self.group.name, self.created

