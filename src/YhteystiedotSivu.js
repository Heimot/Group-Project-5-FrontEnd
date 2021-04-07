import Navigation from './components/navigation';
import Footer from './components/Footer';
import Tietoja from './components/Tietoja';
import Toimipisteet from "./components/Toimipisteet";





function YhteystiedotSivu() {
    return (
        <div>
            <Navigation />
            <Toimipisteet />
            <Tietoja />
            <Footer />
        </div>

    );
}

export default YhteystiedotSivu;