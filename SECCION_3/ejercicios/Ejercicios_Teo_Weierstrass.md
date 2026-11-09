# Ejerciocios Teorema de Weierstrass

## 3.10 Ejercicio

Si $f \in \mathcal{C}[a,b]$ satisface $\int_a^b x^nf(x)dx=0$ para toda $n=0,1,2,\ldots$ entonces $f=0$

## Solución

**Demostración**

**Paso 1: La hipótesis se extiende a todo polinomio.**

Sea $p(x) = \displaystyle\sum_{n=0}^{N} c_n x^n$ un polinomio arbitrario. Por linealidad de la integral y usando la hipótesis en cada sumando,

$$
\int_a^b p(x) f(x)\, dx = \int_a^b \left( \sum_{n=0}^{N} c_n x^n \right) f(x)\, dx = \sum_{n=0}^{N} c_n \int_a^b x^n f(x)\, dx = \sum_{n=0}^{N} c_n \cdot 0 = 0.
$$

Por lo tanto

$$
\int_a^b p(x) f(x)\, dx = 0 \qquad \text{para todo polinomio } p. \tag{1}
$$

**Paso 2: Aproximamos $f$ uniformemente por polinomios.**

Como $f \in C[a,b]$, por el Teorema de Weierstrass (3.2) existe una sucesión de polinomios $(p_k)_{k=1}^{\infty}$ tal que

$$
\|f - p_k\|_{[a,b]} \xrightarrow[k \to \infty]{} 0. \tag{2}
$$

**Paso 3: Acotamos $\int_a^b f^2$.**

Fijemos $k \in \mathbb{N}$. Sumando y restando $p_k(x)$,

$$
\int_a^b f(x)^2 \, dx = \int_a^b f(x)\big(f(x) - p_k(x)\big)\, dx + \int_a^b f(x) p_k(x)\, dx.
$$

Por $(1)$, aplicada al polinomio $p_k$, el segundo sumando es cero:

$$
\int_a^b f(x)^2 \, dx = \int_a^b f(x)\big(f(x) - p_k(x)\big)\, dx.
$$

Acotamos el integrando usando que $|f(x)| \leq \|f\|_{[a,b]}$ y $|f(x) - p_k(x)| \leq \|f - p_k\|_{[a,b]}$ para todo $x \in [a,b]$:

$$
\int_a^b f(x)^2\, dx \leq \int_a^b |f(x)| \, |f(x) - p_k(x)|\, dx \leq \int_a^b \|f\|_{[a,b]} \, \|f - p_k\|_{[a,b]} \, dx.
$$

Como el integrando de la derecha es constante respecto a $x$,

$$
\int_a^b f(x)^2\, dx \leq (b-a) \, \|f\|_{[a,b]} \, \|f - p_k\|_{[a,b]}. \tag{3}
$$

**Paso 4: Tomamos límite cuando $k \to \infty$.**

El lado izquierdo de $(3)$ no depende de $k$. Usando $(2)$, el lado derecho de $(3)$ tiende a $0$ cuando $k \to \infty$ (pues $(b-a)\|f\|_{[a,b]}$ es una constante fija). Por lo tanto

$$
\int_a^b f(x)^2\, dx \leq 0.
$$

Por otro lado, como $f(x)^2 \geq 0$ para todo $x \in [a,b]$, se tiene también

$$
\int_a^b f(x)^2\, dx \geq 0.
$$

Concluimos que

$$
\int_a^b f(x)^2\, dx = 0. \tag{4}
$$

**Paso 5: Concluimos que $f = 0$.**

La función $f^2$ es continua y no negativa en $[a,b]$. Supongamos, por contradicción, que $f \not\equiv 0$, es decir que existe $x_0 \in [a,b]$ con $f(x_0) \neq 0$, o equivalentemente $f(x_0)^2 > 0$.

Por continuidad de $f^2$ en $x_0$, tomando $\varepsilon = \dfrac{f(x_0)^2}{2} > 0$, existe $\delta > 0$ tal que para todo $x \in [a,b]$ con $|x - x_0| < \delta$ se cumple

$$
f(x)^2 > f(x_0)^2 - \varepsilon = \frac{f(x_0)^2}{2} > 0.
$$

Sea $J = [a,b] \cap (x_0 - \delta, x_0 + \delta)$, un subintervalo de $[a,b]$ de longitud $\ell > 0$ (pues $x_0 \in [a,b]$). Entonces

$$
\int_a^b f(x)^2\, dx \geq \int_J f(x)^2\, dx \geq \ell \cdot \frac{f(x_0)^2}{2} > 0,
$$

lo cual contradice $(4)$.

Por lo tanto $f(x) = 0$ para todo $x \in [a,b]$, es decir, $f = 0$. $\blacksquare$

**Observación:** este resultado es un ejemplo clásico de aplicación del Teorema de Weierstrass fuera del contexto de la aproximación misma: se usa para probar un resultado de **unicidad** (aquí, que los momentos $\int x^n f$ determinan a $f$), reduciendo el problema a integrar contra polinomios en lugar de contra una función arbitraria.

---

## 3.11 Ejercicio

Este ejercicio da una prueba del Teorema de Weierstrass usando el Teorema de Weierstrass usando los polinomios de Bernstein.

Usando la isometría lineal de $C[a, b]$ a $C[0, 1]$ inducida por la función $\beta : [a, b] \to [0, 1]$ dada por $\beta(x) = \frac{x-a}{b-a}$ prueba que la definición de los polinomios de Bernstein en $[a, b]$ está dada por

$$
B_n(f)(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right)(x-a)^k (b-x)^{n-k}
$$

Prueba que con esta definición de polinomios de Bernstein en $[a, b]$ se cumple que $(B_n(f))_{n=1}^{\infty}$ converge uniformemente a $f$ en $[a, b]$.

Sugerencia: usa en caso $[0, 1]$ y los cambios de variable $\alpha(t) = t(b-a) + a$, $\beta(x) = \frac{x-a}{b-a}$.

**Demostración**

Consideremos los cambios de variable

$$
\alpha : [0,1] \longrightarrow [a,b] \quad \text{dado por} \quad \alpha(t) = t(b-a) + a
$$

$$
\text{y} \quad \beta : [a,b] \longrightarrow [0,1] \quad \text{dado por} \quad \beta(t) = \frac{t-a}{b-a}
$$

Sea $T : C([a,b]) \longrightarrow C([0,1])$ la isometría lineal dada por

$$
T(h) = h \circ \alpha, \qquad T(h)(x) = h(\alpha(x)) \quad \forall x \in [a,b]
$$

Sabemos que $S : C([0,1]) \longrightarrow C([a,b])$ dada por $S(h) = h \circ \beta$ es la inversa de $T$.

Sea $f : [a,b] \longrightarrow \mathbb{R}$ cualquier función. Notemos que $f \circ \alpha : [0,1] \longrightarrow \mathbb{R}$, entonces podemos considerar su $n$-ésimo polinomio de Bernstein

$$
B_n(f \circ \alpha)(t) = \sum_{k=0}^{n} (f \circ \alpha)\left(\frac{k}{n}\right) \binom{n}{k} t^k (1-t)^{n-k}
$$

Sabemos que $B_n(f \circ \alpha) \in C([0,1])$.

Entonces, $\forall x \in [a,b]$

$$
S(B_n(f \circ \alpha))(x) = (B_n(f \circ \alpha) \circ \beta)(x) = B_n(f \circ \alpha)(\beta(x))
$$

$$
= \sum_{k=0}^{n} (f \circ \alpha)\left(\frac{k}{n}\right) \binom{n}{k} \big(\beta(x)\big)^k \big(1 - \beta(x)\big)^{n-k}
$$

$$
= \sum_{k=0}^{n} f\left(\alpha\left(\frac{k}{n}\right)\right) \binom{n}{k} \left(\frac{x-a}{b-a}\right)^k \left(1 - \frac{x-a}{b-a}\right)^{n-k}
$$

$$
= \sum_{k=0}^{n} f\left(\frac{k}{n}(b-a) + a\right) \binom{n}{k} \frac{(x-a)^k}{(b-a)^k} \left(\frac{(b-a)-(x-a)}{b-a}\right)^{n-k}
$$

$$
= \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} \frac{(x-a)^k}{(b-a)^k} \left(\frac{b-x}{b-a}\right)^{n-k}
$$

$$
= \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} \frac{(x-a)^k}{(b-a)^k} \cdot \frac{(b-x)^{n-k}}{(b-a)^{n-k}}
$$

$$
= \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} \frac{(x-a)^k (b-x)^{n-k}}{(b-a)^n}
$$

$$
= \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$\Rightarrow \forall x \in [a,b]$

