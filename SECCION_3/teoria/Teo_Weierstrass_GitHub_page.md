# Teorema de Weierstrass

## 3.1 Introducción

En esta sección nos enfocaremos en espacios de funciones continuas sobre intervalos compactos. Si el intervalo es $[a, b]$ por $C[a, b]$ denotaremos al conjunto de funciones continuas sobre el intervalo $[a, b]$,

El Teorema de Weierstrass asegura que toda función continua definida en un intervalo compacto puede aproximarse uniformemente con polinomios. Aproximar funciones con polinomios no es nuevo, es lo que se hace con los polinomios de Taylor sólo que las hipótesis son totalmente distintas. En los polinomios de Taylor se pide que la función sea diferenciable mientras que en el de Weierstrass sólo se le pide continuidad. Otra diferencia fundamental es que en Taylor tenemos series de polinomios (es decir la aproximación $n+1$-ésima se obtiene de la $n$-ésima al agregar un sumando) mientras que en Weierstrass no se obtienen series.

## 3.2 Teorema

**Weierstrass (1885)**

Dada $f \in C[a, b]$ y $\varepsilon > 0$ existe un polinomio $p$ tal que $\|f - p\|_{[a,b]} < \varepsilon$.

Como consecuencia existe una sucesión de polinomios $(p_n)_{n=1}^{\infty}$ tal que $\lim_{n \to \infty} \|f - p_n\|_{[a,b]} = 0$.

## 3.3 Lema

Exite una biyección entre $\mathcal{C}[a,b]$ y $\mathcal{C}[0,1]$ que satisface:

1. Es lineal
2. Preserva la norma uniforme
3. Preseva polinomios

Nota: Este lema nos dice que, para demostrar el Teorema de Weierstrass, es suficiente probarlo para el caso $\mathcal{C}[0,1]$

**Demostración**

Para ayudar a la escritura por $x$ denotamos a los elementos en $[a, b]$ y por $t$ a los elementos de $[0, 1]$.

La biyección está inducida por la función $\beta : [a, b] \to [0, 1]$ dada por

$$
\beta(x) = \frac{x - a}{b - a},
$$

la cual tiene inversa $\alpha : [0, 1] \to [a, b]$ dada por

$$
\alpha(t) = t(b - a) + a.
$$

Vamos a definir $T : C[a, b] \to C[0, 1]$ por

$$
T(f)(t) = f(\alpha(t)).
$$

Si ahora definimos $S : C[0, 1] \to C[a, b]$ por

$$
S(g)(x) = g(\beta(x)).
$$

Un cálculo directo prueba que $(T \circ S)(g) = g$ y $(S \circ T)(f) = f$, para todas las funciones $g \in C[0, 1]$, $f \in C[a, b]$. Por lo que $T$ es una biyección.

Para probar que $T$ es lineal tomamos $f_1, f_2 \in C[a, b]$ y $\alpha \in \mathbb{R}$. Ahora si $t \in [0, 1]$ es arbitrario tenemos

$$
\begin{aligned}
T(\alpha f_1 + f_2)(t) &= (\alpha f_1 + f_2)(\alpha(t)) \\
&= \alpha f_1(\alpha(t)) + f_2(\alpha(t)) \\
&= \alpha T(f_1)(t) + T(f_2)(t).
\end{aligned}
$$

Por lo tanto $T(\alpha f_1 + f_2) = \alpha T(f_1) + T(f_2)$.

Para ver que $T$ preserva la norma uniforme notamos que al ser $\alpha : [0, 1] \to [a, b]$ una biyección, dada $f \in C[a, b]$, se tiene que

$$
\begin{aligned}
\{|f(x)| : x \in [a, b]\} &= \{|f(\alpha(t))| : t \in [0, 1]\} \\
&= \{|T(f)(t)| : t \in [0, 1]\}
\end{aligned}
$$

entonces al tomar supremo en ambos lados concluimos $\|f\|_{[a,b]} = \|T(f)\|_{[0,1]}$.

Por último nos resta ver que si $p \in C[a, b]$ es un polinomio entonces $T(p) \in C[0, 1]$ también. Por la definición de $T(p)$, si escribimos $p(x) = \sum_{k=0}^{n} a_k x^k$, tenemos:

