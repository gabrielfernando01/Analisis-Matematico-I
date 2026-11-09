# Ejercicios Sección 1. Conjuntos.

## 1.14 Ejercicio

Si $A$ es un subconjunto finito y $B \subseteq A$ entonces $B$ es finito.

### Dem.

Procedemos por inducción sobre $n = |A|$.

**Base ($n=0$).** Si $A=\emptyset$ y $B\subseteq A$, entonces $B=\emptyset$, que es finito por definición.

**Hipótesis de inducción.** Supongamos que para todo conjunto con $n$ elementos, cualquier subconjunto suyo es finito.

**Paso inductivo.** Sea $A$ con $|A|=n+1$, es decir, existe una biyección $f:\{1,\ldots,n+1\}\to A$. Sea $a:=f(n+1)\in A$. Notemos que $A\setminus\{a\}$ tiene $n$ elementos (basta restringir $f$ a $\{1,\ldots,n\}$, que sigue siendo biyección sobre $A\setminus\{a\}$).

Sea $B\subseteq A$. Distinguimos dos casos:

- **Caso $a\notin B$.** Entonces $B\subseteq A\setminus\{a\}$, y como $A\setminus\{a\}$ tiene $n$ elementos, por hipótesis de inducción $B$ es finito.

- **Caso $a\in B$.** Entonces $B\setminus\{a\}\subseteq A\setminus\{a\}$, que tiene $n$ elementos. Por hipótesis de inducción, $B\setminus\{a\}$ es finito.

    - Si $B\setminus\{a\}=\emptyset$, entonces $B=\{a\}$, que es finito.
    - En otro caso, existe $k\in\mathbb{N}$ y una biyección $h:\{1,\ldots,k\}\to B\setminus\{a\}$. Definimos $\bar h:\{1,\ldots,k+1\}\to B$ por
    $$
    \bar h(i) = \begin{cases} h(i) & \text{si } i\le k, \\ a & \text{si } i=k+1. \end{cases}
    $$
    Como $a\notin B\setminus\{a\}$, la función $\bar h$ es biyección. Luego $B$ es finito.

Por inducción, para todo conjunto finito $A$ y todo $B\subseteq A$, $B$ es finito. $\blacksquare$

---

## 1.15 Ejercicio

**1**. Prueba que un conjunto es infinito si y sólo si contiene un conjunto numerable.

**($\Leftarrow$)** Supongamos que $A$ es finito. Como $N\subseteq A$, por el Ejercicio 1.14,
$N$ es finito.

Pero $N$ es numerable, es decir $N\sim\mathbb{N}$. Si $N$ fuera finito, existiría $n\in\mathbb{N}$
con $N\sim\{1,\ldots,n\}$; por transitividad de $\sim$, se tendría $\mathbb{N}\sim\{1,\ldots,n\}$,
es decir $\mathbb{N}$ sería finito — falso. Por lo tanto $N$ es infinito.

Esto contradice que $N$ sea finito. Por lo tanto $A$ es infinito. $\blacksquare$

**($\Rightarrow$)** Supongamos $A$ infinito. En particular $A\neq\emptyset$, así que podemos elegir $a_1\in A$.

Notemos que para cualquier subconjunto finito $\{a_1,\ldots,a_n\}\subseteq A$, se tiene $A\setminus\{a_1,\ldots,a_n\}\neq\emptyset$: si fuera vacío, tendríamos $A=\{a_1,\ldots,a_n\}$, y por lo tanto $A$ sería finito, contradiciendo la hipótesis.

Así, usando el axioma de elección (dependiente), podemos definir recursivamente
$$
a_{n+1} \in A\setminus\{a_1,\ldots,a_n\}, \qquad n\ge 1,
$$
obteniendo una sucesión $a_1,a_2,a_3,\ldots$ de elementos de $A$ **todos distintos entre sí** (pues $a_{n+1}\notin\{a_1,\ldots,a_n\}$ por construcción).

Definimos $h:\mathbb{N}\to A$, $h(n)=a_n$. Como los $a_n$ son distintos dos a dos, $h$ es inyectiva. Sea $N:=h(\mathbb{N})=\{a_1,a_2,a_3,\ldots\}\subseteq A$. Entonces $h:\mathbb{N}\to N$ es una biyección (inyectiva por lo anterior, suprayectiva por definición de $N$ como su imagen). Luego $N\sim\mathbb{N}$, es decir, $N$ es un subconjunto numerable de $A$. $\blacksquare$

**2**. Prueba que un conjunto es infinito si y sólo si contiene un subconjunto propio equivalente a él mismo. 

**($\Leftarrow$)** Supongamos que existe $B\subsetneq A$ con $A\sim B$. Veamos que $A$ es infinito.

Si $A=\emptyset$, no tiene subconjuntos propios, así que $A\neq\emptyset$.

Supongamos, por contradicción, que $A$ es finito y no vacío, es decir $A\sim\{1,\ldots,n\}$ para algún $n\in\mathbb{N}$. Como $B\subsetneq A$, por el Ejercicio 1.14, $B$ es finito, y de hecho $B\sim\{1,\ldots,k\}$ para algún $k<n$ (pues $B$ es un subconjunto **propio** de un conjunto equivalente a $\{1,\ldots,n\}$; el argumento del sublema anterior muestra que un subconjunto propio de $\{1,\ldots,n\}$ tiene, tras reordenar, a lo más $n-1$ elementos, luego es equivalente a $\{1,\ldots,k\}$ con $k<n$).

Entonces, por transitividad de $\sim$,
$$
\{1,\ldots,n\} \sim A \sim B \sim \{1,\ldots,k\}, \qquad k<n.
$$
Pero por el Principio del Palomar no existe biyección entre $\{1,\ldots,n\}$ y $\{1,\ldots,k\}$ si $k<n$ (una inyección $\{1,\ldots,n\}\to\{1,\ldots,k\}$ con $k<n$ es imposible). Contradicción. Por lo tanto $A$ es infinito.

**($\Rightarrow$)** Supongamos $A$ infinito. Por la parte 1, existe un subconjunto numerable $N=\{a_1,a_2,a_3,\ldots\}\subseteq A$ (con $a_n$ dos a dos distintos, vía biyección $h:\mathbb{N}\to N$, $h(n)=a_n$).

Sea $B:=A\setminus\{a_1\}$. Como $a_1\in A\setminus B$, $B\subsetneq A$ es un subconjunto propio.

Definimos $f:A\to B$ por
$$
f(x)=
\begin{cases}
a_{n+1} & \text{si } x=a_n\in N,\\
x & \text{si } x\in A\setminus N.
\end{cases}
$$

- **Inyectiva.** Si $x,y\in A\setminus N$, $f(x)=x=y=f(y)$ es trivial. Si $x=a_n,\,y=a_m\in N$ y $f(x)=f(y)$, entonces $a_{n+1}=a_{m+1}$, y como $h$ es inyectiva, $n+1=m+1$, luego $n=m$, es decir $x=y$. Si $x\in N$ y $y\in A\setminus N$ (o viceversa), $f(x)\in N$ (pues $f(x)=a_{n+1}$) mientras $f(y)=y\in A\setminus N$, así que $f(x)\neq f(y)$.
- **Suprayectiva sobre $B$.** Sea $b\in B=A\setminus\{a_1\}$. Si $b\in A\setminus N$, entonces $f(b)=b$. Si $b\in N\setminus\{a_1\}$, entonces $b=a_m$ para algún $m\ge 2$, y tomando $n=m-1\ge 1$ tenemos $f(a_n)=a_{n+1}=a_m=b$.

Por lo tanto $f:A\to B$ es una biyección, es decir $A\sim B$, con $B\subsetneq A$. $\blacksquare$

---

## 1.16 Ejercicio

Prueba que si $A$ es infinito y $B$ es contable entonces $A$ y $A \cup B$ son equivalentes.

Sugerecia: usar el ejercicio anterior para "acomodar" a $B$ en una parte de $A$.

### Dem.

Como $A\cup B = A\cup(B\setminus A)$, y $B':=B\setminus A$ es contable (subconjunto de un conjunto contable, hecho ya usado en la demostración del Teorema 1.4), basta probar
$$
A \sim A\cup B',
$$
donde ahora $B'\cap A=\emptyset$.

Si $B'=\emptyset$, entonces $A\cup B'=A$ y el resultado es trivial (identidad). Supongamos $B'\neq\emptyset$.

Por el Ejercicio 1.15(1), como $A$ es infinito, existe un subconjunto numerable
$$
N=\{a_1,a_2,a_3,\ldots\}\subseteq A,
$$
con $a_i$ dos a dos distintos (vía una biyección $h:\mathbb{N}\to N$).

Como $B'$ es contable y no vacío, o bien $B'$ es finito con $|B'|=k$ elementos, o bien $B'$ es numerable; en ambos casos existe una enumeración sin repeticiones $b_1,b_2,\ldots$ de $B'$ (finita o infinita según el caso).

**Caso $B'$ finito, $B'=\{b_1,\ldots,b_k\}$.** Definimos $f:A\cup B' \to A$ por
$$
f(x)=
\begin{cases}
a_i & \text{si } x=b_i,\ 1\le i\le k,\\
a_{i+k} & \text{si } x=a_i\in N,\\
x & \text{si } x\in A\setminus N.
\end{cases}
$$
Las tres piezas de la definición tienen imágenes disjuntas: $\{a_1,\ldots,a_k\}$ (desde los $b_i$), $\{a_{k+1},a_{k+2},\ldots\}$ (desde los $a_i$, vía el corrimiento $i\mapsto i+k$), y $A\setminus N$ (identidad); y cada pieza es inyectiva por separado. Luego $f$ es inyectiva. La unión de las imágenes es
$$
\{a_1,\ldots,a_k\}\cup\{a_{k+1},a_{k+2},\ldots\}\cup(A\setminus N) = N\cup(A\setminus N)=A,
$$
así que $f$ es suprayectiva sobre $A$. Por lo tanto $f$ es una biyección de $A\cup B'$ sobre $A$, es decir $A\cup B'\sim A$.

