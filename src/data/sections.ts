export interface SectionContent {
  path: string;
  filename: string;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  teoria: SectionContent | null;
  ejercicios: SectionContent | null;
}

export const sections: Section[] = [
  {
    id: 1,
    title: 'Conjuntos',
    description: 'Cardinalidad, equivalencia de conjuntos, conjunto de Cantor',
    teoria: { path: 'SECCION_1/teoria', filename: 'teoria_conjuntos.md' },
    ejercicios: { path: 'SECCION_1/ejercicios', filename: 'ejercicios_conjuntos.md' },
  },
  {
    id: 2,
    title: 'Convergencia puntual y uniforme',
    description: 'Convergencia puntual, uniforme, teorema de Dini, Weierstrass M-test',
    teoria: { path: 'SECCION_2/teoria', filename: 'convergencia_puntual_uniforme.md' },
    ejercicios: { path: 'SECCION_2/ejercicios', filename: 'ejercicios_convergencia_uniforme_puntual.md' },
  },
  {
    id: 3,
    title: 'Teorema de Weierstrass',
    description: 'Aproximación de funciones continuas por polinomios',
    teoria: { path: 'SECCION_3/teoria', filename: 'Teo_Weierstrass_GitHub_page.md' },
    ejercicios: { path: 'SECCION_3/ejercicios', filename: 'Ejercicios_Teo_Weierstrass.md' },
  },
  {
    id: 4,
    title: 'Espacios métricos',
    description: 'Métricas, normas, desigualdad de Minkowski, espacios normados',
    teoria: { path: 'SECCION_4/teoria', filename: 'teoria_esp_metricos.md' },
    ejercicios: { path: 'SECCION_4/ejercicios', filename: 'ejercicios_espacios_metricos.md' },
  },
  {
    id: 5,
    title: 'Sucesiones',
    description: 'Sucesiones en espacios métricos, subsucesiones, convergencia',
    teoria: { path: 'SECCION_5/teoria', filename: 'teoria_sucesiones.md' },
    ejercicios: { path: 'SECCION_5/ejercicios', filename: 'ejercicios_sucesiones.md' },
  },
  {
    id: 6,
    title: 'Topología de espacios métricos',
    description: 'Conjuntos abiertos, cerrados, bolas, distancia, frontera',
    teoria: { path: 'SECCION_6/teoria', filename: 'teoria_topologia_esp_metricos.md' },
    ejercicios: { path: 'SECCION_6/ejercicios', filename: 'ejercicios_topologia_esp_metricos.md' },
  },
  {
    id: 7,
    title: 'Compacidad',
    description: 'Conjuntos compactos, teorema de Heine-Borel',
    teoria: { path: 'SECCION_7/teoria', filename: 'teoria_compacidad.md' },
    ejercicios: null,
  },
  {
    id: 8,
    title: 'Sección 8',
    description: '',
    teoria: null,
    ejercicios: null,
  },
  {
    id: 9,
    title: 'Sección 9',
    description: '',
    teoria: null,
    ejercicios: null,
  },
  {
    id: 10,
    title: 'Sección 10',
    description: '',
    teoria: null,
    ejercicios: null,
  },
  {
    id: 11,
    title: 'Sección 11',
    description: '',
    teoria: null,
    ejercicios: null,
  },
];

export function getSectionById(id: number): Section | undefined {
  return sections.find(s => s.id === id);
}

export function getAdjacentSections(id: number): { prev: Section | undefined; next: Section | undefined } {
  const idx = sections.findIndex(s => s.id === id);
  return {
    prev: idx > 0 ? sections[idx - 1] : undefined,
    next: idx < sections.length - 1 ? sections[idx + 1] : undefined,
  };
}
