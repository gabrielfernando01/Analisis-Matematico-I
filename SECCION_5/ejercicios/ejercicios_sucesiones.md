# Ejercicios Sucesiones

## 5.12 Ejercicio

Define la sucesión en $\mathbb{R}$ por $x_n = \sqrt{n+1} - \sqrt{n}$.

¿Las sucesiones $(x_n)_{n \in \mathbb{N}}$, $(\sqrt{n}\, x_n)_{n \in \mathbb{N}}$ son convergentes?

**Demostración**

Sea $n \in \mathbb{N}$. Racionalizando

$$
\begin{aligned}
x_n &= \left(\sqrt{n+1} - \sqrt{n}\right)\cdot\frac{\sqrt{n+1} + \sqrt{n}}{\sqrt{n+1} + \sqrt{n}} \\
&= \frac{(n+1) - n}{\sqrt{n+1} + \sqrt{n}} \\
&= \frac{1}{\sqrt{n+1} + \sqrt{n}}
\end{aligned}
$$

---

**1. La sucesión $(x_n)_{n \in \mathbb{N}}$**

**p.d.** $(x_n)_{n \in \mathbb{N}}$ converge (a $0$).

Como $\sqrt{n+1} > \sqrt{n}$, entonces $\sqrt{n+1} + \sqrt{n} \geq 2\sqrt{n}$

$$
\begin{aligned}
\implies \qquad 0 &< x_n = \frac{1}{\sqrt{n+1} + \sqrt{n}} \leq \frac{1}{2\sqrt{n}} \\
\implies \qquad 0 &\leq x_n \leq \frac{1}{2\sqrt{n}} \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

$$
\begin{aligned}
\frac{1}{2\sqrt{n}} &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} x_n = 0$$

$\therefore \; (x_n)_{n \in \mathbb{N}}$ es convergente.

---

**2. La sucesión $(\sqrt{n}\,x_n)_{n \in \mathbb{N}}$**

**p.d.** $(\sqrt{n}\,x_n)_{n \in \mathbb{N}}$ converge (a $\tfrac{1}{2}$).

Sea $n \in \mathbb{N}$. Dividiendo entre $\sqrt{n}$

$$
\begin{aligned}
\sqrt{n}\,x_n &= \frac{\sqrt{n}}{\sqrt{n+1} + \sqrt{n}} \\
&= \frac{\dfrac{\sqrt{n}}{\sqrt{n}}}{\dfrac{\sqrt{n+1}}{\sqrt{n}} + \dfrac{\sqrt{n}}{\sqrt{n}}} \\
&= \frac{1}{\sqrt{\dfrac{n+1}{n}} + 1} \\
&= \frac{1}{\sqrt{1 + \dfrac{1}{n}} + 1}
\end{aligned}
$$

Sea $y_n := \sqrt{1 + \frac{1}{n}}$, es decir, $y_n^2 = 1 + \frac{1}{n}$. Notemos que

$$
y_n^2 = 1 + \frac{1}{n} \leq 1 + \frac{1}{n} + \frac{1}{4n^2} = \left(1 + \frac{1}{2n}\right)^2
$$

$$
\implies \qquad 1 \leq y_n \leq 1 + \frac{1}{2n} \qquad \forall \; n \in \mathbb{N}
$$

$$
\begin{aligned}
1 + \frac{1}{2n} &\xrightarrow{\;n \to \infty\;} 1 \\[1em]
1 &\xrightarrow{\;n \to \infty\;} 1 
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} y_n = 1$$

Como $y_n + 1 \to 2 \neq 0$, por las propiedades algebraicas de los límites

$$
\begin{aligned}
\lim_{n \to \infty} \sqrt{n}\,x_n &= \lim_{n \to \infty} \frac{1}{y_n + 1} \\
&= \frac{1}{\lim_{n \to \infty} y_n + 1} \\
&= \frac{1}{2}
\end{aligned}
$$

$\therefore \; (\sqrt{n}\,x_n)_{n \in \mathbb{N}}$ es convergente.

---

Por lo tanto, ambas sucesiones son convergentes:

$$
\boxed{\lim_{n \to \infty} x_n = 0 \qquad \text{y} \qquad \lim_{n \to \infty} \sqrt{n}\,x_n = \frac{1}{2}} \;\blacksquare
$$

---

## 5.13 Ejercicio

Sea $c > 0$ un número real positivo, fijo. Examina la convergencia de las siguientes sucesiones $(x_n)_{n \in \mathbb{N}}$ de números reales.

1. $x_n = c^n$.  
2. $x_n = \sqrt[n]{c}$. 
3. $x_n = \dfrac{n}{c^n}$. 
4. $x_n = \dfrac{c^n}{n!}$.  

**1. $x_n = c^n$.**

**Demostración**

Dividimos en 3 casos: $c = 1$, $c > 1$ y $0 < c < 1$.

---

**Caso $c = 1$**

$$x_n = 1^n = 1 \qquad \forall \; n \in \mathbb{N}$$

$$\implies \lim_{n \to \infty} x_n = 1$$

$\therefore \; (x_n)_{n \in \mathbb{N}}$ converge.

---

**Caso $c > 1$**

Escribimos $c = 1 + k$, con $k > 0$.

Por el teorema del binomio de Newton

$$
\begin{aligned}
c^n &= (1+k)^n \\
&=\sum_{r=0}^{n}{\binom{n}{r}1^{n-r}k^r} \\
&= \sum_{r=0}^{n}\binom{n}{r}k^r \\
&= \binom{n}{0}k^0 + \binom{n}{1}k + \underbrace{\sum_{r=2}^{n}{\binom{n}{r}k^r}}_{\geq 0} \\
&\geq \binom{n}{0} + \binom{n}{r}k \\
&= 1 + nk \\
\implies \qquad c^n &\geq 1 + nk \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

**p.d.** $(c^n)_{n \in \mathbb{N}}$ no converge, es decir

$$
\forall \; L \in \mathbb{R} \;\; \exists \; \varepsilon > 0 \;\; \text{tal que} \;\; \forall \; N \in \mathbb{N} \;\; \exists \; n \geq N \;\; \text{con} \;\; |c^n - L| \geq \varepsilon
$$

---

Sea $L \in \mathbb{R}$ y sea $\varepsilon = 1$.

Por la propiedad arquimediana, existe $N_0 \in \mathbb{N}$ tal que $N_0 k > |L|$.

Sea $n \geq N_0$. Entonces
$$
\begin{array}{rc}
\implies & nk \geq N_0 k > |L| \\
\implies & c^n \geq 1 + nk > 1 + |L| \\
\implies & |c^n - L| \geq c^n - |L| > 1 = \varepsilon
\end{array}
$$

Como $L \in \mathbb{R}$ es arbitrario, ningún $L$ es límite de $(c^n)_{n \in \mathbb{N}}$.

$\therefore \; (x_n)_{n \in \mathbb{N}}$ no converge. De hecho

$$
\forall \; M \geq 0 \;\; \exists \; N_0 \in \mathbb{N} \;\; \text{tal que} \;\; \forall \; n \geq N_0 \implies c^n > M
$$

---

**Caso $0 < c < 1$**

Sea $d := \dfrac{1}{c}$. Entonces $d > 1$ y

$$c^n = \frac{1}{d^n} \qquad \forall \; n \in \mathbb{N}$$

**p.d.** $\lim_{n \to \infty} c^n = 0$, es decir,

$$
\forall \; \varepsilon > 0 \; \exists \; N' \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N' \\
\implies |c^n - 0| < \varepsilon
$$

Sea $\varepsilon > 0$.

Por la propiedad arquimediana, existe $N \in \mathbb{N}$ tal que

$$\frac{1}{N} < \varepsilon$$

Por el caso $c > 1$ aplicado a $d$, existe $N' \in \mathbb{N}$ tal que

$$d^n > N \qquad \forall \; n \geq N'$$

Sea $n \geq N'$

$$
\begin{array}{rc}
\implies & \; d^n > N > 0 \\
\implies & \; 0 < c^n = \frac{1}{d^n} < \frac{1}{N} < \varepsilon \\[0.2em]
\implies & \; |c^n - 0| < \varepsilon
\end{array}
$$

Como $\varepsilon > 0$ es arbitrario

$$\lim_{n \to \infty} c^n = 0$$

$\therefore \; (x_n)_{n \in \mathbb{N}}$ converge.

**Conclusión**

$$
\boxed{
(c^n)_{n \in \mathbb{N}} \;
\begin{cases}
\text{converge a } 0 & \text{si } 0 < c < 1 \\
\text{converge a } 1 & \text{si } c = 1 \\
\text{no converge} & \text{si } c > 1
\end{cases}
} \;\blacksquare
$$

---

**2. $x_n = \sqrt[n]{c}$**

**Demostración**

**Caso $c = 1$**

**p.d.** $(x_n)_{n \in \mathbb{N}}$ converge (a $1$).

$$x_n = \sqrt[n]{1} = 1 \qquad \forall \; n \in \mathbb{N}$$

$$\implies \lim_{n \to \infty} x_n = 1$$

---

**Caso $c > 1$**

$$
\begin{aligned}
\sqrt[n]{c} &> 1 \\
\implies \sqrt[n]{c} &= 1 + y_n, \quad y_n > 0
\end{aligned}
$$

**p.d.** $\lim_{n \to \infty} y_n = 0$

$$
\begin{aligned}
c = (1 + y_n)^n &= \sum_{k=0}^n \underbrace{\binom{n}{k} y_n^k}_{\geq 0} \\
&\geq \binom{n}{0} + \binom{n}{1} y_n \\
&= 1 + n\,y_n \\
\implies \qquad c - 1 &\geq n\,y_n \\
\implies \qquad 0 &< y_n \leq \frac{c-1}{n}
\end{aligned}
$$

$$
\begin{aligned}
\frac{c-1}{n} &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} y_n = 0$$

Por lo tanto

$$
\lim_{n \to \infty}\sqrt[n]{c} = \lim_{n \to \infty}(1 + y_n) = 1
$$

---

**Caso $0 < c < 1$**

Como $\dfrac{1}{c} > 1$, por el caso anterior

$$\lim_{n \to \infty} \sqrt[n]{\frac{1}{c}} = 1 \neq 0$$

Por las propiedades algebraicas de los límites

$$
\begin{aligned}
\lim_{n \to \infty}\sqrt[n]{c} &= \lim_{n \to \infty} \frac{1}{\sqrt[n]{1/c}} \\
&= \frac{1}{\lim_{n \to \infty}\sqrt[n]{1/c}} \\
&= 1
\end{aligned}
$$

$\therefore$ Para todo $c > 0$, $(x_n)_{n \in \mathbb{N}}$ es convergente y

$$
\boxed{\lim_{n \to \infty}\sqrt[n]{c} = 1} \;\blacksquare
$$

---

**3. $x_n = \dfrac{n}{c^n}$**

**Demostración**

Dividimos en 3 casos: $c = 1$, $0 < c < 1$ y $c > 1$.

---

**Caso $c = 1$**

$$x_n = \frac{n}{1^n} = n \qquad \forall \; n \in \mathbb{N}$$

**p.d.** $(n)_{n \in \mathbb{N}}$ no converge, es decir

$$
\forall \; L \in \mathbb{R} \;\; \exists \; \varepsilon > 0 \;\; \text{tal que} \;\; \forall \; N \in \mathbb{N} \;\; \exists \; n \geq N \;\; \text{con} \;\; |x_n - L| \geq \varepsilon
$$

Sea $L \in \mathbb{R}$ y sea $\varepsilon = 1$.

Por la propiedad arquimediana, existe $N_0 \in \mathbb{N}$ tal que

$$N_0 > |L| + 1$$

Sea $n \geq N_0$

$$
\begin{array}{rc}
\implies & x_n = n \geq N_0 > |L| + 1 \\
\implies & x_n - L \geq x_n - |L| > 1 \\
\implies & |x_n - L| > 1 = \varepsilon
\end{array}
$$

Como $L \in \mathbb{R}$ es arbitrario, ningún $L$ es límite de $(x_n)_{n \in \mathbb{N}}$.

$\therefore \; (x_n)_{n \in \mathbb{N}}$ no converge.

---

**Caso $0 < c < 1$**

$$
\begin{aligned}
0 < c^n < 1 \qquad &\forall \; n \in \mathbb{N} \\
\implies \qquad \qquad \frac{1}{c^n} &> 1 \\
\implies \qquad x_n = \frac{n}{c^n} &> n \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

Sea $L \in \mathbb{R}$ y sea $\varepsilon = 1$.

Por la propiedad arquimediana, existe $N_0 \in \mathbb{N}$ tal que

$$N_0 > |L| + 1$$

Sea $n \geq N_0$

$$
\begin{array}{rc}
\implies & x_n > n \geq N_0 > |L| + 1 \\
\implies & x_n - L \geq x_n - |L| > 1 \\
\implies & |x_n - L| > 1 = \varepsilon
\end{array}
$$

Como $L \in \mathbb{R}$ es arbitrario, ningún $L$ es límite de $(x_n)_{n \in \mathbb{N}}$.

$\therefore \; (x_n)_{n \in \mathbb{N}}$ no converge.

---

**Caso $c > 1$**

Escribimos $c = 1 + k$, con $k > 0$.

**p.d.** $\lim_{n \to \infty} x_n = \lim_{n \to \infty}\dfrac{n}{c^n}=0$

Por el teorema del binomio de Newton, para $n \geq 2$

$$
\begin{aligned}
c^n = (1+k)^n &= \sum_{r=0}^{n}{\binom{n}{r}1^{n-r}k^r} \\ 
&=\sum_{r=0}^{n}\binom{n}{r}k^r \\
&= \binom{n}{0} + \binom{n}{1}k + \binom{n}{2}k^2 + \underbrace{\sum_{r=3}^n\binom{n}{r}k^r}_{\geq 0} \\
&\geq \binom{n}{2}k^2 \\
&= \frac{n(n-1)}{2}k^2 \\
\implies \qquad \dfrac{1}{c^n} &\leq \frac{2}{n(n-1)k^2} \\
\implies \qquad \dfrac{n}{c^n} &\leq \frac{2}{(n-1)k^2} \qquad \text{(Multiplicando por 'n')} \\
\implies \; 0 < x_n &\leq \frac{2}{(n-1)k^2} \qquad (n \geq 2)
\end{aligned}
$$

$$
\begin{aligned}
\frac{2}{(n-1)k^2} &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} x_n = 0$$

$\therefore \; (x_n)_{n \in \mathbb{N}}$ converge.

**Conclusión**

$$
\boxed{
\begin{cases}
a_n \mathrel{\rlap{\kern.6em/}\longrightarrow} L \;\; \forall\, L \in \mathbb{R}, & 0 < c \leq 1 \\[2pt]
a_n \xrightarrow{\;n \to \infty\;} 0, & c > 1
\end{cases}
}\;\blacksquare
\qquad \text{con } a_n := \frac{n}{c^n}
$$

---

**4. $x_n = \dfrac{c^n}{n!}$.**

**Demostración**

**p.d.** $\lim_{n \to \infty} x_n = 0$

**Estrategia.** Escribimos

$$
x_n = \frac{c^n}{n!} = \frac{c}{1}\cdot\frac{c}{2}\cdots\frac{c}{n}.
$$

Cada factor $\frac{c}{k}$ decrece al aumentar $k$. Los primeros factores pueden ser grandes (por ejemplo $\frac{c}{1} = c > 1$), pero a partir de cierto $M$ todos son menores que $\frac{1}{2}$. Entonces $x_n$ queda acotado por una constante (el producto de los primeros $M$ factores) multiplicada por $\left(\frac{1}{2}\right)^{n}$, que ya sabemos que tiende a $0$ por el inciso 1. Concluimos con el teorema del sándwich.

---

Por la propiedad arquimediana, existe $M \in \mathbb{N}$ tal que

$$M \geq 2c \qquad \implies \qquad \frac{c}{M} \leq \frac{1}{2}$$

Sea $n > M$. Para cada $k$ con $M+1 \leq k \leq n$

$$
\begin{aligned}
k > M \qquad \implies \qquad \frac{c}{k} &< \frac{c}{M} \leq \frac{1}{2} \\
\implies \qquad 0 &< \frac{c}{k} < \frac{1}{2}
\end{aligned}
$$

Entonces

$$
\begin{aligned}
x_n = \frac{c^n}{n!} &= \frac{c^M}{M!}\cdot\prod_{k=M+1}^{n}\frac{c}{k} \\
&\leq \frac{c^M}{M!}\left(\frac{1}{2}\right)^{n-M} \\
&= \frac{(2c)^M}{M!}\left(\frac{1}{2}\right)^{n}
\end{aligned}
$$

Sea $K := \dfrac{(2c)^M}{M!}$, que es una constante (no depende de $n$)

$$
\implies \qquad 0 < x_n \leq K\left(\frac{1}{2}\right)^n \qquad \forall \; n > M
$$

Por el inciso 1 con $\;0 < \tfrac{1}{2} < 1$

$$\left(\frac{1}{2}\right)^n \xrightarrow{\;n \to \infty\;} 0 \qquad \implies \qquad K\left(\frac{1}{2}\right)^n \xrightarrow{\;n \to \infty\;} 0$$

