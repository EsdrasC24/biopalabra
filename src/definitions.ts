export const letters = 'ABCDEFGHILMNOPQRSTUVX';

export type DefinitionSet = {
    [key in typeof letters[number]]: string;
}

export default function getDefinitions(): Array<DefinitionSet>{
    return [
        //1st participant
        {
          A: 'Organismos fotosintéticos diferentes de las plantas macroscópicas y microscópicas de ambientes acuáticos y terrestres húmedos, perecientes al reino protista.',
          B: 'Microorganismos unicelulares sin núcleo diferenciado, realizan diversas funciones en la naturaleza como descomponen la materia orgánica, producir enfermedades, sintetizar moléculas.',
          C: 'Se especializan en la producción de gametos o células sexuales que permiten la formación de un nuevo individuo.',
          D: 'Organismo que posee doble juego de cromosomas.',
          E: 'Organismos con estructura celular, presentan organelos cubiertos por membrana, entre ellos el núcleo.',
          F: 'Estructura móvil larga, parecida a un látigo que se proyecta desde la célula y es utilizada en la locomoción ',
          G: 'La clase de la que es miembro según el estado de los factores hereditarios internos de un organismo.',
          H: 'La serie de características genéticas que se transfieren de padres a hijos, así como entre generaciones que determinan ciertas similitudes y diferencias entre los descendientes.',
          I: 'Resistencia a invasores específicos del cuerpo',
          L: 'Organismos que presentan genes iguales para una misma característica.',
          M: 'Es el ADN o la totalidad de los cromosomas contenidos en el núcleo.',
          N: 'Región del núcleo celular en el que se encuentran el ADN , el ARN y las proteínas asociadas a ellos.',
          O: 'Estructuras contenidas en el citoplasma de las células eucariotas.',
          Q: 'Conjunto de individuos de la misma especie que ocupan determinada área geográfica.',
          R: 'Es una de las formas de reproducción celular, este proceso se realiza en las glándulas sexuales para la producción de gametos.',
          S: 'Interacción estrecha entre organismos de diferentes especies durante un periodo prolongado.',
          T: 'Es la cuarta y última fase de la mitosis. Durante esta se forman los dos núcleos hijos en los dos polos de la célula.',
          U: 'Enzima que cataliza o descompone la urea en bióxido de carbono y amoniaco.',
          V: 'Es una medida de las diferencias que existen dentro delas poblaciones o las especies.',
          X: 'Protistas unicelulares gigantes, que pueden vivir en fosas oceánicas a profundidades de más de 10.000 metros.'
        },
        //2nd participant
        {
          A: 'Compuesto químico que la células usan para elaborar los elementos fundamentales del ADN y el ARN.',
          B: 'Son compuestos de origen orgánico que constituyen a todos los seres vivos, son: proteínas , carbohidratos, lípidos, y ácidos nucleicos.',
          C: 'Células sin núcleo celular diferenciado, es decir cuyo material genético se encuentra disperso en el citoplasma, reunido en una zona denominada nucleoide. ',
          D: 'Se refiere al número total de especies diferentes dentro de un ecosistema y la complejidad resultante de las interacciones entre ellas.',
          E: 'Cambio genético acumulativo en una población de organismos en el transcurso de las generaciones.',
          F: 'Manifestación externa de un conjunto de caracteres hereditarios que dependen tanto de los genes como del ambiente.',
          G: 'Es la asociación o unión fisca de cromosomas homólogos durante la profase I de la meiosis',
          H: 'Que posee un solo conjunto de cromosomas por núcleo.',
          I: 'Secuencia de nucleótidos en la molécula de DNA que especifica  los aminoácidos de una proteína.',
          L: 'Estructura constituida por filamentos intermedios  que se encuentran en la cara interna de la membrana nuclear.',
          M: 'División celular caracterizada por la replicación de los cromosomas y la formación de dos núcleos hijos idénticos entre si y al original.',
          N: 'Célula nerviosa que incluye el cuerpo celular, las dendritas y el axón.',
          O: 'Son los seres vivos que no pueden tomar una sustancia inorgánica y crear materia orgánica para sí misma, lo que obliga a alimentarse de otros seres vivos.',
          P: 'Relación simbiótica en la que un organismo se beneficia al alimentarse de otros, el cual generalmente sufre daños, aunque no muere de inmediato.',
          Q: 'Son reacciones que combinan el oxígeno con moléculas inorgánicas.',
          R: 'Es el proceso que requiere oxígeno, emite dióxido de carbono  y libera energía a partir de la glucosa.',
          S: 'Producto de cualquier célula, glándula o algún tejido  liberado a través de la membrana plasmática, que desempeña su función fuera de la célula que lo produjo',
          T: 'Todos los seres vivos están compuestos por células, una célula surge solo de otra célula, no se conoce ninguna excepción a estos dos principios desde que fueron propuestos por primera vez más de un siglo por Schleiden y Shawann.',
          U: 'Conjunto del axón de una neurona motora y las fibras musculares que inerva',
          V: 'Es una medida de las diferencias que existen dentro delas poblaciones o las especies.',
          X: 'Protistas unicelulares gigantes, que pueden vivir en fosas oceánicas a profundidades de más de 10.000 metros.'
        }
    ];
}