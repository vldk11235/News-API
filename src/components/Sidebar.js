import React, {useState} from 'react';

const categories = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
const countries = ['us', 'ua', 'au', 'ca', 'in', 'fr', 'de', 'jp'];

const Sidebar = ({onFilterChange}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (e) => {
        onFilterChange({filterType: 'category', value: e.target.value});
    };

    const handleCountryChange = (e) => {
        onFilterChange({filterType: 'country', value: e.target.value});
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onFilterChange({filterType: 'searchTerm', value: searchTerm});

    };
    console.log(searchTerm);

    return (
        <div className="sidebar">
            <h3>Filters</h3>
            <form onSubmit={handleSearchSubmit}>
                <label>
                    Search:
                    <input type="text" value={searchTerm} onChange={handleSearchInputChange}/>
                </label>
                <button type="submit">Search</button>
            </form>
            <label>
                Category:
                <select onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Country:
                <select onChange={handleCountryChange}>
                    <option value="">All</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country.toUpperCase()}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Sidebar;