Como la sucesión constante $0$ también converge a $0$, por la ley del sándwich

$$\lim_{n \to \infty} x_n = 0$$

$\therefore \; (x_n)_{n \in \mathbb{N}}$ converge para todo $c > 0$ y

$$
\boxed{\lim_{n \to \infty}\frac{c^n}{n!} = 0} \;\blacksquare
$$

---

## 5.14 Ejercicio

Sea $(X,d)$ un espacio métrico y $(x_n)_{n \in \mathbb{N}}$ una sucesión en $X$ con

$$x_n \xrightarrow{\;n \to \infty\;} x \qquad \text{y} \qquad x_n \xrightarrow{\;n \to \infty\;} y$$

$$\implies \; x=y$$

**Demostración**

Sea $\varepsilon > 0$.

Como $x_n \to x$, existe $N_1 \in \mathbb{N}$ tal que

$$d(x_n,x) < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_1$$

Como $x_n \to y$, existe $N_2 \in \mathbb{N}$ tal que

$$d(x_n,y) < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_2$$

Sea $N := \max\{N_1, N_2\}$ y sea $n \geq N$.

Por la desigualdad del triángulo

$$
\begin{aligned}
d(x,y) &\leq d(x,x_n) + d(x_n,y) \\
&= d(x_n,x) + d(x_n,y) \qquad \text{(simetría)} \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \\
&= \varepsilon
\end{aligned}
$$

$$\implies \qquad 0 \leq d(x,y) < \varepsilon \qquad \forall \; \varepsilon > 0$$

Supongamos que $x \neq y$. Entonces $d(x,y) > 0$, y tomando $\varepsilon := d(x,y)$

$$\implies \; d(x,y) < d(x,y) \; \mathbf{!}$$

$$
\begin{aligned}
\therefore \qquad d(x,y) &= 0 \\
\implies \qquad \qquad x &= y \;\blacksquare
\end{aligned}
$$

---

## 5.15 Ejercicio

Como en el caso real, toda sucesión convergente en un espacio métrico es acotada. Sin embargo, varios resultados que se valen en $\mathbb{R}$ ya no son válidos para cualquier espacio métrico.

1. Sea $(X,d)$ un espacio métrico y $(x_n)_{n\in\mathbb{N}}$ una sucesión en $X$. Prueba que si $(x_n)_{n\in\mathbb{N}}$ es convergente en $X$, entonces el conjunto $\{x_n\}_{n\in\mathbb{N}}$ está acotado.

2. Para $k \in \mathbb{N}$ denota por $e_k$ a la sucesión de reales tal que es cero en todos lados excepto en la entrada $k$, donde vale $1$. Nota que el conjunto $\{e_k\}_{k\in\mathbb{N}}$ es acotado en $(\ell_\infty, \|\cdot\|_\infty)$, pero prueba que la sucesión $(e_k)_{k\in\mathbb{N}}$ no converge en $(\ell_\infty, \|\cdot\|_\infty)$.

   **Sugerencia:** inicia probando que, para $x = (x(i))_{i\geq 1} \in \ell_\infty$, $|x(i)| \leq \|x - e^{(k)}\|_\infty$, para toda $i \neq k$.

3. Generaliza el inciso anterior probando que no existe subsucesión de $(e^{(k)})_{k\in\mathbb{N}}$ que sea convergente en $(\ell_\infty, \|\cdot\|_\infty)$. Esto muestra que un teorema tipo Bolzano-Weierstrass no es válido en el espacio $(\ell_\infty, \|\cdot\|_\infty)$.

**Nota:** recuerda que un subconjunto $A$ de un espacio métrico es acotado si existe $x_0$ en el espacio y $r > 0$ que satisface: $d(x_0, a) \leq r$, para toda $a \in A$.

**Demostración**

**p.d.** $\{x_n : n \in \mathbb{N}\}$ es acotado en $(X,d)$, es decir

$$\exists \; r > 0 \;\; \text{y} \;\; x \in X \;\; \text{tales que} \;\; d(x_n,x) \leq r \qquad \forall \; n \in \mathbb{N}$$

Por hipótesis, $(x_n)_{n \in \mathbb{N}}$ converge a algún $x \in X$.

Sea $\varepsilon = 1 > 0$. Como $x_n \to x$, por definición existe $N \in \mathbb{N}$ tal que

$$d(x_n,x) < \varepsilon = 1 \qquad \forall \; n \geq N \qquad (\star)$$

Definimos

$$M := \max\{d(x_1,x),\, d(x_2,x),\, \ldots,\, d(x_N,x)\} \geq 0$$

$$r := M + 1 > 0$$

Sea $n \in \mathbb{N}$ arbitrario.

**Caso 1:** $1 \leq n \leq N$

$$
\begin{aligned}
d(x_n,x) &\leq M \\
&< M + 1 = r \\
\implies \qquad d(x_n,x) &< r
\end{aligned}
$$

**Caso 2:** $n > N$

Como $n > N$, por $(\star)$

$$
\begin{aligned}
d(x_n,x) &< 1 \\
&\leq M + 1 = r \qquad \text{(pues } M \geq 0\text{)} \\
\implies \qquad d(x_n,x) &< r
\end{aligned}
$$

Por ambos casos

$$
\begin{aligned}
d(x_n,x) &< r \qquad \forall \; n \in \mathbb{N} \\[0.5em]
\implies \qquad d(x_n,x) &\leq r \qquad \forall \; n \in \mathbb{N} \\[0.5em]
\implies \{x_n : n \in \mathbb{N}\} &\subseteq B_{r}(x)
\end{aligned}
$$

$\therefore \; \{x_n : n \in \mathbb{N}\}$ es acotado en $(X,d)$ y, en consecuencia, $(x_n)_{n \in \mathbb{N}}$ es una sucesión acotada en $(X,d)$ $\;\blacksquare.$

---

2. Sea $(\ell_\infty, \|\cdot\|_\infty)$.

**Demostración**

Recordemos que

$$
\ell_\infty = \left\{x = (x(i))_{i \in \mathbb{N}} \subseteq \mathbb{R} \; : \; \sup_{i \in \mathbb{N}}\{|x(i)|\} < +\infty \right\}
$$

y que

$$\|x\|_\infty = \sup_{i \in \mathbb{N}}\{|x(i)|\}.$$

$\forall \; k \in \mathbb{N}$ definimos

$$e_k = (0,0,\ldots,0,\underbrace{1}_{\text{lugar } k},0,0,\ldots)$$

es decir,

$$
e_k(i) =
\begin{cases}
1 & \text{si } i = k \\
0 & \text{si } i \neq k
\end{cases}
$$

$$
\begin{aligned}
e_1 &= (1,0,0,0,\ldots) \\
e_2 &= (0,1,0,0,\ldots) \\
e_3 &= (0,0,1,0,\ldots) \\
&\vdots
\end{aligned}
$$

Notemos que

$$
\begin{aligned}
|e_k(i)| &\leq 1 \qquad \forall \; k \in \mathbb{N}, \;\forall \; i \in \mathbb{N} \\
\implies \sup_{i \in \mathbb{N}}\{|e_k(i)|\} &\leq 1 < +\infty \qquad \forall \; k \in \mathbb{N} \\
\implies \; \qquad \qquad e_k &\in \ell_\infty \qquad \forall \; k \in \mathbb{N}
\end{aligned}
$$

$$\therefore \; (e_k)_{k \in \mathbb{N}} \; \text{es una sucesión de elementos de } \ell_\infty.$$

---

**Acotamiento de $\{e_k : k \in \mathbb{N}\}$**

**p.d.** $\{e_k : k \in \mathbb{N}\}$ es acotado en $(\ell_\infty, \|\cdot\|_\infty)$, es decir

$$\exists \; x \in \ell_\infty \;\; \text{y} \;\; r > 0 \;\; \text{tales que} \;\; \|e_k - x\|_\infty \leq r \qquad \forall \; k \in \mathbb{N}$$

Sea $\bar{0} = (0,0,0,\ldots)$ el vector cero de $\ell_\infty$.

Notemos que $\forall \; k \in \mathbb{N}$

$$
\begin{aligned}
\|e_k - \bar{0}\|_\infty = \|e_k\|_\infty &= \sup_{i \in \mathbb{N}}\{|e_k(i)|\} \\
&= 1 \\
\implies \qquad \|e_k - \bar{0}\|_\infty &\leq 1 \qquad \forall \; k \in \mathbb{N}
\end{aligned}
$$

Tomando $x = \bar{0}$ y $r = 1$

$$\implies \qquad \{e_k : k \in \mathbb{N}\} \; \text{es acotado en } (\ell_\infty, \|\cdot\|_\infty)$$

$$\therefore \; (e_k)_{k \in \mathbb{N}} \; \text{es acotada en } (\ell_\infty, \|\cdot\|_\infty).$$

---

**Observación:** $\|e_n - e_m\|_\infty = 1 \qquad \text{si } n \neq m.$

**Razón:**

Sean $n, m \in \mathbb{N}$ con $n \neq m$. S.p.g. supongamos que $n < m$.

Así

$$
\begin{aligned}
e_n &= (0,0,\ldots,0,\underbrace{1}_{n\text{-ésimo}},0,0,\ldots) \\
e_m &= (0,\ldots,0,\underbrace{0}_{n\text{-ésimo}},0,\ldots,0,\underbrace{1}_{m\text{-ésimo}},0,\ldots)
\end{aligned}
$$

$$
\implies \qquad e_n - e_m = (0,\ldots,0,\underbrace{1}_{n\text{-ésimo}},0,\ldots,0,\underbrace{-1}_{m\text{-ésimo}},0,\ldots)
$$

es decir,

$$
(e_n - e_m)(i) =
\begin{cases}
1 & \text{si } i = n \\
-1 & \text{si } i = m \\
0 & \text{en otro caso}
\end{cases}
$$

Entonces

$$
\begin{aligned}
\|e_n - e_m\|_\infty &= \sup_{i \in \mathbb{N}}\{|e_n(i) - e_m(i)|\} \\
&= \sup\{0,\, 1\} \\
&= 1
\end{aligned}
$$

---

**$(e_k)_{k \in \mathbb{N}}$ no converge en $(\ell_\infty, \|\cdot\|_\infty)$**

**p.d.** $(e_k)_{k \in \mathbb{N}}$ no converge en $(\ell_\infty, \|\cdot\|_\infty)$.

Por contradicción, supongamos que $(e_k)_{k \in \mathbb{N}}$ converge a algún $x = (x(i))_{i \in \mathbb{N}} \in \ell_\infty$.

Sea $\varepsilon = \dfrac{1}{2}$. Por definición de convergencia, existe $N \in \mathbb{N}$ tal que

$$\|e_k - x\|_\infty < \varepsilon = \frac{1}{2} \qquad \forall \; k \geq N$$

En particular, como $N \geq N$ y $N+1 \geq N$

$$\|e_N - x\|_\infty < \frac{1}{2} \qquad \text{y} \qquad \|e_{N+1} - x\|_\infty < \frac{1}{2}$$

Como $N \neq N+1$, por la observación $\|e_N - e_{N+1}\|_\infty = 1$

$$
\begin{aligned}
1 = \|e_N - e_{N+1}\|_\infty &= \|(e_N - x) + (x - e_{N+1})\|_\infty \\
&\leq \|e_N - x\|_\infty + \|x - e_{N+1}\|_\infty \qquad \text{(desigualdad del triángulo)} \\
&= \|e_N - x\|_\infty + \|e_{N+1} - x\|_\infty \qquad \text{(simetría)} \\
&< \frac{1}{2} + \frac{1}{2} \\
&= 1
\end{aligned}
$$

$$\implies \qquad 1 < 1 \; \mathbf{!}$$

$\therefore \; (e_k)_{k \in \mathbb{N}}$ no converge en $(\ell_\infty, \|\cdot\|_\infty)$ $\;\blacksquare$

---

3. Sea $(\ell_\infty, \|\cdot\|_\infty)$.

**Demostración**

**p.d.** Ninguna subsucesión de $(e_k)_{k \in \mathbb{N}}$ converge en $(\ell_\infty, \|\cdot\|_\infty)$.

Por contradicción, supongamos que existe una subsucesión $(e_{k_j})_{j \in \mathbb{N}}$ de $(e_k)_{k \in \mathbb{N}}$ que converge a algún $x = (x(i))_{i \in \mathbb{N}} \in \ell_\infty$, donde

$$k_1 < k_2 < k_3 < \cdots$$

Sea $\varepsilon = \dfrac{1}{2} > 0$. Por definición de convergencia, existe $J \in \mathbb{N}$ tal que

$$\|e_{k_j} - x\|_\infty < \varepsilon = \frac{1}{2} \qquad \forall \; j \geq J$$

En particular, como $J \geq J$ y $J+1 \geq J$

$$\|e_{k_J} - x\|_\infty < \frac{1}{2} \qquad \text{y} \qquad \|e_{k_{J+1}} - x\|_\infty < \frac{1}{2}$$

Como $(k_j)_{j \in \mathbb{N}}$ es estrictamente creciente

$$k_J < k_{J+1} \qquad \implies \qquad k_J \neq k_{J+1}$$

Por la observación, $\|e_{k_J} - e_{k_{J+1}}\|_\infty = 1$

$$
\begin{aligned}
1 = \|e_{k_J} - e_{k_{J+1}}\|_\infty &= \|(e_{k_J} - x) + (x - e_{k_{J+1}})\|_\infty \\
&\leq \|e_{k_J} - x\|_\infty + \|x - e_{k_{J+1}}\|_\infty \qquad \text{(desigualdad del triángulo)} \\
&= \|e_{k_J} - x\|_\infty + \|e_{k_{J+1}} - x\|_\infty \qquad \text{(simetría)} \\
&< \frac{1}{2} + \frac{1}{2} \\
&= 1
\end{aligned}
$$

$$
\implies \qquad 1 < 1 \; \mathbf{!} 
$$

$\therefore \;$ Ninguna subsucesión de $(e_k)_{k \in \mathbb{N}}$ converge en $(\ell_\infty, \|\cdot\|_\infty)$ $\;\blacksquare$

---

**Moraleja**

En el inciso 1) probamos que

$$(x_n)_{n \in \mathbb{N}} \; \text{convergente en } (X,d) \qquad \implies \qquad (x_n)_{n \in \mathbb{N}} \; \text{acotada en } (X,d)$$

**Teorema de Bolzano-Weierstrass en $\mathbb{R}^d$**

$$
\begin{aligned}
(x_n)_{n \in \mathbb{N}} \subseteq \mathbb{R}^d \; \text{acotada} \qquad \implies \qquad &\exists \; (x_{n_k})_{k \in \mathbb{N}} \; \text{subsucesión de } (x_n)_{n \in \mathbb{N}} \\
&\text{y} \;\; x \in \mathbb{R}^d \;\; \text{tales que} \;\; x_{n_k} \xrightarrow{\;k \to \infty\;} x
\end{aligned}
$$

**En espacios métricos generales**

Que $(x_n)_{n \in \mathbb{N}}$ sea acotada en $(X,d)$ **no** implica que exista una subsucesión convergente en $(X,d)$.

**Contraejemplo:** en $(\ell_\infty, \|\cdot\|_\infty)$

$$
\begin{aligned}
(e_k)_{k \in \mathbb{N}} \; &\text{es acotada} \qquad &&\text{(inciso 2)} \\
(e_k)_{k \in \mathbb{N}} \; &\text{no tiene subsucesiones convergentes} \qquad &&\text{(inciso 3)}
\end{aligned}
$$

$\therefore$ El teorema de Bolzano-Weierstrass no se generaliza a espacios métricos arbitrarios.

---

## 5.16 Ejercicio

Recuerda que por $\mathbb{R}^{\mathbb{N}}$ denotamos al conjunto de sucesiones de números reales. Dado $x \in \mathbb{R}^{\mathbb{N}}$ denotamos sus entradas como

$$x = (x(1), x(2), \ldots, x(n), \ldots)$$

Dada una sucesión $x \in \mathbb{R}^{\mathbb{N}}$, denota por $x_k$ al truncamiento de $x$ a altura $k$, es decir, $x_k = (x(1), \ldots, x(k), 0, 0, \ldots)$.

1. Si $x \in \ell_2$, prueba que $(x_k)_{k\in\mathbb{N}}$ converge a $x$ en $\ell_2$.
2. Si $x \in \ell_1$, prueba que $(x_k)_{k\in\mathbb{N}}$ converge a $x$ en $\ell_1$.
3. Da un ejemplo que muestre que los incisos anteriores no se valen cuando $x \in \ell_\infty$.

**Demostración**

Sea $x \in \mathbb{R}^{\mathbb{N}}$ y $k \in \mathbb{N}$. Notemos que

$$
\begin{aligned}
x_k &= (x(1), \ldots, x(k), 0, 0, \ldots) \\
x &= (x(1), \ldots, x(k), x(k+1), x(k+2), \ldots) \\
\implies \qquad x - x_k &= (0, \ldots, 0, x(k+1), x(k+2), \ldots)
\end{aligned}
$$

