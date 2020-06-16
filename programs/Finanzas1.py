import sys
import json
from sympy import *

lst = []
#                                   Variables Gobales
x, y, z, t, h = symbols('x y z t h')

#p = 0.03*x + 50
#r = 0.002*x**2 + 1.5*x
p = sympify(sys.argv[1])
r = sympify(sys.argv[2])

s = p-r

t = solve(s)
i = integrate(s)
if(t[1] > t[0]):
    lim = t[1]
else:
    lim =t[0]
lst.append(lim)
r = i.subs(x,lim)
print("Ecuacion igualada a cero :     " + str(s))
print("Solucion de ecuacion:         " + str(t))
print("Ecuacion Integrada:        " + str(i))
print("Solucion:        " + str(r))
