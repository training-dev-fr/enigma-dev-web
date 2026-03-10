import './Hello.css'

export default function Hello({firstname, lastname}){
    return (
        <div className="hello">
            Bonjour {firstname} {lastname}
        </div>
    );
}