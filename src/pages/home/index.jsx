import {Header} from '../../components/Templates/Header/index.jsx';
import {FilterBar} from '../../components/Templates/FilterBar/index.jsx';
import { StyledBody } from './style.js';

function Home () {


  return (
    <>
        <Header/>
        
        <StyledBody>
          <FilterBar/>

        </StyledBody>
    </>
  )
}

export default Home;