**Caso $B'$ numerable, $B'=\{b_1,b_2,b_3,\ldots\}$.** Definimos $f:A\cup B'\to A$ por
$$
f(x)=
\begin{cases}
a_{2i-1} & \text{si } x=b_i,\ i\in\mathbb{N},\\
a_{2i} & \text{si } x=a_i\in N,\\
x & \text{si } x\in A\setminus N.
\end{cases}
$$
Los $b_i$ se envían a las posiciones impares $a_1,a_3,a_5,\ldots$ de $N$, y los $a_i$ a las posiciones pares $a_2,a_4,a_6,\ldots$; como $\{$impares$\}$ y $\{$pares$\}$ particionan a $\mathbb{N}$, estas dos piezas tienen imágenes disjuntas cuya unión es exactamente $N$, y cada una es inyectiva (pues $h$ lo es). Junto con la identidad en $A\setminus N$, se obtiene que $f$ es inyectiva, y su imagen es
$$
N \cup (A\setminus N) = A,
$$
por lo que $f$ es suprayectiva. Así, $f:A\cup B'\to A$ es una biyección, es decir $A\cup B'\sim A$.

**Conclusión.** En cualquier caso, $A\cup B' \sim A$, y como $A\cup B = A\cup B'$, concluimos
$$
A \sim A\cup B. \qquad\blacksquare
$$

## 1.17 Ejercicio

Sean $A_1, A_2, B_1, B_2$ conjuntos tales que $A_1$ y $A_2$ son equivalentes y $B_1$ y $B_2$ son equivalentes. Prueba que $A_1 \times B_1$ es equivalente a $A_2 \times B_2$

Sugerencia tomar producto cartesiano de funciones

## Demostracion

Como $A_1$ y $A_2$ son equivalentes, sabemos que existe una funcion biyectiva

$$f: A_1 \longrightarrow A_2$$

De la misma manera, como $B_1 \sim B_2$, existe una funcion biyectiva

$$g: B_1 \longrightarrow B_2$$

Definimos $F: A_1 \times B_1 \longrightarrow A_2 \times B_2$ como

$$F(a,b) = (f(a), g(b))$$

### Veamos que $F$ esta bien definida

Sea $(a,b) \in A_1 \times B_1$, por definicion de producto cartesiano tenemos que $a \in A_1$ y $b \in B_1$.

Como $f: A_1 \to A_2$ sabemos que $f(a) \in A_2$.

Como $g: B_1 \to B_2$ sabemos que $g(b) \in B_2$.

$$\Rightarrow (f(a), g(b)) \in A_2 \times B_2$$

$$\therefore F(a,b) \text{ esta bien definida.}$$

### Veamos que $F$ es biyectiva

**P.d.** $F$ es inyectiva.

Sean $(a,b), (a',b') \in A_1 \times B_1$ y supongamos que $F(a,b) = F(a',b')$. **P.d.** $(a,b) = (a',b')$.

Entonces

$$(f(a), g(b)) = (f(a'), g(b'))$$

Por igualdad de pares ordenados:

$$f(a) = f(a') \quad \text{y} \quad g(b) = g(b')$$

Como $f$ es inyectiva, $a = a'$.

Como $g$ es inyectiva, $b = b'$.

$$\therefore (a,b) = (a',b')$$

y $F$ es inyectiva.

**P.d.** $F$ es sobreyectiva.

Sea $(c,d) \in A_2 \times B_2$ arbitrario. Como $f$ es sobreyectiva, existe $a \in A_1$ tal que $f(a) = c$. Como $g$ es sobreyectiva, existe $b \in B_1$ tal que $g(b) = d$.

Entonces $(a,b) \in A_1 \times B_1$ y

$$F(a,b) = (f(a), g(b)) = (c,d)$$

$$\therefore F \text{ es sobreyectiva.}$$

Como $F$ es inyectiva y sobreyectiva, $F$ es biyectiva. Por lo tanto,

$$A_1 \times B_1 \sim A_2 \times B_2 \; \blacksquare$$

## 1.18 Ejercicio (NO VIENE)

Sea $A$ un conjunto contable y sean $C$, $B$ dos conjuntos.

**1**. Prueba que si existe una función $f: \; A \longrightarrow B$ suprayectiva, $A$ contable, entonces $B$ contable.

**Demostración**

**Caso $A=\emptyset$.** Si $A=\emptyset$, la única función $f:A\to B$ es la función vacía, y para que sea suprayectiva se necesita $B=\emptyset$ (si hubiera $b\in B$, no tendría preimagen). Como $\emptyset$ es finito, $B$ es contable.

**Caso $A\neq\emptyset$.** Como $A$ es contable y no vacío, existe una función **suprayectiva** $\varphi:\mathbb{N}\to A$:

- Si $A$ es numerable, existe una biyección $h:\mathbb{N}\to A$; tomamos $\varphi=h$.
- Si $A$ es finito no vacío, existe una biyección $h:\{1,\dots,n\}\to A$; extendemos definiendo

$$
\varphi(k)=\begin{cases} h(k) & k\le n\\ h(n) & k> n\end{cases}
$$

que es suprayectiva $\mathbb{N}\to A$ (repite el último valor).

En ambos casos, la composición

$$f\circ\varphi:\mathbb{N}\longrightarrow B$$

es suprayectiva, por ser composición de dos funciones suprayectivas ($\varphi$ suprayectiva y $f$ suprayectiva).

**Construcción de una inyección $g:B\to\mathbb{N}$.** Para cada $b\in B$, el conjunto

$$J_b=\{n\in\mathbb{N}: (f\circ\varphi)(n)=b\}$$

es no vacío (pues $f\circ\varphi$ es suprayectiva). Por el **principio del buen orden de $\mathbb{N}$**, definimos

$$g(b)=\min(J_b).$$

*$g$ es inyectiva:* si $g(b_1)=g(b_2)=n_0$, entonces $n_0\in J_{b_1}$ y $n_0\in J_{b_2}$, es decir

$$b_1=(f\circ\varphi)(n_0)=b_2.$$

Por lo tanto $g:B\to\mathbb{N}$ es inyectiva, así que $g$ es una biyección entre $B$ y su imagen $g(B)\subseteq\mathbb{N}$, es decir

$$B\sim g(B)\subseteq\mathbb{N}.$$

Por el Lema 1.3(1), todo subconjunto de $\mathbb{N}$ es finito o (si es infinito) equivalente a $\mathbb{N}$; en cualquier caso $g(B)$ es contable. Como $B\sim g(B)$, concluimos que $B$ es contable. $\blacksquare$

---

**2**. $f: \; C \longrightarrow A$, $A$ contable, inyectiva entonces $C$ es contable.

Como $f$ es inyectiva, la función $f:C\to f(C)$ (restringiendo el codominio a la imagen) es una biyección: es suprayectiva sobre su imagen por definición, y sigue siendo inyectiva. Por lo tanto

$$C\sim f(C).$$

Además $f(C)\subseteq A$. Veamos que **todo subconjunto de un conjunto contable es contable**, lo que basta para concluir:

- Si $A$ es finito, entonces $f(C)\subseteq A$ también es finito (un subconjunto de un conjunto finito no puede tener más elementos que él), luego contable.
- Si $A$ es numerable, sea $h:\mathbb{N}\to A$ una biyección. Entonces $h^{-1}(f(C))\subseteq \mathbb{N}$, y como $h$ restringida a $h^{-1}(f(C))$ es una biyección sobre $f(C)$,

$$f(C)\sim h^{-1}(f(C))\subseteq\mathbb{N}.$$

Por el Lema 1.3(1), $h^{-1}(f(C))$ es finito o numerable, luego contable; y por lo tanto $f(C)$ también es contable.

En cualquier caso, $f(C)$ es contable. Como $C\sim f(C)$, concluimos que **$C$ es contable**. $\blacksquare$

---

**Observación.** Ambos incisos son, en esencia, el mismo hecho visto desde direcciones opuestas: una suprayección $A\to B$ "no aumenta cardinalidad" (produce una inyección $B\to\mathbb{N}$ vía el buen orden), mientras que una inyección $C\to A$ literalmente identifica a $C$ con un subconjunto de $A$. Estos dos resultados son justo los que usa el Teorema 1.4 (unión numerable de numerables) cuando dice que "todo subconjunto de un conjunto numerable es a lo más numerable" y que la existencia de $f$ suprayectiva y $g$ inyectiva entre $\bigcup A_i$ y $\mathbb{N}\times\mathbb{N}$ da la cardinalidad buscada.

---

## 1.19 Ejercicio

Prueba que $(0, 1)$ y $(0, 1]$ son equivalentes.

### Demostración (vía Cantor–Bernstein)

Veamos que existen $f:(0,1)\longrightarrow(0,1]$ y $g:(0,1]\longrightarrow(0,1)$ dos funciones inyectivas.

**Definición de $f$.**

Definamos $f:(0,1)\longrightarrow(0,1]$ por $f(x)=x$.

La cual está bien definida pues como $(0,1)\subseteq(0,1]$, entonces si $x\in(0,1)$ tenemos que $f(x)=x\in(0,1]$.

**$f$ es inyectiva.**

Sean $x_1,x_2\in(0,1)$ tales que $f(x_1)=f(x_2)$. P.d. $x_1=x_2$.

Sabemos que $f(x_1)=x_1$ y $f(x_2)=x_2$.

$$f(x_1)=f(x_2) \Rightarrow x_1=x_2.$$

$\therefore f$ es inyectiva.

**Definición de $g$.**

Definamos $g:(0,1]\longrightarrow(0,1)$ por

$$g(x)=\frac{x}{2}.$$

Veamos que $g$ está bien definida. Sea $x\in(0,1]$. P.d. $\dfrac{x}{2}\in(0,1)$.

Como

$$x\in(0,1] \Rightarrow 0<x\le 1 \Rightarrow 0<\frac{x}{2}\le\frac12<1 \Rightarrow 0<\frac{x}{2}<1$$

