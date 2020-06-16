#!/usr/bin/env python
# -*- coding: utf-8 -*-
##########################################################################################
#                                       Imports
 
import sys
import json
#from __future__ import *
from sympy import *
import os
from math import *
##########################################################################################
#                                   Variables Gobales
x, y, z, t = symbols('x y z t')
k, m, n = symbols('k m n', integer=True)
f, g, h = symbols('f g h', cls=Function)
##########################################################################################
#                                      Funciones
def deriva(func): #Aplica Derivada de f(x)
    deriv = diff(func)
    return deriv

def evaluaFunc(func, val): #Evalua x en f(x)
    libres = {"x":val}
    return eval(func, None, libres)

def evaluaFuncDer(deriv, val): #Evalua x en f'(x)
    libres = {"x":val}
    return eval(deriv, None, libres)

def metodNewtRaph(func, deriv): #Obtiene raiz
    raiz = solve(func, x)
    return raiz

##########################################################################################
#                                       MAIN

lst = []

func = sys.argv[1]
lst.append(str("f(x)=" + func))
deriv = str(deriva(func))
lst.append(str("f'(x)=" + deriv))
lst.append(str("Formula: x -"+func+"/"+deriv))
raiz = metodNewtRaph(func, deriv)
cont = 0
r = []
lst.append(str("<CALCULÁNDO>"))
while (cont != len(raiz)):
    r.append(raiz[cont])
    cont += 1
cont = 0
while (cont != len(r)):
    lst.append(str("La raiz "+str(cont+1)+" es: "+str(r[cont].evalf())))
    lst.append(str("<CALCULÁNDO>"))
    cont += 1
lst.append(str(">RAÍCES CALCULADAS<"))
print(json.dumps(lst))