import createHeader from './header';
import createHomepage from './home';
import createMenuPage from './menu';

function initialLoad(){
    createMenuPage();
    createHeader();
    createHomepage();
}

export default initialLoad;