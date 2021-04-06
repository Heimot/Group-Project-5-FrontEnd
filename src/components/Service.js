import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import "./service.css";

function Service() {

    return (
        <div className="container">
        <div className="row">
        <div className="col-12">
                <h1 className="head">Palvelut ja huolto</h1>
                </div>
            <div className="col-lg-8 col-sm-10">
            <Card className="teksti">
  <Card body>Voit tuoda tuotteenne mihin tahansa myymäläämme, jossa ammattitaitoinen henkilökunta korjaa tuotteenne ammattitaitoisesti tai hoitaa takuukäsittelyn. Ostaessanne uuden tai käytetyn tietokoneen, meiltä löytyy myös palvelut siihen.
  </Card>
            </Card>
                </div>
            <div className="col-12">
                <h2>Hinnasto</h2>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Card className="lista" style={{ width: '50rem' }}>
                    <ListGroup>
                    <ListGroup.Item className="otsikko">Palvelut</ListGroup.Item>
                    <ListGroup.Item>Tietokoneen kokoonpano ja testaus
                        <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Käyttöjärjestelmän ja ajureiden asennus
                    <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Pakettitietokoneen käyttökuntoon asennus
                    <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Bios-päivitys
                    <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Lisämuistin asennus ja testaus
                    <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="lista" style={{ width: '50rem' }}>
                    <ListGroup>
                    <ListGroup.Item className="otsikko">Huolto</ListGroup.Item>
                    <ListGroup.Item>Tuntiveloitus
                        <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>Lausunto vakuutusyhtiölle
                    <Badge className="priceBadge">59€</Badge>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
                </div>
            </div>
            </div>
    )
}

export default Service;