import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ syncronize }) {
      const {show, toggleShow} = useStorageListener(syncronize);

      if(show)
            return (
                  <div>
                        <p>Hubieron cambioes</p>
                        <button onClick={() => toggleShow(false)}>
                              Volver a cargar la información
                        </button>
                  </div>
            );
      else
            return null;
}

export { ChangeAlert };