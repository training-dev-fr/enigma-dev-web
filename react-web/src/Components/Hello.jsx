import { useState } from 'react';
import './Hello.css'

export default function Hello({firstname, lastname}){
    const [count, setCount] = useState(1);
    return (
        <div className="hello">
            Bonjour {firstname} {lastname}
            <button onClick={() => setCount(count + 1)}>Cliquez ici {count}</button>
        </div>
    );
}