es decir,

$$
(x - x_k)(i) =
\begin{cases}
0 & \text{si } i \leq k \\
x(i) & \text{si } i > k
\end{cases}
$$

---

**1. Si $x \in \ell_2$, entonces $x_k \to x$ en $(\ell_2, \|\cdot\|_2)$**

**p.d.** $\|x_k - x\|_2 \xrightarrow{\;k \to \infty\;} 0$.

Como $x \in \ell_2$, la serie $\displaystyle\sum_{i=1}^{\infty}|x(i)|^2$ converge. Sean

$$
S := \sum_{i=1}^{\infty}|x(i)|^2 = \|x\|_2^2 \qquad \text{y} \qquad S_k := \sum_{i=1}^{k}|x(i)|^2
$$

Por definición de serie convergente

$$S_k \xrightarrow{\;k \to \infty\;} S$$

Además $x_k \in \ell_2$ (tiene a lo más $k$ entradas distintas de cero), y

$$
\begin{aligned}
\|x_k - x\|_2^2 &= \sum_{i=1}^{\infty}|(x - x_k)(i)|^2 \\
&= \sum_{i=k+1}^{\infty}|x(i)|^2 \\
&= \sum_{i=1}^{\infty}|x(i)|^2 - \sum_{i=1}^{k}|x(i)|^2 \\
&= S - S_k
\end{aligned}
$$

Por las propiedades algebraicas de los límites

$$
\lim_{k \to \infty}\|x_k - x\|_2^2 = \lim_{k \to \infty}(S - S_k) = S - S = 0
$$

Como $\|x_k - x\|_2 = \sqrt{S - S_k}$ y $\sqrt{\cdot}$ es continua en $0$

$$
\lim_{k \to \infty}\|x_k - x\|_2 = \sqrt{0} = 0
$$

$\therefore \; (x_k)_{k \in \mathbb{N}}$ converge a $x$ en $(\ell_2, \|\cdot\|_2)$ $\;\blacksquare$

---

**2. Si $x \in \ell_1$, entonces $x_k \to x$ en $(\ell_1, \|\cdot\|_1)$**

**p.d.** $\|x_k - x\|_1 \xrightarrow{\;k \to \infty\;} 0$.

Como $x \in \ell_1$, la serie $\displaystyle\sum_{i=1}^{\infty}|x(i)|$ converge. Sean

$$
S := \sum_{i=1}^{\infty}|x(i)| = \|x\|_1 \qquad \text{y} \qquad S_k := \sum_{i=1}^{k}|x(i)|
$$

Por definición de serie convergente

$$S_k \xrightarrow{\;k \to \infty\;} S$$

Además $x_k \in \ell_1$ (tiene a lo más $k$ entradas distintas de cero), y

$$
\begin{aligned}
\|x_k - x\|_1 &= \sum_{i=1}^{\infty}|(x - x_k)(i)| \\
&= \sum_{i=k+1}^{\infty}|x(i)| \\
&= \sum_{i=1}^{\infty}|x(i)| - \sum_{i=1}^{k}|x(i)| \\
&= S - S_k
\end{aligned}
$$

Por las propiedades algebraicas de los límites

$$
\lim_{k \to \infty}\|x_k - x\|_1 = \lim_{k \to \infty}(S - S_k) = S - S = 0
$$

$\therefore \; (x_k)_{k \in \mathbb{N}}$ converge a $x$ en $(\ell_1, \|\cdot\|_1)$ $\;\blacksquare$

---

**3. Contraejemplo en $(\ell_\infty, \|\cdot\|_\infty)$**

**p.d.** Existe $x \in \ell_\infty$ tal que $(x_k)_{k \in \mathbb{N}}$ no converge a $x$ en $(\ell_\infty, \|\cdot\|_\infty)$.

Sea $x = (1, 1, 1, \ldots)$, es decir

$$x(i) = 1 \qquad \forall \; i \in \mathbb{N}$$

Entonces

$$
\begin{aligned}
|x(i)| &= 1 \qquad \forall \; i \in \mathbb{N} \\
\implies \qquad \sup_{i \in \mathbb{N}}\{|x(i)|\} &= 1 < +\infty \\
\implies \qquad x &\in \ell_\infty
\end{aligned}
$$

Sea $k \in \mathbb{N}$. Por lo anterior

$$
(x - x_k)(i) =
\begin{cases}
0 & \text{si } i \leq k \\
1 & \text{si } i > k
\end{cases}
$$

Así

$$
\begin{aligned}
\|x_k - x\|_\infty &= \sup_{i \in \mathbb{N}}\{|(x - x_k)(i)|\} \\
&= \sup\{0, 1\} \\
&= 1 \qquad \forall \; k \in \mathbb{N}
\end{aligned}
$$

Por lo tanto

$$
\lim_{k \to \infty}\|x_k - x\|_\infty = 1 \neq 0
$$

$\therefore \; (x_k)_{k \in \mathbb{N}}$ **no** converge a $x$ en $(\ell_\infty, \|\cdot\|_\infty)$.

---

**Observación:** $x = (1,1,1,\ldots) \notin \ell_1$ y $x \notin \ell_2$, pues

$$
\sum_{i=1}^{\infty}|x(i)| = \sum_{i=1}^{\infty}|x(i)|^2 = \sum_{i=1}^{\infty}1 = +\infty
$$

Esto es consistente con que las pruebas de los incisos 1 y 2 usan de manera esencial que la cola de la serie $\displaystyle\sum_{i=k+1}^{\infty}$ tiende a $0$, lo cual en $\ell_\infty$ no ocurre: el supremo de la cola $\displaystyle\sup_{i > k}|x(i)|$ no tiene por qué tender a $0$.

$$
\boxed{x = (1,1,1,\ldots) \in \ell_\infty \quad \text{y} \quad \|x_k - x\|_\infty = 1 \;\; \forall \; k \in \mathbb{N}} \;\blacksquare
$$

---

## 5.17 Ejercicio

Sea $(X,d)$ un espacio métrico y $(x_n)_{n\in\mathbb{N}}$ una sucesión en $X$ tal que $\lim_{n\to\infty} x_n$ existe y es igual a $x$.

1. Sea $y \in X$. Prueba que $\lim_{n\to\infty} d(x_n,y) = d(x,y)$.
2. Supongamos que $(y_n)_{n\in\mathbb{N}}$ es una sucesión en $X$ con $\lim_{n\to\infty} y_n = y$. Prueba que $\lim_{n\to\infty} d(x_n,y_n) = d(x,y)$.

   **Sugerencia:** usa el inciso anterior y la desigualdad del triángulo.

### Version Jeanette

**1. $\displaystyle\lim_{n\to\infty} d(x_n,y) = d(x,y)$**

**Demostración**

Recordemos que $d(a,b) \in \mathbb{R} \;\; \forall \; a,b \in X$, entonces $d(x_n,y) \in \mathbb{R} \;\; \forall \; n \in \mathbb{N}$.

**p.d.** la sucesión de números reales $(d(x_n,y))_{n \in \mathbb{N}}$ converge al número real $d(x,y)$, es decir

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N \\
\implies |d(x_n,y) - d(x,y)| < \varepsilon
$$

Por el ejercicio 4.18 sabemos que

$$|d(x_n,y) - d(x,y)| \leq d(x_n,x) \qquad \forall \; n \in \mathbb{N} \qquad (\star)$$

Sea $\varepsilon > 0$ arbitrario. Como $(x_n)_{n \in \mathbb{N}}$ converge a $x \in X$ en $(X,d)$, por definición de convergencia en espacios métricos existe $N \in \mathbb{N}$ tal que

$$d(x_n,x) < \varepsilon \qquad \forall \; n \geq N \qquad (\star\star)$$

Sea $n \in \mathbb{N}$ con $n \geq N$.

$$
\begin{aligned}
0 \leq |d(x_n,y) - d(x,y)| &\leq d(x_n,x) \qquad \text{por } (\star) \\
&< \varepsilon \qquad \qquad \;\; \text{por } (\star\star) 
\end{aligned}
$$

$$\implies \qquad |d(x_n,y) - d(x,y)| < \varepsilon \qquad \forall \; n \geq N$$

Por definición de convergencia en $\mathbb{R}$ tenemos que

$$\lim_{n \to \infty} d(x_n,y) = d(x,y) \;\blacksquare$$

---

**2. $\displaystyle\lim_{n\to\infty} d(x_n,y_n) = d(x,y)$**

**Demostración**

**p.d.** la sucesión de números reales $(d(x_n,y_n))_{n \in \mathbb{N}}$ converge al número real $d(x,y)$, es decir

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N \\
\implies |d(x_n,y_n) - d(x,y)| < \varepsilon
$$

Primero notemos que $\forall \; n \in \mathbb{N}$

$$
\begin{aligned}
|d(x_n,y_n) - d(x,y)| &= |d(x_n,y_n) - d(x_n,y) + d(x_n,y) - d(x,y)| \\
&\leq |d(x_n,y_n) - d(x_n,y)| + |d(x_n,y) - d(x,y)| \qquad \text{(desigualdad del triángulo en } \mathbb{R}\text{)} \\
&= |d(y_n,x_n) - d(y,x_n)| + |d(x_n,y) - d(x,y)| \qquad \text{(simetría)} \\
&\leq d(y_n,y) + |d(x_n,y) - d(x,y)| \qquad \text{(ejercicio 4.18)}
\end{aligned}
$$

$$
\implies \qquad |d(x_n,y_n) - d(x,y)| \leq d(y_n,y) + |d(x_n,y) - d(x,y)| \qquad \forall \; n \in \mathbb{N} \qquad (\star)
$$

Sea $\varepsilon > 0$ arbitrario.

Como $\displaystyle\lim_{n \to \infty} y_n = y$ en $(X,d)$, por definición de convergencia en espacios métricos existe $N_1 \in \mathbb{N}$ tal que

$$d(y_n,y) < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_1 \qquad (\star\star)$$

También, como $y \in X$ y $\displaystyle\lim_{n \to \infty} x_n = x$ en $(X,d)$, por el inciso 1)

$$\lim_{n \to \infty} d(x_n,y) = d(x,y)$$

entonces para nuestra $\varepsilon > 0$ existe $N_2 \in \mathbb{N}$ tal que

$$|d(x_n,y) - d(x,y)| < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_2 \qquad (\star\star\star)$$

Sea $N := \max\{N_1, N_2\} \in \mathbb{N}$.

Sea $n \geq N$. Como $n \geq N_1$ y $n \geq N_2$, se cumplen $(\star\star)$ y $(\star\star\star)$. Entonces

$$
\begin{aligned}
|d(x_n,y_n) - d(x,y)| &\leq d(y_n,y) + |d(x_n,y) - d(x,y)| \qquad \text{por } (\star) \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \qquad \text{por } (\star\star) \text{ y } (\star\star\star) \\
&= \varepsilon \\
\implies \qquad |d(x_n,y_n) - d(x,y)| &< \varepsilon
\end{aligned}
$$

$$\implies \qquad |d(x_n,y_n) - d(x,y)| < \varepsilon \qquad \forall \; n \geq N$$

Por definición de convergencia en $\mathbb{R}$

$$\therefore \; \lim_{n \to \infty} d(x_n,y_n) = d(x,y) \;\blacksquare.$$

### Version Fco. Javier Torres

**1. $\displaystyle\lim_{n\to\infty} d(x_n,y) = d(x,y)$**

**Demostración**

Sea $y \in X$. Notemos que

$$
\begin{aligned}
d \; &\text{es métrica en } X \\
\implies \qquad d(a,b) &\in \mathbb{R} \qquad \forall \; a,b \in X \\
\implies \qquad d(x_n,y) &\in \mathbb{R} \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

$$\therefore \; (d(x_n,y))_{n \in \mathbb{N}} \; \text{es una sucesión de números reales.}$$

Recordemos que la métrica en $\mathbb{R}$ es la inducida por el valor absoluto, es decir, $d_{\mathbb{R}}(a,b) = |a-b|$.

**p.d.** $\displaystyle\lim_{n \to \infty} d(x_n,y) = d(x,y)$ en $\mathbb{R}$, es decir

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N \\
\implies |d(x_n,y) - d(x,y)| < \varepsilon
$$

---

**Cota con la desigualdad del triángulo**

Como $d$ es métrica, por el ejercicio 4.18

$$|d(x_n,y) - d(x,y)| \leq d(x_n,x) \qquad \forall \; n \in \mathbb{N} \qquad (\star)$$

---

**Convergencia**

Sea $\varepsilon > 0$ arbitrario.

Por hipótesis $\displaystyle\lim_{n \to \infty} x_n = x$ en $(X,d)$, así que por definición de convergencia en espacios métricos existe $N \in \mathbb{N}$ tal que

$$d(x_n,x) < \varepsilon \qquad \forall \; n \geq N \qquad (\star\star)$$

Sea $n \in \mathbb{N}$ con $n \geq N$. Entonces

$$
\begin{aligned}
0 \leq |d(x_n,y) - d(x,y)| &\leq d(x_n,x) \qquad \text{por } (\star) \\
&< \varepsilon \qquad \text{por } (\star\star) \\
\implies \qquad |d(x_n,y) - d(x,y)| &< \varepsilon
\end{aligned}
$$

$$\implies \qquad |d(x_n,y) - d(x,y)| < \varepsilon \qquad \forall \; n \geq N$$

Como $\varepsilon > 0$ es arbitrario, por definición de convergencia en $\mathbb{R}$

$$\therefore \; \lim_{n \to \infty} d(x_n,y) = d(x,y) \;\blacksquare$$

---

**2. $\displaystyle\lim_{n\to\infty} d(x_n,y_n) = d(x,y)$**

**Demostración**

**p.d.** $\displaystyle\lim_{n \to \infty} d(x_n,y_n) = d(x,y)$ en $\mathbb{R}$, es decir

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N \\
\implies |d(x_n,y_n) - d(x,y)| < \varepsilon
$$

---

**Cota con la desigualdad del triángulo**

Sea $n \in \mathbb{N}$. Sumando y restando $d(x_n,y)$

$$
\begin{aligned}
|d(x_n,y_n) - d(x,y)| &= |d(x_n,y_n) - d(x_n,y) + d(x_n,y) - d(x,y)| \\
&\leq |d(x_n,y_n) - d(x_n,y)| + |d(x_n,y) - d(x,y)| \qquad \text{(desigualdad del triángulo en } \mathbb{R}\text{)}
\end{aligned}
$$

Por la desigualdad del triángulo inversa (ejercicio 4.18), tomando $x_n$ como punto fijo

$$|d(x_n,y_n) - d(x_n,y)| \leq d(y_n,y)$$

Por lo tanto

$$
|d(x_n,y_n) - d(x,y)| \leq d(y_n,y) + |d(x_n,y) - d(x,y)| \qquad \forall \; n \in \mathbb{N} \qquad (\star)
$$

---

**Convergencia**

Sea $\varepsilon > 0$ arbitrario.

Como $\displaystyle\lim_{n \to \infty} y_n = y$ en $(X,d)$, por definición de convergencia en espacios métricos existe $N_1 \in \mathbb{N}$ tal que

$$d(y_n,y) < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_1 \qquad (\star\star)$$

Como $y \in X$ y $\displaystyle\lim_{n \to \infty} x_n = x$ en $(X,d)$, por el inciso 1)

$$\lim_{n \to \infty} d(x_n,y) = d(x,y)$$

entonces para nuestra $\varepsilon > 0$ existe $N_2 \in \mathbb{N}$ tal que

$$|d(x_n,y) - d(x,y)| < \frac{\varepsilon}{2} \qquad \forall \; n \geq N_2 \qquad (\star\star\star)$$

Sea $N := \max\{N_1, N_2\} \in \mathbb{N}$.

Sea $n \in \mathbb{N}$ con $n \geq N$. Como $n \geq N_1$ y $n \geq N_2$, se cumplen $(\star\star)$ y $(\star\star\star)$. Entonces

$$
\begin{aligned}
|d(x_n,y_n) - d(x,y)| &\leq d(y_n,y) + |d(x_n,y) - d(x,y)| \qquad \text{por } (\star) \\
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} \qquad \text{por } (\star\star) \text{ y } (\star\star\star) \\
&= \varepsilon \\
\implies \qquad |d(x_n,y_n) - d(x,y)| &< \varepsilon
\end{aligned}
$$

$$\implies \qquad |d(x_n,y_n) - d(x,y)| < \varepsilon \qquad \forall \; n \geq N$$

Como $\varepsilon > 0$ es arbitrario, por definición de convergencia en $\mathbb{R}$

$$\therefore \; \lim_{n \to \infty} d(x_n,y_n) = d(x,y) \;\blacksquare$$

---

## 5.18 Ejercicio

Sea $(X,d)$ un espacio métrico y sea $(x_n)_{n \in \mathbb{N}}$ una sucesión en $X$. Supongamos que existe $y \in X\;$ y $\; r>0$ que satisface $d(x_n, y)<r,\;$ para todo $n \in \mathbb{N}$

