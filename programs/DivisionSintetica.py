
import sys
import json

lst = []

lst.append("----------ECUACION ORIGINAL---------")
funcion = []
ex = 1
vex = 8
textoFunction = ""
while(ex <  9):
	x = str(sys.argv[ex])

	if x != "0":
		funcion.append(x)
		textoFunction += "{}^{} + ".format(x,vex)

	vex-=1
	ex += 1
textoFunction += sys.argv[9]
lst.append(textoFunction)
funcion.append(sys.argv[9])
t = len(funcion)
ecuacion =[]

for i in range(len(funcion)-1):
	v = float(funcion[i])
	ecuacion.append(v)

v = float (funcion[t-1])
ecuacion.append(v)

from fractions import Fraction
import math

def imprimirPolinomio(polinomio):
    textoPolinomio = ""
    for i in range(0, len(polinomio)):
        textoPolinomio = textoPolinomio + str(polinomio[i])+"x^"+str(len(polinomio)-1-i)+", "
    lst.append(textoPolinomio)

def obtenerValorP(polinomio):
    valorP = int(math.fabs(polinomio[len(polinomio)-1]))
    lst.append("El valor de P es "+str(valorP))
    return valorP

def obtenerValorQ(polinomio):
    valorQ = int(math.fabs(polinomio[0]))
    lst.append("El valor de Q es "+str(valorQ))
    return valorQ

def obtenerDivisores(valor):
    divisores = []
    for i in range(1, valor+1):
        if(valor % i == 0):
            divisores.append(i)
            divisores.append(i*-1)
    return divisores

def mostrarDivisores(lista, letra):
    fraseDiv = "Los divisores de " + letra + " son "
    for i in range(0, len(lista)):
        fraseDiv = fraseDiv + str(lista[i])+", "
    lst.append(fraseDiv)

def obtenerFactores(listaP, listaQ):
    factores = []
    for i in range(0, len(listaQ)):
        for j in range(0, len(listaP)):
            val = Fraction(listaP[j], listaQ[i])
            if not(val in factores):
                factores.append(val)
    return factores

def mostrarFactores(lista):
    fraseF = "Los factores son "
    for i in range(0, len(lista)):
        fraseF = fraseF + str(lista[i]) + ", "
    lst.append(fraseF)


 



def divisionSintetica():
    polinomioOriginal = []
    for i in range(len(ecuacion)):
        v = float(ecuacion[i])
        polinomioOriginal.append(v)
    
    flagLista = False
    listaPolinomios = []
    listaFactores = []
    listaPolinomios.append(polinomioOriginal)

    while flagLista == False:
        polinomioActual = listaPolinomios[len(listaPolinomios)-1]
        if(len(polinomioActual) > 1):
            
            valorP = obtenerValorP(polinomioActual)
            valorQ = obtenerValorQ(polinomioActual)
            divisoresP = obtenerDivisores(valorP)
            divisoresQ = obtenerDivisores(valorQ)
            mostrarDivisores(divisoresP, "P")
            mostrarDivisores(divisoresQ, "Q")
            factores = obtenerFactores(divisoresP, divisoresQ)
            mostrarFactores(factores)
            flagPolinomio = False

            for i in range(0, len(factores)):
                factorActual = factores[i]
                polinomioNuevo = []
                polinomioNuevo.append(polinomioActual[0])
                for j in range(1, len(polinomioActual)):
                    polinomioNuevo.append(polinomioActual[j]+(factorActual*polinomioNuevo[j-1]))
                if(polinomioNuevo[len(polinomioNuevo)-1] == 0):
                    polinomioNuevo.remove(0)
                    listaFactores.append(factorActual)
                    listaPolinomios.append(polinomioNuevo)
                    flagPolinomio = True
                    break

            if(flagPolinomio):
                lst.append("El factor encontrado es "+str(factorActual))
                lst.append("Los coeficientes resultantes fueron ")
                imprimirPolinomio(polinomioNuevo)
                lst.append("--------------------------------------------------------------")
            else:
                lst.append("--------------------------------------------------------------")
                lst.append("Este polinomio  contiene raices complejas.")
                mostrarFactores(listaFactores)
                i = -500
                resta = 0
                multi = i
                t = len(ecuacion)
                constante = ecuacion[t-1]
                x = constante-(constante*2)
    
                while(i<=500):
                    for j in range(t-2):
                        resta = ecuacion[j+1] + multi
                        multi = resta*i
                            
                    y = constante + multi
                        
                    if(y>-0.50000000 and y< 0.50000000):
                        lst.append(i," es una raiz") 
                
                    i= i + 0.1
                    multi = i
                    resta = 0
                flagLista = True
        else:
            lst.append("Ya se realizaron todas las divisiones posibles.")
            mostrarFactores(listaFactores)
            flagLista = True

        lst.append("-------------------------------------------------------------------------")

if __name__ == "__main__":
    divisionSintetica()
    print(json.dumps(lst))