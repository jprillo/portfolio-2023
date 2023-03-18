import React, { useState } from 'react';
import CardOne from '../../components/cardOne'

import animal from '../../images/art-images/animal.png'
import clown from '../../images/art-images/clown-family.png'
import dumbo from '../../images/art-images/cometh-dumbo.png'
import satan from '../../images/art-images/cometh-satan.png'
import dog from '../../images/art-images/dirty-old-dog.png'
import sun from '../../images/art-images//diva-sun.png'
import prison from '../../images/art-images/dudes-in-prison.png'
import sauron from '../../images/art-images/eye-of-saurananas.png'




function ArtLinksContainer() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const artcards = [
    {
      title: 'Animal',
      link: animal,
    },
    {
      title: 'Card 2',
      link: clown,
    },
    {
      title: 'Card 3',
      link: dumbo
    },
    {
      title: 'Card 3',
      link: satan
    },
    {
      title: 'Animal',
      link: dog,
    },
    {
      title: 'Card 2',
      link: prison,
    },
    {
      title: 'Card 3',
      link: sun 
    },
    {
      title: 'Card 3',
      link: sauron
    },
  ];
  const handleCardClick = (index) => {
    if (index === flippedIndex) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };
  return (
  <div className="art-links-container">
   {artcards.map((card, index) => (
        <CardOne
          key={index}
          title={card.title}
          link={card.link}
          image={card.link}
          isFlipped={index === flippedIndex}
          onClick={() => handleCardClick(index)}
        />
      ))}
</div>
  );
}

export default ArtLinksContainer;