$$
\begin{aligned}
T(p)(t) &= p(\alpha(t)) \\
&= \sum_{k=0}^{n} a_k (\alpha(t))^k \\
&= \sum_{k=0}^{n} a_k (t(b-a) + a)^k
\end{aligned}
$$

el cual es un polinomio en la variable $t$.

## 3.4 Definición

### Polinomios de Bernstein

Dada una función $f : [0, 1] \to \mathbb{R}$ definimos su $n$-ésimo polinomio de Bernstein como

$$
B_n(f)(x) = \sum_{k=0}^{n} f\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}
$$

## 3.5 Nota

### Interpretación probabilística de los polinomios de Bernstein

Dada $x \in [0, 1]$ vamos a considerarla como la probabilidad de éxito en lanzar una moneda (es decir un experimento con dos posibles resultados). En lenguaje de probabilidad tenemos una variable aleatoria (abreviado v.a.) Bernoulli $X : \Omega \to \{0, 1\}$ con $\mathbb{P}(X = 1) = x, \mathbb{P}(X = 0) = 1 - x$.

Sean $X_1, \dots, X_n$ v.a. Bernoulli, independientes idénticamente distribuidas. Si $Pr(k)$ es la probabilidad de observar exáctamente $k$ victorias en $n$ juegos entonces

$$
\begin{aligned}
Pr(k) &= \sum_{i_1, \dots, i_k \in \{1, \dots, n\}} \mathbb{P}(X_{i_1} = \cdots = X_{i_k} = 1, \mathbb{P}(X_i) = 0, j \notin \{i_1, \dots, i_k\}) \\
&= \binom{n}{k} \mathbb{P}(X_1 = \cdots = X_k = 1, X_{k+1} = \cdots = X_n = 0) \\
&= \binom{n}{k} x^k (1-x)^{n-k}
\end{aligned}
$$

Dada una función $f : [0, 1] \to \mathbb{R}$ y un natural $n$, vamos a tomar muestras de $f$ en la partición uniforme $\{k/n\}_{k=0}^{n}$ para después tomar su promedio en estos puntos pero tomando cada punto $k/n$ con peso (o dicho de otro modo, con probabilidad) de $Pr(k)$. Dicho promedio arroja

$$
\mathbb{E}[f] := \sum_{k=0}^{n} f\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}.
$$

(donde el lado derecho es la notación para el valor esperado de la función).

---

## 3.6 Lema

Por simplicidad vamos a denotar

$$f_0(x) = 1, \quad f_1(x) = x, \quad f_2(x) = x^2$$

**1**. Para toda $n$:

$$B_n(f_0) = f_0, \quad B_n(f_1) = f_1$$

**Demostración**

Directamente de la definición y utilizando el Teorema del Binomio obtenemos

$$
B_n(f_0)(x) = \sum_{k=0}^{n} f_0\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=0}^{n} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= (x + 1 - x)^n
$$

$$
= 1
$$

Para $f_1$ primero notamos que, para $k \geq 1$:

$$
\frac{k}{n}\binom{n}{k} = \frac{(n-1)!}{(k-1)!((n-1)-(k-1))!} = \binom{n-1}{k-1}
$$

Por lo tanto

$$
B_n(f_1)(x) = \sum_{k=0}^{n} f_1\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=0}^{n} \frac{k}{n} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=1}^{n} \frac{k}{n} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= x \sum_{k=1}^{n} \binom{n-1}{k-1} x^{k-1} (1-x)^{n-k}
$$

$$
= x \sum_{k=1}^{n} \binom{n-1}{k-1} x^{k-1} (1-x)^{(n-1)-(k-1)}
$$

$$
= x \sum_{j=0}^{n-1} \binom{n-1}{j} x^{j} (1-x)^{(n-1)-j}
$$

$$
= x(x + 1 - x)^{n-1}
$$

$$
= x
$$

**2**. Para toda $n$:

$$B_n(f_2) = \left(1 - \frac{1}{n}\right) f_2 + \frac{1}{n} f_1$$

Por lo tanto $(B_n(f_2))_{n=1}^{\infty}$ converge uniformemente a $f_2$ en $[0,1]$.

**Demostración**

Iniciando la prueba notamos que, para $k \geq 2$

