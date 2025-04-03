import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from "../redux/pokemonSlice";
import { RootState } from "../redux/store"; 
import "../styles/Pagination.css";

const Pagination: React.FC = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.pokemon.currentPage);

    return (
        <div className='pagination-container'>
            <button onClick={() => dispatch(prevPage())} disabled={currentPage === 1}>
                ⬅ Anterior
            </button>
            <span className='page-number'>Página: {currentPage}</span>
            <button onClick={() => dispatch(nextPage())}>
                Siguiente ➡
            </button>
        </div>
    );
};

export default Pagination;