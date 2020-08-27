from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render,redirect
import pyodbc
import json

BD='DRIVER=MySQL ODBC 8.0 ANSI Driver;SERVER=innovdevelopers.com;DATABASE=innovdev_chatbot;UID=innovdev_chatbot;PWD=innovdev_chatbot;charset=utf8mb4;'

def saludo(request):
    return render(request,"index.html", )

def terminos(request):
    return render(request,"terms-conditions.html", )

def privacidad(request):
    return render(request,"privacy-policy.html", )

def insertar(request):
    if request.is_ajax():
        cxn= pyodbc.connect(BD)
        cursor2=cxn.cursor()
        sql = "call sp_insertarUsuario ('"+request.POST.get('inputUser')+"','"+request.POST.get('inputPhone')+"');"
        cursor2.execute(sql)
        rows=cursor2.fetchall()
        for row in rows: 
            res=row[0]
        error="No error creo xdd"
        response= JsonResponse({'mensaje':res, 'error': error})
        response.status_code=201
        return response

        
        #items = []
        #for row in rows:
        #    items.append({'rest': row[0]})
        #   mensaje=json.dumps(res)


