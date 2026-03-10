import './App.css';
import Hello from './Components/Hello.jsx';

export default function App() {
  return (
    <div className='toto'>
        <Hello firstname="Aurélien" lastname="Vaast" />
        <Hello firstname="Jean" lastname="Dupont" />
        <Hello firstname="Marie" lastname="Dupuis" />
    </div>
  )
}
