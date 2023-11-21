import Button from "../components/Button";
import { BiAlarm } from "react-icons/bi";
import { SiJavascript, SiNvidia, SiNintendoswitch, SiTensorflow } from "react-icons/si";


function ButtonPage() {

  const handleClick = () => {
    console.log('Click!')
  };

  return (
    <div>
      We start here!

      <div>
        <Button success rounded outline onClick={handleClick} className='mb-5'>Click me!
        <BiAlarm/>
        </Button>
      </div>

      <div>
        <Button danger outline>Buy Now!
        <SiJavascript/>
        </Button>
      </div>

      <div>
        <Button warning>See Deal!
        <SiNvidia/>
        </Button>
      </div>

      <div>
        <Button secondary outline>Hide Ads!
        <SiNintendoswitch/>
        </Button>
      </div>

      <div>
        <Button primary rounded>Something!
        <SiTensorflow/>
        </Button>
      </div>

    </div>
  );
}

export default ButtonPage;
