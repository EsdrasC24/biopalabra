"use client"

import './style.css';
import { useState, useEffect } from 'react'

import { getRelativeCoords } from './util';

//alert(JSON.stringify(getRelativeCoords(24)));
const coords = getRelativeCoords(24);

const __ALPHABET__ = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('')
const __ROTATION_DEG__ = 360 / __ALPHABET__.length;

const definitions: { [key: string]: string } = {
  A: "Ácido: Sustancia química que puede donar protones o aceptar electrones.",
  B: "Bacteria: Microorganismo unicelular procariota.",
  C: "Célula: Unidad fundamental de los seres vivos.",
  D: "DNA: Ácido desoxirribonucleico, molécula que contiene la información genética.",
  E: "Enzima: Proteína que cataliza reacciones químicas en los organismos vivos.",
  F: "Fotosíntesis: Proceso por el cual las plantas convierten luz en energía química.",
  G: "Gen: Unidad básica de herencia en los seres vivos.",
  H: "Hormona: Sustancia química que regula procesos fisiológicos.",
  I: "Inmunidad: Capacidad del cuerpo para resistir a patógenos y toxinas.",
  J: "Jardinería: Arte y práctica de cultivar plantas.",
  K: "Kinasa: Enzima que transfiere grupos fosfato a otras moléculas.",
  L: "Lípido: Molécula orgánica insoluble en agua, como las grasas.",
  M: "Mitocondria: Orgánulo celular responsable de la producción de energía.",
  N: "Neurona: Célula del sistema nervioso que transmite impulsos eléctricos.",
  O: "Oxígeno: Elemento químico esencial para la respiración aeróbica.",
  P: "Proteína: Macromolécula compuesta por aminoácidos.",
  Q: "Quimiósintesis: Producción de materia orgánica usando energía química.",
  R: "RNA: Ácido ribonucleico, molécula involucrada en la síntesis de proteínas.",
  S: "Simbiosis: Relación de beneficio mutuo entre dos especies diferentes.",
  T: "Tejido: Grupo de células similares que realizan una función específica.",
  U: "Uracilo: Base nitrogenada presente en el RNA.",
  V: "Vacuola: Orgánulo celular que almacena agua, nutrientes y desechos.",
  W: "Watson y Crick: Científicos que descubrieron la estructura del DNA.",
  X: "Xilema: Tejido vegetal que transporta agua y nutrientes."
}

export default function Component() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const index = __ALPHABET__.indexOf(selectedLetter);
    setRotation(index * __ROTATION_DEG__);
  }, [selectedLetter])

  const handlePrevious = () => {
    const currentIndex = __ALPHABET__.indexOf(selectedLetter)
    const newIndex = (currentIndex - 1 + __ALPHABET__.length) % __ALPHABET__.length
    setSelectedLetter(__ALPHABET__[newIndex])
  }

  const handleNext = () => {
    const currentIndex = __ALPHABET__.indexOf(selectedLetter)
    const newIndex = (currentIndex + 1) % __ALPHABET__.length
    setSelectedLetter(__ALPHABET__[newIndex])
  }

  return (
    <div className="w-screen h-screen bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 mx-auto w-11/12 border border-green-500">
        <div className="relative w-80 h-80 mx-auto mb-8" data-container>
          <div className="absolute inset-0 rounded-full border-blue-500">
            {__ALPHABET__.map((letter, index) => (
              <div
                key={letter}
                className={`absolute  w-10 h-10 flex items-center justify-center rounded-full ${
                  letter === selectedLetter ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500 border border-gray-500'
                }`}
                style={{
                  left: `${coords[index].x}%`,
                  top:`${coords[index].y}%`,
                  transformed: `translate(${index * __ROTATION_DEG__}deg, ${index * 10}deg)`,
                }}
              >
                <span className="text-lg font-bold">{letter}</span>
              </div>
            ))}
          </div>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease-out' }}
          >
            <div className="w-2 h-16 bg-red-500 absolute top-0 left-1/2 transform -translate-x-1/2" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-blue-500">BioPalabra</span>
          </div>
        </div>

        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-2 text-emerald-800">Letra: {selectedLetter}</h2>
          <p className="text-gray-600">{definitions[selectedLetter]}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button 
            onClick={handlePrevious}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50 transition-colors"
          >
            Anterior
          </button>
          <button 
            onClick={handleNext}
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