$$
\frac{k-1}{n}\binom{n-1}{k-1} = \frac{k-1}{n} \frac{(n-1)!}{(k-1)!(n-k)!}
$$

$$
= \frac{(n-1)}{n} \frac{(n-2)!}{(k-2)!(n-k)!}
$$

$$
= \frac{(n-1)}{n} \binom{n-2}{k-2}.
$$

Ahora empezamos a calcular $B_n(f_2)(x)$ y usando la misma cuenta que en el inciso 1 se puede simplificar como:

$$
B_n(f_2)(x) = \sum_{k=0}^{n} \frac{k^2}{n^2} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=1}^{n} \frac{k^2}{n^2} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=1}^{n} \frac{k}{n} \left[\frac{k}{n} \binom{n}{k}\right] x^k (1-x)^{n-k}
$$

$$
= \sum_{k=1}^{n} \frac{k}{n} \binom{n-1}{k-1} x^k (1-x)^{n-k}
$$

Ahora, escribiendo

$$
\frac{k}{n} \binom{n-1}{k-1} = \frac{k-1+1}{n} \binom{n-1}{k-1}
$$

$$
= \frac{k-1}{n} \binom{n-1}{k-1} + \frac{1}{n} \binom{n-1}{k-1},
$$

obtenemos

$$
B_n(f_2)(x) = \underbrace{\sum_{k=1}^{n} \frac{k-1}{n} \binom{n-1}{k-1} x^k (1-x)^{n-k}}_{S_1} + \underbrace{\sum_{k=1}^{n} \frac{1}{n} \binom{n-1}{k-1} x^k (1-x)^{n-k}}_{S_2}.
$$

Ahora simplificamos $S_1$ y $S_2$ por separado.

Para $S_1$, usando la cuenta de al principio, obtenemos:

$$
S_1 = \sum_{k=2}^{n} \frac{k-1}{n} \binom{n-1}{k-1} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=2}^{n} \frac{n-1}{n} \binom{n-2}{k-2} x^k (1-x)^{n-k}
$$

$$
\underset{j=k-2}{=} \frac{n-1}{n} \sum_{j=0}^{n-2} \binom{n-2}{j} x^{j+2} (1-x)^{n-2-j}
$$

$$
= \left(\frac{n-1}{n}\right) x^2 \sum_{j=0}^{n-2} \binom{n-2}{j} x^j (1-x)^{n-2-j}
$$

$$
= \left(1 - \frac{1}{n}\right) x^2
$$

$$
= \left(1 - \frac{1}{n}\right) f_2(x)
$$

La cuenta para $S_2$ es más sencilla:

$$
S_2 = \sum_{k=1}^{n} \frac{1}{n} \binom{n-1}{k-1} x^k (1-x)^{n-k}
$$

$$
\underset{j=k-1}{=} \frac{1}{n} \sum_{j=0}^{n-1} \binom{n-1}{j} x^{j+1} (1-x)^{n-1-j}
$$

$$
= \frac{x}{n} \sum_{j=0}^{n-1} \binom{n-1}{j} x^{j} (1-x)^{n-1-j}
$$

$$
= \frac{x}{n}
$$

$$
= \frac{1}{n} f_1(x).
$$

Concluimos que

$$
B_n(f_2)(x) = \left(1 - \frac{1}{n}\right) f_2(x) + \frac{1}{n} f_1(x).
$$

---

## 3.7 Lema

Fija $\delta > 0$ y $x \in [0,1]$. Considera el conjunto

$$
F = \{k \in \{0, \dots, n\} : |k/n - x| \geq \delta\}
$$

Entonces

$$
\sum_{k \in F} \binom{n}{k} x^k (1-x)^{n-k} \leq \frac{1}{4n\delta^2}
$$

**Demostración**

Notamos que si $k \in F$ entonces $\delta^2 \leq (k/n - x)^2$ por lo que $1 \leq (k/n - x)^2/\delta^2$ por lo tanto

$$
\sum_{k \in F} \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
\leq \frac{1}{\delta^2} \sum_{k \in F} \left(\frac{k}{n} - x\right)^2 \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
\leq \frac{1}{\delta^2} \sum_{k=0}^{n} \left(\frac{k}{n} - x\right)^2 \binom{n}{k} x^k (1-x)^{n-k}
$$

