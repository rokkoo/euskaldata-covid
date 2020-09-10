import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import Menu from '../Menu';

const GlobalWrapper = ({ children }) => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const commands = [
    {
      command: 'me gustaría pedir un * (por favor)',
      callback: (food) => setMessage(`Your order is for: ${food}`),
    },
    {
      command: 'el tiempo es :condition para hoy',
      callback: (condition) => setMessage(`Today, the weather is ${condition}`),
    },
    {
      command: 'me gusta el * y las *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`),
    },
    {
      command: 'qué tal',
      callback: () => setMessage('My pleasure'),
    },
    {
      command: 'hola',
      callback: () => setMessage('hola'),
      matchInterim: true,
    },
    {
      command: 'inicio',
      callback: (command, spokenPhrase, similarityRatio) => {
        setMessage(`${spokenPhrase}`);
        router.push('/');
      },
      matchInterim: true,
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: 'horarios',
      callback: (command, spokenPhrase, similarityRatio) => {
        setMessage(`${spokenPhrase}`);
        router.push('/horarios');
      },
      matchInterim: true,
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.9,
    },
    {
      command: 'soporte',
      callback: (command, spokenPhrase, similarityRatio) => {
        setMessage(`${spokenPhrase}`);
        router.push('/soporte');
      },
      matchInterim: true,
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.9,
    },
    {
      command: 'atrás',
      callback: () => {
        setMessage('atras');
        router.back();
      },
      matchInterim: true,
    },
    {
      command: 'tu ciudad',
      callback: (command, spokenPhrase, similarityRatio) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: 'borrar',
      callback: ({ resetTranscript }) => {
        setMessage('');
        resetTranscript();
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Euskal data covid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-black text-white p-4 items-center w-full">
        <Menu />
        <div className="flex w-full justify-center">
          <p className="ml-4 font-semibold tracking-wider text-xl">{message}</p>
        </div>
      </div>
      {children}
      <footer />
    </div>
  );
};

export default GlobalWrapper;
