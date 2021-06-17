# Generated by Django 3.1 on 2021-06-16 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(blank=True, max_length=30)),
                ('lastName', models.CharField(blank=True, max_length=30)),
                ('email', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('datetime', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='CorporateEnquiryForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(blank=True, max_length=30)),
                ('lastName', models.CharField(blank=True, max_length=30)),
                ('email', models.CharField(max_length=100)),
                ('company', models.CharField(blank=True, max_length=100)),
                ('phone', models.CharField(blank=True, max_length=100)),
                ('budget', models.CharField(blank=True, max_length=100)),
                ('datetime', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]