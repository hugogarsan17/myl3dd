# Especificación futura: calculadora LED

No está publicada ni calcula precios. Antes de implementarla se necesitan reglas verificadas por personal técnico y rangos de precio vigentes.

Entradas previstas: `locationType`, `width`, `height`, `viewingDistance`, `lightingConditions` y `city`. Salidas previstas: `surface`, `suggestedTechnology`, `suggestedPixelPitchRange` y `estimatedPriceRange`. La superficie puede derivarse de dimensiones validadas; tecnología, pitch y precio no deben calcularse hasta disponer de reglas y datos aprobados. Los eventos reservados son `calculator_start` y `calculator_complete`.
