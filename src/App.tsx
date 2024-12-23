"use client"

import './style.css';
import portalImg from './assets/fondo-1.jpg';
import highschoolLogo from './assets/logo-liceo.png';
import introAudio from './assets/intro.mp3';
import waitAudio from './assets/preguntas.mp3';

import { useState, useEffect, useRef } from 'react'

import { getRelativeCoords } from './util';
import { __LETTERS__, getDefinitions } from './definitions';

const coords = getRelativeCoords(21); // 20 + 1 (index)
const definitions = getDefinitions();

const __ALPHABET__ = __LETTERS__.split('')
const __ROTATION_DEG__ = 360 / __ALPHABET__.length;

export default function Component() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [rotation, setRotation] = useState(0);
  const [defIndex, setDefIndex] = useState(0); // indicates actived participant
  const [isPlaying, setPlaying] = useState(false);

  const introAudioRef = useRef(null);
  const waitAudioRef = useRef(null);

  useEffect(() => {
    const index = __ALPHABET__.indexOf(selectedLetter);
    setRotation(index * __ROTATION_DEG__);
  }, [selectedLetter]);

  useEffect(() => {
    if(isPlaying && introAudioRef.current){
      introAudioRef.current.addEventListener('ended', () => {
        waitAudioRef.current.play();
      });
      introAudioRef.current.addEventListener('play', () => {
        waitAudioRef.current.pause()
      });
      introAudioRef.current.play();
      setPlaying(false);
    }
  }, [isPlaying]);

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
    <div className="w-screen h-screen from-emerald-600 to-yellow-800 shadow-lg rounded-lg overflow-hidden flex items-center box-border">
      {/* hidden audio */}
      <audio src={introAudio} ref={introAudioRef} />
      <audio src={waitAudio} loop ref={waitAudioRef} />
      <img src={portalImg} className="absolute top-0 left-0 -z-10 w-full h-full object-fill" />
      <div className="p-6 mx-auto w-11/12 border border-green-500 bg-gray-50/90">
        {/* title */}
        <div className="flex items-center justify-around text-2xl py-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-900 text-center">
          <div className="w-20"><img src={highschoolLogo} className="block w-full" /></div>
          <span>3er año, Sección U - Biología: Reto de Ciencias</span>
        </div>
        {/* Participants */}
        <div className="flex items-center justify-between text-xl font-bold">
          {definitions.map((_, index) => {
            if(index == 0) return null;
            return defIndex == index ? 
              (<div className="p-2 text-white bg-yellow-600 border rounded-lg">Participante {index}</div>)
              : (<div onClick={() => {setPlaying(true); setDefIndex(index)}}>Participante {index}</div>);
          })}
        </div>
        {/* rulette box */}
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
          {/* arrow sign */}
          <div 
            className="absolute inset-0 top-10 flex items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease-out' }}
          >
            <div className="w-2 h-14 bg-yellow-600 absolute top-0 left-1/2 transform -translate-x-1/2" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold"><span className="text-emerald-800">Bio</span><span class="text-yellow-800">palabra</span></span>
          </div>
        </div>

        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-2 text-emerald-800">Letra: {selectedLetter}</h2>
          <p className="text-yellow-900 text-xl text-justify leading-5 w-4/5 mx-auto">{definitions[defIndex][selectedLetter]}</p>
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
