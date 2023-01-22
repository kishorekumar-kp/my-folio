import React from 'react'
import '../components/progressbar.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progressbar({score,tittle}) {
  return (<><div className='division'>
  <span>{tittle}</span>
  <div className='circular'>
   <CircularProgressbar
          value={score}
          text={`${score}%`}
          circleRatio={1} /* Make the circle only 0.7 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: 'butt',
              transform: 'rotate(-126deg)',
              transformOrigin: 'center center',
            },
            path: {
              strokeLinecap: 'butt',
              // transform: 'rotate(-126deg)',s
              transformOrigin: 'center center',
              stroke: "#faad92",
            },
            text: {
              fill: '#404969',
            },
          }}
          strokeWidth={10}
        />
      </div>

</div>

  </> 
  )
}

export default Progressbar;