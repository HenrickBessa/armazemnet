import React from 'react';
import "./styles/ObservationStyles.css";

const Observation = ({register, errors}) => {
    return (
        <div className={"observationContainer"}>
          <label>Observações</label>
          <textarea
            name="observations"
            id="observations"
            {...register("observation")}
          />
          <p>{errors.observation?.message}</p>
        </div>
    );
}

export default Observation;
