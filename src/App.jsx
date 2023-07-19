import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  const [milisegundos, setMilisegundos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [contador, setContador] = useState(null);

  const start = () => {
    setMilisegundos((currentState) => currentState + 1);
  };

  const formatarSaida = (saida) => {
    return saida < 10 ? `0${saida}` : saida;
  };

  const pause = () => {
    if (contador) {
      clearInterval(contador);
      setContador(null);
    }
  };

  const stop = () => {
    if (contador) {
      clearInterval(contador);
    }
    setContador(null);
    setMilisegundos(0);
    setSegundos(0);
    setMinutos(0);
  };

  useEffect(() => {
    if (milisegundos >= 100) {
      setSegundos((currentState) => currentState + 1);
      setMilisegundos(0);
    }

    if (segundos >= 60) {
      setMinutos((currentState) => currentState + 1);
      setSegundos(0);
    }
  }, [milisegundos, segundos]);

  return (
    <>
      <h1>CRONÔMETRO</h1>
      <Container>
        <Button
          textButton={<FontAwesomeIcon icon={faPlay} />}
          onClick={() => {
            if (!contador) {
              setContador(setInterval(start, 10));
            }
          }}
        />
        <Button
          textButton={<FontAwesomeIcon icon={faPause} />}
          onClick={pause}
        />
        <Button textButton={<FontAwesomeIcon icon={faStop} />} onClick={stop} />
      </Container>
      <Container>
        <Card entrada={formatarSaida(minutos)} />
        <span>:</span>
        <Card entrada={formatarSaida(segundos)} />
        <span>:</span>
        <Card entrada={formatarSaida(milisegundos)} />
      </Container>
    </>
  );
}

export default App;