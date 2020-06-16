from os import system
import sys
import json

lst = []

pp = str("2x+4x^3-6+4x^2-5x^4")


def descartes(polinomio):
    polinomio.strip()
    exp1 = polinomio[0]
    exp2 = ""
    exp3 = ""
    exp4 = ""
    exp5 = ""
    control = 1

    while True:
        if polinomio[control] == "+" or polinomio[control] == "-":
            exp2 += polinomio[control]
            control += 1
            break
        else:
            exp1 += polinomio[control]
            control += 1

    while True:
        if polinomio[control] == "+" or polinomio[control] == "-":
            exp3 += polinomio[control]
            control += 1
            break
        else:
            exp2 += polinomio[control]
            control += 1

    while True:
        if polinomio[control] == "+" or polinomio[control] == "-":
            exp4 += polinomio[control]
            control += 1
            break
        else:
            exp3 += polinomio[control]
            control += 1

    while True:
        if polinomio[control] == "+" or polinomio[control] == "-":
            exp5 += polinomio[control]
            control += 1
            break
        else:
            exp4 += polinomio[control]
            control += 1

    while True:
        if control == len(polinomio):
            break
        else:
            exp5 += polinomio[control]
            control += 1

    if exp1[0] != "+" and exp1[0] != "-":
        exp1 = "+" + exp1

    exp = [exp1.strip(), exp2.strip(), exp3.strip(), exp4.strip(), exp5.strip()]

    control = 0
    while control < 4:
        if not "x" in exp[control]:
            aux = exp[4]
            exp[4] = exp[control]
            exp[control] = aux
            break
        control += 1

    control = 0
    while control < 3:
        if not "^" in exp[control]:
            aux = exp[3]
            exp[3] = exp[control]
            exp[control] = aux
            break
        control += 1

    if float(exp[2][len(exp[2]) - 1]) > float(exp[1][len(exp[1]) - 1]):
        aux = exp[1]
        exp[1] = exp[2]
        exp[2] = aux

    if float(exp[1][len(exp[1]) - 1]) > float(exp[0][len(exp[0]) - 1]):
        aux = exp[0]
        exp[0] = exp[1]
        exp[1] = aux

    if float(exp[2][len(exp[2]) - 1]) > float(exp[1][len(exp[1]) - 1]):
        aux = exp[1]
        exp[1] = exp[2]
        exp[2] = aux

    cambios = 0
    if exp[0][0] != exp[1][0]:
        cambios += 1

    if exp[1][0] != exp[2][0]:
        cambios += 1

    if exp[2][0] != exp[3][0]:
        cambios += 1

    if exp[3][0] != exp[4][0]:
        cambios += 1

    exp_ = [exp[0], exp[1], exp[2], exp[3], exp[4]]

    if not float(exp[0][len(exp[0]) - 1]) % 2 == 0:
        if "+" in exp_[0]:
            exp_[0] = exp_[0].replace("+", "-")
        else:
            exp_[0] = exp_[0].replace("-", "+")

    if not float(exp[1][len(exp[1]) - 1]) % 2 == 0:
        if "+" in exp_[1]:
            exp_[1] = exp_[1].replace("+", "-")
        else:
            exp_[1] = exp_[1].replace("-", "+")

    if not float(exp[2][len(exp[2]) - 1]) % 2 == 0:
        if "+" in exp_[2]:
            exp_[2] = exp_[2].replace("+", "-")
        else:
            exp_[2] = exp_[2].replace("-", "+")

    if "+" in exp_[3]:
        exp_[3] = exp_[3].replace("+", "-")
    else:
        exp_[3] = exp_[3].replace("-", "+")

    cambios_ = 0
    if exp_[0][0] != exp_[1][0]:
        cambios_ += 1

    if exp_[1][0] != exp_[2][0]:
        cambios_ += 1

    if exp_[2][0] != exp_[3][0]:
        cambios_ += 1

    if exp_[3][0] != exp_[4][0]:
        cambios_ += 1

    raices_p = [cambios, cambios if cambios - 2 < 0 else cambios - 2]
    raices_n = [cambios_, cambios_ if cambios_ - 2 < 0 else cambios_ - 2]
    raices_c = [4 - raices_p[0] - raices_n[0], 4 - raices_p[1] - raices_n[1]]

    lst.append("Para el polinomio f(x) = " + exp[0].replace("+", "") + exp[1].replace("+", " + ").replace("-", " - ")
          + exp[2].replace("+", " + ").replace("-", " - ") + exp[3].replace("+", " + ").replace("-", " - ")
          + exp[4].replace("+", " + ").replace("-", " - "))

    lst.append("Hubo un total de " + str(cambios) + " cambios en el orden de los signos\n")

    lst.append("para el polinomio f(-x) = " + exp_[0].replace("+", "") + exp_[1].replace("+", " + ").replace("-", " - ")
          + exp_[2].replace("+", " + ").replace("-", " - ") + exp_[3].replace("+", " + ").replace("-", " - ")
          + exp_[4].replace("+", " + ").replace("-", " - "))

    lst.append("Hubo un total de " + str(cambios_) + " cambios en el orden de los signos\n")

    lst.append("Por lo que pueden existir: \n" +
          str(raices_p[0]) + "- Raices positivas\n" +
          str(raices_n[0]) + "- Raices negativas\n" +
          str(raices_c[0]) + "- Raices complejas\n")

    lst.append("O\n")

    lst.append(str(raices_p[1]) + "- Raices positivas\n" +
          str(raices_n[1]) + "- Raices negativas\n" +
          str(raices_c[1]) + "- Raices complejas\n")


if len(sys.argv) == 2:
    polinomio = str(sys.argv[1])
    descartes(polinomio)
    print(json.dumps(lst))
else:
    lst.append("La ecuacion es inavalida")