$$
S(B_n(f \circ \alpha))(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

La expresión resultante es un polinomio de grado a lo más $n$, y se le conoce como el $n$-ésimo polinomio de Bernstein de $f$ en $[a,b]$, es decir, definimos $B_n(f) := S(B_n(f \circ \alpha)) \in C([a,b])$.

Así

$$
B_n(f)(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

Ahora supongamos que $f \in C([a,b])$.

Veamos que $(B_n(f))_{n \in \mathbb{N}}$ converge uniformemente a $f$ en $[a,b]$. Para eso veamos que

$$
\|B_n(f) - f\|_{[a,b]} \longrightarrow 0
$$

Como $T : C([a,b]) \longrightarrow C([0,1])$, sabemos que $T(f) \in C([0,1])$. Por el Teorema de Bernstein tenemos que $(B_n(T(f)))_{n \in \mathbb{N}}$ converge uniformemente a $T(f)$ en $[0,1]$, es decir,

$$
\|B_n(T(f)) - T(f)\|_{[0,1]} \longrightarrow 0 \quad \dots \; (\circledast)
$$

Como $B_n(f) = S(B_n(f \circ \alpha)) = S(B_n(T(f)))$, pues como $f \in C([a,b])$

$$
\Rightarrow B_n(f) = S(B_n(T(f)))
$$

por def. $T(f) = f \circ \alpha$

$$
\Rightarrow T(B_n(f)) = T(S(B_n(T(f))))
$$

$$
\Rightarrow T(B_n(f)) = (T \circ S)(B_n(T(f)))
$$

$$
\Rightarrow T(B_n(f)) = B_n(T(f))
$$

Entonces

$$
\|B_n(f) - f\|_{[a,b]} = \|T(B_n(f) - f)\|_{[0,1]} \qquad \text{pues } \|T(h)\|_{[0,1]} = \|h\|_{[a,b]} \; \forall h \in C([a,b])
$$

$$
= \|T(B_n(f)) - T(f)\|_{[0,1]}
$$

$$
= \|B_n(T(f)) - T(f)\|_{[0,1]} \xrightarrow[n \to \infty]{} 0 \quad \text{por } (\circledast)
$$

$$
\Rightarrow \|B_n(f) - f\|_{[a,b]} \xrightarrow[n \to \infty]{} 0
$$

$\therefore (B_n(f))_{n \in \mathbb{N}}$ converge uniformemente a $f$ en $[a,b]$. $\blacksquare$

## Teorema de Weierstrass

Dada $f \in C([a,b])$ y $\varepsilon > 0$, existe un polinomio $p$ tal que

$$
\|f - p\|_{[a,b]} < \varepsilon.
$$

### Demostración

Sea $f \in C([a,b])$ y $\varepsilon > 0$ arbitrarios.

Por ejercicio 3.11 tenemos que $(B_n(f))_{n \in \mathbb{N}}$ converge uniformemente a $f$ en $[a,b]$, i.e.,

$$
\|B_n(f) - f\|_{[a,b]} \longrightarrow 0.
$$

Por definición de convergencia en $\mathbb{R}$ tenemos que existe $N \in \mathbb{N}$ tal que $\forall n \geq N$ se cumple que

$$
\|B_n(f) - f\|_{[a,b]} < \varepsilon \quad \dots \; (1)
$$

Sea $p := B_N(f)$, el cual es un polinomio. Por $(1)$ tenemos que

$$
\|p - f\|_{[a,b]} < \varepsilon \; \blacksquare.
$$

---

## 3.12 Ejercicio

Si $f:[0,1] \longrightarrow \mathbb{R}$ es una función acotada, prueba que

$$\lim_{n \to \infty}B_n(f)(x_0) = f(x_0)$$

para todo punto $X_0 \in [0,1]$ donde la función $f$ sea continua. 

**Solución**

**Demostración**

Sea $x_0 \in [0,1]$ un punto donde $f$ es continua. Como $f$ es acotada, definimos

$$
M := \sup_{x \in [0,1]} |f(x)| < \infty.
$$

Sea $\varepsilon > 0$ arbitrario. Por continuidad de $f$ en $x_0$, existe $\delta > 0$ tal que

$$
x \in [0,1], \; |x - x_0| < \delta \;\Rightarrow\; |f(x) - f(x_0)| < \varepsilon. \tag{1}
$$

**Paso 1: Escribimos la diferencia como una suma ponderada.**

Fijemos $n \in \mathbb{N}$. Usando que $B_n(f_0) = f_0$ (Lema 3.6), es decir $\displaystyle\sum_{k=0}^{n} \binom{n}{k} x_0^k (1-x_0)^{n-k} = 1$, podemos escribir

$$
f(x_0) - B_n(f)(x_0) = f(x_0) \sum_{k=0}^{n} \binom{n}{k} x_0^k (1-x_0)^{n-k} - \sum_{k=0}^{n} f\left(\frac{k}{n}\right) \binom{n}{k} x_0^k (1-x_0)^{n-k}
$$

$$
= \sum_{k=0}^{n} \left[ f(x_0) - f\left(\frac{k}{n}\right) \right] \binom{n}{k} x_0^k (1-x_0)^{n-k}.
$$

Tomando valor absoluto y usando la desigualdad del triángulo (y que $\binom{n}{k} x_0^k (1-x_0)^{n-k} \geq 0$),

$$
|f(x_0) - B_n(f)(x_0)| \leq \sum_{k=0}^{n} \left| f(x_0) - f\left(\frac{k}{n}\right) \right| \binom{n}{k} x_0^k (1-x_0)^{n-k}. \tag{2}
$$

**Paso 2: Separamos la suma según qué tan cerca esté $k/n$ de $x_0$.**

Como en el Lema 3.7, aplicado en el punto $x_0$, consideramos el conjunto

$$
F = \left\{ k \in \{0, \dots, n\} : \left| \frac{k}{n} - x_0 \right| \geq \delta \right\}
$$

y su complemento $F^c = \{0, \dots, n\} \setminus F$. Separamos la suma de $(2)$ en estos dos conjuntos de índices:

$$
|f(x_0) - B_n(f)(x_0)| \leq \underbrace{\sum_{k \in F^c} \left| f(x_0) - f\left(\frac{k}{n}\right) \right| \binom{n}{k} x_0^k (1-x_0)^{n-k}}_{S_1} + \underbrace{\sum_{k \in F} \left| f(x_0) - f\left(\frac{k}{n}\right) \right| \binom{n}{k} x_0^k (1-x_0)^{n-k}}_{S_2}.
$$

**Acotando $S_1$:** si $k \in F^c$ entonces $|k/n - x_0| < \delta$, así que por $(1)$, $\left| f(x_0) - f\left(\frac{k}{n}\right) \right| < \varepsilon$. Por lo tanto

$$
S_1 < \varepsilon \sum_{k \in F^c} \binom{n}{k} x_0^k (1-x_0)^{n-k} \leq \varepsilon \sum_{k=0}^{n} \binom{n}{k} x_0^k (1-x_0)^{n-k} = \varepsilon.
$$

**Acotando $S_2$:** para cualquier $k$, usando la desigualdad del triángulo y la definición de $M$,

$$
\left| f(x_0) - f\left(\frac{k}{n}\right) \right| \leq |f(x_0)| + \left| f\left(\frac{k}{n}\right) \right| \leq M + M = 2M.
$$

Entonces

$$
S_2 \leq 2M \sum_{k \in F} \binom{n}{k} x_0^k (1-x_0)^{n-k}.
$$

Por el Lema 3.7 (aplicado en $x_0$ con este mismo $\delta$),

$$
\sum_{k \in F} \binom{n}{k} x_0^k (1-x_0)^{n-k} \leq \frac{1}{4n\delta^2},
$$

así que

$$
S_2 \leq \frac{2M}{4n\delta^2} = \frac{M}{2n\delta^2}.
$$

**Paso 3: Juntamos las cotas.**

Combinando lo anterior,

$$
|f(x_0) - B_n(f)(x_0)| \leq S_1 + S_2 < \varepsilon + \frac{M}{2n\delta^2}. \tag{3}
$$

Nótese que $\delta$ (y por lo tanto la cota) depende sólo de $\varepsilon$ y de $x_0$, no de $n$.

**Paso 4: Tomamos $n$ suficientemente grande.**

Como $M$ y $\delta$ ya están fijos, existe $N \in \mathbb{N}$ tal que para todo $n \geq N$,

$$
\frac{M}{2n\delta^2} < \varepsilon
$$

(basta tomar $n > \dfrac{M}{2\delta^2 \varepsilon}$). Sustituyendo en $(3)$, para todo $n \geq N$:

$$
|f(x_0) - B_n(f)(x_0)| < 2\varepsilon.
$$

**Paso 5: Concluimos.**

Como $\varepsilon > 0$ fue arbitrario, hemos probado que para todo $\varepsilon > 0$ existe $N \in \mathbb{N}$ tal que $n \geq N \Rightarrow |f(x_0) - B_n(f)(x_0)| < 2\varepsilon$. Esto es exactamente la definición de

$$
\lim_{n \to \infty} B_n(f)(x_0) = f(x_0).
$$

$\blacksquare$

**Observación:** a diferencia del Teorema de Bernstein (que exige continuidad de $f$ en **todo** $[0,1]$ para obtener convergencia **uniforme**), aquí sólo se pide que $f$ sea acotada y continua en el punto particular $x_0$; el precio es que la convergencia obtenida es únicamente **puntual** en $x_0$, no uniforme en el intervalo. La demostración es esencialmente la misma, localizando el argumento de continuidad uniforme en una vecindad de $x_0$.

---

## 3.13 Ejercicio

Sean $f, g \in C[a, b]$ y $c \in \mathbb{R}$. Prueba que:

1. $B_n(cf + g) = cB_n(f) + B_n(g)$.
2. Si $f \geq 0$ prueba que $B_n(f) \geq 0$.
3. $|B_n(f)| \leq B_n(|f|)$.
4. $\|B_n(f)\|_\infty \leq \|f\|_\infty$.

---

**1)** $B_n(cf + g) = cB_n(f) + B_n(g)$.

Sea $x \in [a,b]$ arbitrario.

$$
B_n(cf + g)(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} (cf+g)\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{1}{(b-a)^n} \sum_{k=0}^{n} \left[ cf\left(\frac{k(b-a)}{n} + a\right) + g\left(\frac{k(b-a)}{n} + a\right) \right] \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{1}{(b-a)^n} \sum_{k=0}^{n} \left[ cf\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right.
$$

$$
\left. + \; g\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right]
$$

$$
= \frac{1}{(b-a)^n} \left[ \sum_{k=0}^{n} cf\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right.
$$

$$
\left. + \; \sum_{k=0}^{n} g\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right]
$$

$$
= c \cdot \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
+ \; \frac{1}{(b-a)^n} \sum_{k=0}^{n} g\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= c\, B_n(f)(x) + B_n(g)(x)
$$

$$
\Rightarrow B_n(cf+g)(x) = c\, B_n(f)(x) + B_n(g)(x) \quad \forall x \in [a,b]
$$

$$
\Rightarrow B_n(cf+g) = c\, B_n(f) + B_n(g).
$$

$\blacksquare$

---

**2)** Si $f \geq 0$ prueba que $B_n(f) \geq 0$.