La prueba se termina si logramos probar que

$$
\sum_{k=0}^{n} \left(\frac{k}{n} - x\right)^2 \binom{n}{k} x^k (1-x)^{n-k} \leq \frac{1}{4n}.
$$

Para lo anterior desarrollando el cuadrado tenemos

$$
\sum_{k=0}^{n} \left(\frac{k}{n} - x\right)^2 \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k=0}^{n} \left(\frac{k}{n}\right)^2 \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
- 2x \sum_{k=0}^{n} \left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
+ x^2 \sum_{k=0}^{n} \binom{n}{k} x^k (1-x)^{n-k}
$$

y usando los polinomios de Bernstein para $f_0, f_1, f_2$ podemos escribir

$$
\sum_{k=0}^{n} \left(\frac{k}{n}\right)^2 \binom{n}{k} x^k (1-x)^{n-k} = B_n(f_2)(x),
$$

$$
\sum_{k=0}^{n} \left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k} = B_n(f_1)(x),
$$

$$
\sum_{k=0}^{n} \binom{n}{k} x^k (1-x)^{n-k} = 1.
$$

Por lo tanto

$$
\sum_{k=0}^{n} \left(\frac{k}{n} - x\right)^2 \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= B_n(f_2)(x) - 2x B_n(f_1)(x) + x^2.
$$

Ahora por el lema [Lema 3.6](#) podemos simplificar lo anterior como:

$$
B_n(f_2)(x) - 2x B_n(f_1)(x) + x^2
$$

$$
= \left(1 - \frac{1}{n}\right)x^2 + \frac{1}{n}x - 2x^2 + x^2
$$

$$
= \left(1 - \frac{1}{n}\right)x^2 + \frac{1}{n}x - x^2
$$

$$
= \frac{1}{n}x(1-x)
$$

$$
\leq \frac{1}{4n}
$$

donde en la última desigualdad usamos $\max_{x \in [0,1]} \{x(1-x)\} = \frac{1}{4}$.

---

## 3.8 Teorema

### Bernstein (1912)

Sea $f: [0,1] \to \mathbb{R}$ una función continua en $[0,1]$. Entonces la sucesión de polinomios de Bernstein, $(B_n(f))_{n=1}^{\infty}$, converge uniformemente a $f$ en $[0,1]$.

**Demostración**

Sea $\varepsilon > 0$.

El primer paso es usar la continuidad uniforme de $f$ en $[0,1]$ para asegurar la existencia de un $\delta > 0$ tal que para $x, y \in [0,1]$ con $|x-y| < \delta$ entonces $|f(x) - f(y)| < \varepsilon$.

Es segundo paso es estimar

$$
|f(x) - B_n(f)(x)|.
$$

Por el Teorema del binomio, $1 = \sum_{k=0}^{n} \binom{n}{k} x^k (1-x)^{n-k}$, por lo que $f(x) = \sum_{k=0}^{n} f(x) \binom{n}{k} x^k (1-x)^{n-k}$ por lo que

$$
|f(x) - B_n(f)(x)|
$$

$$
= \left| \sum_{k=0}^{n} f(x) \binom{n}{k} x^k (1-x)^{n-k} - \sum_{k=0}^{n} f\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k} \right|
$$

$$
\leq \sum_{k=0}^{n} \left| f(x) - f\left(\frac{k}{n}\right) \right| \binom{n}{k} x^k (1-x)^{n-k}
$$

Ahora, en la suma anterior dividimos los sumandos que están $\delta$-cercanos a $x$ y los que no. Es decir consideramos el conjunto

$$
F = \{k \in \{1, \dots, n\} : |k/n - x| \geq \delta\}
$$

Entonces

$$
\sum_{k=0}^{n} \left| f(x) - f\left(\frac{k}{n}\right) \right| \binom{n}{k} x^k (1-x)^{n-k}
$$

$$
= \sum_{k \notin F} \left| f(x) - f\left(\frac{k}{n}\right) \right| x^k (1-x)^{n-k}
$$

$$
+ \sum_{k \in F} \left| f(x) - f\left(\frac{k}{n}\right) \right| x^k (1-x)^{n-k}
$$