$$\Rightarrow \frac{x}{2}\in(0,1).$$

Por tanto $g$ está bien definida.

**$g$ es inyectiva.**

Sean $x_1,x_2\in(0,1]$ tales que $g(x_1)=g(x_2)$. P.d. $x_1=x_2$.

$$g(x_1)=g(x_2) \Rightarrow \frac{x_1}{2}=\frac{x_2}{2} \Rightarrow x_1=x_2.$$

$\therefore g$ es inyectiva.

**Conclusión.**

Como $f:(0,1)\longrightarrow(0,1]$ y $g:(0,1]\longrightarrow(0,1)$ son inyectivas, por el Teorema de Cantor–Bernstein tenemos que

$$(0,1)\sim(0,1].\qquad\blacksquare$$

---

### Otra demostración (vía Ejercicio 1.16)

Notemos que

$$(0,1]=(0,1)\cup\{1\}.$$

Por el Teorema 1.7 sabemos que $(0,1)$ es no numerable, entonces $(0,1)$ es infinito.

Notemos también que $\{1\}$ es contable, pues es un conjunto finito.

Por el Ejercicio 1.16 sabemos que

$$(0,1)\sim(0,1)\cup\{1\}$$

$$\Rightarrow (0,1)\sim(0,1].\qquad\blacksquare$$

---

## 1.20 Ejercicio (NO VIENE)

Prueba que $\mathbb{Q}$ es numerable.

**Sugerencia:** usa el teorema anterior.

### Demostración

**Paso 1: $\mathbb{Z}$ es numerable.**

Definimos $h:\mathbb{N}\to\mathbb{Z}$ por

$$
h(n)=\begin{cases}
\dfrac{n}{2} & \text{si } n \text{ es par}\\[4pt]
-\dfrac{n-1}{2} & \text{si } n \text{ es impar}
\end{cases}
$$

Es decir, $h$ recorre $\mathbb{Z}$ como $0,-1,1,-2,2,-3,3,\dots$

*$h$ es inyectiva:* si $h(n_1)=h(n_2)$ con ambos pares, entonces $n_1/2=n_2/2\Rightarrow n_1=n_2$; si ambos impares, análogo; y $h(n)$ es siempre $\ge 0$ para $n$ par y $<0$ para $n$ impar, así que valores con distinta paridad de $n$ nunca coinciden.

*$h$ es suprayectiva:* dado $k\in\mathbb{Z}$, si $k\ge 0$ tomamos $n=2k$ (par) y $h(n)=k$; si $k<0$ tomamos $n=-2k+1$ (impar) y $h(n)=-\frac{(-2k+1)-1}{2}=k$.

Por lo tanto $h$ es biyectiva y $\mathbb{Z}\sim\mathbb{N}$, es decir, $\mathbb{Z}$ es numerable.

**Paso 2: para cada $n\in\mathbb{N}$, el conjunto $B_n=\left\{\dfrac{m}{n} : m\in\mathbb{Z}\right\}$ es numerable.**

Definimos $\varphi_n:\mathbb{Z}\to B_n$ por $\varphi_n(m)=\dfrac{m}{n}$.

Claramente $\varphi_n$ es suprayectiva sobre $B_n$ (por definición de $B_n$), y es inyectiva pues

$$\varphi_n(m_1)=\varphi_n(m_2) \Rightarrow \frac{m_1}{n}=\frac{m_2}{n} \Rightarrow m_1=m_2.$$

Entonces $\varphi_n$ es biyectiva y $B_n\sim\mathbb{Z}$. Como $\mathbb{Z}$ es numerable (Paso 1), y la equivalencia $\sim$ es transitiva (Lema 1.2), concluimos que $B_n$ es numerable para todo $n\in\mathbb{N}$.

**Paso 3: $\mathbb{Q}=\displaystyle\bigcup_{n=1}^{\infty} B_n$.**

Si $x\in\mathbb{Q}$, entonces $x=\dfrac{m}{n}$ para algunos $m\in\mathbb{Z}$, $n\in\mathbb{N}$, así que $x\in B_n\subseteq\bigcup_{n=1}^\infty B_n$. Recíprocamente, cada $B_n\subseteq\mathbb{Q}$ por definición. Por lo tanto

$$\mathbb{Q}=\bigcup_{n=1}^{\infty} B_n.$$

**Paso 4: conclusión.**

Por el Paso 2, cada $B_n$ es numerable. Por el **Teorema 1.4** (unión numerable de conjuntos numerables es numerable),

$$\mathbb{Q}=\bigcup_{n=1}^{\infty} B_n \quad\text{es numerable.}$$

Además, como $\mathbb{N}\subseteq\mathbb{Q}$ (tomando $n=1$ en $B_1=\mathbb{Z}$), $\mathbb{Q}$ es infinito, así que efectivamente $\mathbb{Q}\sim\mathbb{N}$ en el sentido estricto de numerable. $\blacksquare$

---

## 1.21 Ejercicio

Prueba que toda familia de intervalos abiertos en $\mathbb{R}$, distinta del vacío y ajena dos a dos, debe ser contable.

Es decir, si $\mathcal{F}$ es una familia de intervalos abiertos de $\mathbb{R}$, que satisface $I \neq \emptyset$ para toda $I \in \mathcal{F}$ y $I \cap J = \emptyset$, para cualesquiera $I, J \in \mathcal{F}$ distintas, entonces $\mathcal{F}$ es contable.

### Demostración

Por el Ejercicio 1.20 sabemos que $\mathbb{Q}$ es numerable, entonces es equivalente a $\mathbb{N}$, por lo que existe una función biyectiva

$$q:\mathbb{N}\longrightarrow\mathbb{Q}.$$

Como $q$ es biyectiva tenemos que $q(\mathbb{N})=\mathbb{Q}$

$$\Rightarrow \{q(n): n\in\mathbb{N}\}=\mathbb{Q} \Rightarrow \{q(1),q(2),q(3),\dots\}=\mathbb{Q}.$$

$\forall n\in\mathbb{N}$ definimos $q_n:=q(n)$. Entonces

$$\mathbb{Q}=\{q_1,q_2,q_3,\dots\}.$$

Para cada $I\in\mathcal{F}$ consideremos el conjunto $A_I=\{n\in\mathbb{N} : q_n\in I\}$.

Notemos que $A_I\neq\emptyset$ pues sabemos que todo intervalo abierto no vacío en $\mathbb{R}$ contiene un número racional.

Como $A_I\subseteq\mathbb{N}$ es subconjunto no vacío, sabemos que $\min A_I$ existe y además es único. $\forall I\in\mathcal{F}$ definimos $n_I=\min A_I$.

Definimos $f:\mathcal{F}\longrightarrow\mathbb{N}$ por $f(I)=n_I$.

Veamos que está bien definida. Sea $I\in\mathcal{F}$, sabemos que el conjunto $A_I\subseteq\mathbb{N}$ es no vacío y por tanto tiene mínimo, así $n_I\in\mathbb{N}$.

**Veamos que $f$ es inyectiva.**

Sean $I,J\in\mathcal{F}$ y supongamos que $f(I)=f(J)$. P.d. $I=J$.

Como $f(I)=f(J)$

$$\Rightarrow n_I=n_J \Rightarrow q_{n_I}=q_{n_J}.$$

Definamos $q_0:=q_{n_I}=q_{n_J}$.

Sabemos que $n_I\in A_I$ y $n_J\in A_J$ (pues el mínimo de un conjunto está en el conjunto)

$$\Rightarrow q_{n_I}\in I \text{ y } q_{n_J}\in J \Rightarrow q_0\in I \text{ y } q_0\in J \Rightarrow q_0\in I\cap J.$$

Entonces $I\cap J\neq\emptyset$, pero como los intervalos de $\mathcal{F}$ son ajenos dos a dos, entonces necesariamente $I=J$.

$\therefore f$ es inyectiva.

Como $f:\mathcal{F}\longrightarrow\mathbb{N}$ es inyectiva y $\mathbb{N}$ es contable (pues es numerable), entonces por el Ejercicio 1.18 b) tenemos que $\mathcal{F}$ es contable. $\blacksquare$

---

## 1.22 Ejercicio

Prueba que $\mathbb{N}$ tiene una cantidad infinita de conjuntos infinitos, ajenos dos a dos.

**Sugerencia:** usa que $\mathbb{N}\sim\mathbb{N}\times\mathbb{N}$.

### Demostración

Por el Lema 1.3(2) sabemos que $\mathbb{N}\times\mathbb{N}\sim\mathbb{N}$, vía la función biyectiva

$$f:\mathbb{N}\times\mathbb{N}\longrightarrow\mathbb{N}, \qquad f(m,n)=2^{m-1}(2n-1).$$

**Construcción de la familia.**

Para cada $m\in\mathbb{N}$ definimos

$$A_m := \{f(m,n) : n\in\mathbb{N}\} \subseteq \mathbb{N}.$$

Es decir, $A_m$ es la imagen bajo $f$ del "renglón" $\{m\}\times\mathbb{N}$.

**Cada $A_m$ es infinito.**

Fijemos $m\in\mathbb{N}$ y consideremos $f_m:\mathbb{N}\to A_m$ dada por $f_m(n)=f(m,n)$. Esta función es suprayectiva sobre $A_m$ por definición de $A_m$, y es inyectiva pues es la restricción de $f$ (que ya sabemos inyectiva) a $\{m\}\times\mathbb{N}$: si $f(m,n_1)=f(m,n_2)$, como $f$ es inyectiva, $(m,n_1)=(m,n_2)$, luego $n_1=n_2$.

Por lo tanto $f_m$ es biyectiva y $A_m\sim\mathbb{N}$, así que $A_m$ es infinito (numerable), para todo $m\in\mathbb{N}$.

**Los $A_m$ son ajenos dos a dos.**

Sean $m_1,m_2\in\mathbb{N}$ con $m_1\neq m_2$. P.d. $A_{m_1}\cap A_{m_2}=\emptyset$.