Sabemos que $f \geq 0$, i.e., $f(x) \geq 0 \; \forall x \in [a,b]$.

Sea $x \in [a,b]$ fija pero arbitraria. Para cada $k \in \{0, \dots, n\}$ tenemos que

$$
0 \leq \frac{k}{n} \leq 1 \;\Rightarrow\; 0 \leq \frac{k(b-a)}{n} \leq b-a \qquad \text{pues } b-a > 0.
$$

$$
\Rightarrow a \leq \frac{k(b-a)}{n} + a \leq b
$$

$$
\Rightarrow \frac{k(b-a)}{n} + a \in [a,b]
$$

Por hipótesis sabemos que

$$
f\left(\frac{k(b-a)}{n} + a\right) \geq 0.
$$

También sabemos que, como $x \in [a,b]$, entonces $a \leq x \leq b$.

$$
\Rightarrow a \leq x \quad \text{y} \quad x \leq b
$$

$$
\Rightarrow 0 \leq x-a \quad \text{y} \quad 0 \leq b-x
$$

Así $(x-a)^k, (b-x)^{n-k} \geq 0$. En consecuencia

$$
\binom{n}{k} (x-a)^k (b-x)^{n-k} \geq 0
$$

Y como $\dfrac{1}{(b-a)^n} > 0$, entonces

$$
B_n(f)(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \geq 0
$$

$$
\Rightarrow B_n(f)(x) \geq 0 \quad \forall x \in [a,b]
$$

$$
\Rightarrow B_n(f) \geq 0
$$

---

**3)** $|B_n(f)| \leq B_n(|f|)$.

Como $f \in C([a,b]) \;\Rightarrow\; |f| \in C([a,b])$.

Sea $x \in [a,b]$ arbitrario.

$$
|B_n(f)(x)| = \left| \frac{1}{(b-a)^n} \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right|
$$

$$
= \frac{1}{(b-a)^n} \left| \sum_{k=0}^{n} f\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k} \right|
$$

$$
\leq \frac{1}{(b-a)^n} \sum_{k=0}^{n} \left| f\left(\frac{k(b-a)}{n} + a\right) \right| \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{1}{(b-a)^n} \sum_{k=0}^{n} \left| f\left(\frac{k(b-a)}{n} + a\right) \right| \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{1}{(b-a)^n} \sum_{k=0}^{n} |f|\left(\frac{k(b-a)}{n} + a\right) \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= B_n(|f|)(x)
$$

$$
\Rightarrow |B_n(f)(x)| \leq B_n(|f|)(x) \quad \forall x \in [a,b]
$$

$$
\Rightarrow |B_n(f)| \leq B_n(|f|)
$$

$\blacksquare$

---

**4)** $\|B_n(f)\|_\infty \leq \|f\|_\infty$.

Sabemos que

$$
\|f\|_\infty = \sup_{t \in [a,b]} |f(t)|.
$$

Sabemos que $|f(t)| \leq \|f\|_\infty \; \forall t \in [a,b]$. Entonces

$$
\left| f\left(\frac{k(b-a)}{n} + a\right) \right| \leq \|f\|_\infty \qquad \forall k \in \{0, 1, \dots, n\}.
$$

Sea $x \in [a,b]$ arbitrario. Por inciso anterior sabemos que

$$
|B_n(f)(x)| \leq B_n(|f|)(x) = \frac{1}{(b-a)^n} \sum_{k=0}^{n} \left| f\left(\frac{k(b-a)}{n} + a\right) \right| \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
\leq \frac{1}{(b-a)^n} \sum_{k=0}^{n} \|f\|_\infty \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{\|f\|_\infty}{(b-a)^n} \sum_{k=0}^{n} \binom{n}{k} (x-a)^k (b-x)^{n-k}
$$

$$
= \frac{\|f\|_\infty}{(b-a)^n} \big( (x-a) + (b-x) \big)^n \qquad \left( (u+v)^n = \sum_{k=0}^{n} \binom{n}{k} u^k v^{n-k} \right)
$$

$$
= \frac{\|f\|_\infty}{(b-a)^n} (b-a)^n
$$

$$
= \|f\|_\infty
$$

$$
\Rightarrow \forall x \in [a,b] \quad |B_n(f)(x)| \leq \|f\|_\infty
$$

$$
\Rightarrow \sup_{x \in [a,b]} |B_n(f)(x)| \leq \|f\|_\infty
$$

$$
\Rightarrow \|B_n(f)\|_\infty \leq \|f\|_\infty
$$

---

## 3.14 Ejercicio

Dada $f \in C[a,b]$ y $\epsilon > 0$ prueba que existe un polinomio con coeficientes racionales, $q(x)$, tal que $\|f-q\|_\infty < \epsilon$

**Solución**

**Demostración**

Sea $f \in C[a,b]$ y $\varepsilon > 0$ arbitrarios.

**Paso 1: Aproximamos $f$ por un polinomio (con coeficientes reales cualesquiera).**

Por el Teorema de Weierstrass (3.2), aplicado con $\varepsilon/2 > 0$, existe un polinomio

$$
p(x) = \sum_{i=0}^{N} a_i x^i, \qquad a_i \in \mathbb{R},
$$

tal que

$$
\|f - p\|_{[a,b]} < \frac{\varepsilon}{2}. \tag{1}
$$

**Paso 2: Acotamos $[a,b]$.**

Sea

$$
K := \max\{|a|, |b|, 1\}.
$$

Entonces $|x| \leq K$ para todo $x \in [a,b]$, y además $K \geq 1$, por lo que $K^i \leq K^N$ para todo $i \in \{0, \dots, N\}$.

**Paso 3: Aproximamos cada coeficiente $a_i$ por un racional.**

Como $\mathbb{Q}$ es denso en $\mathbb{R}$, para cada $i \in \{0, \dots, N\}$ podemos elegir $c_i \in \mathbb{Q}$ tal que

$$
|a_i - c_i| < \frac{\varepsilon}{2(N+1) K^N}. \tag{2}
$$

Definimos el polinomio con coeficientes racionales

$$
q(x) := \sum_{i=0}^{N} c_i x^i.
$$

**Paso 4: Acotamos $\|p - q\|_{[a,b]}$.**

Sea $x \in [a,b]$ arbitrario. Usando la desigualdad del triángulo y luego $(2)$ junto con $|x|^i \leq K^i \leq K^N$,

$$
|p(x) - q(x)| = \left| \sum_{i=0}^{N} (a_i - c_i) x^i \right| \leq \sum_{i=0}^{N} |a_i - c_i| \, |x|^i \leq \sum_{i=0}^{N} \frac{\varepsilon}{2(N+1)K^N} \cdot K^N.
$$

El lado derecho tiene $N+1$ sumandos idénticos, así que

$$
|p(x) - q(x)| \leq (N+1) \cdot \frac{\varepsilon}{2(N+1)K^N} \cdot K^N = \frac{\varepsilon}{2}.
$$

Como esta cota no depende de $x$, tomando supremo sobre $x \in [a,b]$ obtenemos

$$
\|p - q\|_{[a,b]} \leq \frac{\varepsilon}{2}. \tag{3}
$$

**Paso 5: Concluimos con la desigualdad del triángulo.**

Combinando $(1)$ y $(3)$,

$$
\|f - q\|_{[a,b]} \leq \|f - p\|_{[a,b]} + \|p - q\|_{[a,b]} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

Por lo tanto $q$ es un polinomio con coeficientes racionales tal que $\|f - q\|_{[a,b]} < \varepsilon$. $\blacksquare$

**Observación:** este resultado, junto con el Teorema de Weierstrass, muestra que el conjunto de polinomios con coeficientes racionales es denso en $C[a,b]$ (con la norma uniforme). Esto implica en particular que $C[a,b]$ es un espacio **separable**, ya que el conjunto de tales polinomios es numerable.

---

## 3.15 Ejercicio

**Enunciado.** Sea $f \in \mathcal{C}[a,b]$ con la característica de que $f(a) = 0$. Prueba que existe una sucesión de polinomios $(q_n)_{n=1}^\infty$ tal que $\lim_{n \to \infty}\|q_n-f\|_{[a,b]} = 0$ y que además cumple que $q_n(a) = 0$ para toda $n$.

¿Se puede cambiar $a$ por cualquier punto en $[a,b]$?

**Solución**

**Demostración**

Sea $f \in C[a,b]$ con $f(a) = 0$.

**Paso 1: Construimos $q_n$ usando el Ejercicio 2.**

Para cada $n \in \mathbb{N}$, aplicamos el Ejercicio 2 (con $x_0 = a$, notando que $f(a) = 0$ satisface la hipótesis de ese ejercicio) tomando $\varepsilon = \dfrac{1}{n} > 0$: existe un polinomio $q_n(x)$ tal que

$$
q_n(a) = 0 \qquad \text{y} \qquad \|f - q_n\|_{[a,b]} < \frac{1}{n}. \tag{1}
$$

Esto define una sucesión de polinomios $(q_n)_{n=1}^{\infty}$, cada uno satisfaciendo $q_n(a) = 0$.

**Paso 2: Verificamos la convergencia.**

De $(1)$ tenemos, para todo $n \in \mathbb{N}$,

$$
0 \leq \|q_n - f\|_{[a,b]} < \frac{1}{n}.
$$

Como $\dfrac{1}{n} \to 0$ cuando $n \to \infty$, por la ley del Sandwich para límites concluimos

$$
\lim_{n \to \infty} \|q_n - f\|_{[a,b]} = 0.
$$

Por lo tanto $(q_n)_{n=1}^{\infty}$ es la sucesión de polinomios buscada: converge uniformemente a $f$ en $[a,b]$ y satisface $q_n(a) = 0$ para toda $n$. $\blacksquare$