¿Si $x=\lim_{n \to \infty}x_n\;$ se sigue que $d(x,y)<r$? Demuestra o da un contraejemplo.

**Respuesta:** No. Lo que sí se cumple es $d(x,y) \leq r$.

---

**Contraejemplo**

**p.d.** Existen $(X,d)$, $(x_n)_{n \in \mathbb{N}}$, $y \in X$ y $r > 0$ tales que $d(x_n,y) < r \;\; \forall \; n \in \mathbb{N}$, $\;x = \displaystyle\lim_{n \to \infty}x_n\;$ y $\;d(x,y) \not< r$.

Sean $X = \mathbb{R}$ con $d(a,b) = |a-b|$, $y = 0$, $r = 1$ y

$$x_n = 1 - \frac{1}{n} \qquad \forall \; n \in \mathbb{N}$$

---

**Se cumple $d(x_n,y) < r$**

Sea $n \in \mathbb{N}$.

$$
\begin{aligned}
n \geq 1 \implies 0 \leq 1 - \frac{1}{n} &< 1 \\
\implies \qquad d(x_n,y) = |x_n - 0| &= 1 - \frac{1}{n} \\
&< 1 = r \\
\implies \qquad d(x_n,y) &< r \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

---

**Límite de la sucesión**

Por las propiedades algebraicas de los límites

$$
\begin{aligned}
\lim_{n \to \infty} x_n &= \lim_{n \to \infty}\left(1 - \frac{1}{n}\right) \\
&= 1 - \lim_{n \to \infty}\frac{1}{n} \\
&= 1 - 0 \\
&= 1
\end{aligned}
$$

Así $x = 1$, y

$$
\begin{aligned}
d(x,y) &= |1 - 0| \\
&= 1 \\
&= r \\
\implies \qquad d(x,y) &\not< r
\end{aligned}
$$

$\therefore \;$ No se sigue que $d(x,y) < r$ $\;\blacksquare$

---

**Observación:** Sí se cumple $d(x,y) \leq r$.

**Razón:**

Por el ejercicio 5.17 (inciso 1), como $x_n \to x$ y $y \in X$

$$\lim_{n \to \infty} d(x_n,y) = d(x,y)$$

Como $d(x_n,y) < r \; \forall \; n \in \mathbb{N}$, en particular $d(x_n,y) \leq r \;\; \forall \; n \in \mathbb{N}$. Por la propiedad de que los límites preservan cotas (propiedad 4 de las propiedades algebraicas de los límites en $\mathbb{R}$)

$$
\begin{aligned}
\implies \qquad d(x,y) &= \lim_{n \to \infty} d(x_n,y) \leq r \\
\implies \qquad d(x,y) &\leq r
\end{aligned}
$$

Esto significa que la desigualdad estricta **no** se conserva al pasar al límite, solo la desigualdad no estricta.

$$
\boxed{d(x_n,y) < r \;\; \forall \; n \in \mathbb{N} \;\; \mathrel{\rlap{\kern1.1em/}\implies} \;\; d(x,y) < r, \qquad \text{pero sí} \;\; d(x,y) \leq r} \;\blacksquare
$$

---

## 5.19 Ejercicio

Este ejercicio muestra que, para los espacios $\mathbb{R}^d$ con las normas-$p$, la convergencia de sucesiones se reduce a convergencia de sucesiones de números reales.

Fija $p \in [1,\infty)$ y considera el espacio vectorial normado $(\mathbb{R}^d, \|\cdot\|_p)$.

Ya que en este ejercicio se manejan sucesiones de vectores, introducimos la siguiente notación: dado $x \in \mathbb{R}^d$, denotamos por $x(1), x(2), \ldots, x(d)$ a sus coordenadas, es decir

$$x = (x(1), x(2), \ldots, x(d)).$$

Con esta notación, dada una sucesión de vectores $(x_k)_{k\in\mathbb{N}}$, sus coordenadas están denotadas por

$$x_k = (x_k(1), x_k(2), \ldots, x_k(d)).$$

Sean $x, y \in \mathbb{R}^d$.

1. Prueba que, para todo $i = 1, \ldots, d$:

   $$|x(i) - y(i)| \leq \|x - y\|_p.$$

2. Además, prueba que

   $$\|x - y\|_p \leq d^{1/p} \max_{i=1,\ldots,d}\{|x(i) - y(i)|\}.$$

3. Sea $(x_n)_{n\in\mathbb{N}}$ una sucesión en $\mathbb{R}^d$ y $x \in \mathbb{R}^d$. Prueba que $\lim_{n\to\infty} x_n = x$ si y solo si, para todo $i = 1, \ldots, d$, se cumple $\lim_{n\to\infty} x_n(i) = x(i)$.

   Es decir, una sucesión de vectores converge en $\mathbb{R}^d$, con respecto a la norma-$p$, si y solo si todas sus coordenadas convergen, vistas como sucesiones en $\mathbb{R}$.

**1. $|x(i) - y(i)| \leq \|x - y\|_p \qquad \forall \; i = 1, \ldots, d$**

**Demostración**

Sea $z \in \mathbb{R}^d$ y sea $i \in \{1, \ldots, d\}$.

**p.d.** $|z(i)| \leq \|z\|_p$.

Como $|z(j)|^p \geq 0$ para todo $j \in \{1, \ldots, d\}$, al quitar los demás sumandos

$$
\begin{aligned}
|z(i)|^p &\leq |z(1)|^p + \cdots + |z(i)|^p + \cdots + |z(d)|^p \\
&= \sum_{j=1}^{d}|z(j)|^p
\end{aligned}
$$

Como $t \longmapsto \sqrt[p]{t}$ es creciente en $[0,\infty)$

$$
\begin{aligned}
\implies \qquad |z(i)| = \sqrt[p]{|z(i)|^p} &\leq \sqrt[p]{\sum_{j=1}^{d}|z(j)|^p} \\
&= \|z\|_p \\
\implies \qquad |z(i)| &\leq \|z\|_p \qquad \forall \; i = 1, \ldots, d \qquad (\star)
\end{aligned}
$$

Tomando $z = x - y$, cuyas coordenadas son $z(i) = x(i) - y(i)$

$$
|x(i) - y(i)| \leq \|x - y\|_p \qquad \forall \; i = 1, \ldots, d \;\blacksquare
$$

---

**2. $\|x - y\|_p \leq d^{1/p}\displaystyle\max_{i=1,\ldots,d}\{|x(i) - y(i)|\}$**

**Demostración**

Sea $z \in \mathbb{R}^d$.

**p.d.** $\|z\|_p \leq d^{1/p}\displaystyle\max_{1 \leq i \leq d}\{|z(i)|\}$.

Como el conjunto $\{|z(1)|, \ldots, |z(d)|\}$ es finito, existe $i_0 \in \{1, \ldots, d\}$ tal que

$$\max_{1 \leq i \leq d}\{|z(i)|\} = |z(i_0)|$$

Entonces

$$|z(i)| \leq |z(i_0)| \qquad \forall \; i = 1, \ldots, d$$

$$
\begin{aligned}
\implies \qquad |z(i)|^p &\leq |z(i_0)|^p \qquad \forall \; i = 1, \ldots, d \qquad (t \longmapsto t^p \text{ es creciente en } [0,\infty)) \\[0.5em]
\implies \qquad \|z\|_p^p = \sum_{i=1}^{d}|z(i)|^p &\leq \sum_{i=1}^{d}|z(i_0)|^p \\
&= d\,|z(i_0)|^p
\end{aligned}
$$

Sacando raíz $p$-ésima en ambos lados ($t \longmapsto \sqrt[p]{t}$ es creciente en $[0,\infty)$)

$$
\begin{aligned}
\implies \qquad \|z\|_p &\leq d^{1/p}\,|z(i_0)| \\
&= d^{1/p}\max_{1 \leq i \leq d}\{|z(i)|\} \qquad (\star\star)
\end{aligned}
$$

Tomando $z = x - y$

$$
\|x - y\|_p \leq d^{1/p}\max_{1 \leq i \leq d}\{|x(i) - y(i)|\} \;\blacksquare
$$

---

**3. $\displaystyle\lim_{n\to\infty} x_n = x \iff \lim_{n\to\infty} x_n(i) = x(i) \;\; \forall \; i = 1, \ldots, d$**

**Demostración**

Recordemos que $\displaystyle\lim_{n\to\infty} x_n = x$ en $(\mathbb{R}^d, \|\cdot\|_p)$ si y solo si

$$\lim_{n \to \infty}\|x_n - x\|_p = 0$$

---

**$(\Longrightarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} x_n = x$, es decir

$$\lim_{n \to \infty}\|x_n - x\|_p = 0$$

Fijemos $i \in \{1, \ldots, d\}$.

**p.d.** $\displaystyle\lim_{n \to \infty} x_n(i) = x(i)$, lo cual es equivalente a probar

$$\lim_{n \to \infty}|x_n(i) - x(i)| = 0$$

Por el inciso 1, tomando $x_n$ y $x$ en lugar de $x$ y $y$

$$
\begin{aligned}
|x_n(i) - x(i)| &\leq \|x_n - x\|_p \qquad \forall \; n \in \mathbb{N} \\
\implies \qquad 0 \leq |x_n(i) - x(i)| &\leq \|x_n - x\|_p \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

$$
\begin{aligned}
\|x_n - x\|_p &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty}|x_n(i) - x(i)| = 0$$

$$\implies \qquad \lim_{n \to \infty}x_n(i) = x(i)$$

Como $i \in \{1, \ldots, d\}$ es arbitrario

$$\therefore \; \lim_{n \to \infty}x_n(i) = x(i) \qquad \forall \; i = 1, \ldots, d$$

---

**$(\Longleftarrow)$**

Supongamos que, para todo $i \in \{1, \ldots, d\}$

$$\lim_{n \to \infty}x_n(i) = x(i) \qquad \text{es decir,} \qquad \lim_{n \to \infty}|x_n(i) - x(i)| = 0$$

**p.d.** $\displaystyle\lim_{n \to \infty}\|x_n - x\|_p = 0$.

Por el inciso 2, tomando $x_n$ y $x$ en lugar de $x$ y $y$

$$
\begin{aligned}
\|x_n - x\|_p &\leq d^{1/p}\max_{1 \leq i \leq d}\{|x_n(i) - x(i)|\} \qquad \forall \; n \in \mathbb{N} \\
\implies \qquad 0 \leq \|x_n - x\|_p &\leq d^{1/p}\max_{1 \leq i \leq d}\{|x_n(i) - x(i)|\} \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

Como el máximo de un número finito de sucesiones es una función continua de ellas, y cada $|x_n(i) - x(i)| \xrightarrow{\;n \to \infty\;} 0$

$$
\begin{aligned}
\lim_{n \to \infty}\left(d^{1/p}\max_{1 \leq i \leq d}\{|x_n(i) - x(i)|\}\right) &= d^{1/p}\max_{1 \leq i \leq d}\left\{\lim_{n \to \infty}|x_n(i) - x(i)|\right\} \\
&= d^{1/p}\max_{1 \leq i \leq d}\{0\} \\
&= 0
\end{aligned}
$$

$$
\begin{aligned}
d^{1/p}\max_{1 \leq i \leq d}\{|x_n(i) - x(i)|\} &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty}\|x_n - x\|_p = 0$$

$$\therefore \; \lim_{n \to \infty}x_n = x \text{ en } (\mathbb{R}^d, \|\cdot\|_p)$$

---

Por ambas implicaciones

$$
\boxed{\lim_{n \to \infty}x_n = x \iff \lim_{n \to \infty}x_n(i) = x(i) \quad \forall \; i = 1, \ldots, d} \;\blacksquare
$$

---

## 5.20 Ejercicio

Sea $(V, \|\cdot\|)$ un espacio vectorial normado, $(v_n)_{n\in\mathbb{N}}$, $(w_n)_{n\in\mathbb{N}}$ dos sucesiones en $V$ y $(\alpha_n)_{n\in\mathbb{N}}$ una sucesión de escalares.

Supón que $\lim_{n\to\infty} v_n = v$, $\lim_{n\to\infty} w_n = w$ y $\lim_{n\to\infty} \alpha_n = \alpha$. Prueba que:

1. $$\lim_{n\to\infty} (\alpha_n v_n + w_n) = \alpha v + w.$$

2. $$\lim_{n\to\infty} \|v_n\| = \|v\|.$$

---

**Hipótesis**

Recordemos que la convergencia en $(V, \|\cdot\|)$ es la convergencia con respecto a la métrica inducida $d(a,b) = \|a - b\|$. Entonces, por hipótesis

$$
\begin{aligned}
\lim_{n\to\infty} v_n = v &\iff \lim_{n\to\infty}\|v_n - v\| = 0 \\
\lim_{n\to\infty} w_n = w &\iff \lim_{n\to\infty}\|w_n - w\| = 0 \\
\lim_{n\to\infty} \alpha_n = \alpha &\iff \lim_{n\to\infty}|\alpha_n - \alpha| = 0
\end{aligned}
$$

---

**1. $\displaystyle\lim_{n\to\infty} (\alpha_n v_n + w_n) = \alpha v + w$**

**Demostración**

**p.d.** $\displaystyle\lim_{n\to\infty}\|(\alpha_n v_n + w_n) - (\alpha v + w)\| = 0$.

---

**Cota con la desigualdad del triángulo**

Sea $n \in \mathbb{N}$. Sumando y restando $\alpha_n v$

$$
\begin{aligned}
(\alpha_n v_n + w_n) - (\alpha v + w) &= (\alpha_n v_n - \alpha_n v) + (\alpha_n v - \alpha v) + (w_n - w) \\
&= \alpha_n(v_n - v) + (\alpha_n - \alpha)v + (w_n - w)
\end{aligned}
$$

Por la desigualdad del triángulo y la homogeneidad de la norma

$$
\begin{aligned}
\|(\alpha_n v_n + w_n) - (\alpha v + w)\| &\leq \|\alpha_n(v_n - v)\| + \|(\alpha_n - \alpha)v\| + \|w_n - w\| \\
&= |\alpha_n|\,\|v_n - v\| + |\alpha_n - \alpha|\,\|v\| + \|w_n - w\|
\end{aligned}
$$

$$
\implies \qquad 0 \leq \|(\alpha_n v_n + w_n) - (\alpha v + w)\| \leq |\alpha_n|\,\|v_n - v\| + |\alpha_n - \alpha|\,\|v\| + \|w_n - w\| \qquad \forall \; n \in \mathbb{N} \qquad (\star)
$$

---

**Límite de la cota**

Como $(\alpha_n)_{n \in \mathbb{N}}$ es una sucesión convergente de números reales, $\displaystyle\lim_{n \to \infty}|\alpha_n| = |\alpha|$ (pues $\big||\alpha_n| - |\alpha|\big| \leq |\alpha_n - \alpha| \xrightarrow{\;n \to \infty\;} 0$). Entonces, por las propiedades algebraicas de los límites en $\mathbb{R}$

$$
\begin{aligned}
\lim_{n\to\infty}|\alpha_n|\,\|v_n - v\| &= \lim_{n\to\infty}|\alpha_n| \cdot \lim_{n\to\infty}\|v_n - v\| \\
&= |\alpha| \cdot 0 \\
&= 0
\end{aligned}
$$

$$
\begin{aligned}
\lim_{n\to\infty}|\alpha_n - \alpha|\,\|v\| &= \left(\lim_{n\to\infty}|\alpha_n - \alpha|\right)\|v\| \qquad \text{(}\|v\| \text{ es constante)} \\
&= 0 \cdot \|v\| \\
&= 0
\end{aligned}
$$

$$
\lim_{n\to\infty}\|w_n - w\| = 0
$$

Abriendo sumas

$$
\lim_{n\to\infty}\left(|\alpha_n|\,\|v_n - v\| + |\alpha_n - \alpha|\,\|v\| + \|w_n - w\|\right) = 0 + 0 + 0 = 0
$$

---

**Ley del sándwich**

$$
\begin{aligned}
|\alpha_n|\,\|v_n - v\| + |\alpha_n - \alpha|\,\|v\| + \|w_n - w\| &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por $(\star)$ y la ley del sándwich

$$\lim_{n\to\infty}\|(\alpha_n v_n + w_n) - (\alpha v + w)\| = 0$$

$$\therefore \; \lim_{n\to\infty}(\alpha_n v_n + w_n) = \alpha v + w \;\blacksquare$$

---

**2. $\displaystyle\lim_{n\to\infty} \|v_n\| = \|v\|$**

**Demostración**

**p.d.** $\displaystyle\lim_{n\to\infty}\big|\|v_n\| - \|v\|\big| = 0$.

---

**Desigualdad del triángulo inversa**

Sea $n \in \mathbb{N}$. Por la desigualdad del triángulo

$$
\begin{aligned}
\|v_n\| &= \|(v_n - v) + v\| \\
&\leq \|v_n - v\| + \|v\| \\
\implies \qquad \|v_n\| - \|v\| &\leq \|v_n - v\|
\end{aligned}
$$

De manera análoga

