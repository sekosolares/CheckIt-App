import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStoracheListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStoracheListener };