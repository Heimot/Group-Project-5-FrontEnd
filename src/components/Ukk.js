import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import "./service.css";
import { faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Ukk() {

    return (
        <div className="container">
        <div className="row">
        <div className="col-12">
                <h1 className="head"><FontAwesomeIcon icon={faInfoCircle} /> Usein kysytyt kysymykset</h1>
                </div>
            <div className="col-lg-8 col-sm-10">
                <h3>Lorem ipsum</h3>
            <Card className="teksti">
  <Card body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Card>
            </Card>
                </div>
                <div className="col-lg-8 col-sm-10">
                <h3>Lorem ipsum</h3>
            <Card className="teksti">
  <Card body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Card>
            </Card>
                </div>
                <div className="col-lg-8 col-sm-10">
                <h3>Lorem ipsum</h3>
            <Card className="teksti">
  <Card body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Card>
            </Card>
                </div>
            </div>
            </div>
    )
}

export default Ukk;