$$
\leq \varepsilon \left( \sum_{k \notin F} x^k (1-x)^{n-k} \right)
$$

$$
+ 2\|f\|_{\infty} \left( \sum_{k \in F} x^k (1-x)^{n-k} \right)
$$

$$
\leq \varepsilon + 2\|f\|_{\infty} \left( \sum_{k \in F} x^k (1-x)^{n-k} \right)
$$

Ahora, por el [Lema 3.7](#) podemos concluir

$$
|f(x) - B_n(f)(x)| \leq \varepsilon + 2\|f\|_{\infty} \frac{1}{4n\delta^2}
$$

Finalmente si pedimos que $n > \dfrac{\|f\|_{\infty}}{2\delta^2 \varepsilon}$ concluimos que, para todo $x \in [0,1]$:

$$
|f(x) - B_n(f)(x)| < 2\varepsilon
$$

Nota que $\dfrac{\|f\|_{\infty}}{2\delta^2 \varepsilon}$ NO depende de $x$, sólo de $\varepsilon$.

Al ser $\varepsilon$ arbitraria concluimos que $(B_n(f))_{n=1}^{\infty}$ converge uniformemente a $f$ en $[0,1]$.

---

## Teorema

### Teorema de Korovkin

Una función lineal $A: C[0,1] \to C[0,1]$ se llama positiva si manda funciones no negativas a funciones no negativas, es decir, si $f \geq 0$ entonces $Af \geq 0$. Nota: por simplicidad denotamos $Af$ en vez de $A(f)$.

Sea $(A_n : C[0,1] \to C[0,1])_{n=1}^{\infty}$ una sucesión de funciones lineales positivas con la propiedad de que

$$
\lim_{n \to \infty} \|A_n f_i - f_i\|_{[0,1]} = 0
$$

donde $f_i(x) = x^i$, $i = 0, 1, 2$.

Entonces para toda $f \in C[0,1]$ se cumple que

$$
\lim_{n \to \infty} \|A_n f - f\|_{[0,1]} = 0
$$

**Demostración**

Primero vamos a observar algunas propiedades de los operadores lineales positivos. En lo que sigue, $f, g, h \in C[0,1]$.

1. Si $f \leq g$ entonces $Af \leq Ag$.

    Razón: si $f \leq g \Rightarrow 0 \leq g - f$ y al ser $A$ positivo, obtenemos $0 \leq A(g-f)$. Pero por linealidad:

    $$
    0 \leq A(g-f) = Ag - Af
    $$
    $$
    \Rightarrow Af \leq Ag.
    $$

2. Si $|f - h| \leq g$ entonces $|Af - Ah| \leq Ag$.

    Razón:

    $$
    |f-h| \leq g \Rightarrow -g \leq f-h \leq g
    $$
    $$
    \Rightarrow A(-g) \leq A(f-h) \leq Ag
    $$
    $$
    \Rightarrow -Ag \leq Af - Ah \leq Ag
    $$
    $$
    \Rightarrow |Af - Ah| \leq Ag.
    $$

Ahora vamos a ver propiedades de la convergencia uniforme y operadores lineales.

1. La otra desigualdad del triángulo. Para $f, g \in C[0,1]$:

    $$
    \big| \|f\|_{[0,1]} - \|g\|_{[0,1]} \big| \leq \|f-g\|_{[0,1]}.
    $$

    Razón: usando las propiedades de $\|\cdot\|_{[0,1]}$ tenemos

    $$
    \|f\|_{[0,1]} = \|f-g+g\|_{[0,1]}
    $$
    $$
    \leq \|f-g\|_{[0,1]} + \|g\|_{[0,1]}.
    $$

    Pasando $\|g\|_{[0,1]}$ del lado izquierdo llegamos a

    $$
    \|f\|_{[0,1]} - \|g\|_{[0,1]} \leq \|f-g\|_{[0,1]}.
    $$

    De manera similar se obtiene

    $$
    \|g\|_{[0,1]} - \|f\|_{[0,1]} \leq \|f-g\|_{[0,1]}.
    $$

    Juntando éstas dos desigualdades llgamos a

    $$
    \big| \|f\|_{[0,1]} - \|g\|_{[0,1]} \big| \leq \|f-g\|_{[0,1]}.
    $$

2. Si $(A_n : C[0,1] \to C[0,1])_{n=1}^{\infty}$ es una sucesión de operadores lineales tal que $\lim_{n\to\infty} \|A_n f - f\|_{[0,1]} = 0$ entonces

    $$
    \lim_{n \to \infty} \|A_n f\|_{[0,1]} = \|f\|_{[0,1]}.
    $$

    Razón: usando la otra desigualdad del triángulo tenemos que para todo $n \in \mathbb{N}$:

    $$
    \big| \|A_n f\|_{[0,1]} - \|f\|_{[0,1]} \big| \leq \|A_n f - f\|_{[0,1]}.
    $$

    Pero por hipótesis, $\lim_{n\to\infty} \|A_n f - f\|_{[0,1]} = 0$, por lo que la ley del Sandwich para límites implica

    $$
    \lim_{n \to \infty} \big| \|A_n f\|_{[0,1]} - \|f\|_{[0,1]} \big| = 0 \Rightarrow \lim_{n \to \infty} \|A_n f\|_{[0,1]} = \|f\|_{[0,1]}
    $$

3. Si $(A_n : C[0,1] \to C[0,1])_{n=1}^{\infty}$ es una sucesión de operadores lineales tal que $\lim_{n\to\infty} \|A_n f - f\|_{[0,1]} = 0$ y $h \in C[0,1]$ es cualquier función, entonces

    $$
    \lim_{n \to \infty} \|h A_n f - h f\| = 0.
    $$

    Razón: simplemente notamos que para toda $x \in [0,1]$,

    $$
    |h(x)(A_n f)(x) - h(x) f(x)| = |h(x)| |(A_n f)(x) - f(x)| \leq \|h\| \|A_n f - f\|
    $$

    tomando supremo sobre las $x \in [0,1]$, llegamos

    $$
    \|h A_n f - h f\| \leq \|h\| \|A_n f - f\| \to 0.
    $$

Para continuar, vamos a copiar la prueba del Teorema de Bernstein: usamos la continuidad uniforme de $f$ en $[0,1]$.

Dada $\varepsilon > 0$ existe un $\delta > 0$ tal que para todos $x, y \in [0,1]$ con $|y-x| < \delta$ se cumple $|f(y) - f(x)| < \varepsilon$.

Ahora, si $|y-x| \geq \delta$ entonces $1 \leq \dfrac{(y-x)^2}{\delta^2}$ por lo que

$$
|f(y) - f(x)| \leq \frac{(y-x)^2}{\delta^2} |f(y) - f(x)|
$$

$$
\leq 2\|f\|_{[0,1]} \frac{1}{\delta^2} (y-x)^2
$$

Combinando estos dos casos tenemos que para todos $x, y \in [0,1]$

$$
|f(y) - f(x)| < \varepsilon + 2\|f\|_{[0,1]} \frac{1}{\delta^2} (y-x)^2.
$$

Por simplicidad denotamos $c = 2\|f\|_{[0,1]} \dfrac{1}{\delta^2}$.

Ahora vamos a cambiar de perspectiva, vamos a tomar a $x$ como fija y $y$ como variable. Por ejemplo podemos reescribir $(y-x)^2$ como

$$
(y-x)^2 = f_2(y) - 2x f_1(y) + x^2 f_0(y)
$$

recordando que $f_0(y) = 1$, $f_1(y) = y$ y $f_2(y) = y^2$.

Con esta notación podemos reescribir la desigualdad anterior como

$$
|f(y) - f(x) f_0(y)| < \varepsilon + c(f_2(y) - 2x f_1(y) + x^2 f_0(y)).
$$

Pensando ésta desigualdad como una desigualdad de funciones podemos escribir

$$
|f - f(x) f_0| < \varepsilon f_0 + c(f_2 - 2x f_1 + x^2 f_0).
$$

donde tratamos a $x$ como constante.

Aplicando el operador lineal $A_n$ y usando sus propiedades de ser positivo llegamos a

$$
|A_n f - f(x) A_n f_0| \leq \varepsilon A_n f_0 + c(A_n f_2 - 2x A_n f_1 + x^2 A_n f_0).
$$

Tomando la ventaja de que la desigualdad anterior es una desigualdad de funciones podemos evaluar en $x$ para obtener:

$$
|(A_n f)(x) - f(x)(A_n f_0)(x)| \leq \varepsilon (A_n f_0)(x) + c((A_n f_2)(x) - 2x(A f_1)(x) + x^2(A_n f_0)(x)).
$$

Ahora hacemos una pequeña corrección:

$$
|(A_n f)(x) - f(x)| \leq |(A_n f)(x) - f(x)(A_n f_0)(x)| + |f(x)(A_n f_0)(x) - f(x)|
$$

$$
\leq |(A_n f_0)(x) - f(x)(A_n f_0)(x)| + |f(x)||(A_n f_0)(x) - 1|
$$

Juntando las dos últimas desigualdades llegamos a

$$
|(A_n f)(x) - f(x)| \leq |f(x)||(A_n f_0)(x) - 1| + \varepsilon (A_n f_0)(x)
$$
$$
+ c((A_n f_2)(x) - 2x(A f_1)(x) + x^2(A_n f_0)(x)).
$$

Ahora definimos $g_n(x) = (A_n f_2)(x) - 2x(A f_1)(x) + x^2 (A_n f_0)(x)$.

Entonces la desigualdad anterior se puede escribir:

$$
|(A_n f)(x) - f(x)| \leq |f(x)||(A_n f_0)(x) - 1| + \varepsilon (A_n f_0)(x) + c g_n(x). \tag{1}
$$

Afirmación: $g_n \to 0$, uniformemente en $[0,1]$.

Para probar esto vamos a usar las hipótesis

$$
A_n f_2 \to f_2, \quad \text{uniformemente,}
$$
$$
A_n f_1 \to f_1, \quad \text{uniformemente,}
$$
$$
A_n f_0 \to f_1, \quad \text{uniformemente.}
$$

Multiplicando la segunda ecuación de arriba por $-2x$ llegamos a:

$$
-2x A_n f_1 \to -2x f_1, \quad \text{uniformemente.}
$$

Multiplicando la tercera ecuación de arriba por $x^2$ llegamos a:

$$
x^2 A_n f_0 \to x^2 f_0, \quad \text{uniformemente}
$$

Como la suma preserva la convergencia uniforme tenemos

$$
g_n = A_n f_2 - 2x A_n f_1 + x^2 A_n f_0
$$
$$
\to f_2 - 2x f_1 + x^2 f_0
$$
$$
= x^2 - 2x \cdot x + x^2 = 0, \quad \text{uniformemente.}
$$

Esto termina la afirmación.

Ahora vamos a pasar a la norma uniforme para terminar la demostración. Primero tenemos las cotas:

$$
|(A_n f)(x) - 1| \leq \|A_n f_0 - 1\| = \|A_n f_0 - f_0\|
$$
$$
|f(x)| \leq \|f\|
$$
$$
\|A_n f_0(x)\| \leq \|A_n f_0\|
$$
$$
|g_n(x)| \leq \|g_n\|
$$

válidas para toda $x \in [0,1]$. Substituyendo éstas cotas en $(1)$ obtenemos

$$
|(A_n f)(x) - f(x)| \leq \|f\| \|A_n f_0 - f_0\| + \varepsilon \|A_n f_0\| + c \|g_n\|
$$

válidas para toda $x \in [0,1]$, entonces tomando supremo sobre las $x \in [0,1]$ llegamos a

$$
\|A_n f - f\| \leq \|f\| \|A_n f_0 - f_0\| + \varepsilon \|A_n f_0\| + c \|g_n\|
$$

Tomando límite en los sumandos del lado derecho obtenemos

$$
\lim_{n \to \infty} \|A_n f_0 - f_0\| = 0,
$$
$$
\lim_{n \to \infty} \|A_n f_0\| = \|f_0\| = 1,
$$
$$
\lim_{n \to \infty} \|g_n\| = 0.
$$

Entonces llegamos a que

$$
\lim_{n \to \infty} \|A_n f - f\| \leq \varepsilon.
$$

Al ser $\varepsilon > 0$ arbitrario concluimos

$$
\lim_{n \to \infty} \|A_n f - f\| = 0.
$$
