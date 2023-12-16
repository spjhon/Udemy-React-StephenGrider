import 'bulma/css/bulma.css';

import ProfileCard from "./ProfileCard.jsx";
import AlexaImage from './img/alexa.png'
import CortanaImage from './img/cortana.png'
import SiriImage from './img/siri.png'

const App = () => {
    return (
        <div>

            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>

                        <div className='column is-3'>
                            <ProfileCard title = 'Alexa' handle = '@alexa99' imageSrc={AlexaImage}
                            description = "Alexa is from amazon"/>
                        </div>

                        <div className='column is-3'>
                            <ProfileCard title = 'Cortana' handle = '@cortana32' imageSrc={CortanaImage}
                            description = "Cortana is from microsoft"/>
                        </div>

                        <div className='column is-3'>
                            <ProfileCard title = 'Siri' handle = '@siri01' imageSrc={SiriImage}
                            description = "Siri is from apple"/>
                        </div>

                    </div>
                </section>
            </div>
            
            
            
        </div>
    );
};

export default App;