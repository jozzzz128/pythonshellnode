import sys
import json
from sympy import *
from sympy.abc import x

lst = []

def maxminf(f):
    df = diff(f, x) # 1era. derivada
    lst.append("Primera derivada: " + str(df))
    d2f = diff(f, x, 2) # 2da. derivada
    lst.append("Segunda derivada: " + str(d2f))
    pcs = solve(Eq(df,0)) # puntos criticos
    for p in pcs:
        if d2f.subs(x,p)>0: 
            tipo="Min"
        elif d2f.subs(x,p)<0: 
            tipo="Max"
        else: 
            tipo="Indefinido"
        lst.append("x = %f (%s)"%(p,tipo))

f = sys.argv[1]

maxminf(f)

print(json.dumps(lst))