$$
\begin{aligned}
\|v\| &= \|(v - v_n) + v_n\| \\
&\leq \|v - v_n\| + \|v_n\| \\
&= \|v_n - v\| + \|v_n\| \qquad \text{(simetría)} \\
\implies \qquad \|v\| - \|v_n\| &\leq \|v_n - v\| \\
\implies \qquad -\|v_n - v\| &\leq \|v_n\| - \|v\|
\end{aligned}
$$

Juntando ambas desigualdades

$$
\begin{aligned}
-\|v_n - v\| &\leq \|v_n\| - \|v\| \leq \|v_n - v\| \\
\implies \qquad 0 \leq \big|\|v_n\| - \|v\|\big| &\leq \|v_n - v\| \qquad \forall \; n \in \mathbb{N} \qquad (\star\star)
\end{aligned}
$$

---

**Ley del sándwich**

$$
\begin{aligned}
\|v_n - v\| &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por $(\star\star)$ y la ley del sándwich

$$\lim_{n\to\infty}\big|\|v_n\| - \|v\|\big| = 0$$

$$\therefore \; \lim_{n\to\infty}\|v_n\| = \|v\| \;\blacksquare.$$

---

**Observación:** El inciso 2 también se obtiene del ejercicio 5.17 (inciso 1), tomando $d(a,b) = \|a - b\|$ y $y = 0$, pues $d(v_n, 0) = \|v_n\|$ y $d(v, 0) = \|v\|$.

---

## 5.21 Ejercicio

Sea $(V, \|\cdot\|)$ un espacio vectorial normado. Decimos que $V$ es una álgebra si admite una función, llamada producto, $\cdot : V \times V \to V$, que satisface:

1. Asociatividad: $u \cdot (v \cdot w) = (u \cdot v) \cdot w$.
2. Distributividad: $u \cdot (v + w) = u \cdot v + u \cdot w$, $(v + w) \cdot u = v \cdot u + w \cdot u$.

Por simplicidad escribimos $uv$ en lugar de $u \cdot v$.

Decimos que el producto es compatible con la norma si, para todos $u, v \in V$:

$$\|uv\| \leq \|u\|\|v\|.$$

Prueba que si tenemos dos sucesiones en $V$, $(u_n)_{n\in\mathbb{N}}$, $(v_n)_{n\in\mathbb{N}}$, tales que $\lim_{n\to\infty} u_n = u$ y $\lim_{n\to\infty} v_n = v$, y la norma es compatible con el producto, entonces

$$\lim_{n\to\infty} u_n v_n = uv.$$

---

**Demostración**

**p.d.** $\displaystyle\lim_{n\to\infty}\|u_n v_n - uv\| = 0$.

---

**Hipótesis**

Por hipótesis

$$
\begin{aligned}
\lim_{n\to\infty} u_n = u &\iff \lim_{n\to\infty}\|u_n - u\| = 0 \\
\lim_{n\to\infty} v_n = v &\iff \lim_{n\to\infty}\|v_n - v\| = 0
\end{aligned}
$$

Por el ejercicio 5.20 (inciso 2)

$$\lim_{n\to\infty}\|u_n\| = \|u\|$$

---

**Distributividad con diferencias**

**p.d.** Para todos $a, b, c \in V$

$$a(b - c) = ab - ac \qquad \text{y} \qquad (a - b)c = ac - bc$$

Sea $a \in V$. Por distributividad

$$
\begin{aligned}
a\bar{0} &= a(\bar{0} + \bar{0}) \\
&= a\bar{0} + a\bar{0} \\
\implies \qquad a\bar{0} &= \bar{0}
\end{aligned}
$$

Sean $b, c \in V$.

$$
\begin{aligned}
ac + a(-c) &= a\big(c + (-c)\big) \\
&= a\bar{0} \\
&= \bar{0} \\
\implies \qquad a(-c) &= -(ac) \\
\implies \qquad a(b - c) = a\big(b + (-c)\big) &= ab + a(-c) \\
&= ab - ac
\end{aligned}
$$

De manera análoga, $\bar{0}a = \bar{0}$, $(-b)c = -(bc)$ y $(a - b)c = ac - bc$.

---

**Cota con la desigualdad del triángulo**

Sea $n \in \mathbb{N}$. Sumando y restando $u_n v$

$$
\begin{aligned}
u_n v_n - uv &= (u_n v_n - u_n v) + (u_n v - uv) \\
&= u_n(v_n - v) + (u_n - u)v \qquad \text{(distributividad con diferencias)}
\end{aligned}
$$

Por la desigualdad del triángulo y la compatibilidad de la norma con el producto

$$
\begin{aligned}
\|u_n v_n - uv\| &\leq \|u_n(v_n - v)\| + \|(u_n - u)v\| \\
&\leq \|u_n\|\,\|v_n - v\| + \|u_n - u\|\,\|v\|
\end{aligned}
$$

$$
\implies \qquad 0 \leq \|u_n v_n - uv\| \leq \|u_n\|\,\|v_n - v\| + \|u_n - u\|\,\|v\| \qquad \forall \; n \in \mathbb{N} \qquad (\star)
$$

---

**Límite de la cota**

Por las propiedades algebraicas de los límites en $\mathbb{R}$

$$
\begin{aligned}
\lim_{n\to\infty}\|u_n\|\,\|v_n - v\| &= \lim_{n\to\infty}\|u_n\| \cdot \lim_{n\to\infty}\|v_n - v\| \\
&= \|u\| \cdot 0 \\
&= 0
\end{aligned}
$$

$$
\begin{aligned}
\lim_{n\to\infty}\|u_n - u\|\,\|v\| &= \left(\lim_{n\to\infty}\|u_n - u\|\right)\|v\| \qquad \text{(}\|v\| \text{ es constante)} \\
&= 0 \cdot \|v\| \\
&= 0
\end{aligned}
$$

Abriendo sumas

$$
\lim_{n\to\infty}\left(\|u_n\|\,\|v_n - v\| + \|u_n - u\|\,\|v\|\right) = 0 + 0 = 0
$$

---

**Ley del sándwich**

$$
\begin{aligned}
\|u_n\|\,\|v_n - v\| + \|u_n - u\|\,\|v\| &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por $(\star)$ y la ley del sándwich

$$\lim_{n\to\infty}\|u_n v_n - uv\| = 0$$

$$\therefore \; \lim_{n\to\infty} u_n v_n = uv \;\blacksquare.$$

---

## 5.22 Ejercicio

Sea $(X,d)$ un espacio métrico y $(x_n)_{n=1}^{\infty}$, $(y_n)_{n=1}^{\infty}$ dos sucesiones en $X$ con la propiedad de que

$$\lim_{n\to\infty} d(x_n,y_n) = 0.$$

Prueba que solo pasan dos casos: ambas sucesiones son convergentes o ambas sucesiones son divergentes.

---

**Demostración**

Los casos posibles para el par de sucesiones son:

$$
\begin{aligned}
&\text{(a)} \;\; (x_n) \text{ y } (y_n) \text{ convergen} \\
&\text{(b)} \;\; (x_n) \text{ y } (y_n) \text{ divergen} \\
&\text{(c)} \;\; (x_n) \text{ converge y } (y_n) \text{ diverge} \\
&\text{(d)} \;\; (x_n) \text{ diverge y } (y_n) \text{ converge}
\end{aligned}
$$

**p.d.** Los casos (c) y (d) no pueden ocurrir. Para esto basta probar:

$$
\begin{aligned}
&\text{(i)} \;\; (x_n) \text{ converge} \implies (y_n) \text{ converge} \\
&\text{(ii)} \;\; (y_n) \text{ converge} \implies (x_n) \text{ converge}
\end{aligned}
$$

---

**(i) $(x_n)$ converge $\implies$ $(y_n)$ converge**

Supongamos que $\displaystyle\lim_{n\to\infty} x_n = x$ para algún $x \in X$.

**p.d.** $\displaystyle\lim_{n\to\infty} y_n = x$, es decir

$$\lim_{n\to\infty} d(y_n,x) = 0$$

Sea $n \in \mathbb{N}$. Por la desigualdad del triángulo

$$
\begin{aligned}
d(y_n,x) &\leq d(y_n,x_n) + d(x_n,x) \\
&= d(x_n,y_n) + d(x_n,x) \qquad \text{(simetría)} \\
\implies \qquad 0 \leq d(y_n,x) &\leq d(x_n,y_n) + d(x_n,x) \qquad \forall \; n \in \mathbb{N} \qquad (\star)
\end{aligned}
$$

Por hipótesis

$$
\begin{aligned}
\lim_{n\to\infty} d(x_n,y_n) &= 0 \\
\lim_{n\to\infty} d(x_n,x) &= 0 \qquad \text{(pues } x_n \to x\text{)}
\end{aligned}
$$

Abriendo sumas

$$\lim_{n\to\infty}\left(d(x_n,y_n) + d(x_n,x)\right) = 0 + 0 = 0$$

$$
\begin{aligned}
d(x_n,y_n) + d(x_n,x) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por $(\star)$ y la ley del sándwich

$$\lim_{n\to\infty} d(y_n,x) = 0$$

$$\therefore \; \lim_{n\to\infty} y_n = x, \; \text{en particular } (y_n)_{n \in \mathbb{N}} \text{ converge.}$$

---

**(ii) $(y_n)$ converge $\implies$ $(x_n)$ converge**

Por simetría de $d$

$$d(y_n,x_n) = d(x_n,y_n) \qquad \forall \; n \in \mathbb{N}$$

$$\implies \qquad \lim_{n\to\infty} d(y_n,x_n) = \lim_{n\to\infty} d(x_n,y_n) = 0$$

Es decir, el par $(y_n)_{n \in \mathbb{N}}$, $(x_n)_{n \in \mathbb{N}}$ satisface la misma hipótesis que el par $(x_n)_{n \in \mathbb{N}}$, $(y_n)_{n \in \mathbb{N}}$, con los papeles intercambiados.

Por (i), aplicado a este par, si $(y_n)_{n \in \mathbb{N}}$ converge a $y \in X$

$$\therefore \; \lim_{n\to\infty} x_n = y, \; \text{en particular } (x_n)_{n \in \mathbb{N}} \text{ converge.}$$

**Conclusión**

Por (i), el caso (c) no puede ocurrir.

Por (ii), el caso (d) no puede ocurrir.

Por lo tanto solo ocurren (a) o (b): ambas sucesiones convergen o ambas divergen.

Además, en el caso (a) ambas convergen al mismo límite

$$
\boxed{(x_n)_{n \in \mathbb{N}} \text{ converge} \iff (y_n)_{n \in \mathbb{N}} \text{ converge, y en ese caso } \lim_{n\to\infty} x_n = \lim_{n\to\infty} y_n} \;\blacksquare
$$

---

## 5.23 Ejercicio

Dos métricas, $d_1$ y $d_2$, sobre un conjunto $X$, se llaman equivalentes si generan las mismas sucesiones convergentes, es decir: $\lim_{n\to\infty} d_1(x_n,x) = 0$ si y solo si $\lim_{n\to\infty} d_2(x_n,x) = 0$.

1. Prueba que esto define una relación de equivalencia sobre el conjunto de métricas definidas en $X$.
2. Sea $V$ un espacio vectorial y $\|\cdot\|_1$, $\|\cdot\|_2$ dos normas sobre $V$. Supón que existen constantes $c, d > 0$ tales que:

   $$\|v\|_1 \leq c\|v\|_2, \qquad \|v\|_2 \leq d\|v\|_1, \qquad \text{para todo } v \in V.$$

   Sean $d_1$ y $d_2$ las métricas asociadas a $\|\cdot\|_1$ y $\|\cdot\|_2$, respectivamente. Prueba que $d_1$ y $d_2$ son equivalentes.

---

## Definición

Sea $X$ un conjunto no vacío y $d_1$ y $d_2$ dos métricas sobre $X$. $d_1$ y $d_2$ son equivalentes si y solo si tienen las mismas sucesiones convergentes. Es decir, si para toda sucesión $(x_n)_{n \in \mathbb{N}}$ en $X$ y todo punto $x \in X$ se cumple que

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_2(x_n,x) = 0$$

$$\left(\lim_{n \to \infty} x_n = x \text{ en } (X,d_1) \iff \lim_{n \to \infty} x_n = x \text{ en } (X,d_2)\right)$$

**1. La equivalencia de métricas es una relación de equivalencia**

**Demostración**

Sea $\mathcal{M}(X)$ el conjunto de métricas en $X$. Definimos la relación $\sim$ en $\mathcal{M}(X)$ de la siguiente manera:

$$
d_1 \sim d_2 \;\; (d_1 \text{ es equivalente a } d_2) \iff \text{para toda sucesión } (x_n)_{n \in \mathbb{N}} \text{ en } X \text{ y todo } x \in X \text{ se cumple que}
$$

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_2(x_n,x) = 0$$

Sean $d_1, d_2, d_3$ tres métricas sobre $X$.

Sea $(x_n)_{n \in \mathbb{N}}$ una sucesión arbitraria en $X$ y $x \in X$ un punto arbitrario.

---

**Reflexividad**

**p.d.** $d_1 \sim d_1$.

Notemos que

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_1(x_n,x) = 0$$

$$\therefore \; d_1 \sim d_1$$

---

**Simetría**

**p.d.** $d_1 \sim d_2 \implies d_2 \sim d_1$.

Supongamos que $d_1 \sim d_2$. Entonces se cumple que

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_2(x_n,x) = 0$$

Entonces

$$\lim_{n \to \infty} d_2(x_n,x) = 0 \iff \lim_{n \to \infty} d_1(x_n,x) = 0$$

$$\implies \qquad d_2 \sim d_1$$

$$\therefore \; d_1 \sim d_2 \implies d_2 \sim d_1$$

---

**Transitividad**

**p.d.** $d_1 \sim d_2$ y $d_2 \sim d_3 \implies d_1 \sim d_3$.

Supongamos que $d_1 \sim d_2$ y $d_2 \sim d_3$.

Como $d_1 \sim d_2$, se cumple que

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_2(x_n,x) = 0$$

Como $d_2 \sim d_3$, se cumple que

$$\lim_{n \to \infty} d_2(x_n,x) = 0 \iff \lim_{n \to \infty} d_3(x_n,x) = 0$$

Tenemos entonces que

$$
\begin{aligned}
\lim_{n \to \infty} d_1(x_n,x) = 0 &\iff \lim_{n \to \infty} d_2(x_n,x) = 0 \\
&\iff \lim_{n \to \infty} d_3(x_n,x) = 0
\end{aligned}
$$

Entonces

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_3(x_n,x) = 0$$

$$\implies \qquad d_1 \sim d_3$$

$$\therefore \; d_1 \sim d_2 \;\; \text{y} \;\; d_2 \sim d_3 \implies d_1 \sim d_3$$

---

Como $(x_n)_{n \in \mathbb{N}}$ y $x \in X$ son arbitrarios, y $d_1, d_2, d_3 \in \mathcal{M}(X)$ también, por reflexividad, simetría y transitividad

$$\therefore \; \sim \; \text{es una relación de equivalencia en } \mathcal{M}(X) \;\blacksquare.$$

---

**2. Normas equivalentes inducen métricas equivalentes**

**Demostración**

Sabemos que $d_1$ y $d_2$ son las métricas asociadas a $\|\cdot\|_1$ y $\|\cdot\|_2$ respectivamente, es decir

$$d_1(u,w) = \|u - w\|_1, \qquad d_2(u,w) = \|u - w\|_2 \qquad \forall \; u,w \in V$$

**p.d.** $d_1$ y $d_2$ son equivalentes. Para esto veamos que para toda sucesión $(v_n)_{n \in \mathbb{N}}$ en $V$ y todo punto $v \in V$ se cumple que

$$\lim_{n \to \infty} d_1(v_n,v) = 0 \iff \lim_{n \to \infty} d_2(v_n,v) = 0$$

Sea $(v_n)_{n \in \mathbb{N}}$ una sucesión arbitraria en $V$ y $v \in V$ un punto arbitrario.

---

**Hipótesis**

Como $V$ es espacio vectorial, $v_n - v \in V \;\; \forall \; n \in \mathbb{N}$.

Por hipótesis sabemos que

$$
\begin{aligned}
\|v_n - v\|_1 &\leq c\,\|v_n - v\|_2 \qquad \forall \; n \in \mathbb{N} \\
\|v_n - v\|_2 &\leq d\,\|v_n - v\|_1 \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

$$
\begin{aligned}
\implies \qquad d_1(v_n,v) &\leq c\,d_2(v_n,v) \qquad \forall \; n \in \mathbb{N} \qquad (A) \\
\implies \qquad d_2(v_n,v) &\leq d\,d_1(v_n,v) \qquad \forall \; n \in \mathbb{N} \qquad (B)
\end{aligned}
$$

---

**$(\Longrightarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} d_1(v_n,v) = 0$.

**p.d.** $\displaystyle\lim_{n \to \infty} d_2(v_n,v) = 0$.

Como $d_2$ es métrica y por $(B)$ tenemos que

$$0 \leq d_2(v_n,v) \leq d\,d_1(v_n,v) \qquad \forall \; n \in \mathbb{N}$$

Como $d$ es una constante, por las propiedades algebraicas de los límites