Supongamos que existe $x\in A_{m_1}\cap A_{m_2}$. Entonces existen $n_1,n_2\in\mathbb{N}$ tales que

$$x = f(m_1,n_1) = f(m_2,n_2).$$

Como $f$ es inyectiva,

$$(m_1,n_1) = (m_2,n_2) \Rightarrow m_1 = m_2,$$

lo cual contradice que $m_1\neq m_2$. Por lo tanto $A_{m_1}\cap A_{m_2}=\emptyset$.

**Hay una cantidad infinita de tales conjuntos.**

La familia $\{A_m : m\in\mathbb{N}\}$ está indexada por $\mathbb{N}$, que es infinito; además los $A_m$ son distintos entre sí (pues son no vacíos y ajenos dos a dos), así que la familia $\{A_m : m\in\mathbb{N}\}$ es infinita.

**Conclusión.**

$\{A_m : m\in\mathbb{N}\}$ es una familia infinita de subconjuntos de $\mathbb{N}$, cada uno infinito, y ajenos dos a dos. $\blacksquare$

**Ejemplo explícito.** Con $f(m,n)=2^{m-1}(2n-1)$:

$$A_1=\{1,3,5,7,\dots\}\ (\text{impares}), \qquad A_2=\{2,6,10,14,\dots\}, \qquad A_3=\{4,12,20,28,\dots\},\ \dots$$

es decir, $A_m$ es el conjunto de los números de la forma $2^{m-1}\cdot(\text{impar})$, y $\mathbb{N}=\bigsqcup_{m=1}^{\infty} A_m$.

---

## 1.23 Ejercicio

Prueba que $(0,1)$ y $(0,1)\times(0,1)$ son equivalentes.

### Demostración (vía Cantor–Bernstein)

Construiremos dos funciones

$$f:(0,1)\longrightarrow(0,1)\times(0,1) \qquad \text{y} \qquad g:(0,1)\times(0,1)\longrightarrow(0,1)$$

inyectivas.

**Definición de $f$.**

Definamos $f:(0,1)\longrightarrow(0,1)\times(0,1)$ por

$$f(x)=\left(x,\frac12\right).$$

Está bien definida ya que si $x\in(0,1)$ y como $\dfrac12\in(0,1)$, entonces $\left(x,\dfrac12\right)\in(0,1)\times(0,1)$.

**Veamos que $f$ es inyectiva.**

Sean $x_1,x_2\in(0,1)$ y supongamos que $f(x_1)=f(x_2)$.

$$\Rightarrow \left(x_1,\frac12\right)=\left(x_2,\frac12\right) \Rightarrow x_1=x_2.$$

$\therefore f$ es inyectiva.

---

**Definición de $g$ (primer intento).**

Definimos $g:(0,1)\times(0,1)\longrightarrow(0,1)$ por

$$g(x,y)=0.x(1)y(1)x(2)y(2)x(3)y(3)\cdots$$

(Ejemplo: $x=0.3195\dots$, $y=0.2716\dots$, entonces $g(x,y)=0.32174156\dots$)

Así como está, **no está bien definida**. Tomemos $x=0.370000\dots$ y $y=0.323232\dots$

$$g(x,y)=g(0.37000\cdots,\,0.323232\cdots)=0.3372030303\cdots$$

Pero $x$ tiene otra representación, $x=0.36999\dots$

Si $g$ estuviera bien definida debería pasar que

$$g(0.36999\cdots,\,0.323232\cdots)=0.3370303\cdots,$$

pero

$$g(0.36999\cdots,\,0.323232\cdots)=0.33629392\cdots$$

Los resultados son diferentes. $\therefore\ g$ no está bien definida.

**¿Cómo se corrige la definición?**

Para cada $x\in(0,1)$ que tenga dos representaciones, una con cola de nueves y otra con cola de ceros, escogeremos solamente la representación con cola de cero.

Así definimos $g:(0,1)\times(0,1)\longrightarrow(0,1)$ por

$$g(x,y)=0.x(1)y(1)x(2)y(2)x(3)y(3)\cdots$$

la cual está bien definida.

**Observación:** la expansión decimal intercalada no tiene cola de nueves.

**Razón:**

Sean $x=x(1)x(2)x(3)\cdots$ y $y=y(1)y(2)y(3)\cdots$ como lo pide la definición de $g$. Sabemos que $g(x,y)=0.x(1)y(1)x(2)y(2)\cdots$

$\forall n\in\mathbb{N}$ definimos $C(2n-1)=x(n)$ y $C(2n)=y(n)$. Entonces

$$0.C(1)C(2)C(3)C(4)\cdots = 0.x(1)y(1)x(2)y(2)\cdots$$

Para llegar a una contradicción, supongamos que existe $N\in\mathbb{N}$ tal que $C(n)=9\ \forall n\ge N$.

$\forall n\ge N$ se cumple que $2n-1\ge N$, entonces

$$\Rightarrow C(2n-1)=9 \Rightarrow x(n)=9 \quad \forall n\ge N.$$

Así $x=x(1)x(2)x(3)\cdots$ tendría cola de nueves, pero la representación de $x$ por definición de $g$ es la que **no** tiene cola de nueves. Contradicción.

$\therefore\ 0.x(1)y(1)x(2)y(2)\cdots$ no tiene cola de nueves.

---

**Veamos que $g$ es inyectiva.**

Sean $(x,y),(u,v)\in(0,1)\times(0,1)$. Supongamos que

$$g(x,y)=g(u,v)$$

$$\Rightarrow 0.x(1)y(1)x(2)y(2)x(3)y(3)\cdots = 0.u(1)v(1)u(2)v(2)u(3)v(3)\cdots$$

Sabemos que estas expansiones intercaladas no tienen cola de nueves. Como representan el mismo número, la unicidad de la expansión sin cola de nueves implica que

$$x(1)=u(1),\ y(1)=v(1),\ x(2)=u(2),\ y(2)=v(2),\ \dots$$

$$\Rightarrow x(n)=u(n) \ \text{y}\ y(n)=v(n) \quad \forall n\in\mathbb{N}$$

$$\Rightarrow x=u \ \text{y}\ y=v \Rightarrow (x,y)=(u,v).$$

$\therefore g$ es inyectiva.

---

**Conclusión.**

Por el Teorema de Cantor–Bernstein tenemos que

$$(0,1)\sim(0,1)\times(0,1). \qquad\blacksquare$$

---

## 1.24 Ejercicio

Prueba que $(0, 1)$ y $\mathbb{R}$ son equivalentes.

### Demostración

Construiremos una función explícita $f:(0,1)\longrightarrow\mathbb{R}$ y probaremos que es biyectiva.

**Definición de $f$.**

Definimos $f:(0,1)\longrightarrow\mathbb{R}$ por

$$f(x)=\tan\!\left(\pi x-\frac{\pi}{2}\right).$$

**$f$ está bien definida.**

Sea $x\in(0,1)$. Entonces

$$0<x<1 \;\Rightarrow\; 0<\pi x<\pi \;\Rightarrow\; -\frac{\pi}{2}<\pi x-\frac{\pi}{2}<\frac{\pi}{2}.$$

Es decir, el argumento $\pi x-\dfrac{\pi}{2}$ siempre cae en el intervalo $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$, donde la función tangente está definida (no toca las asíntotas $\pm\dfrac{\pi}{2}$). Por lo tanto $f(x)\in\mathbb{R}$ está bien definido para todo $x\in(0,1)$.

**$f$ es inyectiva.**

Consideremos la función auxiliar

$$\varphi:(0,1)\longrightarrow\left(-\frac{\pi}{2},\frac{\pi}{2}\right), \qquad \varphi(x)=\pi x-\frac{\pi}{2}.$$

$\varphi$ es estrictamente creciente (es lineal con pendiente $\pi>0$), así que es inyectiva.

La función $\tan:\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)\to\mathbb{R}$ es estrictamente creciente (pues su derivada es $\sec^2(\theta)>0$ en todo el intervalo), así que también es inyectiva.

Como $f=\tan\circ\varphi$ es composición de dos funciones inyectivas, $f$ es inyectiva:

Sean $x_1,x_2\in(0,1)$ con $f(x_1)=f(x_2)$, es decir

$$\tan(\varphi(x_1))=\tan(\varphi(x_2)).$$

Por la inyectividad de $\tan$ en $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$, $\varphi(x_1)=\varphi(x_2)$, y por la inyectividad de $\varphi$, $x_1=x_2$.

$\therefore f$ es inyectiva.

**$f$ es suprayectiva.**

Primero, $\varphi:(0,1)\to\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ es suprayectiva: es una función lineal biyectiva entre estos dos intervalos (su inversa es $\varphi^{-1}(\theta)=\dfrac{\theta}{\pi}+\dfrac12$, que manda $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ en $(0,1)$).

Segundo, $\tan:\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)\to\mathbb{R}$ es suprayectiva: $\tan$ es continua en $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$, y

$$\lim_{\theta\to \frac{\pi}{2}^-}\tan(\theta)=+\infty, \qquad \lim_{\theta\to -\frac{\pi}{2}^+}\tan(\theta)=-\infty.$$

Dado cualquier $y\in\mathbb{R}$, por lo anterior existen $\theta_1,\theta_2\in\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ tales que $\tan(\theta_1)<y<\tan(\theta_2)$; por el Teorema del Valor Intermedio (ya que $\tan$ es continua), existe $\theta_0$ entre $\theta_1$ y $\theta_2$ con $\tan(\theta_0)=y$. Así, $\tan$ es suprayectiva sobre $\mathbb{R}$.

Como $f=\tan\circ\varphi$ es composición de dos funciones suprayectivas, $f$ es suprayectiva: dado $y\in\mathbb{R}$, existe $\theta_0\in\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ con $\tan(\theta_0)=y$, y como $\varphi$ es suprayectiva, existe $x_0\in(0,1)$ con $\varphi(x_0)=\theta_0$. Entonces

