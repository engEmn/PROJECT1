
import './App.css'
import Alert from './component/Alert/Alert'
import { Ban } from "lucide-react";
import { BookOpen } from "lucide-react";
import { OctagonAlert } from "lucide-react";
import { CloudCheck } from "lucide-react";

function App() {


  return (
    <>
      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="something wrong"
      >
        <p>
          "jhrjfhg vhhhgv hcg hf hfg gfhjgg gfygref grhfghkg gfjrhgy hgf fg{" "}
          <a href="/">njhvjt</a>hjv"
        </p>
      </Alert>
      <Alert
        type="alert-waring"
        icon={<OctagonAlert />}
        title="something wrong"
        dscription="lorem klmckjkh jhhkdfgv hdjgf jhjcgh kjhc,g jhdkg ehkhgh "
      />
      <Alert
        type="alert-info"
        icon={<BookOpen />}
        title="something wrong"
        dscription="lorem klmckjkh jhhkdfgv hdjgf jhjcgh kjhc,g jhdkg ehkhgh "
      />
      <Alert
        type="alert-default"
        icon={<Ban size={20} />}
        title="something wrong"
        dscription="lorem klmckjkh jhhkdfgv hdjgf jhjcgh kjhc,g jhdkg ehkhgh "
      />
      <Alert
        type="alert-success"
        icon={<CloudCheck />}
        title="something wrong"
        dscription="jhrjfhg vhhhgv 
          hcg hf hfg gfhjgg gfygref grhfghkg gfjrhgy hgf 
          fg <a href='/'>njhvjt</a></>"
      />
    </>
  );
}

export default App
