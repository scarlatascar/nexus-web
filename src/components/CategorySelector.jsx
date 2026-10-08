import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const CategorySelector = () => {
    const { categories, darkMode } = useBooks();
    const [searchParams, setSearchParams] = useSearchParams();
    const current = searchParams.get('category') || 'todas';

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === 'todas') {
            setSearchParams({});
        } else {
            setSearchParams({ category: value });
        }
    };

    return (
        <div className={`cine-selector ${darkMode ? 'dark' : ''}`}>
            <label htmlFor="category-select">Filtra por categoría:</label>
            <select id="category-select" value={current} onChange={handleChange}>
                <option value="todas">Todas</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;