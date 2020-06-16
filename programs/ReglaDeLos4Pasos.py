#                                       Imports

import sys
import json
# from __future__ import *
from sympy import *

lst = []

#                                   Variables Gobales
x, y, z, t, h = symbols('x y z t h')


#                                      Funciones
def deriva(func):  # Aplica Derivada de f(x)
    deriv = diff(func)
    return deriv




#                                       PRIMER PASO
func = sys.argv[1]
cpasos = func
#                                    IMPRIMIR FUNCION ORIGINAL
lst.append("f(x)=" + func)

#                                      MAIN
# Cambiamos las x por (x+h)
cpasos = cpasos.replace('x', '(x+h)')
# Paso 2 evaluar
cpasos=(expand(cpasos))
# Paso 2
c2pasos = str(cpasos) + "-" + str(func)
# Paso 3
c3pasos=(c2pasos+"/h")

#Imprimir
c4pasos = str(deriva(func))

lst.append("Paso 1: f(x+h) \n" + str(cpasos))

lst.append("Paso 2: f(x+h)-f(x) \n" + str(c2pasos))

lst.append("Paso 3: f(x+h)-f(x)/h \n" + str(c3pasos))

lst.append("Paso 4: Lim h->0 \n" + str(c4pasos))


#                                       MAIN

print(json.dumps(lst))