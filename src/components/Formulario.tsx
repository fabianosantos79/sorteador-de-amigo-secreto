import {useState, useRef} from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNaLista = useAdicionarParticipante()

  const adicionarParticipante = (evento:React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
        <input 
          type='text' 
          placeholder='Insira os nomes dos participantes'
          value={nome}
          onChange={event => setNome(event.target.value)}
          ref={inputRef} 
        />
        <button disabled={!nome}>Adicionar </button>
    </form>
  )
}

export default Formulario