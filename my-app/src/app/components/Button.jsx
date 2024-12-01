"use client";
import { useMetricsContext} from '../contexts/MetricsContext';

export default function Buttons({buttonType}) {
    const {setMetrics} = useMetricsContext();
    let buttonName;
    buttonName = {happiness:'Play with Me!', health: 'Heal Me!', cleanliness:'Clean Me!', satiation: 'Feed Me!' };

    return(

        <button
            id = {`${buttonType}-button`}
            className = "bg-purple-800 hover:bg-purple-950 text-white py-2 px-5 rounded-full mr-5"
            onClick={(e) => {
            e.preventDefault();

            setMetrics((prev) => {
              const dictCopy = {...prev};
              if (buttonType != 'health'){
                if (dictCopy[buttonType] <= 80){
                    dictCopy[buttonType] += 20;
                  }
                  else{
                    dictCopy[buttonType] = 100;
                  }
    
                  if (dictCopy.health <= 95){
                    dictCopy.health += 5;
                  }
                  else{
                    dictCopy.health = 100;
                  }
              }else{
                if (dictCopy.health <= 85){
                    dictCopy.health += 15;
                  }
                  else{
                    dictCopy.health = 100;
                  }
              }
              
              
              return dictCopy;
  
            })
          }}>
            {buttonName[buttonType]}
            </button>

    )


}