$$\lim_{n \to \infty} d\,d_1(v_n,v) = d\lim_{n \to \infty} d_1(v_n,v) = d \cdot 0 = 0$$

$$
\begin{aligned}
d\,d_1(v_n,v) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} d_2(v_n,v) = 0$$

---

**$(\Longleftarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} d_2(v_n,v) = 0$.

**p.d.** $\displaystyle\lim_{n \to \infty} d_1(v_n,v) = 0$.

Como $d_1$ es métrica y por $(A)$ tenemos que

$$0 \leq d_1(v_n,v) \leq c\,d_2(v_n,v) \qquad \forall \; n \in \mathbb{N}$$

Como $c$ es una constante, por las propiedades algebraicas de los límites

$$\lim_{n \to \infty} c\,d_2(v_n,v) = c\lim_{n \to \infty} d_2(v_n,v) = c \cdot 0 = 0$$

$$
\begin{aligned}
c\,d_2(v_n,v) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} d_1(v_n,v) = 0$$

---

**Conclusión**

Por ambas implicaciones

$$\lim_{n \to \infty} d_1(v_n,v) = 0 \iff \lim_{n \to \infty} d_2(v_n,v) = 0$$

Como $(v_n)_{n \in \mathbb{N}}$ en $V$ y $v \in V$ son arbitrarios

$$\therefore \; d_1 \text{ y } d_2 \text{ son equivalentes} \;\blacksquare$$

---

## 5.24 Ejercicio

Supongamos que $(X, d_X)$, $(Y, d_Y)$ son dos espacios métricos. En el [Ejercicio 4.22](#) se definieron las métricas:

$$d((x_1,y_1),(x_2,y_2)) = d_X(x_1,x_2) + d_Y(y_1,y_2),$$

$$\rho((x_1,y_1),(x_2,y_2)) = \max\{d_X(x_1,x_2), d_Y(y_1,y_2)\},$$

$$\sigma((x_1,y_1),(x_2,y_2)) = \sqrt{d_X(x_1,x_2)^2 + d_Y(y_1,y_2)^2}.$$

Prueba que $d$, $\rho$ y $\sigma$ son métricas equivalentes.

---

**Demostración**

**p.d.** $d \sim \rho$ y $\sigma \sim \rho$.

Por el ejercicio 5.23 (inciso 1), $\sim$ es una relación de equivalencia en $\mathcal{M}(X \times Y)$ (simetría y transitividad), así que de $d \sim \rho$ y $\sigma \sim \rho$ se sigue

$$d \sim \rho \sim \sigma \implies d \sim \sigma$$

y por lo tanto las tres métricas son equivalentes.

---

**Comparación de las métricas**

Sean $p_1 = (x_1,y_1)$, $p_2 = (x_2,y_2) \in X \times Y$ y denotemos

$$a := d_X(x_1,x_2) \geq 0, \qquad b := d_Y(y_1,y_2) \geq 0$$

Entonces

$$d(p_1,p_2) = a + b, \qquad \rho(p_1,p_2) = \max\{a,b\}, \qquad \sigma(p_1,p_2) = \sqrt{a^2 + b^2}$$

**Cota de $d$ con $\rho$**

Como $a \leq \max\{a,b\}$ y $b \leq \max\{a,b\}$

$$
\begin{aligned}
\max\{a,b\} \leq a + b &\leq \max\{a,b\} + \max\{a,b\} \\
&= 2\max\{a,b\}
\end{aligned}
$$

(la primera desigualdad porque $a, b \geq 0$)

$$\implies \qquad \rho(p_1,p_2) \leq d(p_1,p_2) \leq 2\,\rho(p_1,p_2) \qquad \forall \; p_1,p_2 \in X \times Y \qquad (A)$$

**Cota de $\sigma$ con $\rho$**

Como $a^2 \leq \max\{a,b\}^2$ y $b^2 \leq \max\{a,b\}^2$

$$
\begin{aligned}
\max\{a,b\}^2 \leq a^2 + b^2 &\leq \max\{a,b\}^2 + \max\{a,b\}^2 \\
&= 2\max\{a,b\}^2
\end{aligned}
$$

(la primera desigualdad porque $\max\{a,b\}^2$ es $a^2$ o $b^2$, y el otro sumando es $\geq 0$)

Como $t \longmapsto \sqrt{t}$ es creciente en $[0,\infty)$

$$\implies \qquad \rho(p_1,p_2) \leq \sigma(p_1,p_2) \leq \sqrt{2}\,\rho(p_1,p_2) \qquad \forall \; p_1,p_2 \in X \times Y \qquad (B)$$

---

**$d \sim \rho$**

Sea $(p_n)_{n \in \mathbb{N}}$ una sucesión arbitraria en $X \times Y$ y $p \in X \times Y$ un punto arbitrario.

**p.d.**

$$\lim_{n \to \infty} d(p_n,p) = 0 \iff \lim_{n \to \infty} \rho(p_n,p) = 0$$

**$(\Longrightarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} d(p_n,p) = 0$. Por $(A)$

$$0 \leq \rho(p_n,p) \leq d(p_n,p) \qquad \forall \; n \in \mathbb{N}$$

$$
\begin{aligned}
d(p_n,p) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} \rho(p_n,p) = 0$$

**$(\Longleftarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} \rho(p_n,p) = 0$. Por $(A)$

$$0 \leq d(p_n,p) \leq 2\,\rho(p_n,p) \qquad \forall \; n \in \mathbb{N}$$

Por las propiedades algebraicas de los límites

$$\lim_{n \to \infty} 2\,\rho(p_n,p) = 2\lim_{n \to \infty}\rho(p_n,p) = 2 \cdot 0 = 0$$

$$
\begin{aligned}
2\,\rho(p_n,p) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} d(p_n,p) = 0$$

Por ambas implicaciones

$$\therefore \; d \sim \rho$$

---

**$\sigma \sim \rho$**

Sea $(p_n)_{n \in \mathbb{N}}$ una sucesión arbitraria en $X \times Y$ y $p \in X \times Y$ un punto arbitrario.

**p.d.**

$$\lim_{n \to \infty} \sigma(p_n,p) = 0 \iff \lim_{n \to \infty} \rho(p_n,p) = 0$$

**$(\Longrightarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} \sigma(p_n,p) = 0$. Por $(B)$

$$0 \leq \rho(p_n,p) \leq \sigma(p_n,p) \qquad \forall \; n \in \mathbb{N}$$

$$
\begin{aligned}
\sigma(p_n,p) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} \rho(p_n,p) = 0$$

**$(\Longleftarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} \rho(p_n,p) = 0$. Por $(B)$

$$0 \leq \sigma(p_n,p) \leq \sqrt{2}\,\rho(p_n,p) \qquad \forall \; n \in \mathbb{N}$$

Por las propiedades algebraicas de los límites

$$\lim_{n \to \infty} \sqrt{2}\,\rho(p_n,p) = \sqrt{2}\lim_{n \to \infty}\rho(p_n,p) = \sqrt{2} \cdot 0 = 0$$

$$
\begin{aligned}
\sqrt{2}\,\rho(p_n,p) &\xrightarrow{\;n \to \infty\;} 0 \\[1em]
0 &\xrightarrow{\;n \to \infty\;} 0
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty} \sigma(p_n,p) = 0$$

Por ambas implicaciones

$$\therefore \; \sigma \sim \rho$$

---

**Conclusión**

Como $d \sim \rho$ y $\sigma \sim \rho$, por simetría $\rho \sim \sigma$, y por transitividad

$$d \sim \rho \;\; \text{y} \;\; \rho \sim \sigma \implies d \sim \sigma$$

$$
\boxed{d \sim \rho \sim \sigma, \quad \text{es decir, } d,\, \rho \text{ y } \sigma \text{ son métricas equivalentes en } X \times Y} \;\blacksquare
$$

---

**Observación:** Como consecuencia, una sucesión $(x_n,y_n)_{n \in \mathbb{N}}$ en $X \times Y$ converge a $(x,y)$ con respecto a cualquiera de las tres métricas si y solo si

$$\lim_{n \to \infty} x_n = x \;\; \text{en } (X,d_X) \qquad \text{y} \qquad \lim_{n \to \infty} y_n = y \;\; \text{en } (Y,d_Y)$$

**Razón:** con $\rho$, $\;\rho((x_n,y_n),(x,y)) = \max\{d_X(x_n,x), d_Y(y_n,y)\}$, y por la ley del sándwich esto tiende a $0$ si y solo si ambos términos tienden a $0$.

---

## 5.25 Ejercicio

Sea $(X,d)$ un espacio métrico y sea $(x_n)_{n=1}^{\infty} \subset X$ una sucesión.

Prueba que si $(x_n)_{n=1}^{\infty}$ NO converge al punto $x_0$, entonces existe un número positivo $\varepsilon_0 > 0$ y una subsucesión $(x_{n_k})_{k=1}^{\infty}$ de $(x_n)_{n=1}^{\infty}$ tal que

$$d(x_{n_k}, x_0) \geq \varepsilon_0$$

para toda $k$.

---

**Demostración**

**p.d.** Existen $\varepsilon_0 > 0$ y una subsucesión $(x_{n_k})_{k=1}^{\infty}$ tales que

$$d(x_{n_k},x_0) \geq \varepsilon_0 \qquad \forall \; k \in \mathbb{N}$$

---

**Negación de la convergencia**

Recordemos la definición de convergencia (Definición 5.5): $\displaystyle\lim_{n \to \infty} x_n = x_0$ si y solo si

$$\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n \geq N \implies d(x_n,x_0) < \varepsilon$$

Negando directamente, $\displaystyle\lim_{n \to \infty} x_n \neq x_0$ si y solo si

$$\exists \; \varepsilon_0 > 0 \; \text{tal que} \; \forall \; N \in \mathbb{N} \; \exists \; n \geq N \; \text{con} \; d(x_n,x_0) \geq \varepsilon_0 \qquad (\star)$$

Es importante notar que en $(\star)$ la condición sobre $N$ es "para todo $N$", es decir, podemos tomar cualquier valor de $N$, y eso nos va a arrojar la existencia de distintos $n$'s que satisfacen

$$n \geq N \qquad \text{y} \qquad d(x_n,x_0) \geq \varepsilon_0$$

Como $(x_n)_{n=1}^{\infty}$ no converge a $x_0$, fijamos el $\varepsilon_0 > 0$ de $(\star)$.

Al ir variando la $N$ en la propiedad anterior vamos a construir la subsucesión que buscamos.

---

**Construcción recursiva de la subsucesión**

**Paso base ($k = 1$)**

Tomando $N = 1$ en $(\star)$

$$\implies \qquad \exists \; n_1 \geq 1 \; \text{tal que} \; d(x_{n_1},x_0) \geq \varepsilon_0$$

**Paso recursivo**

Para obtener $x_{n_2}$ no podemos simplemente tomar $N = 2$, pues necesitamos construir una subsucesión, es decir, debemos cuidar que $n_1 < n_2$.

Por lo tanto tomamos $N = n_1 + 1$ en $(\star)$

$$
\begin{aligned}
\implies \qquad \exists \; n_2 \geq n_1 + 1 \; &\text{tal que} \; d(x_{n_2},x_0) \geq \varepsilon_0 \\
\implies \qquad n_2 &> n_1
\end{aligned}
$$

De manera recursiva, supongamos que hemos construido $n_1, \ldots, n_k$ tales que

$$n_1 < n_2 < \cdots < n_k \qquad \text{y} \qquad d(x_{n_j},x_0) \geq \varepsilon_0 \qquad \forall \; j = 1, \ldots, k$$

Tomando $N = n_k + 1$ en $(\star)$

$$
\begin{aligned}
\implies \qquad \exists \; n_{k+1} \geq n_k + 1 \; &\text{tal que} \; d(x_{n_{k+1}},x_0) \geq \varepsilon_0 \\
\implies \qquad n_{k+1} &> n_k
\end{aligned}
$$

Así

$$n_1 < n_2 < \cdots < n_k < n_{k+1}$$

---

**Conclusión**

Por recursión hemos construido una sucesión estrictamente creciente de naturales

$$n_1 < n_2 < n_3 < \cdots$$

es decir, una subsucesión $(x_{n_k})_{k=1}^{\infty}$ de $(x_n)_{n=1}^{\infty}$, con la propiedad de que

$$d(x_{n_k},x_0) \geq \varepsilon_0 \qquad \forall \; k \in \mathbb{N}$$

$$\therefore \; \exists \; \varepsilon_0 > 0 \;\; \text{y una subsucesión } (x_{n_k})_{k=1}^{\infty} \;\; \text{tales que} \;\; d(x_{n_k},x_0) \geq \varepsilon_0 \;\; \forall \; k \in \mathbb{N} \;\blacksquare$$

---

## 5.26 Ejercicio

¿Cuáles de las siguientes expresiones representan subsucesiones de $(x_n)_{n\in\mathbb{N}}$?

1. $(x_{n^2})_{n\in\mathbb{N}}$.
2. $(x_{n^2-4n})_{n\in\mathbb{N}}$.
3. $\left(x_{\frac{n^2+1}{n+1}}\right)_{n\geq 2}$.
4. $\left(x_{\frac{n}{n+1}}\right)_{n\in\mathbb{N}}$.
5. $(x_{n^2-4n})_{n\geq 5}$.

**Respuesta:** Son subsucesiones **1** y **5**. Las expresiones **2**, **3** y **4** no lo son.

---

**Criterio**

Una sucesión $(x_{\varphi(n)})_{n \in \mathbb{N}}$ es una subsucesión de $(x_n)_{n \in \mathbb{N}}$ si y solo si

$$\varphi : \mathbb{N} \longrightarrow \mathbb{N} \qquad \text{es estrictamente creciente}$$

es decir, $\varphi$ cumple:

$$
\begin{aligned}
&\text{(a)} \;\; \varphi(n) \in \mathbb{N} \qquad \forall \; n \in \mathbb{N} \qquad \text{(bien definida como función } \mathbb{N} \to \mathbb{N}\text{)} \\
&\text{(b)} \;\; n < m \implies \varphi(n) < \varphi(m) \qquad \forall \; n,m \in \mathbb{N} \qquad \text{(estrictamente creciente)}
\end{aligned}
$$

Con $\mathbb{N} = \{1,2,3,\ldots\}$.

---

**1. $(x_{n^2})_{n\in\mathbb{N}}$**

**p.d.** $\varphi(n) = n^2$ es una función $\mathbb{N} \to \mathbb{N}$ estrictamente creciente.

**(a)** Sea $n \in \mathbb{N}$. Como el producto de naturales es natural

$$\varphi(n) = n \cdot n = n^2 \in \mathbb{N}$$

**(b)** Sean $n,m \in \mathbb{N}$ con $n < m$. Como $n,m > 0$

$$
\begin{aligned}
\varphi(m) - \varphi(n) &= m^2 - n^2 \\
&= (m-n)(m+n) \\
&> 0 \qquad \text{(pues } m - n > 0 \text{ y } m + n > 0\text{)} \\
\implies \qquad \varphi(n) &< \varphi(m)
\end{aligned}
$$

$$\therefore \; (x_{n^2})_{n\in\mathbb{N}} \; \text{es una subsucesión de } (x_n)_{n\in\mathbb{N}} \;\blacksquare$$

---

**2. $(x_{n^2-4n})_{n\in\mathbb{N}}$**

**p.d.** $\varphi(n) = n^2 - 4n$ **no** es una función $\mathbb{N} \to \mathbb{N}$ estrictamente creciente.

Evaluando en los primeros naturales

$$
\begin{aligned}
\varphi(1) &= 1 - 4 = -3 \notin \mathbb{N} \\
\varphi(2) &= 4 - 8 = -4 \notin \mathbb{N} \\
\varphi(3) &= 9 - 12 = -3 \notin \mathbb{N} \\
\varphi(4) &= 16 - 16 = 0 \notin \mathbb{N}
\end{aligned}
$$

$$\implies \qquad \text{no se cumple (a), y } x_{\varphi(1)} = x_{-3} \text{ ni siquiera está definido}$$

Además, tampoco se cumple (b)

$$
1 < 2 \qquad \text{pero} \qquad \varphi(1) = -3 > -4 = \varphi(2)
$$

$$\therefore \; (x_{n^2-4n})_{n\in\mathbb{N}} \; \text{no es una subsucesión de } (x_n)_{n\in\mathbb{N}} \;\blacksquare$$

---

**3. $\left(x_{\frac{n^2+1}{n+1}}\right)_{n\geq 2}$**

**p.d.** $\varphi(n) = \dfrac{n^2+1}{n+1}$ **no** es una función de $\{n \in \mathbb{N} : n \geq 2\}$ a $\mathbb{N}$.

Notemos que

$$
\begin{aligned}
n^2 + 1 &= (n+1)(n-1) + 2 \\
\implies \qquad \varphi(n) &= \frac{(n+1)(n-1) + 2}{n+1} \\
&= (n-1) + \frac{2}{n+1}
\end{aligned}
$$

Como $n - 1 \in \mathbb{Z}$, se tiene

