import {FilterBarContainer} from './style';

export const FilterBar = () => {


  return (
    <>
    <FilterBarContainer>
      <div className="filterBar">
        <select name="filter" >
          <option value="">--</option>
          <option value="ingredientes">Ingredientes</option>
          <option value="receitas">Receitas</option>
        </select>

        <input type="text" placeholder="O que mata sua fome ?"/>

        <button>Pesquisar</button>
      </div>
    </FilterBarContainer>
    </>
  )
}

export default FilterBar;