import React, { useState, useEffect } from 'react';
import styles from "./Presentation.module.css";

const PresentationInit = {
  presentation01: {
    title: "Conquista",
    text: "Sensacional, evento de muito valor agregado, pude contribuir com a Cidade de Mogi das cruzes, buscando como a tecnologia pode auxiliar no desenvolvimento da criança e do recém nascido, conheci pessoas incríveis no evento, que em 3 dias fizeram um vínculo que parecia que conhecia a anos , pude ficar fissurado e me por a prova e descobrir que consigo dormir 1 h kkkk durante 1 dia e meio",
    src: "src/assets/hacktimeeu.jpeg"
  },
  presentation02: {
    title: "Oportunidade",
    text: "Hoje, tive a oportunidade de conduzir mais um treinamento sobre o ChatGPT. Espero ter contribuído para o crescimento e desenvolvimento de todos. Muito obrigado",
    src: "src/assets/chatgpt02.jpeg"
  },
  presentation03: {
    title: "Eventos",
    text: "tive a felicidade de conquistar o primeiro lugar no Hackathon do Bem e, como cidadão, colaborar com ideias para a reconstrução do Rio Grande do Sul. obrigado ",
    src: "src/assets/rio.jpeg"
  },
  presentation03: {
    title: "Eventos",
    text: "Tive um meetup incrível, repleto de aprendizado e valor agregado organizado pela CloudDog . Entre os conceitos discutidos, em destaque o Amazon QuickSight" +
"🚀🙏Foi sensacional e agradeço a todos os envolvidos ",
    src: "src/assets/aws.jpeg"
  },
};

const Presentation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const presentations = Object.values(PresentationInit);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % presentations.length
      );
    
      
    }, 5000); 
  
    

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [presentations.length]);

  const currentPresentation = presentations[currentIndex];

  return (
    <div className={styles.mainPresentation}>
      <div className={styles.mainContent}>
        <div>
          <h1 className={styles.h1}>{currentPresentation.title}</h1>
          <p className={styles.p}>{currentPresentation.text}</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
        <div className={styles.containerIMG}>
            <img className={styles.img} src={currentPresentation.src} alt={currentPresentation.title} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
