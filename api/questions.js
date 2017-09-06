module.exports = {
  pregunta1 : {
    pregunta: "¿Cuál es el objetivo primario de su portafolio de inversión?",
    id: "1",
    opciones: {
      a: {
        nombre: "Seguridad",
        texto: "Prefiero la seguridad de mis inversiones, así la rentabilidad en el tiempo se encuentre por debajo de los niveles de inflación (2% anual).",
        valor: 0
      },
      b: {
        texto: "Protección a la inflación.- Estoy dispuesto a aceptar sólo un nivel bajo de variación en mi inversión a cambio de una rentabilidad que me proteja de la inflación.",
        valor: 2
      },
      c: {
        nombre: "Crecimiento y seguridad",
        texto: "Quiero un balance entre crecimiento y seguridad, y estoy dispuesto a aceptar un nivel medio de variación en el valor de mi inversión con la finalidad de alcanzar una rentabilidad mayor a la inflación.",
        valor: 4
      },
      d: {
        nombre: "Crecimiento",
        texto: "Estoy interesado en generar crecimiento en mi inversión en el tiempo, y estoy menos preocupado por las fluctuaciones que éste pueda registrar en la búsqueda del retorno.",
        valor: 6
      },
      e: {
        nombre: "Máximo crecimiento",
        texto: "Mi único objetivo es el máximo crecimiento de mi inversión en el tiempo y puedo tolerar altos niveles de fluctuación en el valor de mi inversión en la búsqueda del retorno.",
        valor: 8
      }
    }
  },
  pregunta2 :{
    pregunta: "¿Requiere generar ingresos corrientes los cuales retirará periódicamente?",
    id: "2",
    opciones: {
      a: {
        "texto": "Sí, de más de 3% anual del patrimonio invertido",
        "valor": 3
      },
      b: {
        "texto": "Sí, de menos de 3% anual del patrimonio invertido.",
        "valor": 5
      },
      c: {
        "texto": "No, y de generarse ingresos, prefiero que sean reinvertidos para favorecer el crecimiento de mi inversión",
        "valor": 7
      }
    }
  },
  pregunta3 :{
    pregunta: "¿Cuánto tiempo podría mantener su portafolio recomendado por Inteligo, sin realizar un retiro significativo de sus fondos?",
    id: "3",
    opciones: {
      a: {
        "texto": "Menos de 1 año",
        "valor": 0
      },
      b: {
        "texto": "Entre 1 y 3 años",
        "valor": 2
      },
      c: {
        "texto": "Entre 3 y 5 años",
        "valor": 4
      },
      d: {
        "texto": "Más de 5 años",
        "valor": 8
      }
    }
  },
  pregunta4 :{
    pregunta: "¿Cuál de las siguientes afirmaciones describe mejor sus necesidades de liquidez?",
    id: "4",
    opciones: {
      a: {
        "texto": "Requiero convertir la mayor parte de mi portafolio en efectivo para el próximo año.",
        "valor": 0
      },
      b: {
        "texto": "Podría necesitar alrededor del 50% de mi portafolio en efectivo el próximo año.",
        "valor": 2
      },
      c: {
        "texto": "No creo que requiera realizar ningún retiro de mi portafolio que sea mayor al ingreso que éste genere. En caso de una emergencia, no espero retirar más del 10% del capital invertido el próximo año.",
        "valor": 4
      },
      d: {
        "texto": "No creo que requiera realizar ningún retiro de mi portafolio que sea mayor al ingreso que éste genere. En caso de una emergencia, cuento con otros recursos que me permitirían cubrir dicha necesidad por un plazo de 1 a 3 años.",
        "valor": 6
      },
      e: {
        "texto": "Tengo capacidad de asumir una estrategia de inversión de largo plazo. No requiero estos excedentes en un horizonte de 3 a 5 años y en caso de una emergencia, dispongo de otros recursos para atenderla.",
        "valor": 8
      }
    }
  },
  pregunta5 :{
    pregunta: "¿Con cuál de las siguientes trayectorias hipotéticas en su inversión se sentiría más cómodo?",
    id: "5",
    "image": "public/assets/img/grafico.png",
    opciones: {
      a: {
        "texto": "Portafolio A",
        "rendimiento-anual": {
          "anio-0": 100.00,
          "anio-1": 100.53,
          "anio-2": 100.95,
          "anio-3": 101.67,
          "anio-4": 102.80,
          "anio-5" : 103.55
        },
        "valor": 0
      },
      b: {
        "texto": "Portafolio B",
        "rendimiento-anual": {
          "anio-0": 100.00,
          "anio-1": 100.13,
          "anio-2": 98.88,
          "anio-3": 101.11,
          "anio-4": 108.27,
          "anio-5": 111.5
        },
        "valor": 2
      },
      c: {
        "texto": "Portafolio C",
        "rendimiento-anual": {
          "anio-0": 100.00,
          "anio-1": 99.88,
          "anio-2": 97.47,
          "anio-3": 100.81,
          "anio-4": 112.38,
          "anio-5" : 116.74
        },
        "valor": 4
      },
      d: {
        "texto": "Portafolio D",
        "rendimiento-anual": {
          "anio-0": 100.00,
          "anio-1": 99.10,
          "anio-2": 95.14,
          "anio-3": 98.84,
          "anio-4": 113.43,
          "anio-5" : 118.53
        },
        "valor": 6
      },
      e: {
        "texto": "Portafolio E",
        "rendimiento-anual": {
          "anio-0": 100.00,
          "anio-1": 98.54,
          "anio-2": 93.37,
          "anio-3": 97.47,
          "anio-4": 114.70,
          "anio-5": 120.59
        },
        "valor": 8
      }
    }
  },
  pregunta6 :{
    pregunta: "Si un activo dentro de su portafolio de inversión cayera en 25% en un horizonte de un año, ¿qué haría?",
    id: "6",
    opciones: {
      a: {
        "texto": "Vendería inmediatamente dicha inversión a pesar de realizar la pérdida. Este tipo de inversiones no encaja en mi perfil.",
        "valor": 0
      },
      b: {
        "texto": "Mantendría la inversión hasta que regrese a su valor inicial para luego venderla y sustituirla por algo menos volátil.",
        "valor": 2
      },
      c: {
        "texto": "La mantendría porque las fluctuaciones en los precios de mercado son probables. Yo estoy pensando en la rentabilidad que me va a generar en el largo plazo.",
        "valor": 4
      },
      d: {
        "texto": "Compraría más de esa inversión. Sería una gran oportunidad de promediar el precio a la baja y, por lo tanto, mejorar el rendimiento de largo plazo de mi portafolio.",
        "valor": 8
      }
    }
  },
  pregunta7 :{
    pregunta: "Dado que los portafolios muestran fluctuaciones, ¿cuánto tiempo estaría dispuesto a esperar a que sus inversiones reviertan una pérdida temporal?",
    id: "7",
    opciones: {
      a: {
        "texto": "Menos de 3 meses",
        "valor": 0
      },
      b: {
        "texto": "De 3 a 6 meses",
        "valor": 2
      },
      c: {
        "texto": "De 6 meses a 1 año",
        "valor": 4
      },
      d: {
        "texto": "Entre 1 y 2 años",
        "valor": 6
      },
      e: {
        "texto": "De 2 a 3 años",
        "valor": 8
      }
    }
  },
  pregunta8 :{
    pregunta: "Las crisis financieras no son el estado habitual del mercado. Sin embargo, considerando el retorno anual promedio y la máxima caída que se registraría en una crisis, ¿cuál de las siguientes opciones te parece la más adecuada?",
    id: "8",
    opciones: {
      a: {
        "texto": "Portafolio A",
        "retorno-anual": "1.0%",
        "máxima-caida": "0.3%",
        "valor": 0
      },
      b: {
        "texto": "Portafolio B",
        "retorno-anual": "3.0%",
        "máxima-caida": "-5.0%",
        "valor": 2
      },
      c: {
        "texto": "Portafolio C",
        "retorno-anual": "4.3%",
        "máxima-caida": "-10.1%",
        "valor": 4
      },
      d: {
        "texto": "Portafolio D",
        "retorno-anual": "5.0%",
        "máxima-caida": "-15.4%",
        "valor": 6
      },
      e: {
        "texto": "Portafolio E",
        "retorno-anual": "5.8%",
        "máxima-caida": "-21.0%",
        "valor": 8
      }
    }
  }

  }