---

## ¿Se puede cambiar $a$ por cualquier punto en $[a,b]$?

**Sí.** El argumento no usa ninguna propiedad especial de $a$ como extremo del intervalo; sólo usa que $f$ se anula en el punto en cuestión.

Más precisamente, sea $x_0 \in [a,b]$ **cualquier** punto tal que $f(x_0) = 0$ (no necesariamente $x_0 = a$). Repitiendo exactamente el mismo argumento: para cada $n \in \mathbb{N}$, el Ejercicio 2 aplicado en $x_0$ con $\varepsilon = 1/n$ produce un polinomio $q_n$ tal que

$$
q_n(x_0) = 0 \qquad \text{y} \qquad \|f - q_n\|_{[a,b]} < \frac{1}{n},
$$

y el mismo argumento de la ley del Sandwich da $\|q_n - f\|_{[a,b]} \to 0$.

**Precaución:** lo que sí es esencial es que $f(x_0) = 0$ en el punto donde se pide que se anulen los $q_n$. Si $f(x_0) \neq 0$, no se puede pedir $q_n(x_0) = 0$ para toda $n$ y al mismo tiempo tener $q_n \to f$ uniformemente: la convergencia uniforme implica en particular convergencia puntual en $x_0$, es decir $q_n(x_0) \to f(x_0)$; pero si $q_n(x_0) = 0$ para toda $n$, el límite de la sucesión constante $(q_n(x_0))_{n=1}^\infty = (0)_{n=1}^\infty$ es $0$, por lo que forzosamente $f(x_0) = 0$.

Así, el resultado se generaliza literalmente a cualquier punto $x_0 \in [a,b]$ donde $f$ se anule, y la condición $f(x_0)=0$ no es sólo suficiente sino **necesaria** para que exista tal sucesión.

---

### Demostración

Como $f\in \mathcal{C}[a,b]$, por el **Teorema de Weierstrass** existe una sucesión de polinomios $(p_n)_{n\in\mathbb{N}}$ tal que

$$\lim_{n\to\infty} \|f-p_n\|_{[a,b]} = 0.$$

Para cada $n\in\mathbb{N}$ definamos $q_n:\mathbb{R}\to\mathbb{R}$ por

$$q_n(x) = p_n(x) - p_n(a).$$

Este $q_n$ está bien definido y es un polinomio, ya que $p_n(a)$ es una constante y $p_n$ es un polinomio, y la resta de un polinomio y una constante sigue siendo un polinomio.

**Notemos** que $\forall n \in \mathbb{N}$:

$$q_n(a) = p_n(a) - p_n(a) = 0 \implies q_n(a) = 0 \quad \forall n\in\mathbb{N}.$$

**Veamos que** $q_n \xrightarrow{\text{unif}} f$ en $[a,b]$. Para ello basta ver que

$$\lim_{n\to\infty} \|q_n - f\|_{[a,b]} = 0.$$

Notemos que $\forall n\in\mathbb{N}$ y $\forall x\in[a,b]$:

$$
\begin{aligned}
|q_n(x) - f(x)| &= |(p_n(x) - p_n(a)) - f(x)| \\
&= |p_n(x) - f(x) - (p_n(a) - f(a))| \qquad (\text{pues } f(a)=0) \\
&\leq |p_n(x) - f(x)| + |p_n(a) - f(a)| \\
&\leq \|p_n - f\|_{[a,b]} + \|p_n - f\|_{[a,b]} \\
&= 2\|p_n - f\|_{[a,b]}.
\end{aligned}
$$

Por lo tanto:

$$\sup_{x\in[a,b]} |q_n(x) - f(x)| \leq 2\|p_n - f\|_{[a,b]} \quad \forall n\in\mathbb{N}$$

$$\implies \|q_n - f\|_{[a,b]} \leq 2\|p_n - f\|_{[a,b]} \quad \forall n\in\mathbb{N}.$$

Y como $2\|p_n - f\|_{[a,b]} \longrightarrow 0$, entonces

$$\|q_n - f\|_{[a,b]} \longrightarrow 0.$$

$$\therefore \quad q_n \xrightarrow{\text{unif}} f. \qquad \blacksquare$$

---

### ¿Se puede cambiar $a$ por cualquier otro punto en $[a,b]$?

Se puede cambiar el punto $a$ por cualquier $x_0\in[a,b]$ **siempre y cuando** $f(x_0) = 0$.

**Es necesaria la condición $f(x_0) = 0$.**

**Razón:**

Supongamos que $x_0\in[a,b]$ es tal que $f(x_0)\neq 0$, y supongamos también que existe una sucesión $(q_n)_{n\in\mathbb{N}}$ de polinomios tales que $q_n(x_0)=0 \ \forall n\in\mathbb{N}$ y que $q_n \xrightarrow{\text{unif}} f$.

Como $q_n \xrightarrow{\text{unif}} f \implies q_n \xrightarrow{\text{p.w.}} f$, es decir,

$$\forall x\in[a,b] \quad \lim_{n\to\infty} q_n(x) = f(x).$$

En particular:

$$\lim_{n\to\infty} q_n(x_0) = f(x_0).$$

Pero $\lim_{n\to\infty} q_n(x_0) = 0$ y $f(x_0)\neq 0$, lo cual es una **contradicción**.

Por lo tanto, la condición $f(x_0)=0$ es necesaria para poder cambiar el punto $a$ por $x_0$.

---

## 3.16 Ejercicio (NO VIENE)

Sea $f \in \mathcal{C}[a,b]$ que no sea un polinomio. Supón que $(p_n)_{n=1}^\infty$ es una sucesión de polinomios tal que $p_n \longrightarrow f$ uniformemente en $[a,b]$. Si $m_n$ es el grado de $p_n$ prueba que $\lim_{n \to \infty}m_n = \infty$

---

## 3.17 Ejercicio

**Enunciado.** Sea $f \in \mathcal{C}[a,b]$ clase $\mathcal{C}^1$. Prueba que para toda $\epsilon > 0$ existe un polinomio $p$ tal que $\|f-p\|_\infty < \epsilon$ y $\|f'-p'\|_\infty < \epsilon$.

### Demostración

$f\in\mathcal{C}[a,b]$ es de clase $\mathcal{C}^1$ significa que $f$ es diferenciable en $[a,b]$ y que su derivada $f':[a,b]\to\mathbb{R}$ es continua.

Sea $\varepsilon>0$ arbitraria. Consideremos

$$M := \max\{1,\, b-a\} > 0.$$

Como $f'\in\mathcal{C}[a,b]$, por el **Teorema de Weierstrass** existe un polinomio $q$ tal que

$$\|f'-q\|_{[a,b]} < \frac{\varepsilon}{M}.$$

El polinomio $q$ es continuo en $\mathbb{R}$, en particular es continuo (y por tanto integrable) en $[a,x]$ para todo $x\in[a,b]$. Así que definamos $p:\mathbb{R}\to\mathbb{R}$ por

$$p(x) = f(a) + \int_a^x q(t)\,dt.$$

**Veamos que $p$ es un polinomio.**

Como $q$ es un polinomio, sabemos que

$$q(x) = c_0 + c_1 x + c_2 x^2 + \cdots + c_n x^n \quad \text{para alguna } n\geq 0, \qquad = \sum_{k=0}^{n} c_k x^k, \qquad c_0,\dots,c_n\in\mathbb{R}.$$

Entonces:

$$
\begin{aligned}
p(x) &= f(a) + \int_a^x q(t)\,dt \\
&= f(a) + \int_a^x \sum_{k=0}^n c_k t^k\,dt \\
&= f(a) + \sum_{k=0}^n c_k \int_a^x t^k\,dt \\
&= f(a) + \sum_{k=0}^n c_k \left(\frac{t^{k+1}}{k+1}\Big|_a^x\right) \\
&= f(a) + \sum_{k=0}^n c_k \left(\frac{x^{k+1}}{k+1} - \frac{a^{k+1}}{k+1}\right) \\
&= \underbrace{f(a) - \sum_{k=0}^n c_k \frac{a^{k+1}}{k+1}}_{\text{constante}} + \underbrace{\sum_{k=0}^n \frac{c_k}{k+1} x^{k+1}}_{\text{polinomio}}.
\end{aligned}
$$

En consecuencia, $p$ es un polinomio.

**Además:**

$$
\begin{aligned}
p'(x) &= \left(f(a) + \int_a^x q(t)\,dt\right)' \\
&= \big(f(a)\big)' + \left(\int_a^x q(t)\,dt\right)' \\
&= 0 + q(x) \qquad \text{(1er T.F.C., ya que } f(a) \text{ es constante)} \\
&= q(x).
\end{aligned}
$$

$$\Rightarrow \; p'(x) = q(x) \quad \forall x \quad \Rightarrow \quad p' = q.$$

---

**Veamos que $\|f'-p'\|_{[a,b]} < \varepsilon$.**

$$\|f'-p'\|_{[a,b]} = \|f'-q\|_{[a,b]} < \frac{\varepsilon}{M} \leq \varepsilon, \qquad \text{pues } 1\leq M \Rightarrow \frac{1}{M}\leq 1 \Rightarrow \frac{\varepsilon}{M}\leq \varepsilon.$$

$$\therefore \; \|f'-p'\|_{[a,b]} < \varepsilon.$$

---

**Ahora veamos que $\|f-p\|_{[a,b]} < \varepsilon$.**

Como $f'$ es continua en $[a,b]$, entonces es integrable en $[a,x]$ para todo $x\in[a,b]$, y por el **2do T.F.C.**:

$$\forall x\in[a,b] \qquad \int_a^x f'(t)\,dt = f(x) - f(a)$$

$$\Rightarrow \quad \forall x\in[a,b] \qquad f(x) = f(a) + \int_a^x f'(t)\,dt.$$

Entonces, $\forall x\in[a,b]$:

