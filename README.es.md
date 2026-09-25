<div align="center">

<img src="icon.png" alt="Logo de Nephrite" width="96" height="96">

# Nephrite para VS Code

[English](README.md) · **Español**

Un tema sereno, inspirado en el jade, para [Visual Studio Code](https://code.visualstudio.com), en tres sabores.

[![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-3db87a)](LICENSE.es.md)
[![Paleta](https://img.shields.io/badge/paleta-Nephrite-1f6b45)](https://github.com/Nephrite-theme/palette)

</div>

## Sabores

| Sabor | Colores | Para |
| --- | --- | --- |
| **Nephrite Forest** | <img src="assets/forest.png" alt="Muestras de Forest" width="240"> | Oscuro y profundo, para la noche |
| **Nephrite Jade** | <img src="assets/jade.png" alt="Muestras de Jade" width="240"> | Oscuro con más verde, para jornadas largas |
| **Nephrite Mint** | <img src="assets/mint.png" alt="Muestras de Mint" width="240"> | Claro y ligero, para el día |

## Capturas

![Nephrite Forest en el editor](assets/forest-editor.webp)

![Nephrite Jade en el editor](assets/jade-editor.webp)

![Nephrite Mint en el editor](assets/mint-editor.webp)

## Instalación

1. Abre la vista de **Extensiones** (`Ctrl+Shift+X`, o `Cmd+Shift+X` en macOS).
2. Busca **Nephrite** y haz clic en **Install**.
3. Abre el selector de temas con `Ctrl+K Ctrl+T` (`Cmd+K Cmd+T`) y elige un sabor.

Nephrite está en el [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=nephrite-theme.nephrite) y en [Open VSX](https://open-vsx.org/extension/nephrite-theme/nephrite), así que los mismos pasos sirven en VSCodium, Cursor y otros editores basados en VS Code.

### A mano

Descarga el `.vsix` desde las [releases](https://github.com/Nephrite-theme/vscode/releases) y ejecuta **Extensions: Install from VSIX...** desde la paleta de comandos.

## Qué incluye

- **Toda la interfaz:** editor, pestañas, barra lateral, barra de actividad, paneles, menús, notificaciones, vistas de diff y merge, y control de versiones.
- **Resaltado de sintaxis** según la función de cada color, siguiendo la [guía para ports de la paleta](https://github.com/Nephrite-theme/palette/blob/main/README.es.md#crear-un-port): palabras clave en amethyst, strings en jade, funciones en sapphire, tipos en citrine, números en carnelian, propiedades en lagoon.
- **Resaltado semántico** en los lenguajes que lo admiten, como TypeScript, Python y Rust.
- **La terminal integrada**, con los 16 colores ANSI de la paleta.

Todo el texto mantiene al menos 4.4:1 de contraste sobre su fondo.

## Personalizar

Cambia cualquier color en tu `settings.json` solo para un sabor:

```jsonc
"workbench.colorCustomizations": {
  "[Nephrite Forest]": {
    "editor.lineHighlightBackground": "#19282080"
  }
}
```

## Desarrollo

Los temas de `themes/` se generan, así que no los edites a mano. Para aplicar cambios de la paleta:

```sh
npm run sync    # descarga el palette.json más reciente
npm run build   # regenera los tres temas
```

Pulsa `F5` en VS Code para abrir un Extension Development Host con los temas cargados. Para empaquetar y publicar:

```sh
npm run package                 # regenera y crea nephrite-<versión>.vsix
npx @vscode/vsce publish        # VS Code Marketplace
npx ovsx publish *.vsix         # Open VSX
```

Requiere Node 18 o superior, sin dependencias.

## Contribuir

¿Un color que choca, poco contraste o un lenguaje que se ve raro? [Abre un issue](https://github.com/Nephrite-theme/vscode/issues/new/choose) con una captura y el lenguaje. Para saber cómo se crean y revisan los ports de Nephrite, lee la [guía para contribuir](https://github.com/Nephrite-theme/.github/blob/main/CONTRIBUTING.es.md).

## Agradecimientos

Creado y mantenido por [@ingfranciscastillo](https://github.com/ingfranciscastillo). Aquí sumaremos a quienes contribuyan a medida que crezca la comunidad.

## Más Nephrite

Nephrite también está disponible para Chrome y Firefox. Mira todas las apps en [getnephrite.dev/es/ports](https://getnephrite.dev/es/ports).
