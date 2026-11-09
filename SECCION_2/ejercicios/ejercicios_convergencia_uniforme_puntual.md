# Ejercicios Sección Convergencia Puntual y Uniforme.

## 2.12 Ejercicio (NO VIENE).

Encuentra el límite puntual (si existe) de las siguientes sucesiones de funciones.

**1**. $f_n : [0,1] \to \mathbb{R}$ dada por

$$
f_n(x) =
\begin{cases}
4n^2 x, & 0 \le x \le \dfrac{1}{2n}, \\[4pt]
-4n^2 x + 4n, & \dfrac{1}{2n} \le x \le \dfrac{1}{n}, \\[4pt]
0, & \dfrac{1}{n} \le x \le 1.
\end{cases}
$$

---

**Solución**

Fijemos $x \in [0,1]$ y analicemos los distintos casos.

**Caso $x = 0$.**

Para toda $n$, $x=0$ cae en el primer tramo, por lo que

$$
f_n(0) = 4n^2 \cdot 0 = 0
$$

para toda $n$. Por lo tanto

$$
\lim_{n \to \infty} f_n(0) = 0.
$$

**Caso $x \in (0,1]$.**

Como $x > 0$, por la propiedad arquimediana existe $N \in \mathbb{N}$ tal que

$$
\frac{1}{N} < x.
$$

Entonces, para toda $n \geq N$ se tiene

$$
\frac{1}{n} \leq \frac{1}{N} < x,
$$

es decir, $x$ cae en el tercer tramo de la definición de $f_n$ (donde $\frac{1}{n} \le x \le 1$), y por lo tanto

$$
f_n(x) = 0 \quad \text{para toda } n \geq N.
$$

Esto significa que la sucesión de números $(f_n(x))_{n=1}^{\infty}$ es eventualmente cero, así que

$$
\lim_{n \to \infty} f_n(x) = 0.
$$

**Conclusión.**

Combinando ambos casos, la sucesión $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,1]$ a la función constante cero:

$$
\lim_{n \to \infty} f_n(x) = 0 \qquad \text{para todo } x \in [0,1].
$$

**Observación.** Aunque el límite puntual es la función $f \equiv 0$, la convergencia **no** es uniforme en $[0,1]$: en $x = \dfrac{1}{2n}$ se tiene

$$
f_n\!\left(\frac{1}{2n}\right) = 4n^2 \cdot \frac{1}{2n} = 2n,
$$

por lo que

$$
\|f_n - 0\|_{[0,1]} = \sup_{x \in [0,1]} |f_n(x)| \geq 2n \xrightarrow[n \to \infty]{} \infty,
$$

y en particular $\|f_n - 0\|_{[0,1]}$ no tiende a $0$. Este ejemplo (una sucesión de "picos" cada vez más altos y angostos) es un caso clásico donde la convergencia puntual **no** implica convergencia uniforme.

---

**2**. $f_n : \mathbb{R} \to \mathbb{R}$ dada por

$$
f_n(x) = \frac{\operatorname{sen}(\sqrt{n}\,x)}{n}.
$$

**Solución**

Fijemos $x \in \mathbb{R}$. Usando que $|\operatorname{sen}(\theta)| \leq 1$ para todo $\theta \in \mathbb{R}$, obtenemos

$$
|f_n(x)| = \left| \frac{\operatorname{sen}(\sqrt{n}\,x)}{n} \right| = \frac{|\operatorname{sen}(\sqrt{n}\,x)|}{n} \leq \frac{1}{n}.
$$

Como $\dfrac{1}{n} \to 0$ cuando $n \to \infty$, por el teorema del sandwich se sigue que

$$
\lim_{n \to \infty} f_n(x) = 0.
$$

Esto es válido para todo $x \in \mathbb{R}$, por lo que la sucesión $(f_n)_{n=1}^{\infty}$ converge puntualmente en $\mathbb{R}$ a la función constante cero:

$$
\lim_{n \to \infty} f_n(x) = 0 \qquad \text{para todo } x \in \mathbb{R}.
$$

**Observación.** A diferencia del ejercicio anterior, aquí la cota $|f_n(x)| \leq \dfrac{1}{n}$ **no depende de $x$**, por lo que

$$
\|f_n - 0\|_{\mathbb{R}} = \sup_{x \in \mathbb{R}} |f_n(x)| \leq \frac{1}{n} \xrightarrow[n \to \infty]{} 0.
$$

Es decir, en este caso la convergencia sí es **uniforme** en $\mathbb{R}$, a diferencia de la sucesión del inciso 1.

---

## 2.13 Ejercicio

Prueba que, para toda $x > 0$,

$$
\lim_{n \to \infty} n\left(\sqrt[n]{x} - 1\right) = \ln(x)
$$

Por lo tanto, la sucesión de funciones $f_n(x) = n\left(\sqrt[n]{x} - 1\right)$, converge puntualmente a la función logaritmo en $(0, \infty)$.

---

**Solución**

Usaremos el límite conocido

$$
\lim_{t \to 0} \frac{e^t - 1}{t} = 1.
$$

**Caso 1: $x = 1$.**

Notemos que para todo $n \in \mathbb{N}$,

$$
\begin{aligned}
n\left(\sqrt[n]{x} - 1\right) &= n\left(\sqrt[n]{1} - 1\right) \\
&= n(1-1) \\
&= 0.
\end{aligned}
$$

Por otro lado, $\ln(1) = 0$, así que

$$
n\left(\sqrt[n]{x} - 1\right) = \ln(x) \qquad \forall n \in \mathbb{N},
$$

y por lo tanto

$$
\lim_{n \to \infty} n\left(\sqrt[n]{x} - 1\right) = \ln(x).
$$

**Caso 2: $x \neq 1$.**

Sea $n \in \mathbb{N}$ fijo pero arbitrario. Como $x > 0$, sabemos que $e^{\ln(x)} = x$, por lo que

$$
\sqrt[n]{x} = \sqrt[n]{e^{\ln(x)}} = \left(e^{\ln(x)}\right)^{1/n} = e^{\frac{\ln(x)}{n}}.
$$

Por lo tanto

$$
\sqrt[n]{x} = e^{\frac{\ln(x)}{n}} \quad \Rightarrow \quad \sqrt[n]{x} - 1 = e^{\frac{\ln(x)}{n}} - 1 \quad \Rightarrow \quad n\left(\sqrt[n]{x} - 1\right) = n\left(e^{\frac{\ln(x)}{n}} - 1\right).
$$

Ahora multiplicamos y dividimos por $\dfrac{\ln(x)}{n}$ (nótese que $\ln(x) \neq 0$ pues $x \neq 1$):

$$
n\left(e^{\frac{\ln(x)}{n}} - 1\right) = \frac{\ln(x)}{\frac{\ln(x)}{n}} \cdot \left(e^{\frac{\ln(x)}{n}} - 1\right) = \ln(x) \left( \frac{e^{\frac{\ln(x)}{n}} - 1}{\frac{\ln(x)}{n}} \right).
$$

Definamos, para todo $n \in \mathbb{N}$,

$$
t_n := \frac{\ln(x)}{n}.
$$

Notemos que $t_n \to 0$ cuando $n \to \infty$.

Así,

$$
n\left(\sqrt[n]{x} - 1\right) = \ln(x) \left( \frac{e^{t_n} - 1}{t_n} \right) \qquad \forall n \in \mathbb{N},
$$

por lo que

$$
\begin{aligned}
\lim_{n \to \infty} n\left(\sqrt[n]{x} - 1\right) &= \lim_{n \to \infty} \ln(x) \left( \frac{e^{t_n} - 1}{t_n} \right) \\
&= \ln(x) \lim_{n \to \infty} \frac{e^{t_n} - 1}{t_n} \\
&= \ln(x)(1) \qquad \left(\text{ya que } t_n = \frac{\ln(x)}{n} \Rightarrow t_n \underset{n \to \infty}{\longrightarrow} 0\right) \\
&= \ln(x).
\end{aligned}
$$

En ambos casos obtenemos

$$
\lim_{n \to \infty} n\left(\sqrt[n]{x} - 1\right) = \ln(x).
$$

**Conclusión.** Como el resultado anterior es válido para todo $x > 0$, la sucesión de funciones $f_n : (0,\infty) \to \mathbb{R}$ dada por $f_n(x) = n\left(\sqrt[n]{x} - 1\right)$ converge puntualmente en $(0,\infty)$ a la función logaritmo:

$$
\lim_{n \to \infty} f_n(x) = \ln(x) \qquad \text{para todo } x \in (0,\infty).
$$

---

## 2.14 Ejercicio

Sea $\{q_n\}_{n=1}^{\infty}$ una enumaración de $\mathbb{Q}$. Define $f_n : \mathbb{R} \to \mathbb{R}$ por

$$
f_n(x) =
\begin{cases}
1, & \text{si } x \in \{q_1, \dots, q_n\}, \\
0, & \text{en otro caso.}
\end{cases}
$$

Encuentra el límite puntual de $(f_n)_{n=1}^{\infty}$.

---

**Solución**

Fijemos $x \in \mathbb{R}$ y consideremos dos casos, según si $x$ es racional o irracional.

**Caso $x \in \mathbb{Q}$.**

Como $\{q_n\}_{n=1}^{\infty}$ es una enumeración de $\mathbb{Q}$, existe $k \in \mathbb{N}$ tal que $x = q_k$. Notemos que, para todo $n \geq k$,

$$
x = q_k \in \{q_1, \dots, q_k\} \subseteq \{q_1, \dots, q_n\},
$$

por lo que

$$
f_n(x) = 1 \qquad \text{para toda } n \geq k.
$$

Es decir, la sucesión de números $(f_n(x))_{n=1}^{\infty}$ es eventualmente igual a $1$, así que

$$
\lim_{n \to \infty} f_n(x) = 1.
$$

**Caso $x \notin \mathbb{Q}$.**

Si $x$ es irracional, entonces $x \neq q_n$ para todo $n \in \mathbb{N}$, por lo que $x \notin \{q_1, \dots, q_n\}$ para ningún $n$. Se sigue que

$$
f_n(x) = 0 \qquad \text{para toda } n \in \mathbb{N},
$$

y por lo tanto

$$
\lim_{n \to \infty} f_n(x) = 0.
$$

**Conclusión.**

Combinando ambos casos, la sucesión $(f_n)_{n=1}^{\infty}$ converge puntualmente en $\mathbb{R}$ a la función

$$
f(x) =
\begin{cases}
1, & \text{si } x \in \mathbb{Q}, \\
0, & \text{si } x \notin \mathbb{Q},
\end{cases}
$$

es decir, a la función característica (indicadora) de $\mathbb{Q}$, $f = \chi_{\mathbb{Q}}$ — también conocida como la **función de Dirichlet**.

**Observación.** Este ejemplo es particularmente interesante: cada $f_n$ toma el valor $1$ únicamente en un conjunto finito de puntos (por lo que $f_n$ es discontinua sólo en esos finitos puntos), mientras que el límite puntual $f = \chi_{\mathbb{Q}}$ es discontinua en **todo punto** de $\mathbb{R}$. Esto ilustra, aún más drásticamente que el Ejemplo 2.3, que la convergencia puntual no preserva la continuidad.

---

## 2.15 Ejercicio

El límite puntual no se lleva muy bien con las derivadas.

