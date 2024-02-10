import createHeader from './header';
import createHomepage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function initialLoad(){
    createContactPage();
    createMenuPage();
    createHeader();
    createHomepage();
}

export default initialLoad;