$$\varphi(n) \in \mathbb{N} \iff \frac{2}{n+1} \in \mathbb{Z}$$

Pero para $n \geq 2$

$$
\begin{aligned}
n + 1 \geq 3 \implies 0 < \frac{2}{n+1} &\leq \frac{2}{3} < 1 \\
\implies \qquad \frac{2}{n+1} &\notin \mathbb{Z} \\
\implies \qquad \varphi(n) &\notin \mathbb{N} \qquad \forall \; n \geq 2
\end{aligned}
$$

Por ejemplo

$$\varphi(2) = \frac{5}{3} \notin \mathbb{N}$$

$$\implies \qquad \text{no se cumple (a), y } x_{5/3} \text{ no está definido}$$

$$\therefore \; \left(x_{\frac{n^2+1}{n+1}}\right)_{n\geq 2} \; \text{no es una subsucesión de } (x_n)_{n\in\mathbb{N}} \;\blacksquare$$

---

**4. $\left(x_{\frac{n}{n+1}}\right)_{n\in\mathbb{N}}$**

**p.d.** $\varphi(n) = \dfrac{n}{n+1}$ **no** es una función $\mathbb{N} \to \mathbb{N}$.

Sea $n \in \mathbb{N}$.

$$
\begin{aligned}
0 < n < n + 1 \implies 0 < \frac{n}{n+1} &< 1 \\
\implies \qquad \varphi(n) &\notin \mathbb{N} \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

(no existe ningún natural estrictamente entre $0$ y $1$). Por ejemplo

$$\varphi(1) = \frac{1}{2} \notin \mathbb{N}$$

$$\implies \qquad \text{no se cumple (a), y } x_{1/2} \text{ no está definido}$$

$$\therefore \; \left(x_{\frac{n}{n+1}}\right)_{n\in\mathbb{N}} \; \text{no es una subsucesión de } (x_n)_{n\in\mathbb{N}} \;\blacksquare$$

---

**5. $(x_{n^2-4n})_{n\geq 5}$**

Aquí el índice recorre $\{5,6,7,\ldots\}$, así que reindexamos para que el dominio sea $\mathbb{N}$.

Sea $k = n - 4$, es decir, $n = k + 4$. Como $n \geq 5 \iff k \geq 1$

$$
\begin{aligned}
\psi(k) := \varphi(k+4) &= (k+4)^2 - 4(k+4) \\
&= (k+4)\big((k+4) - 4\big) \\
&= k(k+4) \\
&= k^2 + 4k \qquad \forall \; k \in \mathbb{N}
\end{aligned}
$$

**p.d.** $\psi(k) = k^2 + 4k$ es una función $\mathbb{N} \to \mathbb{N}$ estrictamente creciente.

**(a)** Sea $k \in \mathbb{N}$. Como la suma y el producto de naturales son naturales

$$\psi(k) = k \cdot k + 4 \cdot k \in \mathbb{N}$$

**(b)** Sean $k,l \in \mathbb{N}$ con $k < l$

$$
\begin{aligned}
\psi(l) - \psi(k) &= (l^2 - k^2) + 4(l - k) \\
&= (l-k)(l+k) + 4(l-k) \\
&= (l-k)(l+k+4) \\
&> 0 \qquad \text{(pues } l - k > 0 \text{ y } l + k + 4 > 0\text{)} \\
\implies \qquad \psi(k) &< \psi(l)
\end{aligned}
$$

Los primeros valores son

$$\psi(1) = 5, \qquad \psi(2) = 12, \qquad \psi(3) = 21, \qquad \ldots$$

$$
\implies \qquad (x_{n^2-4n})_{n\geq 5} = (x_{\psi(k)})_{k\in\mathbb{N}} = (x_5, x_{12}, x_{21}, \ldots)
$$

$$\therefore \; (x_{n^2-4n})_{n\geq 5} \; \text{es una subsucesión de } (x_n)_{n\in\mathbb{N}} \;\blacksquare$$

---

**Conclusión**

$$
\boxed{\text{Son subsucesiones: } (x_{n^2})_{n\in\mathbb{N}} \;\; \text{y} \;\; (x_{n^2-4n})_{n\geq 5}} \;\blacksquare
$$

---

**Observación:** Los incisos 2 y 5 tienen la misma fórmula $n^2 - 4n$ y solo difieren en el dominio. Para $n \leq 4$ la fórmula da valores $\leq 0$ (que no son índices válidos) y no es creciente (por ejemplo $\varphi(1) = -3 > \varphi(2) = -4$). Para $n \geq 5$ siempre da naturales y es estrictamente creciente. Por eso el dominio forma parte de la definición de la subsucesión.

---

## 5.27 Ejercicio

Considera una sucesión $(x_n)_{n\in\mathbb{N}}$. De esta sucesión se van a ir sacando subsucesiones recursivamente.

Por $(x_n^{(1)})_{n\in\mathbb{N}}$ vamos a denotar una subsucesión de $(x_n)_{n\in\mathbb{N}}$. Es decir, $x_n^{(1)} = x_{\varphi_1(n)}$, donde $\varphi_1 : \mathbb{N} \to \mathbb{N}$ es estrictamente creciente.

Por $(x_n^{(2)})_{n\in\mathbb{N}}$ vamos a denotar una subsucesión de $(x_n^{(1)})_{n\in\mathbb{N}}$. Es decir, $x_n^{(2)} = x^{(1)}_{\varphi_2(n)}$, donde $\varphi_2 : \mathbb{N} \to \mathbb{N}$ es estrictamente creciente.

Si $(x_n^{(m)})_{n\in\mathbb{N}}$ se ha construido, por $(x_n^{(m+1)})_{n\in\mathbb{N}}$ vamos a denotar una subsucesión de $(x_n^{(m)})_{n\in\mathbb{N}}$. Es decir, $x_n^{(m+1)} = x^{(m)}_{\varphi_{m+1}(n)}$, donde $\varphi_{m+1} : \mathbb{N} \to \mathbb{N}$ es estrictamente creciente.

Para una visualización podemos escribir las sucesiones en una lista

$$
\begin{aligned}
&x_1^{(1)}, x_2^{(1)}, x_3^{(1)}, \ldots \\
&x_1^{(2)}, x_2^{(2)}, x_3^{(2)}, \ldots \\
&x_1^{(3)}, x_2^{(3)}, x_3^{(3)}, \ldots \\
&\qquad\vdots \\
&x_1^{(m)}, x_2^{(m)}, x_3^{(m)}, \ldots \\
&\qquad\vdots
\end{aligned}
$$

Define la sucesión $(y_n)_{n\in\mathbb{N}}$ por $y_n := x_n^{(n)}$. Se puede pensar como la sucesión diagonal.

Prueba que, para cada $m \in \mathbb{N}$, $(y_n)_{n\geq m}$ es una subsucesión de $(x_n^{(m)})_{n\in\mathbb{N}}$.

Este método se conoce como el método de la diagonal de Cantor.

---

**Demostración**

Fijemos $m \in \mathbb{N}$.

**p.d.** Existe $\psi_m : \mathbb{N} \to \mathbb{N}$ estrictamente creciente tal que

$$y_{m+k-1} = x^{(m)}_{\psi_m(k)} \qquad \forall \; k \in \mathbb{N}$$

Esto es exactamente que $(y_n)_{n \geq m}$, reindexada con $k = n - m + 1$ (como en el ejercicio 5.26, inciso 5), es una subsucesión de $(x_n^{(m)})_{n \in \mathbb{N}}$.

---

**Lema 1.** Si $\varphi : \mathbb{N} \to \mathbb{N}$ es estrictamente creciente, entonces

$$\varphi(j) \geq j \qquad \forall \; j \in \mathbb{N}$$

**Demostración**

Por inducción sobre $j$.

*Base ($j = 1$).* Como $\varphi(1) \in \mathbb{N}$

$$\varphi(1) \geq 1$$

*Paso inductivo.* Supongamos que $\varphi(j) \geq j$. Como $\varphi$ es estrictamente creciente y $\varphi(j), \varphi(j+1) \in \mathbb{N}$

$$
\begin{aligned}
\varphi(j+1) &> \varphi(j) \geq j \\
\implies \qquad \varphi(j+1) &\geq j + 1 \qquad \text{(pues son enteros)}
\end{aligned}
$$

$$\therefore \; \varphi(j) \geq j \qquad \forall \; j \in \mathbb{N} \;\blacksquare$$

---

**Composición de las funciones $\varphi_j$**

Definimos recursivamente, para $n \geq m$

$$
\begin{aligned}
\Theta_{m,m} &:= \mathrm{id}_{\mathbb{N}} \\
\Theta_{m,n+1} &:= \Theta_{m,n} \circ \varphi_{n+1} \qquad \forall \; n \geq m
\end{aligned}
$$

es decir, $\Theta_{m,n} = \varphi_{m+1} \circ \varphi_{m+2} \circ \cdots \circ \varphi_n$ para $n > m$.

**Lema 2.** $\Theta_{m,n} : \mathbb{N} \to \mathbb{N}$ es estrictamente creciente para todo $n \geq m$.

**Demostración**

Por inducción sobre $n$.

*Base ($n = m$).* $\Theta_{m,m} = \mathrm{id}_{\mathbb{N}}$ es estrictamente creciente.

*Paso inductivo.* Supongamos que $\Theta_{m,n}$ es estrictamente creciente. Sean $i,j \in \mathbb{N}$ con $i < j$

$$
\begin{aligned}
\varphi_{n+1}(i) &< \varphi_{n+1}(j) \qquad \text{(pues } \varphi_{n+1} \text{ es estrictamente creciente)} \\
\implies \qquad \Theta_{m,n}\big(\varphi_{n+1}(i)\big) &< \Theta_{m,n}\big(\varphi_{n+1}(j)\big) \qquad \text{(hipótesis de inducción)} \\
\implies \qquad \Theta_{m,n+1}(i) &< \Theta_{m,n+1}(j)
\end{aligned}
$$

$$\therefore \; \Theta_{m,n} \; \text{es estrictamente creciente} \qquad \forall \; n \geq m \;\blacksquare$$

---

**Lema 3.** Para todo $n \geq m$ y todo $j \in \mathbb{N}$

$$x^{(n)}_j = x^{(m)}_{\Theta_{m,n}(j)}$$

**Demostración**

Por inducción sobre $n$.

*Base ($n = m$).* Como $\Theta_{m,m} = \mathrm{id}_{\mathbb{N}}$

$$x^{(m)}_j = x^{(m)}_{\Theta_{m,m}(j)} \qquad \forall \; j \in \mathbb{N}$$

*Paso inductivo.* Supongamos que $x^{(n)}_j = x^{(m)}_{\Theta_{m,n}(j)}$ para todo $j \in \mathbb{N}$. Sea $j \in \mathbb{N}$

$$
\begin{aligned}
x^{(n+1)}_j &= x^{(n)}_{\varphi_{n+1}(j)} \qquad \text{(definición de } x^{(n+1)}\text{)} \\
&= x^{(m)}_{\Theta_{m,n}(\varphi_{n+1}(j))} \qquad \text{(hipótesis de inducción con } \varphi_{n+1}(j) \in \mathbb{N}\text{)} \\
&= x^{(m)}_{\Theta_{m,n+1}(j)} \qquad \text{(definición de } \Theta_{m,n+1}\text{)}
\end{aligned}
$$

$$\therefore \; x^{(n)}_j = x^{(m)}_{\Theta_{m,n}(j)} \qquad \forall \; n \geq m, \;\; \forall \; j \in \mathbb{N} \;\blacksquare$$

---

**Definición de $\psi_m$**

Para $k \in \mathbb{N}$ sea $n = m + k - 1 \geq m$. Definimos

$$\psi_m(k) := \Theta_{m,\,m+k-1}(m+k-1) \in \mathbb{N}$$

---

**$y_{m+k-1} = x^{(m)}_{\psi_m(k)}$**

Sea $k \in \mathbb{N}$ y $n = m + k - 1 \geq m$. Por la definición de $y_n$ y el Lema 3, tomando $j = n$

$$
\begin{aligned}
y_n &= x^{(n)}_n \\
&= x^{(m)}_{\Theta_{m,n}(n)} \\
&= x^{(m)}_{\psi_m(k)}
\end{aligned}
$$

$$\implies \qquad y_{m+k-1} = x^{(m)}_{\psi_m(k)} \qquad \forall \; k \in \mathbb{N}$$

---

**$\psi_m$ es estrictamente creciente**

Sea $k \in \mathbb{N}$ y $n = m + k - 1$, de modo que $m + (k+1) - 1 = n + 1$.

$$
\begin{aligned}
\psi_m(k+1) &= \Theta_{m,n+1}(n+1) \\
&= \Theta_{m,n}\big(\varphi_{n+1}(n+1)\big) \qquad \text{(definición de } \Theta_{m,n+1}\text{)}
\end{aligned}
$$

Por el Lema 1, $\varphi_{n+1}(n+1) \geq n+1 > n$.

Por el Lema 2, $\Theta_{m,n}$ es estrictamente creciente, entonces

$$
\begin{aligned}
\Theta_{m,n}\big(\varphi_{n+1}(n+1)\big) &> \Theta_{m,n}(n) \\
\implies \qquad \psi_m(k+1) &> \psi_m(k) \qquad \forall \; k \in \mathbb{N}
\end{aligned}
$$

Como $\psi_m(k) < \psi_m(k+1)$ para todo $k$, por transitividad

$$k < l \implies \psi_m(k) < \psi_m(k+1) < \cdots < \psi_m(l)$$

$$\therefore \; \psi_m : \mathbb{N} \to \mathbb{N} \; \text{es estrictamente creciente.}$$

---

**Conclusión**

Hemos probado que existe $\psi_m : \mathbb{N} \to \mathbb{N}$ estrictamente creciente tal que

$$y_{m+k-1} = x^{(m)}_{\psi_m(k)} \qquad \forall \; k \in \mathbb{N}$$

es decir

$$
(y_n)_{n \geq m} = \big(x^{(m)}_{\psi_m(k)}\big)_{k \in \mathbb{N}} = \big(x^{(m)}_{\psi_m(1)},\, x^{(m)}_{\psi_m(2)},\, x^{(m)}_{\psi_m(3)},\, \ldots\big)
$$

Como $m \in \mathbb{N}$ es arbitrario

$$\therefore \; (y_n)_{n \geq m} \; \text{es una subsucesión de } (x_n^{(m)})_{n \in \mathbb{N}} \qquad \forall \; m \in \mathbb{N} \;\blacksquare$$

---

## 5.28 Ejercicio

Sea $(X,d)$ un espacio métrico y $(x_n)_{n \in \mathbb{N}}$ una sucesión de Cauchy. Prueba que $(x_n)_{n \in \mathbb{N}}$ está acotada.

---

**Demostración**

Recordemos que $(x_n)_{n \in \mathbb{N}}$ es de Cauchy si

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n,m \geq N \\
\implies d(x_n,x_m) < \varepsilon
$$

**p.d.** $\{x_n : n \in \mathbb{N}\}$ es acotado en $(X,d)$, es decir

$$\exists \; r > 0 \;\; \text{y} \;\; z \in X \;\; \text{tales que} \;\; d(x_n,z) \leq r \qquad \forall \; n \in \mathbb{N}$$

---

**Cola de la sucesión**

Sea $\varepsilon = 1 > 0$. Como $(x_n)_{n \in \mathbb{N}}$ es de Cauchy, existe $N \in \mathbb{N}$ tal que

$$d(x_n,x_m) < \varepsilon = 1 \qquad \forall \; n,m \geq N$$

En particular, tomando $m = N$

$$d(x_n,x_N) < 1 \qquad \forall \; n \geq N \qquad (\star)$$

---

**Primeros términos**

Sea $z := x_N \in X$. Definimos

$$M := \max\{d(x_1,x_N),\, d(x_2,x_N),\, \ldots,\, d(x_N,x_N)\} \geq 0$$

$$r := M + 1 > 0$$

(el máximo existe pues es de un conjunto finito, y $M \geq 0$ pues $d(x_N,x_N) = 0$ y toda distancia es $\geq 0$.)

---

**Acotamiento**

Sea $n \in \mathbb{N}$ arbitrario.

**Caso 1:** $1 \leq n \leq N$

$$
\begin{aligned}
d(x_n,z) = d(x_n,x_N) &\leq M \\
&< M + 1 = r \\
\implies \qquad d(x_n,z) &< r
\end{aligned}
$$

**Caso 2:** $n > N$

Como $n \geq N$, por $(\star)$

$$
\begin{aligned}
d(x_n,z) = d(x_n,x_N) &< 1 \\
&\leq M + 1 = r \qquad \text{(pues } M \geq 0\text{)} \\
\implies \qquad d(x_n,z) &< r
\end{aligned}
$$

Por ambos casos

$$d(x_n,z) < r \qquad \forall \; n \in \mathbb{N}$$

$$\implies \qquad d(x_n,z) \leq r \qquad \forall \; n \in \mathbb{N}$$

Tomando $z = x_N$ y $r = M + 1$

$$\implies \qquad \{x_n : n \in \mathbb{N}\} \; \text{es acotado en } (X,d)$$

