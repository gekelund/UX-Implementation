import React from 'react';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;

`; 

const CountDown = ({ hours = 0, minutes = 35, seconds = 0 }) => {
    const [over, setOver] = React.useState(false);
    const [time, setTime] = React.useState({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
  
    const tick = () => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) setOver(true);
      else if (time.minutes === 0 && time.seconds === 0) {
        setTime({
          hours: time.hours - 1,
          minutes: 59,
          seconds: 59
        });
      } else if (time.seconds === 0) {
        setTime({
          hours: time.hours,
          minutes: time.minutes - 1,
          seconds: 59
        });
      } else {
        setTime({
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds - 1
        });
      }
    };
  
  
  
    React.useEffect(() => {
      let timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <Container>
        <h1>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
          .toString()
          .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</h1>
           <QueryBuilderIcon style={{marginLeft: "5px"}} />
        <div>{over ? "Time's up!" : ''}</div>
      </Container>
    );
  };

  export default CountDown;