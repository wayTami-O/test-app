import { motion } from 'framer-motion';
import { useState } from 'react';

function FadeIn() {
    // Хук для управления состоянием показа компонента
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {/* Кнопка для переключения состояния */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Скрыть' : 'Показать'} компонент
      </button>

      {/* Компонент с анимацией */}
      <motion.div
        initial={{ opacity: 0 }}       // Начальное состояние (невидимый)
        animate={{ opacity: isVisible ? 1 : 0 }}  // Зависимость от состояния (если isVisible true, то opacity будет 1)
        transition={{ duration: 1 }}    // Длительность анимации
        style={{ marginTop: '20px', padding: '20px', backgroundColor: 'skyblue' }}
      >
        <h1>Привет! Я анимированный компонент.</h1>
      </motion.div>
    </div>
  );
}

export default FadeIn;