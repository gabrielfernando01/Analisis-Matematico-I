#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build script to compile template.html and embedded PNG images into a self-contained,
beautiful academic HTML document with KaTeX mathematics: topologia_esp_metricos.html
"""

import os
import base64
import sys

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(base_dir, "template.html")
    output_path = os.path.join(base_dir, "topologia_esp_metricos.html")
    
    if not os.path.exists(template_path):
        print(f"Error: No se encontró el archivo de plantilla: {template_path}", file=sys.stderr)
        sys.exit(1)
        
    with open(template_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Image mapping
    images = {
        "__IMG_B_R_ESP_NORMADO__": "B_r_esp_normado.png",
        "__IMG_NORMA_P__": "norma-p.png",
        "__IMG_NORMA_UNIFORME__": "norma_uniforme.png",
        "__IMG_ABIERTO__": "abierto.png",
        "__IMG_INTERVALO__": "intervalo.png",
        "__IMG_NO_CONTENIDO__": "no_contenido.png",
        "__IMG_B_R_ES_ABIERTO__": "B_r_es_abierto.png",
        "__IMG_LEMA_6_14__": "lema_6_14.png",
        "__IMG_DIST_A__": "dist_A.png",
        "__IMG_FAVICON__": "favicon.png"
    }

    print("Procesando e incrustando imágenes en base64...")
    for placeholder, filename in images.items():
        file_path = os.path.join(base_dir, filename)
        if os.path.exists(file_path):
            with open(file_path, "rb") as f:
                encoded = base64.b64encode(f.read()).decode("utf-8")
                data_uri = f"data:image/png;base64,{encoded}"
                html_content = html_content.replace(placeholder, data_uri)
                print(f"  ✓ Incrustada: {filename} ({os.path.getsize(file_path) / 1024:.1f} KB)")
        else:
            print(f"  ⚠ Advertencia: Imagen {filename} no encontrada.", file=sys.stderr)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    file_size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"\n¡Compilación completada exitosamente!")
    print(f"Archivo de salida: {output_path}")
    print(f"Tamaño final: {file_size_mb:.2f} MB")

if __name__ == "__main__":
    main()