$$f(x_0)=\tan(\varphi(x_0))=\tan(\theta_0)=y.$$

$\therefore f$ es suprayectiva.

**Conclusión.**

$f$ es inyectiva y suprayectiva, luego $f$ es biyectiva. Por lo tanto

$$(0,1)\sim\mathbb{R}. \qquad\blacksquare$$

**Observación.** Combinando este resultado con el Ejercicio 1.19 ($(0,1)\sim(0,1]$) y el Lema 1.2 (transitividad de $\sim$), se sigue que $\mathbb{R}$ es equivalente a cualquier intervalo abierto, semiabierto o cerrado no degenerado de $\mathbb{R}$.

---

## 1.25 Ejercicio

Dado un natural $r\in\mathbb{N}$, por $\mathbb{N}^r$ denotamos el producto cartesiano de $\mathbb{N}$ consigo mismo $r$ veces.

Usando el Teorema de Cantor–Bernstein da una prueba de que $\mathbb{N}$ y $\mathbb{N}^r$ son equivalentes.

**Sugerencia:** muestra que si $p_1,\dots,p_r$ son $r$ primos distintos entonces $p_1^{n_1}\cdots p_r^{n_r}=p_1^{m_1}\cdots p_r^{m_r}$ si y sólo si $n_i=m_i$ para toda $i$.

### Demostración

Sea $r\in\mathbb{N}$ fijo. Recordemos que $\mathbb{N}^r=\underbrace{\mathbb{N}\times\cdots\times\mathbb{N}}_{r\text{-veces}}$.

P.d. $\mathbb{N}\sim\mathbb{N}^r$.

Para eso veamos que existen dos funciones inyectivas

$$f:\mathbb{N}\longrightarrow\mathbb{N}^r \qquad \text{y} \qquad g:\mathbb{N}^r\longrightarrow\mathbb{N}.$$

---

**Definición de $f$.**

Definimos $f:\mathbb{N}\longrightarrow\mathbb{N}^r$ por

$$f(n)=(n,n,\dots,n).$$

Está bien definida pues si $n\in\mathbb{N}$ entonces $(n,n,\dots,n)\in\mathbb{N}^r$.

**Veamos que $f$ es inyectiva.**

Sean $n,m\in\mathbb{N}$ y supongamos que $f(n)=f(m)$. P.d. $n=m$.

Como

$$f(n)=f(m) \Rightarrow (n,n,\dots,n)=(m,m,\dots,m) \Rightarrow n=m.$$

$\therefore f$ es inyectiva.

---

**Definición de $g$.**

Ahora definimos $g:\mathbb{N}^r\longrightarrow\mathbb{N}$.

Tomemos $r$ números primos distintos $p_1,\dots,p_r$. Definimos $g:\mathbb{N}^r\longrightarrow\mathbb{N}$ por

$$g(n_1,\dots,n_r)=p_1^{n_1}\cdots p_r^{n_r}.$$

**Veamos que está bien definida.**

Sea $(n_1,\dots,n_r)\in\mathbb{N}^r$; por definición de $\mathbb{N}^r$ tenemos que $n_1,\dots,n_r\in\mathbb{N}$. Como $p_1,\dots,p_r\in\mathbb{N}$, tenemos que $p_i^{n_i}\in\mathbb{N}$ para toda $i=1,\dots,r$

$$\Rightarrow p_1^{n_1}\cdots p_r^{n_r}\in\mathbb{N}.$$

Así $g$ está bien definida.

**Veamos que $g$ es inyectiva.**

Sean $(n_1,\dots,n_r),(m_1,\dots,m_r)\in\mathbb{N}^r$ y supongamos que $g(n_1,\dots,n_r)=g(m_1,\dots,m_r)$. P.d. $(n_1,\dots,n_r)=(m_1,\dots,m_r)$.

Como

$$g(n_1,\dots,n_r)=g(m_1,\dots,m_r)$$

$$\Rightarrow p_1^{n_1}\cdots p_r^{n_r}=p_1^{m_1}\cdots p_r^{m_r}.$$

Como $p_1,\dots,p_r$ son primos distintos, la unicidad de la factorización de un natural en números primos implica que

$$n_i=m_i \quad \forall i=1,\dots,r.$$

En consecuencia $(n_1,\dots,n_r)=(m_1,\dots,m_r)$.

$\therefore g$ es inyectiva.

---

**Conclusión.**

Hemos construido funciones inyectivas $f:\mathbb{N}\to\mathbb{N}^r$ y $g:\mathbb{N}^r\to\mathbb{N}$.

Por el Teorema de Cantor–Bernstein tenemos que

$$\mathbb{N}\sim\mathbb{N}^r. \qquad\blacksquare$$

---

## 1.26 Ejercicio (NO VIENE)

1. Encuentra dos representaciones ternarias distintas de los siguientes números: $1/3, 2/3, 1/9$.
2. Encuentra la representación ternaria de $1/2$ y prueba que es única.
3. Sea $x \in [0,1]$ con descomposición ternaria

$$
x = \sum_{i=1}^{\infty} \frac{\alpha_i}{3^i}.
$$

Prueba: $x = 0 \Leftrightarrow \alpha_i = 0$ para toda $i$;
$x = 1 \Leftrightarrow \alpha_i = 2$ para toda $i$.

### Solución

Usaremos la identidad de la serie geométrica ya establecida en las notas (Lema 1.11):

$$\sum_{i=N+1}^{\infty}\frac{2}{3^i} = \frac{1}{3^N}, \qquad N\in\mathbb{N}\cup\{0\}. \tag{$\ast$}$$

---

#### Parte 1. Dos representaciones ternarias distintas de $1/3,\,2/3,\,1/9$.

**$1/3$.** La representación "directa" es $\alpha_1=1$ y $\alpha_i=0$ para $i\ge 2$:

$$\frac13 = \frac{1}{3^1}.$$

La otra representación tiene $\alpha_1=0$ y cola de 2's a partir de $i=2$: usando $(\ast)$ con $N=1$,

$$\sum_{i=2}^{\infty}\frac{2}{3^i} = \frac{1}{3}.$$

Así, $\dfrac13 = 0.1000\ldots_{(3)} = 0.0222\ldots_{(3)}$.

**$2/3$.** La representación directa es $\alpha_1=2$, $\alpha_i=0$ para $i\ge2$:

$$\frac23 = \frac{2}{3^1}.$$

La otra tiene $\alpha_1=1$ y cola de 2's desde $i=2$:

$$\frac13 + \sum_{i=2}^{\infty}\frac{2}{3^i} = \frac13+\frac13 = \frac23.$$

Así, $\dfrac23 = 0.2000\ldots_{(3)} = 0.1222\ldots_{(3)}$.

**$1/9$.** La representación directa es $\alpha_2=1$, resto $0$:

$$\frac19 = \frac{1}{3^2}.$$

La otra tiene $\alpha_1=\alpha_2=0$ y cola de 2's desde $i=3$: usando $(\ast)$ con $N=2$,

$$\sum_{i=3}^{\infty}\frac{2}{3^i} = \frac{1}{9}.$$

Así, $\dfrac19 = 0.01000\ldots_{(3)} = 0.00222\ldots_{(3)}$.

---

#### Parte 2. Representación ternaria de $1/2$ y su unicidad.

**Representación.** Tomemos $\alpha_i = 1$ para toda $i\in\mathbb{N}$. Entonces, por la serie geométrica,

$$\sum_{i=1}^{\infty}\frac{1}{3^i} = \frac{\frac13}{1-\frac13} = \frac12.$$

Por lo tanto $\dfrac12 = 0.1111\ldots_{(3)}$.

**Unicidad.** Por el Lema 1.12(1) de las notas, si $x\in[0,1]$, $x\neq 0,1$, admite **dos** representaciones ternarias distintas, entonces $x$ es necesariamente de la forma

$$x = \frac{k}{3^n}, \qquad n,k\in\mathbb{N},\ k\le 3^n.$$

Veamos que $\dfrac12$ **no** es de esta forma. Supongamos, por contradicción, que existen $n,k\in\mathbb{N}$ con

$$\frac12 = \frac{k}{3^n} \;\Longrightarrow\; 3^n = 2k.$$

Pero $3^n$ es impar para todo $n\in\mathbb{N}$ (producto de factores impares), mientras que $2k$ es par. Esto es una contradicción. Por lo tanto $\dfrac12 \neq \dfrac{k}{3^n}$ para cualesquiera $n,k\in\mathbb{N}$.

Por el contrarrecíproco del Lema 1.12(1), $\dfrac12$ **no** puede admitir dos representaciones ternarias distintas. Así, la representación $0.1111\ldots_{(3)}$ encontrada arriba es **la única** representación ternaria de $1/2$. $\blacksquare$

---

#### Parte 3. Caracterización de $x=0$ y $x=1$.

Sea $x = \displaystyle\sum_{i=1}^{\infty}\frac{\alpha_i}{3^i}$, con $\alpha_i\in\{0,1,2\}$ para toda $i$.

##### $x=0 \iff \alpha_i=0$ para toda $i$.

$[\Leftarrow]$ Si $\alpha_i=0$ para toda $i$, entonces cada término de la serie es $0$, así que $x=\sum_{i=1}^\infty 0/3^i = 0$.

$[\Rightarrow]$ Supongamos $x=0$. Como $\alpha_i\ge 0$ para toda $i$, cada término $\alpha_i/3^i\ge 0$, así que la serie $\sum_{i=1}^\infty \alpha_i/3^i$ es una serie de términos no negativos.

Si existiera algún $i_0$ con $\alpha_{i_0}>0$ (es decir $\alpha_{i_0}\in\{1,2\}$), entonces, como todos los demás términos son $\ge 0$,

$$x = \sum_{i=1}^{\infty}\frac{\alpha_i}{3^i} \;\ge\; \frac{\alpha_{i_0}}{3^{i_0}} \;>\; 0,$$

lo cual contradice que $x=0$. Por lo tanto $\alpha_i=0$ para toda $i$.