$$\therefore \; (x_n)_{n \in \mathbb{N}} \; \text{está acotada} \;\blacksquare$$

---

**Observación:** La prueba es idéntica a la del ejercicio 5.15 (inciso 1) para sucesiones convergentes. La única diferencia es que allí el centro de la bola es el límite $x$, y aquí no hay límite disponible (el espacio puede no ser completo), por lo que se usa como centro el término $x_N$.

---

## 5.29 Ejercicio 

Sea $(X,d)$ un espacio métrico. $(x_n)_{n=1}^{\infty}$ sucesión en $X, \; x \in X$

$$
(x_n)_{i=1}^{\infty} \longrightarrow x \\[0.5em]
\implies (x_n)_{i=1}^{\infty} \; \text{es de Cauchy}
$$

**Demostración**

Sea $x \in X\;$ tal que

$$
\begin{aligned}
\lim_{n \to \infty} x_n = x
\iff
\Big(
&\forall \, \varepsilon > 0 \;\; \exists \, N \in \mathbb{N} \;\text{tal que}\; \\
&\forall \, n \geq N \;\implies\; d(x_n, x) < \frac{\varepsilon}{2}
\Big)
\end{aligned}
$$

$$
\begin{aligned}
   d(x_n, x_m) &\leq d(x_n,x) + d(x,x_m) \\
   &=\frac{\varepsilon}{2} + \frac{\varepsilon}{2} \\
   &=\varepsilon
\end{aligned}
$$

$$\therefore \;(x_n)_{n=1}^{\infty} \;\text{es de Cauchy}\; \blacksquare .$$

---

## 5.30 Ejercicio

Este ejercicio muestra que las sucesiones de Cauchy guardan información sobre el espacio métrico que no se preserva bajo métricas equivalentes.

En $\mathbb{N} = \{1, 2, \ldots\}$ considera dos métricas: $d_1$ es la métrica usual, $d_1(n,m) = |n - m|$, mientras que $d_2$ está dada por $d_2(n,m) = \left|\frac{1}{n} - \frac{1}{m}\right|$.

1. Prueba que $d_1$ y $d_2$ son equivalentes.
2. Prueba que la sucesión $(n)_{n=1}^{\infty}$ es Cauchy con respecto a $d_2$ pero no Cauchy con respecto a $d_1$.

---

**1. $d_1$ y $d_2$ son equivalentes**

**Demostración**

**p.d.** Para toda sucesión $(x_n)_{n \in \mathbb{N}}$ en $\mathbb{N}$ y todo $x \in \mathbb{N}$

$$\lim_{n \to \infty} d_1(x_n,x) = 0 \iff \lim_{n \to \infty} d_2(x_n,x) = 0$$

Sea $(x_n)_{n \in \mathbb{N}}$ una sucesión arbitraria en $\mathbb{N}$ y $x \in \mathbb{N}$ un punto arbitrario.

---

**$(\Longrightarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} d_1(x_n,x) = 0$.

Sea $\varepsilon = \dfrac{1}{2} > 0$. Por definición de convergencia existe $N \in \mathbb{N}$ tal que

$$|x_n - x| < \frac{1}{2} \qquad \forall \; n \geq N$$

Como $x_n - x \in \mathbb{Z}$ y el único entero de valor absoluto menor que $\dfrac{1}{2}$ es $0$

$$
\begin{aligned}
\implies \qquad x_n - x &= 0 \qquad \forall \; n \geq N \\
\implies \qquad x_n &= x \qquad \forall \; n \geq N \\
\implies \qquad d_2(x_n,x) &= \left|\frac{1}{x_n} - \frac{1}{x}\right| = 0 \qquad \forall \; n \geq N
\end{aligned}
$$

Por lo tanto

$$\lim_{n \to \infty} d_2(x_n,x) = 0$$

---

**$(\Longleftarrow)$**

Supongamos que $\displaystyle\lim_{n \to \infty} d_2(x_n,x) = 0$.

**Lema.** Si $m \in \mathbb{N}$ con $m \neq x$, entonces

$$d_2(m,x) \geq \delta := \frac{1}{x(x+1)}$$

**Demostración**

Sea $m \in \mathbb{N}$ con $m \neq x$.

*Caso $m < x$.* Como $m \leq x - 1$ y $x - m \geq 1$

$$
\begin{aligned}
d_2(m,x) = \frac{x - m}{mx} &\geq \frac{1}{mx} \\
&\geq \frac{1}{(x-1)x} \qquad \text{(pues } m \leq x - 1\text{)} \\
&> \frac{1}{(x+1)x} = \delta
\end{aligned}
$$

*Caso $m > x$.* Como $m \geq x + 1$, entonces $\dfrac{1}{m} \leq \dfrac{1}{x+1}$

$$
\begin{aligned}
d_2(m,x) = \frac{1}{x} - \frac{1}{m} &\geq \frac{1}{x} - \frac{1}{x+1} \\
&= \frac{1}{x(x+1)} = \delta
\end{aligned}
$$

$$\therefore \; d_2(m,x) \geq \delta \qquad \forall \; m \neq x \;\blacksquare$$

---

Sea $\varepsilon = \delta > 0$. Por definición de convergencia existe $N \in \mathbb{N}$ tal que

$$d_2(x_n,x) < \delta \qquad \forall \; n \geq N$$

Por el Lema (contrarrecíproco), si $x_n \neq x$ entonces $d_2(x_n,x) \geq \delta$, lo cual contradice la desigualdad anterior. Así

$$
\begin{aligned}
\implies \qquad x_n &= x \qquad \forall \; n \geq N \\
\implies \qquad d_1(x_n,x) &= |x_n - x| = 0 \qquad \forall \; n \geq N
\end{aligned}
$$

Por lo tanto

$$\lim_{n \to \infty} d_1(x_n,x) = 0$$

---

Por ambas implicaciones, como $(x_n)_{n \in \mathbb{N}}$ y $x$ son arbitrarios

$$\therefore \; d_1 \sim d_2 \;\blacksquare$$

---

**2. $(n)_{n=1}^{\infty}$ es Cauchy en $d_2$ pero no en $d_1$**

**Demostración**

---

**Cauchy con respecto a $d_2$**

**p.d.**

$$
\forall \; \varepsilon > 0 \; \exists \; N \in \mathbb{N} \; \text{tal que} \; \forall \; n,m \geq N \\
\implies d_2(n,m) = \left|\frac{1}{n} - \frac{1}{m}\right| < \varepsilon
$$

Sea $\varepsilon > 0$. Por la propiedad arquimediana existe $N \in \mathbb{N}$ tal que

$$N > \frac{1}{\varepsilon} \qquad \implies \qquad \frac{1}{N} < \varepsilon$$

Sean $n,m \geq N$. Entonces

$$0 < \frac{1}{n} \leq \frac{1}{N} \qquad \text{y} \qquad 0 < \frac{1}{m} \leq \frac{1}{N}$$

Como ambos números están en el intervalo $\left(0,\dfrac{1}{N}\right]$, su distancia es menor que la longitud del intervalo

$$
\begin{aligned}
d_2(n,m) = \left|\frac{1}{n} - \frac{1}{m}\right| &< \frac{1}{N} \\
&< \varepsilon
\end{aligned}
$$

(la primera desigualdad es estricta porque $0 < \frac{1}{n}, \frac{1}{m} \leq \frac{1}{N}$ implica $-\frac{1}{N} < \frac{1}{n} - \frac{1}{m} < \frac{1}{N}$)

$$\implies \qquad d_2(n,m) < \varepsilon \qquad \forall \; n,m \geq N$$

$$\therefore \; (n)_{n=1}^{\infty} \; \text{es Cauchy con respecto a } d_2.$$

---

**No Cauchy con respecto a $d_1$**

**p.d.** $(n)_{n=1}^{\infty}$ no es Cauchy con respecto a $d_1$, es decir

$$
\exists \; \varepsilon_0 > 0 \; \text{tal que} \; \forall \; N \in \mathbb{N} \; \exists \; n,m \geq N \\
\text{con} \; d_1(n,m) \geq \varepsilon_0
$$

Sea $\varepsilon_0 = 1$. Sea $N \in \mathbb{N}$ arbitrario. Tomando $n = N$ y $m = N + 1$, ambos $\geq N$

$$
\begin{aligned}
d_1(n,m) = |N - (N+1)| &= 1 \\
&\geq 1 = \varepsilon_0
\end{aligned}
$$

$$\therefore \; (n)_{n=1}^{\infty} \; \text{no es Cauchy con respecto a } d_1 \;\blacksquare$$

---

**Conclusión**

$$
\boxed{d_1 \sim d_2 \;\; \text{pero} \;\; (n)_{n=1}^{\infty} \; \text{es Cauchy en } (\mathbb{N},d_2) \; \text{y no es Cauchy en } (\mathbb{N},d_1)} \;\blacksquare
$$

---

**Observación:** Este ejemplo muestra que "ser Cauchy" **no** es una propiedad que dependa solo de las sucesiones convergentes: dos métricas equivalentes (mismas sucesiones convergentes) pueden tener distintas sucesiones de Cauchy. En particular, la completitud tampoco se preserva bajo equivalencia de métricas: $(\mathbb{N},d_1)$ es completo (las sucesiones de Cauchy son eventualmente constantes), pero $(\mathbb{N},d_2)$ no lo es, pues $(n)_{n=1}^{\infty}$ es Cauchy en $d_2$ y no converge: si $d_2(n,x) \to 0$ para algún $x \in \mathbb{N}$, entonces $\dfrac{1}{n} \to \dfrac{1}{x} > 0$, contradiciendo $\dfrac{1}{n} \to 0$.

---

## 5.31 Ejercicio

Sea $(X,d)$ un espacio métrico y $(x_n)_{n=1}^{\infty}$ una sucesión de Cauchy respecto a $d$. Prueba que existe una subsucesión $(x_{n_k})_{k=1}^{\infty}$ tal que

$$d(x_{n_k}, x_{n_{k+1}}) \leq \frac{1}{2^k}, \quad \forall \; k \geq 1.$$

**Demostración**

Como $(x_n)_{n=1}^{\infty}$ es de Cauchy, para todo $\varepsilon > 0$ existe $N \in \mathbb{N}$ tal que

$$n, m \geq N \implies d(x_n, x_m) < \varepsilon.$$

Construiremos los índices $n_1 < n_2 < \cdots$ por inducción.

**Paso base.**

Para $\varepsilon = \dfrac{1}{2}$ existe $N_1 \in \mathbb{N}$ tal que

$$n, m \geq N_1 \implies d(x_n, x_m) < \frac{1}{2}.$$

Tomamos $n_1 = N_1$.

Para $\varepsilon = \dfrac{1}{2^2}$ existe $N_2 \in \mathbb{N}$ tal que

$$n, m \geq N_2 \implies d(x_n, x_m) < \frac{1}{2^2}.$$

Sea $n_2 = \max\{N_1, N_2\} + 1$. Entonces:

1. $n_2 > n_1$.
2. Como $n_1, n_2 \geq N_1$, se tiene $d(x_{n_2}, x_{n_1}) < \dfrac{1}{2}$.
3. $n_2 \geq N_2$.

**Paso inductivo.**

Supongamos que hemos construido $n_1 < n_2 < \cdots < n_k$ y $N_1, \ldots, N_k$ que satisfacen:

1. $n_1 < n_2 < \cdots < n_k$.
2. $d(x_{n_{j+1}}, x_{n_j}) < \dfrac{1}{2^j}$, para $j = 1, \ldots, k-1$.
3. $n_j \geq N_j$ y además $n, m \geq N_j \implies d(x_n, x_m) < \dfrac{1}{2^j}$, para $j = 1, \ldots, k$.

Para $\varepsilon = \dfrac{1}{2^{k+1}}$ existe $N_{k+1} \in \mathbb{N}$ tal que

$$n, m \geq N_{k+1} \implies d(x_n, x_m) < \frac{1}{2^{k+1}}.$$

Sea $n_{k+1} := \max\{n_k, N_{k+1}\} + 1$. Entonces:

1. $n_{k+1} > n_k$.
2. Como $n_{k+1} > n_k \geq N_k$, ambos índices son $\geq N_k$, y por (3) con $j = k$:
$$d(x_{n_{k+1}}, x_{n_k}) < \frac{1}{2^k}.$$
3. $n_{k+1} \geq N_{k+1}$, de modo que (3) se cumple también para $j = k+1$.

Por lo tanto, hemos construido $n_1 < \cdots < n_k < n_{k+1}$ tales que

$$d(x_{n_{j+1}}, x_{n_j}) < \frac{1}{2^j}, \quad j = 1, \ldots, k.$$

**Conclusión.**

Por inducción obtenemos una sucesión estrictamente creciente $(n_k)_{k=1}^{\infty}$, es decir, $(x_{n_k})_{k=1}^{\infty}$ es una subsucesión de $(x_n)$, que satisface

$$d(x_{n_k}, x_{n_{k+1}}) < \frac{1}{2^k} \leq \frac{1}{2^k}, \quad \forall \; k \geq 1. \qquad \blacksquare$$

---

## 5.32 Ejercicio

Sean $\alpha, \beta > 0$. Prueba que

$$\lim_{n\to\infty} \sqrt[n]{\alpha^n + \beta^n} = \max\{\alpha, \beta\}.$$

**Sugerencia:** empieza probando que

$$\max\{\alpha, \beta\} \leq \sqrt[n]{\alpha^n + \beta^n} \leq \sqrt[n]{2}\,\max\{\alpha, \beta\}.$$

---

**Demostración**

Sea $M := \max\{\alpha, \beta\} > 0$ y sea $x_n := \sqrt[n]{\alpha^n + \beta^n}$.

**p.d.** $\displaystyle\lim_{n \to \infty} x_n = M$.

---

**Cota inferior**

Sea $n \in \mathbb{N}$. Como $\alpha, \beta > 0$, tenemos $\alpha^n, \beta^n > 0$. Además $M = \alpha$ o $M = \beta$, así que $M^n$ es uno de los sumandos de $\alpha^n + \beta^n$ y el otro sumando es positivo

$$
\begin{aligned}
M^n &\leq \alpha^n + \beta^n \\
\implies \qquad M &\leq \sqrt[n]{\alpha^n + \beta^n} \qquad \text{(}t \longmapsto \sqrt[n]{t} \text{ es creciente en } [0,\infty)\text{)} \\
\implies \qquad M &\leq x_n \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

---

**Cota superior**

Sea $n \in \mathbb{N}$. Como $\alpha \leq M$ y $\beta \leq M$, y $t \longmapsto t^n$ es creciente en $[0,\infty)$

$$
\begin{aligned}
\alpha^n &\leq M^n \\
\beta^n &\leq M^n \\
\implies \qquad \alpha^n + \beta^n &\leq 2M^n \\
\implies \qquad \sqrt[n]{\alpha^n + \beta^n} &\leq \sqrt[n]{2M^n} \\
&= \sqrt[n]{2}\,M \\
\implies \qquad x_n &\leq \sqrt[n]{2}\,M \qquad \forall \; n \in \mathbb{N}
\end{aligned}
$$

Juntando ambas cotas

$$M \leq x_n \leq \sqrt[n]{2}\,M \qquad \forall \; n \in \mathbb{N} \qquad (\star)$$

---

**Límite de $\sqrt[n]{2}$**

**p.d.** $\displaystyle\lim_{n \to \infty}\sqrt[n]{2} = 1$.

Sea $n \geq 2$. Como $2 \leq n$ y $t \longmapsto \sqrt[n]{t}$ es creciente en $[0,\infty)$

$$
\begin{aligned}
\sqrt[n]{2} &\leq \sqrt[n]{n} \\
\sqrt[n]{2} &\geq \sqrt[n]{1} = 1 \\
\implies \qquad 1 &\leq \sqrt[n]{2} \leq \sqrt[n]{n} \qquad \forall \; n \geq 2
\end{aligned}
$$

$$
\begin{aligned}
\sqrt[n]{n} &\xrightarrow{\;n \to \infty\;} 1 \qquad \text{(ejemplo de la teoría)} \\[1em]
1 &\xrightarrow{\;n \to \infty\;} 1
\end{aligned}
$$

Por la ley del sándwich

$$\lim_{n \to \infty}\sqrt[n]{2} = 1$$

---

**Límite de la cota superior**

Como $M$ es constante, por las propiedades algebraicas de los límites

$$
\begin{aligned}
\lim_{n \to \infty}\sqrt[n]{2}\,M &= M\lim_{n \to \infty}\sqrt[n]{2} \\
&= M \cdot 1 \\
&= M
\end{aligned}
$$

---

**Ley del sándwich**

$$
\begin{aligned}
\sqrt[n]{2}\,M &\xrightarrow{\;n \to \infty\;} M \\[1em]
M &\xrightarrow{\;n \to \infty\;} M
\end{aligned}
$$

Por $(\star)$ y la ley del sándwich

$$\lim_{n \to \infty} x_n = M$$

$$
\boxed{\lim_{n\to\infty} \sqrt[n]{\alpha^n + \beta^n} = \max\{\alpha, \beta\}} \;\blacksquare
$$
