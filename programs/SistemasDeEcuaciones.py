import sys
import json
from sympy import *
#                                   Variables Globales
x, y, z, t = symbols('x y z t')


#                                      Funcion

def lineal(func1 , func2): #Aplica Derivada de f(x)
    solucion = linsolve([func1, func2], (x, y))
    return solucion


#                                       MAIN
lst = []

func1 = sys.argv[1]
func2 = sys.argv[2]
func1 = func1.replace('=','-');
func2 = func2.replace('=','-');
lst.append(str("F_1 = " + func1))
lst.append(str("F_2 = " + func2))

(x,y)= next(iter(lineal(func1,func2)))

lst.append(str("x = " + str(x)))
lst.append(str("y = " + str(y)))

print(json.dumps(lst))
#print(f'X = {x} \nY = {y}')

