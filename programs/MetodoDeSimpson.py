from os import system
import sys
import json

lst = []

def simpson(funcion, lim_inf, lim_sup ,n,iteracion):
    cadena=""
    contador=0
    lar=0
    yi=0
    yf=0
    xf=0
    A=0
    suma=0
    for i in funcion:
        if i=="x":
            contador+=1
    if (contador==1):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        lst.append(num)
        for i in range(n):
            yi=(num[0]*(lim_inf))+num[1]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf))+num[1]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
        
    elif (contador==2):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**2))+(num[1]*(lim_inf))+num[2]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**2))+(num[1]*(xf))+num[2]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
        
    elif (contador==3):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**3))+(num[1]*(lim_inf**2))+(num[2]*(lim_inf))+num[3]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**3))+(num[1]*(xf**2))+(num[2]*(xf))+num[3]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion

    elif (contador==4):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**4))+(num[1]*(lim_inf**3))+(num[2]*(lim_inf**2))+(num[3]*(lim_inf))+num[4]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**4))+(num[1]*(xf**3))+(num[2]*(xf**2))+(num[3]*(xf))+num[4]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
    elif (contador==5):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**5))+(num[1]*(lim_inf**4))+(num[2]*(lim_inf**3))+(num[3]*(lim_inf**2))+(num[4]*(lim_inf))+num[5]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**5))+(num[1]*(xf**4))+(num[2]*(xf**3))+(num[3]*(xf**2))+(num[4]*(xf))+num[5]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
    elif (contador==6):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**6))+(num[1]*(lim_inf**5))+(num[2]*(lim_inf**4))+(num[3]*(lim_inf**3))+(num[4]*(lim_inf**2))+(num[5]*(lim_inf))+num[6]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**6))+(num[1]*(xf**5))+(num[2]*(xf**4))+(num[3]*(xf**3))+(num[4]*(xf**2))+(num[5]*(xf))+num[6]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
    elif (contador==7):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**7))+(num[1]*(lim_inf**6))+(num[2]*(lim_inf**5))+(num[3]*(lim_inf**4))+(num[4]*(lim_inf**3))+(num[5]*(lim_inf**2))+(num[6]*(lim_inf))+num[7]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**7))+(num[1]*(xf**6))+(num[2]*(xf**5))+(num[3]*(xf**4))+(num[4]*(xf**3))+(num[5]*(xf**2))+(num[6]*(xf))+num[7]
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
    elif (contador==8):
        cont=0
        num=[]
        for x in range(len(funcion)):
            if lar<len(funcion):
                if (funcion[lar]=="+"):
                    lar+=1
                elif (funcion[lar]=="^"):
                    lar+=2
                elif(funcion[lar]=="x"):
                    num.append(int(cadena))
                    cadena=""
                    lar+=1
                    cont+=1
                else:
                    cadena+=funcion[lar]
                    lar+=1
            else:
                pass
        num.append(int(cadena))
        for i in range(n):
            yi=(num[0]*(lim_inf**8))+(num[1]*(lim_inf**7))+(num[2]*(lim_inf**6))+(num[3]*(lim_inf**5))+(num[4]*(lim_inf**4))+(num[5]*(lim_inf**3))+(num[6]*(lim_inf**2))+(num[7]*(lim_inf))+num[8]
            xf=lim_inf+iteracion
            yf=(num[0]*(xf**8))+(num[1]*(xf**7))+(num[2]*(xf**6))+(num[3]*(xf**5))+(num[4]*(xf**4))+(num[5]*(xf**3))+(num[6]*(xf**2))+(num[7]*(xf))+num[8]
    
            A=((yi+yf)/2)*iteracion
            suma=suma+A
            lim_inf+=iteracion
    else:
        lst.append("Escribe una funcion que sea maximo de octavo grado")
    return suma

if(len(sys.argv)== 5):
    funcion=str(sys.argv[1])
    lst.append("De la funcion: ")
    lst.append(funcion)
    lim_inf=float((sys.argv[2]))
    lim_sup=float((sys.argv[3]))
    n=int((sys.argv[4]))
    iteracion=(lim_sup-lim_inf)/n
    lst.append("El resultado de las sumas es:")
    lst.append(simpson(funcion, lim_inf, lim_sup ,n,iteracion))
else:
    lst.append("Introduce una ecuacion valida")

print(json.dumps(lst))