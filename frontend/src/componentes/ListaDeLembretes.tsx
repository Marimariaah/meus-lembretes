import { useState, useEffect } from 'react'
// import {  } from ".";


export function ListaDeLembretes() {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);
    const [newTituloDeLembrete, setNewTituloDeLembrete ] =useState('');

    function SavarLembretes(localLembrete: Lembrete[]) {
        localStorage.setItem('lembrete', JSON.stringify(localLembrete));
        setLembretes(localLembrete);
    }

    function handleCriarNewLembrete() {
        if(!newTituloDeLembrete) return false;

        const lembrete = {
            id: new Date().getTime(),
            titulo: newTituloDeLembrete,
            isComplete: false,
          }

          SavarLembretes([...lembretes, lembrete]);
          setNewTituloDeLembrete('');
        }


    }
}

