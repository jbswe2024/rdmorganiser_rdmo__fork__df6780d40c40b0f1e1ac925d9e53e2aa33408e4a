# Generated by Django 4.2.6 on 2023-11-18 10:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0059_project_progress'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='issue',
            options={'ordering': ('project__title', 'task__uri'), 'verbose_name': 'Issue', 'verbose_name_plural': 'Issues'},
        ),
    ]
