import React from 'react';

import styles from './aboutMe.module.scss';

function About() {
  return (
    <div className={styles.aboutMe}>
      <div className={`${styles.aboutMeContainer} container`}>
        <h2 className={styles.title}>Обо мне</h2>
        <p className={styles.desc}>
          Таро, руны, хиромантия... Мне часто задают вопрос: "Чем вы занимаетесь? Вы правда во все
          это верите?" Раньше я не знала, что на это ответить, сегодня я уверенно говорю: "Я не
          верю, я знаю!" И все инструменты, которые я использую в своей работе, могут кардинально
          изменить жизнь человека. Я постоянно наблюдаю, как эзотерические знания помогают людям в
          самых разных ситуациях. И если я учусь и делюсь своими знаниями, почему это не может быть
          профессией?
        </p>
        <p className={styles.desc}>
          Думаю, может, это самая настоящая и самая интересная профессия. Ты развиваешь свое
          сознание и жизнь начинает меняться в лучшую сторону. А главное, ты имеешь возможность
          помогать другим стать лучше, осознанней, счастливее. Магия и психология, что может быть
          круче?
        </p>
        <p className={styles.desc}>А знаете что самое важное? Этому может научится каждый!</p>
      </div>
    </div>
  );
}

export default About;
