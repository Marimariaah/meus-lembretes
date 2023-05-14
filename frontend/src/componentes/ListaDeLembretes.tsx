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

        function handleToggleLembreteCompletion(id: number) {
            const newLembrete = [...lembretes];
            const lembrete = newLembrete.find(lembrete => lembrete.id === id);
            if (!lembrete) return false;
            lembrete.isComplete = !lembrete.isComplete;
            SavarLembretes(newLembrete);
          }

          function handleRemoveLembrete(id: number) {
            const lembretesFiltradas = lembretes.filter(lembrete => lembrete.id !== id);
            SavarLembretes(lembretesFiltradas);
          }

          async function recuperarLembretes() {
            const stringLembrete = JSON.parse(localStorage.getItem('lembretes') || '{}');
            if (!(Object.keys(stringLembrete).length === 0)) return setLembretes(stringLembrete);
          }

          useEffect(() => {
            (async () => { await recuperarLembretes(); })();
          }, [])
    }