##### $x=1 \iff \alpha_i=2$ para toda $i$.

$[\Leftarrow]$ Si $\alpha_i=2$ para toda $i$, por $(\ast)$ con $N=0$,

$$x = \sum_{i=1}^{\infty}\frac{2}{3^i} = 1.$$

$[\Rightarrow]$ Supongamos $x=1$ y que **no** todos los $\alpha_i$ son iguales a $2$. Sea $N$ el mínimo natural tal que $\alpha_N\neq 2$, de modo que $\alpha_N\in\{0,1\}$, es decir $\alpha_N\le 1$, y $\alpha_i=2$ para toda $i<N$.

Separamos la serie en tres partes:

$$x = \sum_{i=1}^{N-1}\frac{\alpha_i}{3^i} + \frac{\alpha_N}{3^N} + \sum_{i=N+1}^{\infty}\frac{\alpha_i}{3^i} = \sum_{i=1}^{N-1}\frac{2}{3^i} + \frac{\alpha_N}{3^N} + \sum_{i=N+1}^{\infty}\frac{\alpha_i}{3^i}.$$

Acotamos cada parte:

- Usando $(\ast)$ con $N-1$ en vez de $N$, más el término faltante: $\displaystyle\sum_{i=1}^{N-1}\frac{2}{3^i} = 1 - \frac{1}{3^{N-1}} = 1-\frac{3}{3^N}$.
- El término de en medio: $\dfrac{\alpha_N}{3^N} \le \dfrac{1}{3^N}$, pues $\alpha_N\le 1$.
- Usando $\alpha_i\le 2$ para toda $i$ y $(\ast)$: $\displaystyle\sum_{i=N+1}^{\infty}\frac{\alpha_i}{3^i} \le \sum_{i=N+1}^{\infty}\frac{2}{3^i} = \frac{1}{3^N}$.

Sumando las tres cotas:

$$x \le \left(1-\frac{3}{3^N}\right) + \frac{1}{3^N} + \frac{1}{3^N} = 1 - \frac{1}{3^N} \;<\; 1,$$

lo cual contradice que $x=1$. Por lo tanto, no puede existir tal $N$, es decir, $\alpha_i=2$ para toda $i$. $\blacksquare$

---

## 1.27 Ejercicio

Por $[0, 1] \backslash \Delta$ denotamos el complemento de $\Delta$ en $[0,1]$. Nota que $[0, 1] \backslash \Delta$ está formado por la unión numerable de intervalos abiertos. Demuestra que la serie formada por las longitudes de éstos intervalos es $1$. Entonces, desde el punto de vista de longitudes, $\Delta$ es "chico" (pues su complemento es "grande").

### Solución

Recordemos la construcción de $\Delta$ (Teorema 1.13): $F_0=[0,1]$, y para pasar de $F_{n-1}$ a $F_n$, cada uno de los $2^{n-1}$ intervalos cerrados que componen $F_{n-1}$ (cada uno de longitud $1/3^{n-1}$) se divide en tres subintervalos iguales de longitud $1/3^n$, y se **remueve el tercio de en medio** (un intervalo abierto), quedándose únicamente con los dos tercios extremos. Así, $F_n$ queda formado por $2^n$ intervalos cerrados de longitud $1/3^n$, y

$$\Delta = \bigcap_{n=1}^{\infty} F_n.$$

**Definición de los intervalos removidos en cada etapa.**

Para cada $n\in\mathbb{N}$, sea $R_n$ la unión de los tercios medios que se remueven al pasar de $F_{n-1}$ a $F_n$. Por la construcción:

- $R_n$ consiste de exactamente $2^{n-1}$ intervalos abiertos, uno por cada intervalo de $F_{n-1}$.
- Cada uno de estos intervalos tiene longitud $\dfrac{1}{3^n}$ (el tercio medio de un intervalo de longitud $1/3^{n-1}$).

Además, por construcción, $R_n = F_{n-1}\setminus F_n$ (el tercio medio removido es exactamente lo que le falta a $F_n$ respecto de $F_{n-1}$).

**Los $R_n$ son ajenos dos a dos.**

Sean $n<m$. Como $R_m = F_{m-1}\setminus F_m \subseteq F_{m-1} \subseteq F_n$ (pues $(F_k)_k$ es una sucesión decreciente de conjuntos, ya que cada $F_k$ se obtiene quitando puntos de $F_{k-1}$), y $R_n = F_{n-1}\setminus F_n$ es disjunto de $F_n$ por definición, se sigue que

$$R_n \cap R_m \subseteq (F_{n-1}\setminus F_n)\cap F_n = \emptyset.$$

**$[0,1]\setminus\Delta$ es la unión numerable (y ajena) de los $R_n$.**

Como $\Delta=\bigcap_{n=1}^\infty F_n$, tenemos

$$[0,1]\setminus\Delta = F_0\setminus\bigcap_{n=1}^\infty F_n = \bigcup_{n=1}^{\infty}\big(F_0\setminus F_n\big).$$

Por telescopía, usando que $F_{k-1}\setminus F_k = R_k$ y que $(F_k)_k$ es decreciente,

$$F_0\setminus F_n = \bigcup_{k=1}^{n} \big(F_{k-1}\setminus F_k\big) = \bigcup_{k=1}^{n} R_k.$$

Como esta unión finita crece con $n$, al tomar la unión sobre todos los $n$ obtenemos

$$[0,1]\setminus\Delta = \bigcup_{n=1}^{\infty}\bigcup_{k=1}^{n} R_k = \bigcup_{k=1}^{\infty} R_k = \bigsqcup_{k=1}^{\infty} R_k,$$

donde la última igualdad usa que los $R_k$ son ajenos dos a dos.

Cada $R_k$ es una unión finita ($2^{k-1}$) de intervalos abiertos, así que $[0,1]\setminus\Delta$ es una unión **numerable** (unión numerable de conjuntos finitos) de intervalos abiertos, ajenos dos a dos, como se afirma en el enunciado.

**Suma de las longitudes.**

La suma de las longitudes de los intervalos que forman $R_n$ es

$$2^{n-1}\cdot \frac{1}{3^n},$$

pues hay $2^{n-1}$ intervalos, cada uno de longitud $1/3^n$. Por lo tanto, la longitud total de todos los intervalos abiertos que componen $[0,1]\setminus\Delta$ es la serie

$$\sum_{n=1}^{\infty} 2^{n-1}\cdot\frac{1}{3^n}.$$

Calculamos esta serie geométrica:

$$
\sum_{n=1}^{\infty} 2^{n-1}\cdot\frac{1}{3^n}
= \frac{1}{3}\sum_{n=1}^{\infty} \left(\frac{2}{3}\right)^{n-1}
= \frac{1}{3}\sum_{k=0}^{\infty} \left(\frac{2}{3}\right)^{k}
= \frac{1}{3}\cdot\frac{1}{1-\frac23}
= \frac{1}{3}\cdot 3
= 1.
$$

**Conclusión.**

La serie formada por las longitudes de los intervalos abiertos que componen $[0,1]\setminus\Delta$ converge a

$$\sum_{n=1}^{\infty} 2^{n-1}\cdot\frac{1}{3^n} = 1,$$

es decir, la longitud total del complemento de $\Delta$ en $[0,1]$ es exactamente $1$, la misma longitud de $[0,1]$ completo. Esto significa que, en términos de longitud (medida), $[0,1]\setminus\Delta$ ocupa "todo" el intervalo $[0,1]$, y por lo tanto a $\Delta$ no le queda longitud alguna: $\Delta$ es "chico" desde el punto de vista de longitudes, a pesar de ser un conjunto no numerable (Teorema 1.7) y, de hecho, equivalente a $[0,1]$. $\blacksquare$

---

## 1.28 Ejercicio (NO VIENE)

Prueba que toda familia de intervalos abiertos de la forma $(a,b)$, que contiene un punto de $\Delta$, también contiene un subintervalo "de en medio", de los que se removieron para formar $\Delta$.

Como consecuencia, $\Delta$ no contiene intervalos abiertos no vacíos. Entonces, desde el punto de vista de los intervalos, $\Delta$ es "chico".

### Solución

Recordemos la construcción de $\Delta$: $F_0=[0,1]$, y $F_n$ se obtiene de $F_{n-1}$ removiendo, de cada uno de los $2^{n-1}$ intervalos cerrados que componen $F_{n-1}$ (cada uno de longitud $1/3^{n-1}$), su tercio de en medio; así $F_n$ es unión de $2^n$ intervalos cerrados de longitud $1/3^n$, y $\Delta=\bigcap_{n=1}^\infty F_n$. Como en el Ejercicio 1.27, denotamos por $R_n$ a la unión de los tercios medios removidos al pasar de $F_{n-1}$ a $F_n$; cada intervalo de $R_n$ es abierto, de longitud $1/3^n$, y satisface

$$R_n \cap \Delta = \emptyset, \qquad\text{pues } R_n\cap F_n=\emptyset \text{ y } \Delta\subseteq F_n.$$

---

#### Parte 1. Todo intervalo abierto $(a,b)$ que contiene un punto de $\Delta$ contiene un subintervalo removido.

Sea $(a,b)$ un intervalo abierto y sea $x\in(a,b)\cap\Delta$.

**Paso 1: encontrar $n$ tal que el intervalo de $F_n$ que contiene a $x$ quede dentro de $(a,b)$.**

Como $x\in(a,b)$, tenemos $a<x<b$, así que

$$\delta := \min\{x-a,\, b-x\} > 0.$$

Como $\dfrac{1}{3^n}\to 0$ cuando $n\to\infty$, existe $n\in\mathbb{N}$ tal que

$$\frac{1}{3^n} < \delta.$$

**Paso 2: localizar el intervalo de $F_n$ que contiene a $x$.**

