import React from 'react';
import './styles.css';
import G5 from '../images/11.png';
import G2 from '../images/66.png';
import G3 from '../images/555.jpg';
import G4 from '../images/33.jpg';
import G1 from '../images/88.jpeg';
import historyImg from '../images/history.jpg';
import symptomsImg from '../images/symptoms.jpg';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Images = [
  {
    original: G1,
    thumbnail: G1
  },
  {
    original: G2,
    thumbnail: G2
  },
  {
    original: G3,
    thumbnail: G3
  },
  {
    original: G4,
    thumbnail: G4
  },
  {
    original: G5,
    thumbnail: G5
  }
];

export default function AppHome() {
  return (
    <div>
      <link Rel="stylesheet" Href="/style.css"></link>
      <div className="subTitile">What is Monkeypox?</div>
      <div style={{ width: '50%', marginLeft: '25%' }}>
        <ImageGallery items={Images} style={{ width: '40%', height: 'auto' }} />
      </div>
      <div className="plainText">
        <p>
          Monkeypox is a rare disease that is caused by infection with the
          monkeypox virus and is related to the smallpox virus. While generally
          less severe and much less contagious than smallpox, monkeypox can be a
          serious illness. It spreads from infected humans, animals, and
          materials contaminated with the virus but primarily through close,
          personal, often skin-to-skin contact with people who have monkeypox
          symptoms, such as rash and sores.
        </p>

        <p>
          monkeypox is a completely different disease and is not related to
          COVID-19. Monkeypox is much less contagious and spreads differently
          than COVID-19. This is partly because people with monkeypox are
          generally thought to be contagious to people with whom they've had
          very close contact over a long period of time, and when they have
          symptoms like a rash. This is different from COVID-19, which spreads
          through the air and when people do not have symptoms.
        </p>
      </div>
      <img
        src={historyImg}
        alt="history"
        width="50%"
        style={{ marginTop: '60px' }}
      />
      <div className="plainText">
        <p>
          Monkeypox was first discovered in 1958 when two outbreaks of a
          pox-like disease occurred in colonies of monkeys kept for research,
          hence the name ‘monkeypox.’
        </p>

        <p>
          The first human case of monkeypox was recorded in 1970 in the
          Democratic Republic of the Congo (DRC) during a period of intensified
          effort to eliminate smallpox.
        </p>
        <p>
          Since then, monkeypox has been reported in people in several other
          central and western African countries: Cameroon, Central African
          Republic, Cote d’Ivoire, Democratic Republic of the Congo, Gabon,
          Liberia, Nigeria, Republic of the Congo, and Sierra Leone. The
          majority of infections are in Democratic Republic of the Congo.
        </p>
        <p>
          After the first case in the UK in 2022, the 2022 Monkeypox Outbreak
          has been started.
        </p>
      </div>
      <img
        src={symptomsImg}
        alt="history"
        width="50%"
        style={{ marginTop: '60px' }}
      />
      <div className="plainText">
        <p>
          Monkeypox might start with symptoms like the flu, with fever, low
          energy, swollen lymph nodes, and general body aches. Within 1 to 3
          days (sometimes longer) after the appearance of fever, the person can
          develop a rash or sores. The sores will go through several stages,
          including scabs, before healing. They can look like pimples or
          blisters and may be painful and itchy.
        </p>

        <p>
          People with monkeypox may experience all or only a few of these
          symptoms. Most people with monkeypox will get the rash or sores. Some
          people have reported developing the rash or sores before (or without)
          the flu-like symptoms.
        </p>
      </div>
    </div>
  );
}