$$
\begin{aligned}
|f(x) - p(x)| &= \left| f(a) + \int_a^x f'(t)\,dt - p(x) \right| \\
&= \left| f(a) + \int_a^x f'(t)\,dt - \left(f(a) + \int_a^x q(t)\,dt\right) \right| \\
&= \left| \int_a^x f'(t)\,dt - \int_a^x q(t)\,dt \right| \\
&= \left| \int_a^x (f'-q)(t)\,dt \right| \\
&\leq \int_a^x |(f'-q)(t)|\,dt \\
&\leq \int_a^x \|f'-q\|_{[a,b]}\,dt \\
&= \|f'-q\|_{[a,b]}\,(x-a).
\end{aligned}
$$

Como $x\in[a,b] \Rightarrow a\leq x\leq b \Rightarrow 0 \leq x-a \leq b-a$, se sigue que:

$$
\begin{aligned}
|f(x)-p(x)| &\leq \|f'-q\|_{[a,b]}\,(b-a) \\
&\leq \|f'-q\|_{[a,b]}\, M \\
&< \frac{\varepsilon}{M}\cdot M \\
&= \varepsilon.
\end{aligned}
$$

$$\Rightarrow \; \forall x\in[a,b] \quad |f(x)-p(x)| < \varepsilon$$

$$\Rightarrow \; \|f-p\|_{[a,b]} < \varepsilon. \qquad \blacksquare$$

---

## 3.18 Ejercicio

Prueba que existe una sucesión de polionmios $(p_n)_{n=1}^\infty$ tal que:

1. $\lim_{n \to \infty}\int_0^1p_n(x)dx = 5$
2. $\lim_{n \to \infty}p_n(x) = 0$, para todo $x \in [0,1]$

**Solución**

**Construcción.**

Definimos, para cada $n \in \mathbb{N}$,

$$
p_n(x) := 5n^2\, x(1-x)^n.
$$

Claramente $p_n$ es un polinomio (de grado $n+1$) para cada $n$. Verificamos que satisface las dos propiedades pedidas.

---

### Verificación de (1): $\displaystyle\lim_{n \to \infty}\int_0^1 p_n(x)\, dx = 5$

**Cálculo de $\displaystyle\int_0^1 x(1-x)^n\, dx$.**

Hacemos el cambio de variable $u = 1-x$, de donde $du = -dx$ y $x = 1-u$; cuando $x=0$, $u=1$, y cuando $x=1$, $u=0$. Entonces

$$
\int_0^1 x(1-x)^n\, dx = \int_1^0 (1-u)\, u^n\, (-du) = \int_0^1 (1-u)\, u^n\, du = \int_0^1 u^n\, du - \int_0^1 u^{n+1}\, du.
$$

Calculando cada integral por separado,

$$
\int_0^1 x(1-x)^n\, dx = \frac{1}{n+1} - \frac{1}{n+2} = \frac{(n+2)-(n+1)}{(n+1)(n+2)} = \frac{1}{(n+1)(n+2)}. \tag{1}
$$

**Cálculo del límite.**

Usando $(1)$,

$$
\int_0^1 p_n(x)\, dx = 5n^2 \int_0^1 x(1-x)^n\, dx = \frac{5n^2}{(n+1)(n+2)}.
$$

Dividiendo numerador y denominador entre $n^2$,

$$
\int_0^1 p_n(x)\, dx = \frac{5}{\left(1 + \dfrac{1}{n}\right)\left(1 + \dfrac{2}{n}\right)} \xrightarrow[n \to \infty]{} \frac{5}{(1+0)(1+0)} = 5.
$$

Por lo tanto

$$
\lim_{n \to \infty}\int_0^1 p_n(x)\, dx = 5. \tag{2}
$$

---

### Verificación de (2): $\displaystyle\lim_{n \to \infty} p_n(x) = 0$ para todo $x \in [0,1]$

Sea $x \in [0,1]$ fijo pero arbitrario. Consideramos dos casos.

**Caso $x = 0$ o $x = 1$.**

Si $x=0$, entonces $p_n(0) = 5n^2 \cdot 0 \cdot (1-0)^n = 0$ para todo $n$, así que trivialmente $p_n(0) \to 0$.

Si $x=1$, entonces $(1-x)^n = 0^n = 0$ para todo $n \geq 1$, así que $p_n(1) = 0$ para todo $n$, y de nuevo $p_n(1) \to 0$.

**Caso $x \in (0,1)$.**

Aquí $r := 1-x \in (0,1)$. Queremos ver que

$$
n^2 r^n \xrightarrow[n \to \infty]{} 0.
$$

Sea $a_n := n^2 r^n > 0$. Calculamos el cociente de términos consecutivos:

$$
\frac{a_{n+1}}{a_n} = \frac{(n+1)^2 r^{n+1}}{n^2 r^n} = \left(\frac{n+1}{n}\right)^2 r = \left(1 + \frac{1}{n}\right)^2 r.
$$

Como $\left(1+\frac{1}{n}\right)^2 \to 1$ cuando $n \to \infty$, se sigue que

$$
\frac{a_{n+1}}{a_n} \xrightarrow[n \to \infty]{} r < 1.
$$

Sea $\rho$ un número tal que $r < \rho < 1$ (existe pues $r<1$). Como $a_{n+1}/a_n \to r < \rho$, existe $N \in \mathbb{N}$ tal que para todo $n \geq N$,

$$
\frac{a_{n+1}}{a_n} < \rho.
$$

Entonces, para $n \geq N$, iterando esta desigualdad,

$$
0 < a_n < a_N \rho^{\,n-N}.
$$

Como $0 < \rho < 1$, tenemos $\rho^{\,n-N} \to 0$ cuando $n \to \infty$ (y $a_N$ es una constante fija). Por la ley del Sandwich,

$$
a_n = n^2 r^n \xrightarrow[n \to \infty]{} 0.
$$

Por lo tanto, para $x \in (0,1)$,

$$
p_n(x) = 5\, x \cdot n^2(1-x)^n \xrightarrow[n \to \infty]{} 5x \cdot 0 = 0.
$$

**Conclusión del caso general.** En los tres casos ($x=0$, $x=1$, $x\in(0,1)$) obtuvimos $p_n(x) \to 0$. Por lo tanto

$$
\lim_{n \to \infty} p_n(x) = 0 \qquad \text{para todo } x \in [0,1]. \tag{3}
$$

---

## Conclusión

La sucesión de polinomios $p_n(x) = 5n^2 x(1-x)^n$ satisface simultáneamente $(2)$ y $(3)$:

$$
\lim_{n \to \infty}\int_0^1 p_n(x)\, dx = 5 \qquad \text{y} \qquad \lim_{n \to \infty} p_n(x) = 0 \; \; \forall x \in [0,1].
$$

$\blacksquare$

**Observación:** este ejercicio es un contraejemplo clásico que muestra que la convergencia **puntual** de una sucesión de funciones **no** permite intercambiar el límite con la integral: aquí $(p_n)$ converge puntualmente a la función $f \equiv 0$, pero

$$
0 = \int_0^1 \left( \lim_{n\to\infty} p_n(x) \right) dx \; \neq \; \lim_{n \to \infty} \int_0^1 p_n(x)\, dx = 5.
$$

La razón de fondo es que la convergencia **no es uniforme**: de hecho $\|p_n\|_{[0,1]} \to \infty$ (los polinomios desarrollan un pico cada vez más alto y angosto cerca de $x=0$, con altura $\sim \sqrt{n}$ y ancho $\sim 1/n$, de modo que el área bajo la curva se mantiene acotada aunque el valor puntual en cada $x$ fijo tienda a $0$). Esto contrasta con los resultados de esta sección (Weierstrass, Bernstein), donde precisamente se trabaja con convergencia **uniforme**, la cual sí garantiza el intercambio de límites con integrales (y con otras operaciones continuas).

---

## 3.19 Ejercicio

**Enunciado.** Sea $f:[1,\infty) \longrightarrow \mathbb{R}$ una función continua con la propiedad de que $\lim_{x\to\infty} f(x)$ existe. Prueba que para toda $\epsilon>0$ existe un polinomio $p(x)$ tal que $|f(x)-p(1/x)| < \epsilon$, para todo $x\geq 1$.

---

### Demostración

Como $\lim_{x\to\infty} f(x)$ existe, sabemos que existe $L\in\mathbb{R}$ tal que

$$\lim_{x\to\infty} f(x) = L.$$

Definamos $g:[0,1]\longrightarrow\mathbb{R}$ por

$$
g(t) =
\begin{cases}
f\!\left(\dfrac{1}{t}\right) & \text{si } t\in(0,1] \\[4pt]
L & \text{si } t=0
\end{cases}
$$

**Veamos que $g$ está bien definida.**

- Si $t=0$: $\; g(t) = L \in \mathbb{R}$.
- Si $t\in(0,1]$: $\; 0<t\leq 1 \Rightarrow 1\leq \dfrac{1}{t} \Rightarrow \dfrac{1}{t}\in[1,\infty) \Rightarrow f\!\left(\dfrac{1}{t}\right)\in\mathbb{R}$.

**Veamos si $g$ es continua en $[0,1]$.**

*Primero veamos que $g$ es continua en $(0,1]$.*

Consideremos la función $h:(0,1]\to[1,\infty)$ dada por $h(t) = \dfrac{1}{t}$, la cual está bien definida y es continua en $(0,1]$.

Por hipótesis, $f:[1,\infty)\to\mathbb{R}$ es continua en $[1,\infty)$

$\Rightarrow \; f\circ h : (0,1]\to\mathbb{R}$ es continua en $(0,1]$.

$$(f\circ h)(t) = f(h(t)) = f\!\left(\frac{1}{t}\right) = g(t).$$

$\therefore \; g$ es continua en $(0,1]$.

*Ahora veamos que $g$ es continua en $0$.*

Sea $\varepsilon' > 0$ arbitraria. Como $\lim_{x\to\infty} f(x)$ existe, $\exists\, M>0$ tal que si $x>M$ entonces $|f(x)-L|<\varepsilon'$.

Definamos $\delta := \dfrac{1}{M}$.

Sea $t\in[0,1]$ tal que $|t-0| = t < \delta$. P.d. $|g(t)-g(0)| < \varepsilon'$.

- Si $t=0$, entonces $|g(t)-g(0)| = |g(0)-g(0)| = 0 < \varepsilon'$.
- Si $0<t<\delta$, entonces $0<t<\dfrac{1}{M} \Rightarrow M < \dfrac{1}{t} \Rightarrow \left|f\!\left(\dfrac{1}{t}\right)-L\right|<\varepsilon'$.

Entonces:

$$|g(t)-g(0)| = \left|f\!\left(\frac{1}{t}\right)-L\right| < \varepsilon'.$$

$\therefore \; g$ es continua en $0$.

Por lo tanto $g$ es continua en $[0,1] \Rightarrow g\in\mathcal{C}([0,1])$.

Sea $\varepsilon>0$ arbitraria. Por el **Teorema de Weierstrass**, existe un polinomio $p$ tal que

$$\|g-p\|_{[0,1]} < \varepsilon$$

$$\Rightarrow \; |g(t)-p(t)| < \varepsilon \quad \forall t\in[0,1]. \qquad \cdots (1)$$

Sea $x\geq 1$ arbitraria $\Rightarrow \dfrac{1}{x}\leq 1 \Rightarrow \dfrac{1}{x}\in(0,1]$.

Por definición de $g$:

$$g\!\left(\frac{1}{x}\right) = f\!\left(\frac{1}{x^{-1}}\right)$$

es decir,

$$g\!\left(\frac{1}{x}\right) = f(x).$$

Así:

$$\left|f(x) - p\!\left(\frac{1}{x}\right)\right| = \left|g\!\left(\frac{1}{x}\right) - p\!\left(\frac{1}{x}\right)\right| < \varepsilon \qquad \text{por } (1)$$

$$\Rightarrow \; \left|f(x)-p\!\left(\frac{1}{x}\right)\right| < \varepsilon \quad \forall x\geq 1. \qquad \blacksquare$$

---

## 3.20 Ejercicio (NO VIENE)

1. Sea $f : [0, 1] \to \mathbb{R}$ una función con $f(0) = 0$. Prueba que para toda $n$, $B_n(f)(0) = 0$.
2. Si $f : [0, 1] \to \mathbb{R}$ es una función tal que existen constantes, $m, M$, tal que $m \leq f(x) \leq M$, para toda $x \in [a, b]$, prueba que $m \leq B_n(f)(x) \leq M$, para todo $x \in [0, 1]$.

---

## 3.21 Ejercicio

Este ejercicio prueba, sin usar la Teorema de aproximación de Weierstrass, la existencia de una sucesión de polinomios que aproxima a la función absoluto uniformemente en $[-1, 1]$

1. Define, recursivamente, $p_0 = 0$ y $p_{n+1}(x) = p_n(x) + (x - p_n(x)^2)/2$, para $n \geq 0$. Prueba que cada $p_n$ es un polinomio.
2. Prueba que $0 \leq p_n(x) \leq p_{n+1}(x) \leq \sqrt{x}$ para todo $x \in [0, 1]$. Usa el [Teorema de Dini](#) para concluir que $(p_n)_{n=1}^{\infty}$ converge uniformemente a $\sqrt{x}$ en $[0, 1]$.
3. Finalmente prueba que la sucesión de polinomios $p_n(x^2)$ converge uniformemente a $|x|$ en $[-1, 1]$.

**Solución**

### Parte 1: cada $p_n$ es un polinomio

**Demostración**

Procedemos por inducción sobre $n$.

**Base ($n=0$):** por definición $p_0(x) = 0$, el polinomio constante cero. Es un polinomio.

**Paso inductivo:** supongamos que $p_n(x)$ es un polinomio. Entonces $p_n(x)^2$ es un polinomio (producto de polinomios), y $x - p_n(x)^2$ también lo es (diferencia de polinomios). Multiplicar por la constante $1/2$ y sumar $p_n(x)$ preserva ser polinomio, así que

$$
p_{n+1}(x) = p_n(x) + \frac{x - p_n(x)^2}{2}
$$

es un polinomio.

Por inducción, $p_n$ es un polinomio para todo $n \geq 0$. $\blacksquare$

---

### Parte 2: $0 \leq p_n(x) \leq p_{n+1}(x) \leq \sqrt{x}$ en $[0,1]$, y convergencia uniforme

**Una identidad auxiliar.**

Para cualquier $n \geq 0$ y $x \in [0,1]$, usando la recursión y la diferencia de cuadrados $x - p_n(x)^2 = \big(\sqrt{x}\big)^2 - p_n(x)^2 = \big(\sqrt{x}-p_n(x)\big)\big(\sqrt{x}+p_n(x)\big)$, obtenemos

$$
\sqrt{x} - p_{n+1}(x) = \sqrt{x} - p_n(x) - \frac{\big(\sqrt{x}-p_n(x)\big)\big(\sqrt{x}+p_n(x)\big)}{2} = \big(\sqrt{x}-p_n(x)\big)\left[1 - \frac{\sqrt{x}+p_n(x)}{2}\right]. \tag{$\ast$}
$$

**Demostración de la desigualdad, por inducción sobre $n$.**

Sea $P(n)$ la afirmación: "$0 \leq p_n(x) \leq p_{n+1}(x) \leq \sqrt{x}$ para todo $x \in [0,1]$".

**Base ($n=0$):** sea $x \in [0,1]$ arbitrario. Tenemos $p_0(x) = 0 \geq 0$. Además

$$
p_1(x) = p_0(x) + \frac{x - p_0(x)^2}{2} = \frac{x}{2},
$$

y como $x \geq 0$, se tiene $p_0(x) = 0 \leq \dfrac{x}{2} = p_1(x)$. Finalmente, como $x \in [0,1]$ implica $\sqrt{x} \leq 1$ (pues la raíz es creciente y $\sqrt{1}=1$), se sigue $\sqrt{x} \geq \sqrt{x}\cdot\dfrac{\sqrt{x}}{2}\cdot 1$... más directamente:

$$
\sqrt{x} - p_1(x) = \sqrt{x} - \frac{x}{2} = \sqrt{x}\left(1 - \frac{\sqrt{x}}{2}\right) \geq 0,
$$

pues $\sqrt{x} \geq 0$ y $\sqrt{x} \leq 1 \leq 2 \Rightarrow 1 - \dfrac{\sqrt{x}}{2} \geq 0$. Por lo tanto $p_1(x) \leq \sqrt{x}$. Esto prueba $P(0)$.

**Paso inductivo:** supongamos $P(n)$ cierta, es decir, para todo $x \in [0,1]$:

$$
0 \leq p_n(x) \leq p_{n+1}(x) \leq \sqrt{x}. \tag{HI}
$$

Sea $x \in [0,1]$ arbitrario. Queremos probar $P(n+1)$: $0 \leq p_{n+1}(x) \leq p_{n+2}(x) \leq \sqrt{x}$.

*La cota inferior $0 \leq p_{n+1}(x)$* ya está dada directamente por (HI).

*La cota superior $p_{n+2}(x) \leq \sqrt{x}$:* aplicamos $(\ast)$ con $n+1$ en vez de $n$:

$$
\sqrt{x} - p_{n+2}(x) = \big(\sqrt{x}-p_{n+1}(x)\big)\left[1 - \frac{\sqrt{x}+p_{n+1}(x)}{2}\right].
$$

Por (HI), $0 \leq p_{n+1}(x) \leq \sqrt{x} \leq 1$. Entonces el primer factor es no negativo: $\sqrt{x}-p_{n+1}(x) \geq 0$. Para el segundo factor, como $p_{n+1}(x) \leq \sqrt{x}$,

$$
\sqrt{x} + p_{n+1}(x) \leq \sqrt{x}+\sqrt{x} = 2\sqrt{x} \leq 2,
$$

así que $1 - \dfrac{\sqrt{x}+p_{n+1}(x)}{2} \geq 0$. El producto de dos factores no negativos es no negativo, de donde

$$
\sqrt{x} - p_{n+2}(x) \geq 0 \;\Rightarrow\; p_{n+2}(x) \leq \sqrt{x}.
$$

*La monotonía $p_{n+1}(x) \leq p_{n+2}(x)$:* usando la recursión y la diferencia de cuadrados como antes,

$$
p_{n+2}(x) - p_{n+1}(x) = \frac{x - p_{n+1}(x)^2}{2} = \frac{\big(\sqrt{x}-p_{n+1}(x)\big)\big(\sqrt{x}+p_{n+1}(x)\big)}{2}.
$$

Ambos factores son no negativos: $\sqrt{x}-p_{n+1}(x) \geq 0$ (por lo recién probado, o por (HI)) y $\sqrt{x}+p_{n+1}(x) \geq 0$ (suma de no negativos, por (HI)). Por lo tanto

$$
p_{n+2}(x) - p_{n+1}(x) \geq 0 \;\Rightarrow\; p_{n+1}(x) \leq p_{n+2}(x).
$$

Juntando las tres partes, $0 \leq p_{n+1}(x) \leq p_{n+2}(x) \leq \sqrt{x}$, es decir, $P(n+1)$ se cumple.

Por inducción, $P(n)$ se cumple para todo $n \geq 0$:

$$
0 \leq p_n(x) \leq p_{n+1}(x) \leq \sqrt{x}, \qquad \forall x \in [0,1], \; \forall n \geq 0. \tag{1}
$$

**Convergencia puntual al límite correcto.**

Fijemos $x \in [0,1]$. Por $(1)$, la sucesión $(p_n(x))_{n=0}^{\infty}$ es monótona no decreciente y acotada superiormente por $\sqrt{x}$. Por el Teorema de convergencia monótona en $\mathbb{R}$, el límite

$$
L(x) := \lim_{n \to \infty} p_n(x)
$$

existe y satisface $L(x) \leq \sqrt{x}$.

Tomando límite cuando $n \to \infty$ en ambos lados de la recursión $p_{n+1}(x) = p_n(x) + \dfrac{x-p_n(x)^2}{2}$ (válido pues todos los límites involucrados existen),

$$
L(x) = L(x) + \frac{x - L(x)^2}{2} \;\Rightarrow\; 0 = x - L(x)^2 \;\Rightarrow\; L(x)^2 = x.
$$

Como $L(x) \geq 0$ (por $(1)$, cada $p_n(x)\geq0$, y el límite de una sucesión no negativa es no negativo), concluimos $L(x) = \sqrt{x}$. Es decir,

$$
p_n(x) \xrightarrow[n\to\infty]{} \sqrt{x} \qquad \text{puntualmente, para todo } x \in [0,1]. \tag{2}
$$

**Aplicación del Teorema de Dini.**

Tenemos las siguientes hipótesis:

- $[0,1]$ es compacto.
- Cada $p_n$ es continua en $[0,1]$ (por ser un polinomio, Parte 1).
- La función límite $g(x) := \sqrt{x}$ es continua en $[0,1]$.
- Por $(1)$, la sucesión $(p_n)$ es monótona no decreciente: $p_n(x) \leq p_{n+1}(x)$ para todo $x\in[0,1]$ y todo $n$.
- Por $(2)$, $p_n \to \sqrt{x}$ puntualmente en $[0,1]$.

Estas son exactamente las hipótesis del **Teorema de Dini**, el cual concluye que la convergencia es además **uniforme**:

$$
\|p_n - g\|_{[0,1]} = \sup_{x\in[0,1]} \left| p_n(x) - \sqrt{x} \right| \xrightarrow[n\to\infty]{} 0. \tag{3}
$$

Es decir, $(p_n)_{n=1}^{\infty}$ converge uniformemente a $\sqrt{x}$ en $[0,1]$. $\blacksquare$

---

### Parte 3: $p_n(x^2) \to |x|$ uniformemente en $[-1,1]$

**Demostración**

Para cada $n$, definimos $q_n(x) := p_n(x^2)$. Como $p_n$ es un polinomio (Parte 1) y $x \mapsto x^2$ también lo es, la composición $q_n$ es un polinomio.

Sea $x \in [-1,1]$ arbitrario. Entonces $t := x^2 \in [0,1]$ (pues $0 \leq x^2 \leq 1$). Por $(3)$, evaluada en el punto $t=x^2 \in [0,1]$,

$$
\big| q_n(x) - |x| \big| = \big| p_n(x^2) - \sqrt{x^2} \big| = \big| p_n(t) - \sqrt{t} \big| \leq \sup_{s \in [0,1]} \big| p_n(s) - \sqrt{s} \big| = \|p_n - g\|_{[0,1]},
$$

donde usamos que $\sqrt{x^2} = |x|$ para $x \in \mathbb{R}$.

Esta cota no depende de $x$, así que tomando supremo sobre $x \in [-1,1]$ en el lado izquierdo,

$$
\|q_n - |\cdot|\, \|_{[-1,1]} = \sup_{x \in [-1,1]} \big| q_n(x) - |x| \big| \leq \|p_n - g\|_{[0,1]}.
$$

Por $(3)$, el lado derecho tiende a $0$ cuando $n \to \infty$. Por lo tanto

$$
\|q_n - |\cdot|\, \|_{[-1,1]} \xrightarrow[n\to\infty]{} 0,
$$

es decir, $\big(q_n(x)\big)_{n=1}^{\infty} = \big(p_n(x^2)\big)_{n=1}^{\infty}$ converge uniformemente a $|x|$ en $[-1,1]$. $\blacksquare$

---

**Observación:** esta construcción da una demostración *autocontenida* y *constructiva* del caso particular del Teorema de Weierstrass para $f(x)=|x|$: en lugar de invocar los polinomios de Bernstein (o cualquier otro método general), se explota directamente la estructura algebraica de $\sqrt{x}$ como punto fijo de la iteración de Newton-como $p_{n+1}=p_n+\frac{x-p_n^2}{2}$, junto con el Teorema de Dini, que permite subir convergencia monótona puntual a convergencia uniforme sobre un compacto. El paso de $\sqrt{x}$ en $[0,1]$ a $|x|$ en $[-1,1]$ vía la composición $x \mapsto x^2$ es el truco que traslada el resultado del intervalo $[0,1]$ al intervalo simétrico $[-1,1]$.

---

## 3.22 Ejercicio (NO VIENE)

Una función $g : [a, b] \to \mathbb{R}$ se llama poligonal o lineal a trozos si es continua y existe $\{a = t_0 < \cdots < t_n = n\}$, una partición de $[a, b]$, tal que la gráfica de $g$ restringida a cada $[t_{i-1}, t_i]$ es un segmento de recta.

Para $t \in \mathbb{R}$ define

$$
L_t(x) =
\begin{cases}
0 & x \leq t \\
x - t & x > t
\end{cases}
$$

1. Prueba que $L_t(x) = \frac{1}{2}(x - t + |x - t|)$
2. Sea $g : [a, b] \to \mathbb{R}$ una función poligonal, con partición $\{a = t_0 < \cdots < t_n = b\}$. Prueba que existen constantes $c_1, \dots, c_n$ para las cuales

$$
g(x) = g(a) + c_0 L_{t_0}(x) + c_1 L_{t_1}(x) + \cdots + c_{n-1} L_{t_{n-1}}(x)
$$

Hint: usar inducción sobre el número de segmentos de $g$.

3. Concluye que toda función poligonal se puede escribir de la forma

$$
Cx + D + \sum_{k=1}^{n} C_k |x - t_k|
$$

para ciertas constantes $C, D, C_k$.

---

## 3.23 Ejercicio

Este ejercicio da otra demostración del Teorema de Weierstrass.

1. Dados $C, t \in \mathbb{R}$ denota

$$
h(x) = C|x - t|
$$

Usa el ejercicio [Ejercicio 3.21](#) para probar que dado un subintervalo $[a, b]$ y $\varepsilon > 0$ existe un polinomio $p(x)$ tal que

$$
\|p - h\|_{[a,b]} < \varepsilon.
$$

2. Prueba que el conjunto de funciones poligonales es uniformemente denso en $C[a, b]$. Hint: usa que toda función en $C[a, b]$ es uniformemente contina en $[a, b]$.
3. Finalmente usando el [Ejercicio 3.22](#) prueba que el conjunto de polinomios es uniformemente denso en $C[a, b]$.

**Solución**

### Parte 1: aproximación de $h(x) = C|x-t|$ por polinomios

**Un lema de reescalamiento.**

El ejercicio anterior nos da una sucesión de polinomios que converge uniformemente a $|x|$ en $[-1,1]$; en particular, dado $\eta > 0$ existe un polinomio $r(x)$ tal que

$$
\big| |x| - r(x) \big| < \eta, \qquad \forall x \in [-1,1]. \tag{1}
$$

Afirmamos que esto se extiende a cualquier intervalo simétrico $[-M,M]$ con $M>0$: dado $\eta>0$, aplicando $(1)$ con $\eta$ y evaluando en $x/M \in [-1,1]$ (válido pues $x\in[-M,M]$), obtenemos

$$
\left| \frac{|x|}{M} - r\!\left(\frac{x}{M}\right) \right| < \eta, \qquad \forall x \in [-M,M].
$$

Multiplicando por $M$ y definiendo $q(x) := M\, r(x/M)$ (un polinomio en $x$, pues $r$ es polinomio y $x/M$ es lineal en $x$),

$$
\big| |x| - q(x) \big| < M\eta, \qquad \forall x \in [-M,M]. \tag{2}
$$

Como $\eta>0$ es arbitrario y $M$ está fijo, $(2)$ dice: para todo $\varepsilon'>0$ existe un polinomio $q$ tal que $\big\||x|-q(x)\big\|_{[-M,M]} < \varepsilon'$ (basta tomar $\eta = \varepsilon'/M$).

**Demostración del inciso.**

Si $C=0$ entonces $h\equiv 0$ y basta tomar $p\equiv 0$, que satisface $\|p-h\|_{[a,b]} = 0 < \varepsilon$ trivialmente. Supongamos entonces $C \neq 0$.

Sea $\varepsilon>0$. Para $x\in[a,b]$ escribimos $y := x-t$, de modo que $y$ recorre el intervalo $[a-t,\,b-t]$. Sea

$$
M := \max\{|a-t|,\,|b-t|\} \geq 0,
$$

de modo que $[a-t,b-t] \subseteq [-M,M]$ (si $M=0$ el intervalo es un punto y el argumento es trivial; suponemos $M>0$).

Por el lema de reescalamiento, con $\varepsilon' := \dfrac{\varepsilon}{2|C|} > 0$, existe un polinomio $q(y)$ tal que

$$
\big| |y| - q(y) \big| < \varepsilon', \qquad \forall y \in [-M,M],
$$

en particular para todo $y \in [a-t,b-t]$.

Definimos $p(x) := C\, q(x-t)$, un polinomio en $x$ (composición de $q$ con la función lineal $x\mapsto x-t$, multiplicada por la constante $C$). Entonces, para todo $x\in[a,b]$, con $y=x-t$,

$$
|h(x) - p(x)| = \big| C|x-t| - C q(x-t) \big| = |C| \, \big| \, |y| - q(y) \, \big| < |C|\,\varepsilon' = \frac{\varepsilon}{2}.
$$

Como esta cota no depende de $x$, tomando supremo sobre $x\in[a,b]$,

$$
\|h-p\|_{[a,b]} \leq \frac{\varepsilon}{2} < \varepsilon. \tag{3}
$$

$\blacksquare$

---

### Parte 2: densidad uniforme de las funciones poligonales en $C[a,b]$

**Demostración**

Sea $f \in C[a,b]$ y $\varepsilon > 0$ arbitrarios. Como $[a,b]$ es compacto, $f$ es uniformemente continua en $[a,b]$: existe $\delta > 0$ tal que

$$
x,y \in [a,b], \; |x-y|<\delta \;\Rightarrow\; |f(x)-f(y)| < \varepsilon. \tag{4}
$$

**Construcción de la poligonal.** Elegimos una partición $a = x_0 < x_1 < \cdots < x_N = b$ con $x_i - x_{i-1} < \delta$ para todo $i$ (por ejemplo, una partición uniforme con paso menor que $\delta$). Definimos $g : [a,b] \to \mathbb{R}$ como la función poligonal que interpola linealmente a $f$ en los nodos $x_0,\dots,x_N$: en cada subintervalo $[x_{i-1},x_i]$,

$$
g(x) = f(x_{i-1}) + \frac{f(x_i)-f(x_{i-1})}{x_i - x_{i-1}} (x - x_{i-1}).
$$

Notemos que $g$ es continua en $[a,b]$ (coincide con $f$ en cada nodo, por construcción) y afín en cada subintervalo, es decir, $g$ es una función poligonal.

**Acotamos $\|f-g\|_{[a,b]}$.** Sea $x \in [x_{i-1},x_i]$ arbitrario, y sea $\lambda := \dfrac{x-x_{i-1}}{x_i-x_{i-1}} \in [0,1]$, de modo que $x = (1-\lambda)x_{i-1} + \lambda x_i$ y, por construcción de $g$ (que es afín en el subintervalo),

$$
g(x) = (1-\lambda) f(x_{i-1}) + \lambda f(x_i).
$$

Entonces

$$
f(x) - g(x) = (1-\lambda)\big(f(x)-f(x_{i-1})\big) + \lambda\big(f(x)-f(x_i)\big).
$$

Como $x, x_{i-1}, x_i$ están todos en $[x_{i-1},x_i]$, cuya longitud es menor que $\delta$, tenemos $|x-x_{i-1}|<\delta$ y $|x-x_i|<\delta$, así que por $(4)$: $|f(x)-f(x_{i-1})|<\varepsilon$ y $|f(x)-f(x_i)|<\varepsilon$. Usando la desigualdad del triángulo,

$$
|f(x)-g(x)| \leq (1-\lambda)\big|f(x)-f(x_{i-1})\big| + \lambda\big|f(x)-f(x_i)\big| < (1-\lambda)\varepsilon + \lambda\varepsilon = \varepsilon.
$$

Esto vale para todo $x$ en cada subintervalo $[x_{i-1},x_i]$, $i=1,\dots,N$, y por lo tanto para todo $x \in [a,b]$. Como $|f-g|$ es continua en el compacto $[a,b]$, alcanza su máximo en algún punto $x^\ast \in [a,b]$, donde la desigualdad estricta recién probada también se cumple; por lo tanto

$$
\|f-g\|_{[a,b]} = \max_{x\in[a,b]} |f(x)-g(x)| = |f(x^\ast)-g(x^\ast)| < \varepsilon.
$$

Como $\varepsilon>0$ era arbitrario, concluimos que el conjunto de funciones poligonales es uniformemente denso en $C[a,b]$. $\blacksquare$

---

### Parte 3: densidad uniforme de los polinomios en $C[a,b]$

**Paso previo: toda función poligonal es combinación de una función afín y funciones $C|x-t|$.**

Sea $g:[a,b]\to\mathbb{R}$ poligonal, con nodos $a=x_0<x_1<\cdots<x_N=b$ y pendiente $m_i$ en el segmento $[x_{i-1},x_i]$, $i=1,\dots,N$. Afirmamos que existen una función afín $\ell(x)$ y constantes $c_1,\dots,c_{N-1}\in\mathbb{R}$ tales que

$$
g(x) = \ell(x) + \sum_{i=1}^{N-1} c_i |x-x_i|, \qquad \forall x\in[a,b]. \tag{5}
$$

*Demostración por inducción sobre $N$ (número de segmentos).*

**Base ($N=1$):** $g$ ya es afín en todo $[a,b]$; tomamos $\ell = g$ y la suma vacía.

**Paso inductivo:** supongamos el resultado válido para toda poligonal con $N$ segmentos. Sea $g$ con $N+1$ segmentos y nodos interiores $x_1,\dots,x_N$, con pendientes $m_1,\dots,m_{N+1}$. Definimos

$$
c_N := \frac{m_{N+1}-m_N}{2}, \qquad h(x) := g(x) - c_N|x-x_N|.
$$

En $[x_{N-1},x_N]$ (donde $|x-x_N|=x_N-x$, de pendiente $-1$), $h$ tiene pendiente $m_N - c_N\cdot(-1) = m_N+c_N$. En $[x_N,b]$ (donde $|x-x_N|=x-x_N$, de pendiente $+1$), $h$ tiene pendiente $m_{N+1}-c_N$. Por la elección de $c_N$,

$$
m_N + c_N = m_N + \frac{m_{N+1}-m_N}{2} = \frac{m_{N+1}-m_N}{2} + m_{N+1} - \frac{m_{N+1}-m_N}{2}\cdot ... 
$$

(comprobación directa: $m_N+c_N = \dfrac{m_N+m_{N+1}}{2} = m_{N+1}-c_N$), así que $h$ tiene la **misma** pendiente en $[x_{N-1},x_N]$ y en $[x_N,b]$; es decir, $h$ es poligonal con a lo más $N$ segmentos (el nodo $x_N$ desaparece). Por hipótesis de inducción,

$$
h(x) = \ell(x) + \sum_{i=1}^{N-1} c_i|x-x_i|
$$

para alguna afín $\ell$ y constantes $c_1,\dots,c_{N-1}$. Sustituyendo,

$$
g(x) = h(x) + c_N|x-x_N| = \ell(x) + \sum_{i=1}^{N} c_i|x-x_i|,
$$

lo que completa la inducción y prueba $(5)$.

**Conclusión de la densidad de polinomios.**

Sea $f \in C[a,b]$ y $\varepsilon>0$ arbitrarios.

Por la Parte 2, existe una función poligonal $g$ con

$$
\|f-g\|_{[a,b]} < \frac{\varepsilon}{2}. \tag{6}
$$

Por $(5)$, escribimos $g(x) = \ell(x) + \sum_{i=1}^{N-1} c_i|x-x_i|$, con $\ell$ afín (en particular, $\ell$ ya es un polinomio).

Si $N=1$ (suma vacía), tomamos directamente $p:=\ell=g$, un polinomio, y $(6)$ da $\|f-p\|_{[a,b]}<\varepsilon/2<\varepsilon$, terminando la prueba. Supongamos entonces $N\geq 2$.

Para cada $i=1,\dots,N-1$, aplicamos la Parte 1 a $h_i(x) := c_i|x-x_i|$ con $\varepsilon_i := \dfrac{\varepsilon}{2(N-1)}>0$: existe un polinomio $p_i(x)$ tal que

$$
\|h_i - p_i\|_{[a,b]} < \frac{\varepsilon}{2(N-1)}. \tag{7}
$$

Definimos el polinomio

$$
p(x) := \ell(x) + \sum_{i=1}^{N-1} p_i(x).
$$

Usando la desigualdad del triángulo y $(7)$,

$$
\|g-p\|_{[a,b]} = \left\| \sum_{i=1}^{N-1} \big(h_i - p_i\big) \right\|_{[a,b]} \leq \sum_{i=1}^{N-1} \|h_i-p_i\|_{[a,b]} < (N-1)\cdot \frac{\varepsilon}{2(N-1)} = \frac{\varepsilon}{2}. \tag{8}
$$

Finalmente, combinando $(6)$ y $(8)$ con la desigualdad del triángulo,

$$
\|f-p\|_{[a,b]} \leq \|f-g\|_{[a,b]} + \|g-p\|_{[a,b]} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
$$

Como $\varepsilon>0$ era arbitrario, concluimos que el conjunto de polinomios es uniformemente denso en $C[a,b]$, es decir, hemos reobtenido el Teorema de Weierstrass (3.2). $\blacksquare$

---

**Observación:** esta demostración alternativa evade por completo los polinomios de Bernstein. La cadena lógica es: **(i)** $|x|$ se aproxima por polinomios (vía la iteración tipo Newton del ejercicio anterior), **(ii)** cualquier función $C|x-t|$ se aproxima por reescalamiento y traslación de (i), **(iii)** toda $f\in C[a,b]$ se aproxima por una poligonal usando continuidad uniforme, y **(iv)** toda poligonal es, exactamente (no sólo aproximadamente), una combinación finita de una función afín y funciones $C|x-t|$ — las "esquinas" de la poligonal son producidas justamente por los términos de valor absoluto. Encadenando (iii)+(iv)+(ii) se obtiene la aproximación polinomial de $f$.

---

## 3.24 Ejercicio (NO VIENE)

1. Sea $f \in C[a, b]$ tal que $f(x) \geq 1$ para todo $x \in [a, b]$. Prueba que existe un polinomio $p(x)$ que satisface
   1. $\|f - p\|_{[a,b]} < \frac{1}{2}$,
   2. $p(x)$ no tiene raíces en $[a, b]$

2. Prueba que existe una sucesión de polinomios $(p_n)_{n=1}^{\infty}$ que satisface
   1. $\lim_{n \to \infty} \int_{-1}^{1} p_n(x)\,dx = \frac{1}{2}$,
   2. para todo $x \in [-1, 1]$, $\lim_{n \to \infty} p_n(x) = 0$.

   Hint: inicia con la función identidad en $[0, 1]$ y extiéndela adecuadamente.