Como $x\in\Delta=\bigcap_{k=1}^\infty F_k$, en particular $x\in F_n$. Por construcción, $F_n$ es unión de $2^n$ intervalos cerrados ajenos de longitud $1/3^n$; sea $I_n=[c,d]$ el único de estos intervalos que contiene a $x$ (los intervalos son ajenos dos a dos, así que $I_n$ es único), con $d-c=1/3^n$.

**Paso 3: $I_n\subseteq(a,b)$.**

Como $x\in I_n=[c,d]$ y $d-c=1/3^n<\delta$, tenemos que todo punto $y\in I_n$ satisface

$$|y-x| \le d-c = \frac{1}{3^n} < \delta \le x-a \quad\text{y}\quad |y-x|<\delta\le b-x.$$

De $|y-x|<x-a$ se sigue $y>a$; de $|y-x|<b-x$ se sigue $y<b$. Por lo tanto $y\in(a,b)$ para todo $y\in I_n$, es decir,

$$I_n\subseteq(a,b).$$

**Paso 4: el tercio medio de $I_n$ está en $(a,b)$ y fue removido.**

Al pasar de $F_n$ a $F_{n+1}$, el intervalo $I_n$ se divide en tres partes iguales de longitud $1/3^{n+1}$, y se remueve el tercio de en medio, digamos $J\subseteq I_n$, con $J$ abierto, $J\subseteq R_{n+1}$.

Como $J\subseteq I_n\subseteq(a,b)$, concluimos que

$$J\subseteq (a,b), \qquad J \text{ es uno de los subintervalos removidos al construir } \Delta.$$

Esto prueba lo pedido: $(a,b)$ contiene un subintervalo "de en medio" de los removidos. $\blacksquare$

---

#### Parte 2. Consecuencia: $\Delta$ no contiene intervalos abiertos no vacíos.

Supongamos, por contradicción, que existe un intervalo abierto no vacío $(a,b)$ con $(a,b)\subseteq\Delta$.

Como $(a,b)\neq\emptyset$, tomamos $x\in(a,b)$; entonces $x\in(a,b)\subseteq\Delta$, así que $x\in(a,b)\cap\Delta$.

Por la Parte 1, existe un subintervalo removido $J\subseteq R_{n+1}$ (para algún $n$) tal que

$$J\subseteq (a,b).$$

Como $(a,b)\subseteq\Delta$, se sigue que $J\subseteq\Delta$. Pero por construcción $J\subseteq R_{n+1}$ y $R_{n+1}\cap\Delta=\emptyset$, así que $J\cap\Delta=\emptyset$.

Como $J$ es un intervalo abierto no vacío (es un tercio de $I_n$, de longitud $1/3^{n+1}>0$), tomamos $z\in J$. Entonces $z\in J\subseteq\Delta$ (por lo anterior) y a la vez $z\in J\subseteq R_{n+1}$, de donde $z\in J\cap\Delta$, contradiciendo que $J\cap\Delta=\emptyset$.

Esta contradicción muestra que no puede existir tal intervalo $(a,b)\subseteq\Delta$ no vacío. Por lo tanto,

$$\Delta \text{ no contiene ningún intervalo abierto no vacío.} \qquad\blacksquare$$

---

**Observación.** Junto con el Ejercicio 1.27 (donde se probó que el complemento de $\Delta$ tiene longitud total $1$), este resultado refuerza la idea de que $\Delta$ es "chico": no solo tiene longitud cero, sino que además, a diferencia de un intervalo, no contiene ningún subintervalo abierto no vacío — es decir, $\Delta$ es un conjunto **totalmente disconexo**. Esto contrasta con el hecho (Teorema 1.13 y ejercicios previos) de que $\Delta$ es no numerable y equivalente a $[0,1]$: $\Delta$ tiene "tantos puntos" como $[0,1]$, pero geométricamente es un conjunto extremadamente disperso, sin ningún trozo de intervalo.

---

## 1.29 Ejercicio

Prueba que $\Delta$ es no numerable.

Entonces, desde el punto de vista de conjuntos equivalentes (cardinalidades), $\Delta$ es "grande".

### Solución

La estrategia es mostrar que $\Delta \sim (0,1)$ usando el **Teorema de Cantor–Bernstein** (Teorema 1.8), y luego usar que $(0,1)$ es no numerable (Teorema 1.7) para concluir que $\Delta$ también lo es.

---

#### Paso 0: $\Delta$ es infinito.

Los puntos $\dfrac{1}{3},\dfrac{1}{9},\dfrac{1}{27},\dots,\dfrac{1}{3^n},\dots$ son todos distintos entre sí y todos pertenecen a $\Delta$ (son extremos izquierdos de intervalos de la construcción, como se señaló en la Definición 1.9). Por lo tanto $\Delta$ contiene un subconjunto infinito, así que $\Delta$ es infinito.

---

#### Paso 1: existe una función inyectiva $g:\Delta\longrightarrow (0,1)$.

Como $\Delta$ es infinito, $\Delta\setminus\{0,1\}$ también es infinito (si fuera finito, $\Delta=(\Delta\setminus\{0,1\})\cup\{0,1\}$ sería unión de dos conjuntos finitos, luego finito, contradicción).

Como $\{0,1\}$ es finito (por tanto contable), por el **Ejercicio 1.16** tenemos

$$\Delta\setminus\{0,1\} \;\sim\; (\Delta\setminus\{0,1\})\cup\{0,1\} = \Delta,$$

es decir, existe una biyección $h:\Delta\to \Delta\setminus\{0,1\}$.

Como $\Delta\setminus\{0,1\}\subseteq(0,1)$ (pues $\Delta\subseteq[0,1]$), la inclusión $\iota:\Delta\setminus\{0,1\}\hookrightarrow(0,1)$ es inyectiva. Definimos

$$g := \iota\circ h : \Delta\longrightarrow (0,1),$$

composición de dos funciones inyectivas, luego $g$ es inyectiva.

---

#### Paso 2: existe una función inyectiva $f:(0,1)\longrightarrow \Delta$.

Por un argumento análogo al **Lema 1.6** (usando base $2$ en vez de base $10$), todo $x\in(0,1)$ admite una expansión binaria

$$x = \sum_{i=1}^{\infty} \frac{b_i}{2^i}, \qquad b_i\in\{0,1\},$$

y esta expansión es única, salvo que $x$ sea de la forma $k/2^n$, en cuyo caso admite exactamente dos: una con cola de $0$'s y otra con cola de $1$'s. Eligiendo siempre la representación que **no** tiene cola de $1$'s, obtenemos una función bien definida e inyectiva

$$\beta:(0,1)\longrightarrow \{0,1\}^{\mathbb{N}}, \qquad \beta(x)=(b_i(x))_{i\in\mathbb{N}},$$

donde ninguna sucesión $(b_i(x))$ tiene cola de puros $1$'s.

Definimos $\alpha_i(x):=2\,b_i(x)\in\{0,2\}$ y

$$f(x) := \sum_{i=1}^{\infty}\frac{\alpha_i(x)}{3^i} = \sum_{i=1}^{\infty}\frac{2\,b_i(x)}{3^i}.$$

Como $\alpha_i(x)\in\{0,2\}$ para toda $i$, por el **Teorema 1.13** ($\Leftarrow$) tenemos $f(x)\in\Delta$. Así $f:(0,1)\to\Delta$ está bien definida.

**$f$ es inyectiva.** Supongamos $f(x)=f(y)$, es decir

$$\sum_{i=1}^{\infty}\frac{\alpha_i(x)}{3^i} = \sum_{i=1}^{\infty}\frac{\alpha_i(y)}{3^i},$$

dos representaciones ternarias (con dígitos en $\{0,2\}$) del mismo número. Por el argumento usado en la demostración del **Lema 1.12(1)**: si dos representaciones ternarias de un mismo número difieren, entonces necesariamente una tiene cola de $2$'s y la otra cola de $0$'s. Pero por construcción, ni $(\alpha_i(x))$ ni $(\alpha_i(y))$ tiene cola de $2$'s (pues provienen de $(b_i(x)),(b_i(y))$ que no tienen cola de $1$'s). Por lo tanto las dos representaciones **no pueden ser distintas**, es decir

$$\alpha_i(x)=\alpha_i(y) \quad \forall i \;\Rightarrow\; b_i(x)=b_i(y)\ \forall i \;\Rightarrow\; \beta(x)=\beta(y).$$

Como $\beta$ es inyectiva, $x=y$. $\therefore f$ es inyectiva.

---

#### Paso 3: $\Delta\sim(0,1)$.

Por los Pasos 1 y 2 tenemos funciones inyectivas $f:(0,1)\to\Delta$ y $g:\Delta\to(0,1)$. Por el **Teorema de Cantor–Bernstein** (Teorema 1.8),

$$\Delta \sim (0,1).$$

---

#### Paso 4: conclusión.

Por el **Teorema 1.7**, $(0,1)$ es no numerable. Si $\Delta$ fuera numerable, entonces $\Delta\sim\mathbb{N}$; como $\Delta\sim(0,1)$, por transitividad de $\sim$ (Lema 1.2) tendríamos $(0,1)\sim\mathbb{N}$, es decir, $(0,1)$ sería numerable, contradiciendo el Teorema 1.7.

Por lo tanto, $\Delta$ es no numerable. $\blacksquare$

---

**Observación.** Junto con el Ejercicio 1.27 (longitud de $\Delta$ es $0$) y el Ejercicio 1.28 ($\Delta$ no contiene ningún intervalo abierto), este resultado completa el panorama: desde el punto de vista de la **medida** (longitud) y de la **topología** (contener intervalos), $\Delta$ es "chico"; pero desde el punto de vista de la **cardinalidad** (equivalencia de conjuntos), $\Delta$ es tan "grande" como $[0,1]$ o $\mathbb{R}$: no numerable, con la cardinalidad del continuo.

---

## 1.30 Ejercicio (NO VIENE).

Para $x \in [0,1]$, toma una representación ternaria

$$
x = \sum_{i=1}^{\infty} \frac{\alpha_i}{3^i}
$$

