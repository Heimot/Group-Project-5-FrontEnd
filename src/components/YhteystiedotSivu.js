import Tietoja from './Tietoja';
import Toimipisteet from "./Toimipisteet";
import Asiakaspalvelu from "./Asiakaspalvelu";
import YhTieOtsikko from "./YhTieOtsikko";




export default function YhteystiedotSivu() {
    return (
        <div>
            <pre></pre>
            <YhTieOtsikko />
            <pre></pre>
            <Toimipisteet />
            <pre></pre>
            < Asiakaspalvelu />
            <pre></pre>
            <Tietoja />
        </div>

    );
}