1. Consiera la sucesión de funciones $(f_n : \mathbb{R} \to \mathbb{R})$ dada por $f_n(x) = \dfrac{\operatorname{sen}(nx)}{n}$. Encuentra el límite puntual de $(f_n)_{n=1}^{\infty}$ pero muestra que el límite puntual de $(f_n')_{n=1}^{\infty}$ no existe.

**Solución 1**

Ya que $\left|\frac{sen(nx)}{n}\right| \leq \frac{1}{n}$ para todo $x \in \mathbb{R}$, se sigue que $\lim_{n \to \infty}f_n(n) = 0$ para toda $x$.

Sin embargo $f'_n(x) = cos(nx)$ el cual, para $x \neq 0$, cumple que $\lim_{n \to \infty}cos(nx)$ no existe. Por ejemplo, para $x = \pi$, $cos(nx) = -1$ o $cos(nx) = 1$, dependiendo si $n$ es impar  par, respectivamente.

**Solución 2**

La convergencia puntual de $(f_n)_{n \in \mathbb{N}}$ no garantiza la convergencia puntual de $(f_n')_{n \in \mathbb{N}}$.

Consideremos la sucesión de funciones $(f_n)_{n \in \mathbb{N}}$ donde $f_n : \mathbb{R} \to \mathbb{R}$ está dada por

$$
f_n(x) = \frac{\operatorname{sen}(nx)}{n}.
$$

**Veamos que $(f_n)_{n \in \mathbb{N}}$ converge puntualmente.**

Sea $x \in \mathbb{R}$ fija pero arbitraria. Sabemos que

$$
|\operatorname{sen}(nx)| \leq 1 \qquad \forall n \in \mathbb{N},
$$

por lo tanto

$$
\left| \frac{\operatorname{sen}(nx)}{n} \right| \leq \frac{1}{n} \qquad \forall n \in \mathbb{N},
$$

es decir,

$$
-\frac{1}{n} \leq \frac{\operatorname{sen}(nx)}{n} \leq \frac{1}{n} \qquad \forall n \in \mathbb{N},
$$

lo cual se puede reescribir como

$$
-\frac{1}{n} \leq f_n(x) \leq \frac{1}{n} \qquad \forall n \in \mathbb{N}.
$$

Tomando el límite cuando $n \to \infty$ (y usando que $\pm \dfrac{1}{n} \to 0$), obtenemos

$$
0 \leq \lim_{n \to \infty} f_n(x) \leq 0,
$$

por lo tanto

$$
\lim_{n \to \infty} f_n(x) = 0.
$$

Como $x \in \mathbb{R}$ fue arbitraria, concluimos que $(f_n)_{n \in \mathbb{N}}$ converge puntualmente a la función $0$, que denotaremos como $f$. Así,

$$
\forall x \in \mathbb{R}, \qquad \lim_{n \to \infty} f_n(x) = f(x) \quad \text{donde} \quad f(x) = 0 \quad \forall x \in \mathbb{R}.
$$

**Ahora veamos que el límite puntual de la sucesión $(f_n')_{n \in \mathbb{N}}$ no existe.**

Notemos que, para todo $n \in \mathbb{N}$ y para todo $x \in \mathbb{R}$,

$$
f_n'(x) = \left( \frac{\operatorname{sen}(nx)}{n} \right)'= \frac{1}{n}\big(\operatorname{sen}(nx)\big)' = \frac{1}{n}\cos(nx)(n) = \cos(nx).
$$

$$
\Rightarrow f_n'(x) = \cos(nx) \qquad \forall x \in \mathbb{R} \text{ y } \forall n \in \mathbb{N}.
$$

Para ver que $(f_n')_{n \in \mathbb{N}}$ no converge puntualmente, basta encontrar un $x_0 \in \mathbb{R}$ tal que $\displaystyle\lim_{n \to \infty} f_n'(x_0)$ no exista.

Consideremos $x_0 = \pi$. Entonces, para todo $n \in \mathbb{N}$,

$$
f_n'(x_0) = f_n'(\pi) = \cos(n\pi) = (-1)^n,
$$

usando que

$$
\cos(nx) = \begin{cases} 1, & \text{si } n \text{ es par}, \\ -1, & \text{si } n \text{ es impar}. \end{cases}
$$

Así,

$$
\Rightarrow f_n'(x_0) = (-1)^n \qquad \forall n \in \mathbb{N}.
$$

Pero como la sucesión $\big((-1)^n\big)_{n \in \mathbb{N}}$ no converge, entonces

$$
\lim_{n \to \infty} f_n'(x_0) \quad \text{no existe.}
$$

Por lo tanto, $(f_n')_{n \in \mathbb{N}}$ **no** converge puntualmente.

---

2. Considera la sucesión de funciones $f_n : [0,1] \to \mathbb{R}$ dada por $f_n(x) = \dfrac{x^n}{n}$. Prueba que, para todo $x \in [0,1]$, los límites puntuales $\lim_{n\to\infty} f_n(x)$ y $\lim_{n\to\infty} f_n'(x)$ existen. Define $f(x) := \lim_{n\to\infty} f_n(x)$ y para $x \neq 1$ prueba

$$
\lim_{n \to \infty} f_n'(x) = f'(x)
$$

pero

$$
\lim_{n \to \infty} f_n'(1) \neq f'(1)
$$

Por lo tanto, no siempre pasa que el límite puntual de las derivadas es la derivada del límite puntual.

**Solución 1**

Ya que $\left| \frac{x^n}{n} \right| \le \frac{1}{n}$ para todo $x \in [0, 1]$, se sigue que

$$\lim_{n \to \infty} f_n(x) = 0$$

para todo $x \in [0, 1]$ y por lo tanto $f = 0$.

Por otro lado, $f_n'(x) = x^{n-1}$, el cual sabemos que satisface

$$\lim_{n \to \infty} f_n'(x) = \begin{cases} 0 & 0 \le x < 1, \\ 1 & x = 1. \end{cases}$$

Por lo tanto $\lim_{n \to \infty} f_n'(1) \neq f'(1)$.

**Solución 2**

Supongamos que $(f_n)_{n \in \mathbb{N}}$ converge puntualmente a $f$, $f_n \xrightarrow{\text{p.w.}} f$, y también supongamos que $(f_n')_{n \in \mathbb{N}}$ converge puntualmente a una función $g$, $f_n' \to g$.

¿$g = f'$? No.

Consideremos la sucesión de funciones $(f_n : [0,1] \to \mathbb{R})_{n \in \mathbb{N}}$ dada por

$$
f_n(x) = \frac{x^n}{n}.
$$

Veamos que $(f_n)_{n \in \mathbb{N}}$ y $(f_n')_{n \in \mathbb{N}}$ convergen puntualmente en $[0,1]$.

**P.d. $(f_n)_{n \in \mathbb{N}}$ converge puntualmente en $[0,1]$.**

Notemos que, para todo $x \in [0,1]$ y para todo $n \in \mathbb{N}$,

$$
x^n \leq 1 \;\Rightarrow\; |x^n| \leq 1 \;\Rightarrow\; \frac{|x^n|}{n} \leq \frac{1}{n} \;\Rightarrow\; \left| \frac{x^n}{n} \right| \leq \frac{1}{n}.
$$

$$
\Rightarrow \lim_{n \to \infty} \left| \frac{x^n}{n} \right| = 0 \;\Rightarrow\; \lim_{n \to \infty} \frac{x^n}{n} = 0 \;\Rightarrow\; \lim_{n \to \infty} f_n(x) = 0.
$$

Así, $(f_n)_{n \in \mathbb{N}}$ converge puntualmente a la función $0$, que denotaremos por $f$. Así, para todo $x \in [0,1]$,

$$
\lim_{n \to \infty} f_n(x) = f(x) \qquad \text{donde} \qquad f(x) = 0 \quad \forall x \in [0,1].
$$

**P.d. $(f_n')_{n \in \mathbb{N}}$ converge puntualmente en $[0,1]$.**

Notemos que

$$
f_n'(x) = \left( \frac{x^n}{n} \right)' = \frac{n\, x^{n-1}}{n} = x^{n-1}.
$$

Ahora veamos si, para todo $x \in [0,1]$, $\displaystyle\lim_{n \to \infty} f_n'(x)$ existe.

**Caso 1: $0 \leq x < 1$.**

$$
\lim_{n \to \infty} f_n'(x) = \lim_{n \to \infty} x^{n-1} = 0.
$$

**Caso 2: $x = 1$.**

$$
\lim_{n \to \infty} f_n'(x) = \lim_{n \to \infty} x^{n-1} = \lim_{n \to \infty} 1^{n-1} = \lim_{n \to \infty} 1 = 1.
$$

Así, el límite puntual es

$$
\lim_{n \to \infty} f_n'(x) =
\begin{cases}
0, & \text{si } 0 \leq x < 1, \\
1, & \text{si } x = 1.
\end{cases}
$$

Ahora, $f(x) = 0$ para todo $x \in [0,1]$ $\Rightarrow$ $f'(x) = 0$ para todo $x \in [0,1]$.

Notemos que, para todo $x \in [0,1)$,

$$
\lim_{n \to \infty} f_n'(x) = 0 = f'(x) \;\Rightarrow\; \lim_{n \to \infty} f_n'(x) = f'(x).
$$

Pero si $x = 1$ tenemos que

$$
\lim_{n \to \infty} f_n'(1) = 1 \neq 0 = f'(1) \;\Rightarrow\; \lim_{n \to \infty} f_n'(1) \neq f'(1).
$$

Entonces no se cumple que

$$
\lim_{n \to \infty} f_n'(x) = f'(x) \qquad \forall x \in [0,1].
$$

**Moraleja:**

$$
\lim_{n \to \infty} \frac{d}{dx} f_n(x) \neq \frac{d}{dx} \lim_{n \to \infty} f_n(x)
$$

Se necesitan otro tipo de condiciones para garantizar

$$
\lim_{n \to \infty} \frac{d}{dx} f_n(x) = \frac{d}{dx} \lim_{n \to \infty} f_n(x).
$$

---

## 2.16 Ejercicio

El límite puntual no se lleva bien con las integrales.

Considera la sucesión de funciones

$$
f_n(x) =
\begin{cases}
4n^2 x, & 0 \le x \le \dfrac{1}{2n}, \\[4pt]
-4n^2 x + 4n, & \dfrac{1}{2n} \le x \le \dfrac{1}{n}, \\[4pt]
0, & \dfrac{1}{n} \le x \le 1.
\end{cases}
$$

y sea $f(x) = \lim_{n\to\infty} f_n(x)$ su límite puntual.

Prueba

$$
\lim_{n \to \infty} \int_0^1 f_n(t)\,dt \neq \int_0^1 f(t)\,dt
$$

---

**Solución**

Por el Ejercicio 2.12 (inciso 1) sabemos que $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,1]$ a la función constante cero, es decir

$$
f(x) = \lim_{n \to \infty} f_n(x) = 0 \qquad \forall x \in [0,1].
$$

Por lo tanto,

$$
\int_0^1 f(t)\, dt = \int_0^1 0 \, dt = 0. \tag{$\ast$}
$$

Ahora calculemos $\displaystyle\int_0^1 f_n(t)\, dt$ para $n \in \mathbb{N}$ fijo pero arbitrario. Usando la definición de $f_n$ por tramos, separamos la integral en tres partes:

$$
\int_0^1 f_n(t)\, dt = \int_0^{\frac{1}{2n}} 4n^2 t \, dt + \int_{\frac{1}{2n}}^{\frac{1}{n}} (-4n^2 t + 4n) \, dt + \int_{\frac{1}{n}}^{1} 0 \, dt.
$$

**Primera integral.**

$$
\int_0^{\frac{1}{2n}} 4n^2 t \, dt = \left. 2n^2 t^2 \right|_0^{\frac{1}{2n}} = 2n^2 \cdot \frac{1}{4n^2} = \frac{1}{2}.
$$

**Segunda integral.**

$$
\int_{\frac{1}{2n}}^{\frac{1}{n}} (-4n^2 t + 4n) \, dt = \left. \left(-2n^2 t^2 + 4nt\right) \right|_{\frac{1}{2n}}^{\frac{1}{n}}.
$$

Evaluando en $t = \dfrac{1}{n}$:

$$
-2n^2 \cdot \frac{1}{n^2} + 4n \cdot \frac{1}{n} = -2 + 4 = 2.
$$

Evaluando en $t = \dfrac{1}{2n}$:

$$
-2n^2 \cdot \frac{1}{4n^2} + 4n \cdot \frac{1}{2n} = -\frac{1}{2} + 2 = \frac{3}{2}.
$$

Por lo tanto,

$$
\int_{\frac{1}{2n}}^{\frac{1}{n}} (-4n^2 t + 4n) \, dt = 2 - \frac{3}{2} = \frac{1}{2}.
$$

**Tercera integral.**

$$
\int_{\frac{1}{n}}^{1} 0 \, dt = 0.
$$

**Sumando las tres partes:**

$$
\int_0^1 f_n(t)\, dt = \frac{1}{2} + \frac{1}{2} + 0 = 1 \qquad \text{para todo } n \in \mathbb{N}.
$$

(Geométricamente, esto es simplemente el área del triángulo de base $\dfrac{1}{n}$ y altura $2n$, es decir $\dfrac{1}{2}\cdot\dfrac{1}{n}\cdot 2n = 1$.)

Como $\displaystyle\int_0^1 f_n(t)\, dt = 1$ para toda $n$, se sigue que

$$
\lim_{n \to \infty} \int_0^1 f_n(t)\, dt = \lim_{n \to \infty} 1 = 1. \tag{$\ast\ast$}
$$

**Conclusión.**

Comparando $(\ast)$ y $(\ast\ast)$ obtenemos

$$
\lim_{n \to \infty} \int_0^1 f_n(t)\, dt = 1 \neq 0 = \int_0^1 f(t)\, dt,
$$

es decir,

$$
\lim_{n \to \infty} \int_0^1 f_n(t)\,dt \neq \int_0^1 f(t)\,dt.
$$

**Moraleja.** Este ejemplo muestra que, en general,

$$
\lim_{n \to \infty} \int_0^1 f_n(t)\, dt \neq \int_0^1 \lim_{n \to \infty} f_n(t)\, dt,
$$

es decir, la convergencia puntual **no** permite intercambiar el límite con la integral. Se necesitan condiciones adicionales (como la convergencia uniforme) para garantizar dicho intercambio.

---

## 2.17 Ejercicio

Investiga si las siguientes sucesiones de funciones convergen uniformemente ó no, sobre el dominio dado, a la función constante cero.

1. $(f_n : \mathbb{R} \to \mathbb{R})_{n=1}^{\infty}$ dada por $f_n(x) = \dfrac{x}{1+nx^2}$.

**Solución**

Primero notemos que $(f_n)_{n=1}^{\infty}$ converge puntualmente en $\mathbb{R}$ a la función constante cero: para $x=0$, $f_n(0) = 0$ para toda $n$; y para $x \neq 0$ fija,

$$
\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{x}{1+nx^2} = 0,
$$

pues el denominador $1+nx^2 \to \infty$ mientras que el numerador permanece fijo.

Recordemos que por la Nota 2.5, $(f_n)_{n \in \mathbb{N}}$ converge uniformemente en $\mathbb{R}$ a la función constante cero si y sólo si

$$
\lim_{n \to \infty} \|f_n - 0\|_{\mathbb{R}} = 0.
$$

Veamos si $\displaystyle\lim_{n \to \infty} \|f_n\|_{\mathbb{R}} = 0$. Como, para todo $n \in \mathbb{N}$,

$$
\|f_n\|_{\mathbb{R}} = \sup_{x \in \mathbb{R}} |f_n(x)|,
$$

basta calcular $\displaystyle\sup_{x \in \mathbb{R}} |f_n(x)|$.

Sea $n \in \mathbb{N}$ fija pero arbitraria. Notemos que $f_n : \mathbb{R} \to \mathbb{R}$ dada por $f_n(x) = \dfrac{x}{1+nx^2}$ es diferenciable en $\mathbb{R}$ (el denominador nunca se anula), entonces, usando la regla del cociente,

$$
\begin{aligned}
f_n'(x) &= \frac{(1+nx^2)(x)' - x(1+nx^2)'}{(1+nx^2)^2} \\
&= \frac{(1+nx^2) - x(2nx)}{(1+nx^2)^2} \\
&= \frac{1+nx^2-2nx^2}{(1+nx^2)^2} \\
&= \frac{1-nx^2}{(1+nx^2)^2}.
\end{aligned}
$$

Encontremos los puntos críticos.

$$
f_n'(x) = 0 \;\Rightarrow\; 1-nx^2 = 0 \;\Rightarrow\; x^2 = \frac{1}{n} \;\Rightarrow\; x = \pm\frac{1}{\sqrt{n}}.
$$

Notemos que, como $(1+nx^2)^2 > 0$ para toda $x \in \mathbb{R}$, el signo de $f_n'(x)$ coincide con el signo de $1-nx^2$.

**Caso $|x| < \dfrac{1}{\sqrt{n}}$.**

$$
|x| < \frac{1}{\sqrt{n}} \;\Rightarrow\; x^2 < \frac{1}{n} \;\Rightarrow\; nx^2 < 1 \;\Rightarrow\; 1-nx^2 > 0 \;\Rightarrow\; f_n'(x) > 0.
$$

**Caso $|x| > \dfrac{1}{\sqrt{n}}$.**

$$
|x| > \frac{1}{\sqrt{n}} \;\Rightarrow\; x^2 > \frac{1}{n} \;\Rightarrow\; nx^2 > 1 \;\Rightarrow\; 1-nx^2 < 0 \;\Rightarrow\; f_n'(x) < 0.
$$

| | $\left(-\infty, -\dfrac{1}{\sqrt{n}}\right)$ | $-\dfrac{1}{\sqrt{n}}$ | $\left(-\dfrac{1}{\sqrt{n}}, \dfrac{1}{\sqrt{n}}\right)$ | $\dfrac{1}{\sqrt{n}}$ | $\left(\dfrac{1}{\sqrt{n}}, \infty\right)$ |
|---|:---:|:---:|:---:|:---:|:---:|
| $f_n'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ |
| $f_n(x)$ | $\searrow$ | mín | $\nearrow$ | máx | $\searrow$ |

Así, $f_n$ alcanza un mínimo local en $x = -\dfrac{1}{\sqrt{n}}$ y un máximo local en $x = \dfrac{1}{\sqrt{n}}$. Como además $\displaystyle\lim_{x \to \pm\infty} f_n(x) = 0$ y $f_n$ es una función impar (pues $f_n(-x) = -f_n(x)$), se sigue que

$$
\sup_{x \in \mathbb{R}} |f_n(x)| = f_n\!\left(\frac{1}{\sqrt{n}}\right) = \left|f_n\!\left(-\frac{1}{\sqrt{n}}\right)\right|.
$$

Calculemos este valor:

$$
\begin{aligned}
f_n\!\left(\frac{1}{\sqrt{n}}\right) &= \frac{\dfrac{1}{\sqrt{n}}}{1+n\left(\dfrac{1}{\sqrt{n}}\right)^2} \\
&= \frac{\dfrac{1}{\sqrt{n}}}{1+n\cdot\dfrac{1}{n}} \\
&= \frac{\dfrac{1}{\sqrt{n}}}{1+1} \\
&= \frac{1}{2\sqrt{n}}.
\end{aligned}
$$

Por lo tanto,

$$
\|f_n\|_{\mathbb{R}} = \sup_{x \in \mathbb{R}} |f_n(x)| = \frac{1}{2\sqrt{n}} \qquad \forall n \in \mathbb{N}.
$$

$$
\Rightarrow \lim_{n \to \infty} \|f_n\|_{\mathbb{R}} = \lim_{n \to \infty} \frac{1}{2\sqrt{n}} = 0
$$

$$
\Rightarrow f_n \xrightarrow{\text{unif}} 0.
$$

**Conclusión.** La sucesión $(f_n)_{n=1}^{\infty}$ converge uniformemente en $\mathbb{R}$ a la función constante cero.

---

2. $(f_n : [0,\infty) \to \mathbb{R})_{n=1}^{\infty}$ dada por $f_n(x) = x e^{-2nx}$.

Sugerencia: usa cálculo para encontar la norma uniforme de cada $f_n$.

**Solución**

Recordemos que por la Nota 2.5, $(f_n)_{n \in \mathbb{N}}$ converge uniformemente en $[0,\infty)$ a la función constante cero si y sólo si

$$
\lim_{n \to \infty} \|f_n - 0\|_{[0,\infty)} = 0.
$$

Veamos si $\displaystyle\lim_{n \to \infty} \|f_n\|_{[0,\infty)} = 0$. Como, para todo $n \in \mathbb{N}$,

$$
\|f_n\|_{[0,\infty)} = \sup_{x \in [0,\infty)} |f_n(x)|,
$$

basta calcular $\displaystyle\sup_{x \in [0,\infty)} |f_n(x)|$.

Sea $n \in \mathbb{N}$ fija pero arbitraria. Notemos que $f_n : [0,\infty) \to \mathbb{R}$ dada por $f_n(x) = x e^{-2nx}$ es continua en $[0,\infty)$ y diferenciable en $(0,\infty)$, entonces

$$
\begin{aligned}
f_n'(x) &= \left(x e^{-2nx}\right)' \\
&= x\left(e^{-2nx}\right)' + e^{-2nx}(x)' \\
&= x\, e^{-2nx}(-2nx)' + e^{-2nx} \\
&= x e^{-2nx}(-2n) + e^{-2nx} \\
&= -2nx\, e^{-2nx} + e^{-2nx} \\
&= e^{-2nx}(1 - 2nx).
\end{aligned}
$$

Encontremos los puntos críticos.

$$
f_n'(x) = 0 \;\Rightarrow\; e^{-2nx}(1-2nx) = 0 \;\Rightarrow\; 1 - 2nx = 0 \quad \left(\text{pues } e^{-2nx} > 0 \;\; \forall x \in [0,\infty)\right)
$$

$$
\Rightarrow 2nx = 1 \;\Rightarrow\; x = \frac{1}{2n}.
$$

**Caso $0 \leq x < \dfrac{1}{2n}$.**

$$
0 \leq x < \frac{1}{2n} \;\Rightarrow\; 0 \leq 2nx < 1.
$$

Como $2nx < 1 \;\Rightarrow\; 0 < 1-2nx \;\Rightarrow\; 0 < e^{-2nx}(1-2nx) \;\Rightarrow\; 0 < f_n'(x)$.

**Caso $\dfrac{1}{2n} < x$.**

$$
\frac{1}{2n} < x \;\Rightarrow\; 1 < 2nx \;\Rightarrow\; 1-2nx < 0 \;\Rightarrow\; e^{-2nx}(1-2nx) < 0 \;\Rightarrow\; f_n'(x) < 0.
$$

| | $\left[0, \dfrac{1}{2n}\right)$ | $\dfrac{1}{2n}$ | $\left(\dfrac{1}{2n}, \infty\right)$ |
|---|:---:|:---:|:---:|
| $f_n'(x)$ | $+$ | $0$ | $-$ |
| $f_n(x)$ | $\nearrow$ | | $\searrow$ |

Así, $f_n$ alcanza su máximo en $x_{\max} = \dfrac{1}{2n}$. Así,

$$
\max_{x \in [0,\infty)} f_n(x) = f_n(x_{\max}).
$$

Notemos que

$$
\begin{aligned}
\|f_n\|_{[0,\infty)} &= \sup_{x \in [0,\infty)} |f_n(x)| \\
&= \sup_{x \in [0,\infty)} f_n(x) \qquad \left(\text{pues } f(x) \geq 0 \;\; \forall x \in [0,\infty)\right) \\
&= \max_{x \in [0,\infty)} f_n(x) \\
&= f_n(x_{\max}) \\
&= f_n\!\left(\frac{1}{2n}\right) \\
&= \frac{1}{2n} e^{-2n\left(\frac{1}{2n}\right)} \\
&= \frac{1}{2n} e^{-1} \\
&= \frac{1}{2ne}.
\end{aligned}
$$

$$
\begin{aligned}
\Rightarrow \|f_n\|_{[0,\infty)} &= \frac{1}{2ne} \qquad \forall n \in \mathbb{N}. \\
\Rightarrow \lim_{n \to \infty} \|f_n\|_{[0,\infty)} &= \lim_{n \to \infty} \frac{1}{2ne} \\
\Rightarrow \lim_{n \to \infty} \|f_n\|_{[0,\infty)} &= 0 \\
\end{aligned}
$$

$$\Rightarrow f_n \xrightarrow{\text{unif}} 0.$$

**Conclusión.** La sucesión $(f_n)_{n=1}^{\infty}$ converge uniformemente en $[0,\infty)$ a la función constante cero.

---

## 2.18 Ejercicio

1. Sea $X$ un conjunto, $A \subseteq X$. Prueba que la sucesión de funciones $(f_n : X \to \mathbb{R}^n)_{n=1}^{\infty}$ NO converge uniformemente en $A$ a la función $f$ si y sólo si existe un $\varepsilon_0 > 0$, una subsucesión $(f_{n_k})_{k=1}^{\infty}$ y una sucesión $(a_n)_{n=1}^{\infty} \subset A$ que satisface

$$
\|f_{n_k}(a_k) - f(a_k)\| \ge \varepsilon_0
$$

para toda $k \ge 1$.

**Solución**

Recordemos que $(f_n)_{n=1}^{\infty}$ converge uniformemente en $A$ a $f$ si para toda $\varepsilon > 0$ existe $N \in \mathbb{N}$ tal que, para toda $n \geq N$ y para toda $a \in A$,

$$
\|f_n(a) - f(a)\| < \varepsilon.
$$

Por lo tanto, $(f_n)_{n=1}^{\infty}$ **no** converge uniformemente en $A$ a $f$ si y sólo si

$$
\exists\, \varepsilon_0 > 0 \text{ tal que } \forall N \in \mathbb{N}, \; \exists\, n \geq N \text{ y } \exists\, a \in A \text{ tales que } \|f_n(a) - f(a)\| \geq \varepsilon_0. \tag{$\star$}
$$

Esta es simplemente la negación lógica de la definición de convergencia uniforme. Probemos que $(\star)$ es equivalente a la existencia de $\varepsilon_0 > 0$, una subsucesión $(f_{n_k})_{k=1}^{\infty}$ y una sucesión $(a_k)_{k=1}^{\infty} \subset A$ tales que $\|f_{n_k}(a_k) - f(a_k)\| \geq \varepsilon_0$ para toda $k \geq 1$.

**($\Leftarrow$)** Supongamos que existen $\varepsilon_0 > 0$, una subsucesión $(n_k)_{k=1}^{\infty}$ (es decir, $n_1 < n_2 < n_3 < \cdots$) y una sucesión $(a_k)_{k=1}^{\infty} \subset A$ tales que

$$
\|f_{n_k}(a_k) - f(a_k)\| \geq \varepsilon_0 \qquad \forall k \geq 1.
$$

Sea $N \in \mathbb{N}$ arbitrario. Como $(n_k)_{k=1}^{\infty}$ es estrictamente creciente, $n_k \to \infty$ cuando $k \to \infty$, por lo que existe $k$ tal que $n_k \geq N$. Tomando $n := n_k \geq N$ y $a := a_k \in A$ obtenemos

$$
\|f_n(a) - f(a)\| = \|f_{n_k}(a_k) - f(a_k)\| \geq \varepsilon_0.
$$

Como $N$ era arbitrario, se cumple $(\star)$, es decir, $(f_n)_{n=1}^{\infty}$ no converge uniformemente en $A$ a $f$.

**($\Rightarrow$)** Supongamos que $(f_n)_{n=1}^{\infty}$ no converge uniformemente en $A$ a $f$, es decir, se cumple $(\star)$: existe $\varepsilon_0 > 0$ tal que para todo $N \in \mathbb{N}$ existen $n \geq N$ y $a \in A$ con $\|f_n(a) - f(a)\| \geq \varepsilon_0$.

Construimos $(n_k)_{k=1}^{\infty}$ y $(a_k)_{k=1}^{\infty}$ inductivamente:

- Tomando $N = 1$ en $(\star)$, obtenemos $n_1 \geq 1$ y $a_1 \in A$ tales que $\|f_{n_1}(a_1) - f(a_1)\| \geq \varepsilon_0$.
- Suponiendo construidos $n_1 < n_2 < \cdots < n_{k-1}$ y $a_1, \dots, a_{k-1} \in A$, tomamos $N = n_{k-1}+1$ en $(\star)$, con lo cual obtenemos $n_k \geq n_{k-1}+1$ (en particular $n_k > n_{k-1}$) y $a_k \in A$ tales que

$$
\|f_{n_k}(a_k) - f(a_k)\| \geq \varepsilon_0.
$$

De esta manera obtenemos una subsucesión $(n_k)_{k=1}^{\infty}$ (pues $n_1 < n_2 < n_3 < \cdots$) y una sucesión $(a_k)_{k=1}^{\infty} \subset A$ tales que

$$
\|f_{n_k}(a_k) - f(a_k)\| \geq \varepsilon_0 \qquad \forall k \geq 1,
$$

que es justo lo que queríamos probar. $\blacksquare$

---

2. Usa esto para probar que la sucesión $(f_n : \mathbb{R} \to \mathbb{R})_{n=1}^{\infty}$ dada por $f_n(x) = x^n$, no converge uniformemente en $(-1,1)$ a la función cero. Nota: este ejemplo muestra que convergencia puntual no implica convergencia uniforme.

**Solución**

Consideremos la sucesión de funciones $(f_n : \mathbb{R} \to \mathbb{R})_{n=1}^{\infty}$ dada por $f_n(x) = x^n$, y recordemos (Ejemplo 2.2) que $(f_n)_{n=1}^{\infty}$ converge puntualmente en $(-1,1)$ a la función $f \equiv 0$.

Usaremos el criterio del primer inciso para probar que la convergencia **no** es uniforme en $(-1,1)$.

Tomemos $\varepsilon_0 = \dfrac{1}{2}$, la subsucesión $n_k = k$ (es decir, la sucesión completa) y definamos, para cada $k \geq 1$,

$$
a_k := \left(\frac{1}{2}\right)^{1/k}.
$$

Notemos que $a_k \in (0,1) \subset (-1,1)$ para toda $k$, así que $(a_k)_{k=1}^{\infty} \subset (-1,1)$.

Calculemos $\|f_{n_k}(a_k) - f(a_k)\|$:

$$
|f_{n_k}(a_k) - f(a_k)| = |f_k(a_k) - 0| = |a_k^k| = \left| \left( \left(\frac{1}{2}\right)^{1/k} \right)^{k} \right| = \frac{1}{2}.
$$

Es decir,

$$
|f_{n_k}(a_k) - f(a_k)| = \frac{1}{2} = \varepsilon_0 \geq \varepsilon_0 \qquad \forall k \geq 1.
$$

Por lo tanto, existen $\varepsilon_0 = \dfrac{1}{2} > 0$, una subsucesión $(f_{n_k})_{k=1}^{\infty} = (f_k)_{k=1}^{\infty}$ y una sucesión $(a_k)_{k=1}^{\infty} \subset (-1,1)$ tales que

$$
|f_{n_k}(a_k) - f(a_k)| \geq \varepsilon_0 \qquad \forall k \geq 1.
$$

Por el primer inciso, esto implica que $(f_n)_{n=1}^{\infty}$ **no** converge uniformemente en $(-1,1)$ a la función cero.

**Conclusión.** Aunque $(f_n)_{n=1}^{\infty}$, con $f_n(x) = x^n$, converge puntualmente en $(-1,1)$ a la función cero, dicha convergencia no es uniforme. Esto confirma, mediante otro método (el criterio de este ejercicio, en vez de calcular directamente $\|f_n\|_{(-1,1)}$), que la convergencia puntual **no implica** convergencia uniforme.

---

## 2.19 Ejercicio

**Considera $(f_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ una sucesión de funciones continuas con la propiedad de que converge uniformemente en $\mathbb{Q} \cap [a,b]$. Prueba o da un contraejemplo: la sucesión $(f_n)_{n=1}^{\infty}$ converge uniformemente en $[0,1]$.**

---

**Respuesta**

La afirmación es **verdadera**. Vamos a probarla (en particular para $[a,b]=[0,1]$, aunque el argumento funciona para cualquier intervalo cerrado $[a,b]$).

La idea central es la siguiente: si dos funciones **continuas** coinciden (aproximadamente, en norma uniforme) en un subconjunto **denso** de $[a,b]$, entonces coinciden en todo $[a,b]$, porque el supremo de una función continua sobre un conjunto denso es el mismo que sobre la cerradura de ese conjunto.

**Lema (el supremo de una función continua se alcanza en un denso).**

Sea $g : [a,b] \to \mathbb{R}$ continua y $D \subseteq [a,b]$ denso en $[a,b]$. Entonces

$$\|g\|_{D} = \|g\|_{[a,b]}.$$

*Demostración del lema.* Como $D \subseteq [a,b]$, es claro que $\|g\|_D \leq \|g\|_{[a,b]}$.

Para la desigualdad contraria, sea $x \in [a,b]$ arbitrario y $\varepsilon > 0$. Por continuidad de $g$ en $x$, existe $\delta > 0$ tal que si $|y-x|<\delta$ entonces $|g(y)-g(x)|<\varepsilon$. Como $D$ es denso en $[a,b]$, existe $q \in D$ con $|q-x|<\delta$, y por lo tanto

$$|g(x)| \leq |g(q)| + |g(x)-g(q)| < \|g\|_D + \varepsilon.$$

Como $\varepsilon>0$ fue arbitrario, $|g(x)| \leq \|g\|_D$. Como $x \in [a,b]$ fue arbitrario, tomando supremo obtenemos $\|g\|_{[a,b]} \leq \|g\|_D$.

Combinando ambas desigualdades, $\|g\|_D = \|g\|_{[a,b]}$. $\blacksquare$

**Paso 1: $(f_n)$ es uniformemente Cauchy en $\mathbb{Q}\cap[a,b]$.**

Como $(f_n)_{n=1}^{\infty}$ converge uniformemente en $\mathbb{Q}\cap[a,b]$, en particular es uniformemente Cauchy ahí: dado $\varepsilon>0$ existe $N\in\mathbb{N}$ tal que para todo $n,m\geq N$,

$$\|f_n - f_m\|_{\mathbb{Q}\cap[a,b]} < \varepsilon.$$

**Paso 2: usando el Lema, $(f_n)$ es uniformemente Cauchy en todo $[a,b]$.**

Para $n,m$ fijas, $g:=f_n-f_m$ es continua en $[a,b]$ (diferencia de funciones continuas) y $\mathbb{Q}\cap[a,b]$ es denso en $[a,b]$. Por el Lema,

$$\|f_n-f_m\|_{[a,b]} = \|f_n - f_m\|_{\mathbb{Q}\cap[a,b]}.$$

Por lo tanto, del Paso 1 se sigue que para todo $n,m\geq N$,

$$\|f_n - f_m\|_{[a,b]} < \varepsilon.$$

Es decir, $(f_n)_{n=1}^{\infty}$ es uniformemente Cauchy en $[a,b]$.

**Paso 3: toda sucesión uniformemente Cauchy converge uniformemente (por completez de $\mathbb{R}$).**

Fijemos $x\in[a,b]$. Como $|f_n(x)-f_m(x)| \leq \|f_n-f_m\|_{[a,b]}$, la sucesión $(f_n(x))_{n=1}^{\infty}$ es de Cauchy en $\mathbb{R}$, y por completez de $\mathbb{R}$ converge. Definamos

$$f(x) := \lim_{n\to\infty} f_n(x), \qquad x\in[a,b].$$

Veamos que la convergencia es uniforme. Sea $\varepsilon>0$. Por el Paso 2 existe $N\in\mathbb{N}$ tal que para todo $n,m\geq N$ y todo $x\in[a,b]$,

$$|f_n(x)-f_m(x)| < \frac{\varepsilon}{2}.$$

Fijando $n\geq N$ y $x\in[a,b]$, y dejando $m\to\infty$ (con $f_m(x)\to f(x)$), obtenemos

$$|f_n(x)-f(x)| \leq \frac{\varepsilon}{2} < \varepsilon.$$

Como esto vale para todo $x\in[a,b]$ y todo $n\geq N$, concluimos

$$\|f_n - f\|_{[a,b]} \leq \frac{\varepsilon}{2} < \varepsilon \quad \text{para todo } n \geq N.$$

Por lo tanto $f_n \xrightarrow[n\to\infty]{} f$ uniformemente en $[a,b]$.

**Conclusión.**

$$\therefore \ (f_n)_{n=1}^{\infty} \text{ converge uniformemente en } [a,b] \text{ (en particular en } [0,1]\text{).} \qquad \blacksquare$$

*Observación:* como consecuencia del Teorema 2.7 (continuidad del límite uniforme), la función límite $f$ es además continua en $[a,b]$, ya que cada $f_n$ lo es.

---

## 2.20 Ejercicio

Para las siguientes sucesiones de funciones encuentra su límite puntual (si existe) y los subintervalos donde la convergencia es uniforme.

---

### 1. $f_n : [0,1] \to \mathbb{R}$ dada por $f_n(x) = n^2 x (1 - x^2)^n$.

**Límite puntual.**

Para $x=0$: $f_n(0) = 0$ para toda $n$.

Para $x=1$: $f_n(1) = n^2 \cdot 1 \cdot 0^n = 0$ para toda $n \geq 1$.

Para $x \in (0,1)$: $1-x^2 \in (0,1)$, y como la exponencial $(1-x^2)^n \to 0$ más rápido de lo que $n^2 \to \infty$ (crecimiento exponencial contra polinomial), tenemos

$$
\lim_{n \to \infty} n^2 (1-x^2)^n = 0 \;\Rightarrow\; \lim_{n \to \infty} f_n(x) = 0.
$$

Por lo tanto, $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,1]$ a la función constante cero:

$$
f(x) = 0 \qquad \forall x \in [0,1].
$$

**Convergencia uniforme.**

Buscamos $\|f_n\|_{[0,1]} = \sup_{x\in[0,1]} |f_n(x)|$. Derivando,

$$
\begin{aligned}
f_n'(x) &= n^2(1-x^2)^n + n^2 x \cdot n(1-x^2)^{n-1}(-2x) \\
&= n^2(1-x^2)^{n-1}\left[(1-x^2) - 2nx^2\right] \\
&= n^2(1-x^2)^{n-1}\left[1-(2n+1)x^2\right].
\end{aligned}
$$

$$
f_n'(x) = 0 \;\Rightarrow\; 1-(2n+1)x^2 = 0 \;\Rightarrow\; x = \frac{1}{\sqrt{2n+1}} =: x_n.
$$

Como $(1-x^2)^{n-1} > 0$ en $(0,1)$, el signo de $f_n'$ coincide con el de $1-(2n+1)x^2$: positivo para $x<x_n$ y negativo para $x>x_n$. Así $f_n$ alcanza su máximo en $x_n$:

$$
\|f_n\|_{[0,1]} = f_n(x_n) = n^2 \cdot \frac{1}{\sqrt{2n+1}} \cdot \left(\frac{2n}{2n+1}\right)^n.
$$

Como $\left(\dfrac{2n}{2n+1}\right)^n = \left(1-\dfrac{1}{2n+1}\right)^n \to e^{-1/2}$ y $\dfrac{n^2}{\sqrt{2n+1}} \to \infty$, se sigue que

$$
\lim_{n\to\infty} \|f_n\|_{[0,1]} = \infty.
$$

Por lo tanto, $(f_n)_{n=1}^{\infty}$ **no** converge uniformemente en $[0,1]$.

Notemos que $x_n \to 0$ cuando $n \to \infty$. Así, para cualquier $a\in(0,1]$, eventualmente $x_n < a$, y como $f_n$ es decreciente para $x>x_n$, en $[a,1]$ el máximo de $f_n$ se alcanza en $x=a$:

$$
\|f_n\|_{[a,1]} = f_n(a) = n^2 a(1-a^2)^n \xrightarrow[n\to\infty]{} 0 \qquad (\text{pues } 1-a^2 \in (0,1)).
$$

En cambio, en cualquier intervalo $[0,a]$ con $a>0$, eventualmente $x_n < a$, así que el punto máximo global $x_n$ queda dentro de $[0,a]$, y por lo tanto $\|f_n\|_{[0,a]} = f_n(x_n) \to \infty$.

**Conclusión.** $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,1]$ a $f\equiv 0$, pero **no** uniformemente en $[0,1]$ ni en ningún $[0,a]$ con $a>0$. Sí converge **uniformemente** en cualquier subintervalo $[a,b] \subseteq (0,1]$ (es decir, en cualquier intervalo alejado de $0$).

---

### 2. $f_n : [0,\infty) \to \mathbb{R}$ dada por $f_n(x) = \dfrac{nx}{1+nx}$.

**Límite puntual.**

Para $x=0$: $f_n(0)=0$ para toda $n$.

Para $x>0$:

$$
f_n(x) = \frac{nx}{1+nx} = \frac{x}{\frac{1}{n}+x} \xrightarrow[n\to\infty]{} \frac{x}{x} = 1.
$$

Por lo tanto, el límite puntual es

$$
f(x) = \begin{cases} 0, & x=0, \\ 1, & x>0. \end{cases}
$$

**Convergencia uniforme.**

Para $x>0$,

$$
|f_n(x)-f(x)| = \left|\frac{nx}{1+nx}-1\right| = \frac{1}{1+nx} =: g_n(x),
$$

función estrictamente decreciente en $x$, con $g_n(0^+)=1$ y $g_n(x)\to 0$ cuando $x\to\infty$.

Como $f$ es discontinua en $x=0$ y cada $f_n$ es continua, $(f_n)_{n=1}^{\infty}$ **no** puede converger uniformemente en ningún intervalo que contenga a $0$: para cualquier $a>0$,

$$
\sup_{x\in[0,a]} |f_n(x)-f(x)| = \sup_{x\in(0,a]} g_n(x) = 1 \qquad \forall n,
$$

(el supremo se aproxima cuando $x\to 0^+$), por lo que $\|f_n-f\|_{[0,a]}=1 \not\to 0$.

En cambio, en $[a,\infty)$ con $a>0$, como $g_n$ es decreciente,

$$
\|f_n-f\|_{[a,\infty)} = \sup_{x\ge a} g_n(x) = g_n(a) = \frac{1}{1+na} \xrightarrow[n\to\infty]{} 0.
$$

**Conclusión.** El límite puntual existe en todo $[0,\infty)$ pero es discontinuo en $x=0$. La convergencia es **uniforme en $[a,\infty)$** para cualquier $a>0$, pero **no** es uniforme en $[0,\infty)$ ni en ningún intervalo que contenga al $0$.

---

### 3. $f_n : [0,\infty) \to \mathbb{R}$ dada por $f_n(x) = \dfrac{nx}{1+n^2x^2}$.

**Límite puntual.**

Para $x=0$: $f_n(0)=0$. Para $x>0$, el denominador $n^2x^2$ domina al numerador $nx$, así que

$$
f_n(x) = \frac{nx}{1+n^2x^2} \sim \frac{1}{nx} \xrightarrow[n\to\infty]{} 0.
$$

Por lo tanto $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,\infty)$ a la función constante cero:

$$
f(x) = 0 \qquad \forall x \geq 0.
$$

**Convergencia uniforme.**

Haciendo el cambio $t = nx$ (con $t\ge 0$), $f_n(x) = \dfrac{t}{1+t^2}$, cuyo máximo sobre $t\ge0$ ocurre en $t=1$ con valor $\dfrac12$. Como $t=nx=1 \Leftrightarrow x=\dfrac1n$, se sigue que

$$
\|f_n\|_{[0,\infty)} = \sup_{x\ge0} f_n(x) = f_n\!\left(\frac1n\right) = \frac12 \qquad \forall n\in\mathbb{N}.
$$

Como este supremo **no depende de $n$** y no tiende a $0$,

$$
\lim_{n\to\infty}\|f_n\|_{[0,\infty)} = \frac12 \neq 0,
$$

por lo que $(f_n)_{n=1}^{\infty}$ **no** converge uniformemente en $[0,\infty)$.

Para $a>0$ fijo, como $\dfrac1n \to 0$, eventualmente $\dfrac1n < a$; usando que $t\mapsto \dfrac{t}{1+t^2}$ es decreciente para $t>1$, en $[a,\infty)$ el máximo de $f_n$ se alcanza en $x=a$ (para $n$ suficientemente grande):

$$
\|f_n\|_{[a,\infty)} = f_n(a) = \frac{na}{1+n^2a^2} \xrightarrow[n\to\infty]{} 0.
$$

En cambio, en cualquier $[0,a]$ con $a>0$, eventualmente $\dfrac1n<a$, así que el punto máximo global $x=\dfrac1n$ queda dentro de $[0,a]$, y $\|f_n\|_{[0,a]} = \dfrac12$ para toda $n$ suficientemente grande.

**Conclusión.** $(f_n)_{n=1}^{\infty}$ converge puntualmente en $[0,\infty)$ a $f\equiv 0$, pero **no** uniformemente en $[0,\infty)$ ni en ningún $[0,a]$ con $a>0$. Converge **uniformemente en $[a,\infty)$** para cualquier $a>0$.

---

### 4. $f_n : \mathbb{R} \to \mathbb{R}$ dada por $f_n(x) = \dfrac{x^n}{1+x^{2n}}$.

**Límite puntual.**

- $x=0$: $f_n(0)=0$ para toda $n$.
- $|x|<1$: $x^n\to 0$ y $x^{2n}\to 0$, así que $f_n(x)\to \dfrac{0}{1}=0$.
- $x=1$: $f_n(1) = \dfrac{1}{1+1}=\dfrac12$ para toda $n$, luego $\lim_{n\to\infty} f_n(1)=\dfrac12$.
- $x=-1$: $f_n(-1) = \dfrac{(-1)^n}{2}$, que oscila entre $\dfrac12$ y $-\dfrac12$; el límite **no existe**.
- $|x|>1$: dividiendo numerador y denominador entre $x^{2n}$,

$$
f_n(x) = \frac{x^{-n}}{x^{-2n}+1} \xrightarrow[n\to\infty]{} \frac{0}{0+1}=0.
$$

Por lo tanto, $(f_n)_{n=1}^{\infty}$ converge puntualmente en $\mathbb{R}\setminus\{-1\}$ a la función

$$
f(x) = \begin{cases} 0, & x \neq \pm1, \\ \dfrac12, & x=1, \end{cases}
$$

y el límite puntual **no existe** en $x=-1$.

**Convergencia uniforme.**

Para $x>0$, con $t=x^n$, $f_n(x) = \dfrac{t}{1+t^2} \le \dfrac12$, con igualdad si y sólo si $t=1$, es decir $x=1$. Como $t=x^n$ es creciente en $x$ (para $x>0$) y $t\mapsto \frac{t}{1+t^2}$ es creciente en $(0,1)$ y decreciente en $(1,\infty)$, se sigue que $f_n$ es creciente en $(0,1)$ y decreciente en $(1,\infty)$, con máximo $\dfrac12$ en $x=1$. Análogamente, para $x<0$, $|f_n(x)| = \dfrac{|x|^n}{1+|x|^{2n}} \le \dfrac12$ con igualdad en $x=-1$.

**En intervalos alejados de $\pm1$:** sea $\varepsilon>0$.

- En $[0,1-\varepsilon]$: como $f_n$ es creciente ahí, $\|f_n-f\|_{[0,1-\varepsilon]} = f_n(1-\varepsilon) = \dfrac{(1-\varepsilon)^n}{1+(1-\varepsilon)^{2n}} \to 0$.
- En $[1+\varepsilon,\infty)$: como $f_n$ es decreciente ahí, $\|f_n-f\|_{[1+\varepsilon,\infty)} = f_n(1+\varepsilon) = \dfrac{(1+\varepsilon)^n}{1+(1+\varepsilon)^{2n}} \to 0$.
- Por simetría, lo mismo ocurre en $[-1+\varepsilon,0]$ y en $(-\infty,-1-\varepsilon]$.

Por lo tanto $(f_n)_{n=1}^{\infty}$ converge **uniformemente** en cualquier intervalo cerrado que no contenga a $1$ ni a $-1$, como $(-\infty,-1-\varepsilon]$, $[-1+\varepsilon,1-\varepsilon]$ y $[1+\varepsilon,\infty)$, para cualquier $\varepsilon>0$.

**En intervalos que contienen a $x=1$ en su interior:** ahí $f$ tiene una discontinuidad de salto ($f(1)=\tfrac12$ pero $f(x)\to 0$ cuando $x\to1$, $x\neq1$), mientras que cada $f_n$ es continua. Como la convergencia uniforme de funciones continuas preserva continuidad, la convergencia **no puede** ser uniforme en ningún intervalo $[a,b]$ con $a<1<b$.

**En intervalos que contienen a $x=-1$:** ahí el límite puntual ni siquiera existe, así que la convergencia tampoco puede ser uniforme (ni siquiera puntual) en dichos intervalos.

**Conclusión.** El límite puntual existe en $\mathbb{R}\setminus\{-1\}$, valiendo $0$ salvo en $x=1$ donde vale $\dfrac12$. La convergencia es **uniforme** en cualquier intervalo cerrado que no contenga a $1$ ni a $-1$ (por ejemplo $[-1+\varepsilon,\,1-\varepsilon]$, $[1+\varepsilon,\infty)$, $(-\infty,-1-\varepsilon]$, para $\varepsilon>0$), pero **no** en ningún intervalo que contenga a $1$ o a $-1$ en su interior.

---

## 2.21 Ejercicio

Sea $(f_n : [a,b] \to \mathbb{R}^n)_{n=1}^{\infty}$ una sucesión de funciones continuas tal que convergen uniformemente en $[a,b]$.

Sea $(x_m)_{m=1}^{\infty} \subset [a,b]$ una sucesión convergente en $[a,b]$. Prueba

$$
\lim_{n \to \infty} \left( \lim_{m \to \infty} f_n(x_m) \right) = \lim_{m \to \infty} \left( \lim_{n \to \infty} f_n(x_m) \right)
$$

**Solución**

Como $(f_n)_{n=1}^{\infty}$ converge uniformemente en $[a,b]$, existe una función $f : [a,b] \to \mathbb{R}^d$ tal que $f_n \xrightarrow{\text{unif}} f$ en $[a,b]$.

Sabemos que convergencia uniforme implica convergencia puntual, entonces

$$
\forall x \in [a,b], \qquad \lim_{n \to \infty} f_n(x) = f(x).
$$

Además, como cada $f_n$ es continua en $[a,b]$, por el Teorema 2.7 tenemos que $f$ también es continua en $[a,b]$.

Como $(x_m)_{m=1}^{\infty} \subseteq [a,b]$ converge en $[a,b]$, existe $x \in [a,b]$ tal que $\displaystyle\lim_{m \to \infty} x_m = x$.

**Primero calculemos $\displaystyle\lim_{n \to \infty} \left( \lim_{m \to \infty} f_n(x_m) \right)$.**

Notemos que

$$
\lim_{m \to \infty} f_n(x_m) = f_n(x) \qquad \forall n \in \mathbb{N},
$$

ya que cada $f_n$ es continua.

$$
\Rightarrow \lim_{n \to \infty} \left( \lim_{m \to \infty} f_n(x_m) \right) = \lim_{n \to \infty} f_n(x) = f(x), \qquad \text{pues } f_n \xrightarrow{\text{p.w.}} f \text{ en } [a,b].
$$

$$
\Rightarrow \lim_{n \to \infty} \left( \lim_{m \to \infty} f_n(x_m) \right) = f(x). \tag{1}
$$

**Ahora calculemos $\displaystyle\lim_{m \to \infty} \left( \lim_{n \to \infty} f_n(x_m) \right)$.**

Notemos que

$$
\lim_{n \to \infty} f_n(x_m) = f(x_m) \qquad \forall m \in \mathbb{N}, \qquad \text{pues } f_n \xrightarrow{\text{p.w.}} f \text{ en } [a,b].
$$

$$
\Rightarrow \lim_{m \to \infty} \left( \lim_{n \to \infty} f_n(x_m) \right) = \lim_{m \to \infty} f(x_m) = f(x), \qquad \text{pues } f \text{ es continua en } [a,b].
$$

$$
\Rightarrow \lim_{m \to \infty} \left( \lim_{n \to \infty} f_n(x_m) \right) = f(x). \tag{2}
$$

Por $(1)$ y $(2)$ concluimos que

$$
\lim_{m \to \infty} \left( \lim_{n \to \infty} f_n(x_m) \right) = \lim_{n \to \infty} \left( \lim_{m \to \infty} f_n(x_m) \right)
$$

$\blacksquare$

---

## 2.22 Ejercicio (NO VIENE).

Prueba

$$
\lim_{n \to \infty} \int_{\pi/2}^{\pi} \frac{\operatorname{sen}(nx)}{nx}\,dx = 0
$$

---

**Solución**

Sea $f_n(x) := \dfrac{\operatorname{sen}(nx)}{nx}$ para $x\in[\pi/2,\pi]$. Nótese que $x\neq 0$ en este intervalo, así que $f_n$ está bien definida y es continua en $[\pi/2,\pi]$, por lo tanto Riemann integrable.

Vamos a probar que $f_n \to 0$ uniformemente en $[\pi/2,\pi]$.

Para $x\in[\pi/2,\pi]$ tenemos $x\ge \pi/2$, por lo que $nx \ge n\pi/2$, y usando $|\operatorname{sen}(nx)|\le 1$:

$$|f_n(x)| = \frac{|\operatorname{sen}(nx)|}{nx} \le \frac{1}{nx} \le \frac{1}{n\pi/2} = \frac{2}{n\pi}.$$

Esta cota no depende de $x$, así que

$$\|f_n\|_{[\pi/2,\pi]} \le \frac{2}{n\pi} \xrightarrow[n\to\infty]{} 0.$$

Por lo tanto $f_n \to 0$ uniformemente en $[\pi/2,\pi]$. Como cada $f_n$ es continua (Riemann integrable) y converge uniformemente a la función Riemann integrable $0$, por el **Teorema 2.8**:

$$\lim_{n\to\infty} \int_{\pi/2}^{\pi} f_n(x)\,dx = \int_{\pi/2}^{\pi} 0 \,dx = 0.$$

Es decir,

$$\lim_{n\to\infty} \int_{\pi/2}^{\pi} \frac{\operatorname{sen}(nx)}{nx}\,dx = 0. \qquad \blacksquare$$

---

## 2.23 Ejercicio

Calcula el límite

$$
\lim_{n \to \infty} \int_{0}^{1} \frac{e^{-nt}}{\sqrt{t}}\,dt
$$

---

**Solución**

Para cada $n\in\mathbb{N}$ definimos

$$I_n := \int_0^1 \frac{e^{-nt}}{\sqrt t}\,dt.$$

Esta es una integral impropia, pues el integrando no está acotado cerca de $t=0$, pero converge: para todo $t\in(0,1]$,

$$0 \le \frac{e^{-nt}}{\sqrt t} \le \frac{1}{\sqrt t},$$

y $\displaystyle\int_0^1 \frac{dt}{\sqrt t} = 2 < \infty$ (integral $p$ con $p=1/2<1$). Por comparación, $I_n$ converge.

**Afirmación:** $\displaystyle\lim_{n\to\infty} I_n = 0$.

Sea $\varepsilon>0$. Fijemos $0<\delta<1$ tal que $2\sqrt{\delta} < \dfrac{\varepsilon}{2}$ (basta tomar $\delta < \varepsilon^2/16$). Separamos la integral:

$$I_n = \int_0^{\delta} \frac{e^{-nt}}{\sqrt t}\,dt + \int_{\delta}^1 \frac{e^{-nt}}{\sqrt t}\,dt.$$

Para la primera parte, usando $0 < e^{-nt} \le 1$:

$$\int_0^{\delta} \frac{e^{-nt}}{\sqrt t}\,dt \le \int_0^{\delta} \frac{dt}{\sqrt t} = 2\sqrt{\delta} < \frac{\varepsilon}{2}.$$

Para la segunda parte, como $t\ge \delta$ implica $e^{-nt} \le e^{-n\delta}$:

$$\int_{\delta}^1 \frac{e^{-nt}}{\sqrt t}\,dt \le e^{-n\delta}\int_{\delta}^1 \frac{dt}{\sqrt t} = e^{-n\delta}\cdot 2\left(1-\sqrt \delta\right) \le 2 e^{-n\delta}.$$

Como $\delta>0$ está fijo, $\displaystyle\lim_{n\to\infty} e^{-n\delta} = 0$, así que existe $N\in\mathbb{N}$ tal que para todo $n \ge N$, $2e^{-n\delta} < \dfrac{\varepsilon}{2}$.

Por lo tanto, para $n \ge N$:

$$0 \le I_n < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$

Como $\varepsilon>0$ fue arbitrario, concluimos

$$\lim_{n\to\infty} \int_0^1 \frac{e^{-nt}}{\sqrt t}\,dt = 0. \qquad \blacksquare$$

---

## 2.24 Ejercicio

Sea $(f_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ una sucesión de funciones continuas que converge uniformemente en $[a,b]$.

Define $F_n : [a,b] \to \mathbb{R}$ por

$$
F_n(x) := \int_a^x f_n(t)\,dt
$$

Prueba que la sucesión $(F_n)_{n=1}^{\infty}$ converge uniformemente en $[a,b]$.

---

**Solución**

Como $(f_n)_{n=1}^{\infty}$ converge uniformemente en $[a,b]$ y cada $f_n$ es continua, por el **Teorema 2.7** el límite $f:=\lim_{n\to\infty} f_n$ es continuo en $[a,b]$, y en particular Riemann integrable, así que

$$F(x):=\int_a^x f(t)\,dt$$

está bien definida para $x\in[a,b]$.

Fijemos $x\in[a,b]$. Usando que $f_n, f$ son integrables y la desigualdad del triángulo para integrales:

$$|F_n(x) - F(x)| = \left| \int_a^x f_n(t)\,dt - \int_a^x f(t)\,dt \right| = \left| \int_a^x \big(f_n(t)-f(t)\big)\,dt \right| \le \int_a^x |f_n(t)-f(t)|\,dt.$$

Usando que $|f_n(t)-f(t)| \le \|f_n-f\|_{[a,b]}$ para todo $t\in[a,b]$:

$$|F_n(x)-F(x)| \le \int_a^x \|f_n-f\|_{[a,b]}\,dt = (x-a)\,\|f_n-f\|_{[a,b]} \le (b-a)\,\|f_n-f\|_{[a,b]}.$$

Esta cota no depende de $x$, así que tomando supremo sobre $x\in[a,b]$:

$$\|F_n - F\|_{[a,b]} \le (b-a)\,\|f_n-f\|_{[a,b]}.$$

Como $(f_n)$ converge uniformemente a $f$ en $[a,b]$, tenemos $\displaystyle\lim_{n\to\infty}\|f_n-f\|_{[a,b]}=0$, y por lo tanto

$$\lim_{n\to\infty} \|F_n-F\|_{[a,b]} = 0.$$

Es decir, $(F_n)_{n=1}^{\infty}$ converge uniformemente en $[a,b]$ (a la función $F$). $\blacksquare$

---

## 2.25 Ejercicio

Supongamos que tenemos una sucesión de funciones continuas $(f_n : [a,b] \to \mathbb{R})$ que converge uniformemente en $[a,b]$ a la función $f : [a,b] \to \mathbb{R}$. Prueba

$$
\lim_{n \to \infty} \int_a^b \left( \int_a^x f_n(t)\,dt \right) dx = \int_a^b \left( \int_a^x f(t)\,dt \right) dx
$$

---

**Solución**

Definamos, como en el Ejercicio 2.24,

$$F_n(x) := \int_a^x f_n(t)\,dt, \qquad F(x):=\int_a^x f(t)\,dt, \qquad x\in[a,b].$$

Por hipótesis, $(f_n)_{n=1}^{\infty}$ es una sucesión de funciones continuas que converge uniformemente en $[a,b]$ a $f$. Por el **Ejercicio 2.24**, la sucesión $(F_n)_{n=1}^{\infty}$ converge uniformemente en $[a,b]$ a $F$.

Además, cada $F_n$ es continua en $[a,b]$ (por el segundo teorema fundamental del cálculo, siendo antiderivada de la función continua $f_n$), y en particular Riemann integrable; lo mismo ocurre con $F$ (antiderivada de $f$, la cual es continua por el **Teorema 2.7**).

Aplicando el **Teorema 2.8** a la sucesión $(F_n)_{n=1}^{\infty}$, que converge uniformemente en $[a,b]$ a $F$, con $F_n, F$ Riemann integrables, obtenemos

$$\lim_{n\to\infty} \int_a^b F_n(x)\,dx = \int_a^b F(x)\,dx.$$

Es decir,

$$\lim_{n\to\infty} \int_a^b \left( \int_a^x f_n(t)\,dt \right) dx = \int_a^b \left( \int_a^x f(t)\,dt \right) dx. \qquad \blacksquare$$

---

## 2.26 Ejercicio (NO VIENE).

Sea $(f_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ una sucesión de funciones continuas que converge uniformemente en $[a,b]$ a una función $f$.

Supón que $g : [a,b] \to \mathbb{R}$ es una función Riemann integrable en $[a,b]$. Prueba que

$$
\lim_{n \to \infty} \int_a^b f_n(t) g(t)\,dt = \int_a^b f(t) g(t)\,dt
$$

**Solución**

Como $(f_n)_{n=1}^{\infty}$ es una sucesión de funciones continuas que converge uniformemente en $[a,b]$, por el **Teorema 2.7** la función límite $f$ es continua en $[a,b]$.

**Paso 1: $g$ está acotada.**

Como $g$ es Riemann integrable en $[a,b]$, en particular $g$ es acotada. Sea $M>0$ tal que

$$|g(t)| \le M, \qquad \text{para todo } t\in[a,b].$$

**Paso 2: las funciones $f_n g$ y $f g$ son Riemann integrables.**

Como $f_n$ y $f$ son continuas en $[a,b]$, son Riemann integrables; y como el producto de dos funciones Riemann integrables en $[a,b]$ es Riemann integrable, se sigue que $f_n g$ y $f g$ son Riemann integrables en $[a,b]$ para todo $n\in\mathbb{N}$. Por lo tanto las integrales

$$\int_a^b f_n(t)g(t)\,dt \qquad \text{y} \qquad \int_a^b f(t)g(t)\,dt$$

están bien definidas.

**Paso 3: estimación de la diferencia de las integrales.**

Usando la desigualdad del triángulo para integrales,

$$
\left| \int_a^b f_n(t)g(t)\,dt - \int_a^b f(t)g(t)\,dt \right|
= \left| \int_a^b \big(f_n(t)-f(t)\big)g(t)\,dt \right|
\le \int_a^b |f_n(t)-f(t)|\,|g(t)|\,dt.
$$

Por el Paso 1, $|g(t)|\le M$ para todo $t\in[a,b]$, y por definición de la norma uniforme, $|f_n(t)-f(t)| \le \|f_n-f\|_{[a,b]}$ para todo $t \in [a,b]$. Por lo tanto

$$
\int_a^b |f_n(t)-f(t)|\,|g(t)|\,dt \le \int_a^b \|f_n-f\|_{[a,b]}\, M \,dt = M(b-a)\,\|f_n-f\|_{[a,b]}.
$$

Juntando ambas desigualdades,

$$
\left| \int_a^b f_n(t)g(t)\,dt - \int_a^b f(t)g(t)\,dt \right| \le M(b-a)\,\|f_n-f\|_{[a,b]}.
$$

**Paso 4: tomar el límite.**

Como $(f_n)_{n=1}^{\infty}$ converge uniformemente a $f$ en $[a,b]$, se tiene $\displaystyle\lim_{n\to\infty} \|f_n-f\|_{[a,b]} = 0$. Como $M(b-a)$ es una constante fija, del Paso 3 y del criterio del sándwich obtenemos

$$
\lim_{n\to\infty} \left| \int_a^b f_n(t)g(t)\,dt - \int_a^b f(t)g(t)\,dt \right| \le \lim_{n\to\infty} M(b-a)\,\|f_n-f\|_{[a,b]} = 0.
$$

Por lo tanto,

$$
\lim_{n \to \infty} \int_a^b f_n(t) g(t)\,dt = \int_a^b f(t) g(t)\,dt. \qquad \blacksquare
$$

---

## 2.27 Ejercicio

**Prueba que la serie $\sum_{n=1}^{\infty}x^n$ es uniformemente convergente en cualquier subintervalo cerrado contenido en $(-1,1)$.**

**Demostración.**

Sea $[a,b] \subseteq (-1,1)$ un subintervalo cerrado arbitrario. Así,

$$-1<a<b<1 \implies -1<a<1 \ \text{ y } \ -1<b<1 \implies |a|<1 \ \text{ y } \ |b|<1.$$

Consideremos la sucesión de funciones $(f_n:[a,b]\to\mathbb{R})_{n\in\mathbb{N}}$ dada por $f_n(x)=x^n$.

Definamos $r:=\max\{|a|,|b|\}$. Notemos que $0\le r<1$.

**Afirmación:** $\forall x\in[a,b],\ |x|\le r$.

*Razón:* Sea $x\in[a,b]$ arbitrario.

- Como $|a|\le r$ (por def. de máximo) $\implies -r\le a\le r$, en particular $-r\le a$.
- Como $|b|\le r$ (por def. de máximo) $\implies -r\le b\le r$, en particular $b\le r$.

Y como $a\le x\le b$, se sigue que

$$-r\le x\le r \implies |x|\le r. \qquad \blacksquare$$

Sea $n\in\mathbb{N}$ arbitrario y $x\in[a,b]$ arbitraria. Notemos que

$$|f_n(x)| = |x^n| = |x|^n.$$

Por la Afirmación sabemos que $|x|\le r$, por lo que

$$|x|^n \le r^n \implies |f_n(x)| \le r^n.$$

Como $n\in\mathbb{N}$ y $x\in[a,b]$ fueron arbitrarios,

$$\forall x\in[a,b] \ \text{y} \ \forall n\in\mathbb{N}, \quad |f_n(x)| \le M_n,$$

donde $M_n := r^n$.

Veamos que $\displaystyle\sum_{n=1}^{\infty} M_n$ converge:

$$\sum_{n=1}^{\infty} M_n = \sum_{n=1}^{\infty} r^n \ \text{(serie geométrica)} = \left(\frac{r}{1-r}\right) \in \mathbb{R}, \qquad \text{pues } 0\le r<1.$$

$$\therefore \ \sum_{n=1}^{\infty} M_n \ \text{converge.}$$

Por el **Criterio M de Weierstrass**, tenemos que $\displaystyle\sum_{n=1}^{\infty} f_n(x)$ converge uniformemente en $[a,b]$.

$$\therefore \ \sum_{n=1}^{\infty} x^n \ \text{converge uniformemente en } [a,b]. \qquad \blacksquare$$

---

## 2.28 Ejercicio (NO VIENE).

1. Sea $X$ un conjunto no vacío y considera dos sucesiones de funciones $(f_n : X \to \mathbb{R})_{n=1}^{\infty}$, $(g_n : X \to \mathbb{R})_{n=1}^{\infty}$ tal que $f_n \to f$ y $g_n \to g$ uniformemente en $X$.

   Si existe una $M > 0$ tal que $\sup_{x \in X}\{|g_n(x)|\} \le M$, para toda $n$ y la función $f$ es acotada, prueba que la sucesión producto $(f_n g_n : X \to \mathbb{R})_{n=1}^{\infty}$ converge uniformemente a $fg$ en $X$.

2. Da un ejemplo que muestra que el resultado del ejercicio anterior puede fallar si la hipótesis, $\sup_{x \in X}\{|g_n(x)|\} \le M$, para toda $n$ ó que la función $f$ sea acotada, se elimina.

---

**Solución**

### Primer inciso

Como $f$ es acotada, definamos

$$K := \sup_{x\in X} |f(x)| < \infty.$$

**Paso 1: $g$ es acotada.**

Como $g_n \to g$ uniformemente en $X$, tomando $\varepsilon = 1$ existe $N_0 \in \mathbb{N}$ tal que $\|g_{N_0} - g\|_X < 1$. Usando esto y la hipótesis $\sup_{x\in X}|g_{N_0}(x)| \le M$:

$$|g(x)| \le |g_{N_0}(x)| + |g_{N_0}(x) - g(x)| \le M + 1, \qquad \text{para todo } x\in X.$$

Definamos $M' := M+1$, cota para $g$.

**Paso 2: $f_n$ es acotada uniformemente para $n$ suficientemente grande.**

Como $f_n \to f$ uniformemente en $X$, tomando $\varepsilon = 1$ existe $N_1 \in \mathbb{N}$ tal que para todo $n \geq N_1$, $\|f_n - f\|_X < 1$. Por lo tanto, para todo $n \geq N_1$ y todo $x \in X$:

$$|f_n(x)| \le |f(x)| + |f_n(x)-f(x)| < K + 1.$$

Definamos $K' := K+1$, cota uniforme para $f_n$ cuando $n \geq N_1$.

**Paso 3: descomposición algebraica.**

Para $n \geq N_1$ y $x \in X$ arbitrarios, escribimos

$$f_n(x)g_n(x) - f(x)g(x) = f_n(x)\big(g_n(x)-g(x)\big) + g(x)\big(f_n(x)-f(x)\big).$$

Tomando valor absoluto y usando la desigualdad del triángulo:

$$
|f_n(x)g_n(x) - f(x)g(x)| \le |f_n(x)|\,|g_n(x)-g(x)| + |g(x)|\,|f_n(x)-f(x)|.
$$

Usando los Pasos 1 y 2 ($|f_n(x)| \le K'$, $|g(x)|\le M'$ para todo $x\in X$):

$$
|f_n(x)g_n(x)-f(x)g(x)| \le K'\,|g_n(x)-g(x)| + M'\,|f_n(x)-f(x)| \le K'\,\|g_n-g\|_X + M'\,\|f_n-f\|_X.
$$

**Paso 4: tomar supremo y límite.**

Como la cota del Paso 3 no depende de $x$, para todo $n\ge N_1$:

$$
\|f_ng_n - fg\|_X \le K'\,\|g_n-g\|_X + M'\,\|f_n-f\|_X.
$$

Como $(f_n)$ converge uniformemente a $f$ y $(g_n)$ converge uniformemente a $g$ en $X$, tenemos

$$\lim_{n\to\infty}\|f_n-f\|_X = 0 \qquad \text{y} \qquad \lim_{n\to\infty}\|g_n-g\|_X = 0.$$

Como $K'$ y $M'$ son constantes fijas, se sigue que

$$
\lim_{n\to\infty} \|f_ng_n-fg\|_X \le \lim_{n\to\infty}\Big(K'\,\|g_n-g\|_X + M'\,\|f_n-f\|_X\Big) = 0.
$$

Por lo tanto

$$
\lim_{n\to\infty} \|f_ng_n-fg\|_X = 0,
$$

es decir, $(f_ng_n)_{n=1}^{\infty}$ converge uniformemente a $fg$ en $X$. $\blacksquare$

---

### Segundo inciso

Mostramos que ambas hipótesis son necesarias con dos ejemplos, en ambos casos $X=\mathbb{R}$.

**(a) Falla si se elimina la hipótesis de que $f$ sea acotada.**

Sean

$$f_n(x) := x, \qquad f(x) := x, \qquad g_n(x) := \frac{1}{n}, \qquad g(x) := 0, \qquad x\in\mathbb{R}.$$

- $f_n = f$ para toda $n$, así que trivialmente $f_n \to f$ uniformemente en $\mathbb{R}$; sin embargo $f$ **no** es acotada.
- $g_n \to g$ uniformemente en $\mathbb{R}$, pues $\|g_n - g\|_{\mathbb{R}} = \dfrac{1}{n} \to 0$.
- Se cumple la hipótesis sobre $g_n$: $\sup_{x\in\mathbb{R}} |g_n(x)| = \dfrac{1}{n} \le 1 =: M$ para toda $n$.

El producto es $f_ng_n(x) = \dfrac{x}{n}$, y el candidato a límite es $fg(x) = x\cdot 0 = 0$. Sin embargo,

$$
\|f_ng_n - fg\|_{\mathbb{R}} = \sup_{x\in\mathbb{R}} \left|\frac{x}{n}\right| = \infty \quad \text{para toda } n,
$$

que **no** tiende a $0$. Por lo tanto $(f_ng_n)_{n=1}^{\infty}$ **no** converge uniformemente a $fg$ en $\mathbb{R}$, a pesar de que $f_n\to f$ y $g_n\to g$ uniformemente y $(g_n)$ está uniformemente acotada. Esto muestra que la acotación de $f$ es indispensable.

**(b) Falla si se elimina la hipótesis $\sup_{x\in X}|g_n(x)|\le M$ para toda $n$.**

Sean

$$f_n(x) := \frac{1}{n}, \qquad f(x) := 0, \qquad g_n(x) := x, \qquad g(x) := x, \qquad x\in\mathbb{R}.$$

- $f_n \to f=0$ uniformemente en $\mathbb{R}$, pues $\|f_n - f\|_{\mathbb{R}} = \dfrac{1}{n} \to 0$; además $f$ es acotada (por $0$).
- $g_n = g$ para toda $n$, así que trivialmente $g_n \to g$ uniformemente en $\mathbb{R}$; sin embargo **no** existe $M>0$ tal que $\sup_{x\in\mathbb{R}}|g_n(x)| \le M$ para toda $n$, pues $\sup_{x\in\mathbb{R}}|x| = \infty$.

El producto es $f_ng_n(x) = \dfrac{x}{n}$, y el candidato a límite es $fg(x) = 0\cdot x = 0$. Sin embargo,

$$
\|f_ng_n - fg\|_{\mathbb{R}} = \sup_{x\in\mathbb{R}} \left|\frac{x}{n}\right| = \infty \quad \text{para toda } n,
$$

que **no** tiende a $0$. Por lo tanto $(f_ng_n)_{n=1}^{\infty}$ **no** converge uniformemente a $fg$ en $\mathbb{R}$, a pesar de que $f_n\to f$ y $g_n\to g$ uniformemente y $f$ está acotada. Esto muestra que la acotación uniforme de $(g_n)$ es indispensable.

$$\blacksquare$$

---

## 2.29 Ejercicio

Sea $(f_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ una sucesión de funciones continuas que converge uniformemente a $f$ en $[a,b]$.

1. Prueba que existe una constante $M > 0$ tal que $|f_n(x)| \le M$ para todo $x \in [a,b]$ y para toda $n$.
2. Sea $(g_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ una sucesión de funciones continuas que converge uniformemente a $g$ en $[a,b]$. Prueba que la sucesión producto $(f_n g_n : [a,b] \to \mathbb{R})_{n=1}^{\infty}$ converge uniformemente a $fg$ en $[a,b]$.

---

**Solución**

### 1)

Como $f_n \xrightarrow{\text{unif}} f$ en $[a,b]$ y cada $f_n$ es continua, por el Teorema 2.7 la función $f$ es continua.

Como $f : [a,b] \to \mathbb{R}$ es continua, por Proposición de Cálculo sabemos que $f$ es acotada, es decir, existe $M_0 > 0$ tal que

$$
|f(x)| \leq M_0 \qquad \forall x \in [a,b].
$$

$$
\Rightarrow \sup_{x \in [a,b]} |f(x)| \leq M_0
$$

$$
\Rightarrow \|f\|_{[a,b]} \leq M_0.
$$

Como $f_n \xrightarrow{\text{unif}} f$ $\Rightarrow$ $\|f_n - f\|_{[a,b]} \longrightarrow 0$, entonces por definición de convergencia en $\mathbb{R}$, para $\varepsilon = 1$ existe $N \in \mathbb{N}$ tal que para todo $n \geq N$ tenemos que

$$
\|f_n - f\|_{[a,b]} < \varepsilon = 1.
$$

Notemos que $\forall n \geq N$ y $\forall x \in [a,b]$

$$
\begin{aligned}
|f_n(x)| &\leq \|f_n\|_{[a,b]} \\
&= \|f_n - f + f\|_{[a,b]} \\
&\leq \|f_n - f\|_{[a,b]} + \|f\|_{[a,b]} \\
&< 1 + M_0.
\end{aligned}
$$

Ahora, como las funciones $f_1, \dots, f_{N-1}$ son continuas en $[a,b]$, todas son acotadas, así $\forall i = 1, \dots, N-1$ existe $M_i > 0$ tal que $|f_i(x)| \leq M_i$ $\forall x \in [a,b]$.

Consideremos $M := \max\{M_1, \dots, M_{N-1}, 1+M_0\}$.

Entonces

$$
|f_n(x)| \leq M \qquad \forall x \in [a,b] \text{ y } \forall n \in \mathbb{N}. \qquad \blacksquare
$$

### 2)

Para ver que $(f_n g_n : [a,b] \to \mathbb{R})_{n \in \mathbb{N}}$ converge uniformemente en $[a,b]$ a $fg$ en $[a,b]$, para eso veamos que

$$
\|f_n g_n - fg\|_{[a,b]} \longrightarrow 0.
$$

Por el inciso anterior existe $M > 0$ tal que

$$
|f_n(x)| \leq M \qquad \forall x \in [a,b] \text{ y } \forall n \in \mathbb{N}.
$$

Por otra parte, como $g_n \xrightarrow{\text{unif}} g$ en $[a,b]$ y cada $g_n$ es continua, por Teorema 2.7 $g$ es continua en $[a,b]$, entonces $g$ es acotada, es decir, existe $K>0$ tal que $|g(x)| \leq K$ $\forall x \in [a,b]$.

Notemos que $\forall x \in [a,b]$ y $\forall n \in \mathbb{N}$

$$
\begin{aligned}
|f_n(x)g_n(x) - f(x)g(x)| &\leq |f_n(x)g_n(x) - f_n(x)g(x)| + |f_n(x)g(x) - f(x)g(x)| \\
&= |f_n(x)||g_n(x)-g(x)| + |g(x)||f_n(x)-f(x)| \\
&\leq M|g_n(x)-g(x)| + K|f_n(x)-f(x)| \\
&\leq M\|g_n-g\|_{[a,b]} + K\|f_n-f\|_{[a,b]}.
\end{aligned}
$$

$$
\Rightarrow \forall x \in [a,b] \text{ y } \forall n \in \mathbb{N}
$$

$$
|f_n(x)g_n(x) - f(x)g(x)| \leq M\|g_n-g\|_{[a,b]} + K\|f_n-f\|_{[a,b]}.
$$

$$
\Rightarrow \forall n \in \mathbb{N}, \quad \sup_{x \in [a,b]} |f_n(x)g_n(x)-f(x)g(x)| \leq M\|g_n-g\|_{[a,b]} + K\|f_n-f\|_{[a,b]}.
$$

$$
\Rightarrow \|f_n g_n - fg\|_{[a,b]} \leq M\|g_n-g\|_{[a,b]} + K\|f_n-f\|_{[a,b]} \qquad \forall n \in \mathbb{N}.
$$

Como $g_n \xrightarrow{\text{unif}} g$ y $f_n \xrightarrow{\text{unif}} f$ en $[a,b]$ sabemos que

$$
\|g_n-g\|_{[a,b]} \longrightarrow 0 \qquad \text{y} \qquad \|f_n-f\|_{[a,b]} \longrightarrow 0.
$$

$$
\Rightarrow M\|g_n-g\|_{[a,b]} \longrightarrow 0 \qquad \text{y} \qquad K\|f_n-f\|_{[a,b]} \longrightarrow 0.
$$

Entonces

$$
\|f_n g_n - fg\|_{[a,b]} \longrightarrow 0.
$$

$$
\therefore f_n g_n \xrightarrow{\text{unif}} fg \text{ en } [a,b]. \qquad \blacksquare
$$

### 3) 

¿Contradice esto el resultado del ejercicio anterior? ¿Por qué?

**Solución**

No, no hay ninguna contradicción.

En el ejercicio anterior (donde se ve que la convergencia uniforme del producto puede fallar) el punto clave es que el dominio de las funciones **no** es un intervalo cerrado y acotado $[a,b]$, sino un conjunto (típicamente $\mathbb{R}$ o un intervalo no acotado) donde las funciones $f_n$ y $g_n$, aunque converjan uniformemente, **no están uniformemente acotadas**: no existe una constante $M>0$ tal que $|f_n(x)| \leq M$ para toda $x$ y toda $n$.

Justamente esa es la hipótesis que se rompe: en la demostración del inciso 1) de este ejercicio, la acotación uniforme de $(f_n)_{n=1}^{\infty}$ se obtuvo usando **dos ingredientes esenciales**:

1. Cada $f_n$ es continua en $[a,b]$, y $[a,b]$ es **cerrado y acotado** (compacto), por lo que cada $f_n$ es acotada (proposición estándar de cálculo: toda función continua en un compacto es acotada).
2. Como sólo hay que controlar un número **finito** de funciones "excepcionales" ($f_1, \dots, f_{N-1}$) fuera de la cola donde $\|f_n - f\|_{[a,b]} < 1$, basta tomar el máximo de finitas cotas $M_1,\dots,M_{N-1}$ junto con $1+M_0$ para obtener una cota uniforme $M$ que sirve para **todas** las $n$.

Cuando el dominio no es compacto (por ejemplo $\mathbb{R}$), aunque cada función individual siga siendo continua y acotada, **no se puede garantizar que la familia completa $(f_n)_{n=1}^{\infty}$ esté acotada por una misma constante $M$**: es perfectamente posible que $\|f_n\|_{\text{dominio}} \to \infty$ mientras $f_n \to f$ uniformemente (por ejemplo, si $f$ misma no es acotada en un dominio no acotado). Sin esa cota uniforme $M$, el argumento del inciso 2) se rompe, pues la desigualdad

$$
|f_n(x)g_n(x) - f(x)g(x)| \leq M\|g_n-g\|_{\text{dominio}} + K\|f_n-f\|_{\text{dominio}}
$$

ya no es válida con una $M$ fija, y por lo tanto no se puede concluir que $\|f_ng_n - fg\|_{\text{dominio}} \to 0$.

**Conclusión.** El resultado de este ejercicio (que el producto de dos sucesiones uniformemente convergentes también converge uniformemente) es válido **específicamente** gracias a que el dominio es un intervalo cerrado y acotado $[a,b]$, lo cual garantiza la acotación uniforme de las $f_n$. El contraejemplo del ejercicio anterior no contradice esto, simplemente vive en un contexto (dominio no acotado) donde esa hipótesis de compacidad —y por lo tanto la acotación uniforme— ya no se cumple.

---

## 2.30 Ejercicio

Sean $(f_n : X \to \mathbb{R})_{n=1}^{\infty}$, $(g_n : X \to \mathbb{R})_{n=1}^{\infty}$, sucesiones de funciones continuas que converge uniformemente a $f$ y a $g$ en $X$, respectivamente.

Prueba que la sucesión $(\alpha f_n + \beta g_n)_{n=1}^{\infty}$ converge uniformemente a $\alpha f + \beta g$ en $X$.

---

**Solución**

Sean $\alpha, \beta \in \mathbb{R}$ escalares fijos (arbitrarios).

**Paso 1: descomposición algebraica.**

Para $n\in\mathbb{N}$ y $x\in X$ arbitrarios, escribimos

$$
\big(\alpha f_n(x) + \beta g_n(x)\big) - \big(\alpha f(x) + \beta g(x)\big) = \alpha\big(f_n(x)-f(x)\big) + \beta\big(g_n(x)-g(x)\big).
$$

Tomando valor absoluto y usando la desigualdad del triángulo:

$$
\big|(\alpha f_n(x)+\beta g_n(x)) - (\alpha f(x)+\beta g(x))\big| \le |\alpha|\,|f_n(x)-f(x)| + |\beta|\,|g_n(x)-g(x)|.
$$

**Paso 2: acotar con la norma uniforme.**

Como $|f_n(x)-f(x)| \le \|f_n-f\|_X$ y $|g_n(x)-g(x)| \le \|g_n-g\|_X$ para todo $x\in X$, se sigue que

$$
\big|(\alpha f_n(x)+\beta g_n(x)) - (\alpha f(x)+\beta g(x))\big| \le |\alpha|\,\|f_n-f\|_X + |\beta|\,\|g_n-g\|_X.
$$

**Paso 3: tomar supremo.**

Como la cota del lado derecho no depende de $x$, tomando supremo sobre $x\in X$ obtenemos, para todo $n\in\mathbb{N}$,

$$
\|(\alpha f_n+\beta g_n) - (\alpha f+\beta g)\|_X \le |\alpha|\,\|f_n-f\|_X + |\beta|\,\|g_n-g\|_X.
$$

**Paso 4: tomar límite.**

Como $(f_n)_{n=1}^{\infty}$ converge uniformemente a $f$ en $X$ y $(g_n)_{n=1}^{\infty}$ converge uniformemente a $g$ en $X$, tenemos

$$
\lim_{n\to\infty} \|f_n-f\|_X = 0 \qquad \text{y} \qquad \lim_{n\to\infty} \|g_n-g\|_X = 0.
$$

Como $|\alpha|$ y $|\beta|$ son constantes fijas, del Paso 3 y del criterio del sándwich se sigue que

$$
\lim_{n\to\infty} \|(\alpha f_n+\beta g_n) - (\alpha f+\beta g)\|_X \le \lim_{n\to\infty}\Big(|\alpha|\,\|f_n-f\|_X + |\beta|\,\|g_n-g\|_X\Big) = 0.
$$

Por lo tanto,

$$
\lim_{n\to\infty} \|(\alpha f_n+\beta g_n) - (\alpha f+\beta g)\|_X = 0,
$$

es decir, $(\alpha f_n + \beta g_n)_{n=1}^{\infty}$ converge uniformemente a $\alpha f + \beta g$ en $X$. $\blacksquare$

