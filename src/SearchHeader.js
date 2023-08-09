function SearchHeader({search}) {
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        debugger;
        search("damla");
    }
    return ( 
        <div className="search-container">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input placeholder="Ara..."/>
            </form>
        </div>
     );
}

export default SearchHeader;