Sea $N = N(x) \in \mathbb{N}$ el primer índice para el cual $\alpha_N = 1$, tal que si $N$ no existe se toma $N(x) = \infty$.

Define $\Psi : [0,1] \to [0,1]$ por

$$
\Psi(x) = \sum_{i=1}^{N-1} \frac{\beta_i}{2^i} + \frac{1}{2^N}, \quad \beta_i = \frac{\alpha_i}{2}
$$

(Si $N=\infty$, se entiende $\Psi(x)=\displaystyle\sum_{i=1}^{\infty}\frac{\beta_i}{2^i}$, sin el término extra.) La función $\Psi$ se le llama la **escalera de Cantor**.

Prueba que $\Psi$ está bien definida, es decir, no depende de la representación ternaria de $x$, y que $\Psi$ es no decreciente.

### Solución

#### Herramienta auxiliar: cota de "cola"

Para $k\in\mathbb{N}$ y una sucesión de dígitos $(\alpha_i)_{i\ge k}\subseteq\{0,1,2\}$, con $N\ge k$ definido como el primer índice $\ge k$ donde $\alpha_i=1$ (o $\infty$ si no existe), definimos

$$T_k := \sum_{i=k}^{N-1}\frac{\beta_i}{2^i} + \frac{1}{2^N} \quad (N<\infty), \qquad \text{ó} \qquad T_k := \sum_{i=k}^{\infty}\frac{\beta_i}{2^i} \quad (N=\infty),$$

donde $\beta_i=\alpha_i/2$. Como cada $\beta_i\in\{0,1\}$ y $\dfrac{1}{2^N}\le \displaystyle\sum_{i=N}^{\infty}\frac{1}{2^i}$, en ambos casos

$$0 \le T_k \le \sum_{i=k}^{\infty}\frac{1}{2^i} = \frac{1}{2^{k-1}}. \tag{$\ast$}$$

Notemos que $\Psi(x) = T_1$ para la sucesión completa $(\alpha_i)_{i\ge1}$, y que si los primeros $k-1$ dígitos no contienen ningún $1$, entonces

$$\Psi(x) = \sum_{i=1}^{k-1}\frac{\beta_i}{2^i} + T_k. \tag{$\ast\ast$}$$

---

#### Paso 1: si $x$ tiene dos representaciones ternarias, éstas coinciden en un índice a partir del cual una es de un tipo específico.

Por el argumento usado en la demostración del **Lema 1.12(1)** (válido para cualquier $x\in[0,1]$, no solo para $x\in\Delta$): si $(\alpha_i)$ y $(\alpha'_i)$ son dos representaciones distintas de $x$, existe un mínimo índice $M$ tal que

$$\alpha_i=\alpha'_i \ (i<M), \qquad \alpha_M < \alpha'_M = \alpha_M+1, \qquad \alpha_i=2\ (i>M), \qquad \alpha'_i=0\ (i>M).$$

Como $\alpha_M,\alpha'_M\in\{0,1,2\}$ y $\alpha'_M=\alpha_M+1$, las únicas posibilidades son $(\alpha_M,\alpha'_M)=(0,1)$ o $(1,2)$.

---

### Parte (a): $\Psi$ está bien definida

Sean $(\alpha_i)$, $(\alpha'_i)$ dos representaciones de $x$ como en el Paso 1.

**Caso 1: algún índice $i<M$ tiene $\alpha_i=1$.** Como los primeros $M-1$ dígitos son iguales en ambas representaciones, el primer tal índice, llamémoslo $k<M$, satisface $N(x)=k$ para **ambas** representaciones, y como los dígitos $\beta_1,\dots,\beta_{k-1}$ también son iguales, ambas dan

$$\Psi = \sum_{i=1}^{k-1}\frac{\beta_i}{2^i} + \frac{1}{2^k},$$

el mismo valor. ✓

**Caso 2: ningún índice $i<M$ tiene $\alpha_i=1$**, así que $\alpha_i=\alpha'_i\in\{0,2\}$ para $i<M$; llamemos $\beta_i=\alpha_i/2$, compartido.

**Sub-caso $(\alpha_M,\alpha'_M)=(0,1)$.** Para $(\alpha'_i)$: $\alpha'_M=1$ y no hay $1$ antes, así $N=M$ y

$$\Psi_{\alpha'} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{1}{2^M}.$$

Para $(\alpha_i)$: $\alpha_M=0$ y $\alpha_i=2$ para $i>M$, así que nunca aparece un $1$ ($N=\infty$), y usando $(\ast\ast)$ con $k=M+1$ (donde $\beta_i=1$ para toda $i>M$, así que el "tail" es exactamente $\sum_{i=M+1}^\infty 1/2^i = 1/2^M$, por serie geométrica):

$$\Psi_{\alpha} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{0}{2^M} + \sum_{i=M+1}^{\infty}\frac{1}{2^i} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{1}{2^M} = \Psi_{\alpha'}. $$

**Sub-caso $(\alpha_M,\alpha'_M)=(1,2)$.** Para $(\alpha_i)$: $\alpha_M=1$, no hay $1$ antes, $N=M$:

$$\Psi_{\alpha} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{1}{2^M}.$$

Para $(\alpha'_i)$: $\alpha'_M=2$, $\alpha'_i=0$ para $i>M$, nunca hay $1$ ($N=\infty$):

$$\Psi_{\alpha'} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{1}{2^M} + \sum_{i=M+1}^{\infty}\frac{0}{2^i} = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + \frac{1}{2^M} = \Psi_{\alpha}.$$

En ambos sub-casos $\Psi_\alpha=\Psi_{\alpha'}$. Como estos son los únicos casos posibles (Paso 1), concluimos que **$\Psi(x)$ no depende de la representación ternaria escogida**. $\blacksquare$

---

### Parte (b): $\Psi$ es no decreciente

Sean $x,y\in[0,1]$ con $x<y$. Fijamos representaciones ternarias $x=\sum\alpha_i/3^i$, $y=\sum\gamma_i/3^i$, y sea $M$ el mínimo índice donde difieren: $\alpha_i=\gamma_i$ para $i<M$, $\alpha_M\neq\gamma_M$.

**Orden de los dígitos en $M$.** Usando la cota geométrica $(\ast)$ (Lema 1.12) aplicada a $y-x$:

$$y-x = \frac{\gamma_M-\alpha_M}{3^M} + \sum_{i=M+1}^{\infty}\frac{\gamma_i-\alpha_i}{3^i} \;\ge\; \frac{\gamma_M-\alpha_M}{3^M} - \sum_{i=M+1}^{\infty}\frac{2}{3^i} = \frac{\gamma_M-\alpha_M}{3^M} - \frac{1}{3^M} = \frac{\gamma_M-\alpha_M-1}{3^M}.$$

Como $x<y$, y si tuviéramos $\alpha_M>\gamma_M$ el mismo argumento (intercambiando papeles) daría $x>y$, contradicción; por lo tanto necesariamente

$$\alpha_M < \gamma_M.$$

**Caso 1: algún $i<M$ tiene $\alpha_i=1$.** Igual que en la Parte (a), $N(x)=N(y)=$ ese índice, y como los dígitos previos coinciden, $\Psi(x)=\Psi(y)$. En particular $\Psi(x)\le\Psi(y)$. ✓

**Caso 2: ningún $i<M$ tiene $\alpha_i=1$**, así que $\beta_i=\alpha_i/2=\gamma_i/2$ está definido y es común para $i<M$. Por $(\ast\ast)$,

$$\Psi(x)=\sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + T_M(x), \qquad \Psi(y)=\sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + T_M(y),$$

donde $T_M(x)$, $T_M(y)$ son las "colas" a partir del índice $M$ (definidas como en la Herramienta auxiliar), correspondientes a $\alpha_M$ y $\gamma_M$ respectivamente. Basta probar que $T_M(x)\le T_M(y)$ siempre que $\alpha_M<\gamma_M$.

- Si $\gamma_M=1$: como no hay $1$'s antes, $N(y)=M$, así $T_M(y)=\dfrac{1}{2^M}$ **exactamente**.
- Si $\gamma_M=2$: $\beta_M(y)=1$, así $T_M(y) = \dfrac{1}{2^M} + T_{M+1}(y) \ge \dfrac{1}{2^M}$ (pues $T_{M+1}(y)\ge0$ por $(\ast)$).

En ambos casos, **$T_M(y)\ge \dfrac{1}{2^M}$** cuando $\gamma_M\ge1$.

- Si $\alpha_M=0$: $\beta_M(x)=0$, así $T_M(x) = 0 + T_{M+1}(x) \le \dfrac{1}{2^M}$, usando la cota $(\ast)$ con $k=M+1$.
- Si $\alpha_M=1$: como no hay $1$'s antes de $M$, $N(x)=M$, así $T_M(x)=\dfrac{1}{2^M}$ **exactamente**.

En ambos casos, **$T_M(x)\le \dfrac{1}{2^M}$**.

Como $\alpha_M<\gamma_M$ implica $\alpha_M\in\{0,1\}$ y $\gamma_M\in\{1,2\}$, combinando las dos desigualdades:

$$T_M(x) \le \frac{1}{2^M} \le T_M(y).$$

Por lo tanto

$$\Psi(x) = \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + T_M(x) \;\le\; \sum_{i=1}^{M-1}\frac{\beta_i}{2^i} + T_M(y) = \Psi(y).$$

En ambos casos (1 y 2) concluimos $\Psi(x)\le\Psi(y)$. Como $x<y$ eran arbitrarios,

$$\Psi \text{ es no decreciente en } [0,1]. \qquad\blacksquare$$

---

**Observación.** La demostración muestra además que $\Psi$ es **constante** en cada intervalo removido de la construcción de $\Delta$ (Caso 1, cuando $x,y$ comparten un dígito $1$ antes de diferir): esta es la característica famosa de la escalera de Cantor, que "sube" únicamente sobre $\Delta$ y permanece constante en cada componente de $[0,1]\setminus\Delta$ (cf. Ejercicios 1.27–1.29).

