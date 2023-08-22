import {useState} from 'react';
function SearchHeader({search}) {
    const [value, setValue] = useState('');
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        debugger;
        search(value);
    }
    const handleChange=(event)=>{
        setValue(event.target.value);
    };
    return ( 
        <div className="search-container">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input value={value} onChange={handleChange} placeholder="Ara..."/>
            </form>
        </div>
     );
}

export default SearchHeader;