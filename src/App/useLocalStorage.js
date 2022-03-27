import React from "react";

function useLocalStorage(itemName, initialValue) {
      const [error, setError] = React.useState(false);
      const [loading, setLoading] = React.useState(true);
      const [item, setItem] = React.useState(initialValue);
      const [syncItem, setSyncItem] = React.useState(true);

      React.useEffect(() => {
        setTimeout(() => {
          try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = [];
            } else {
              parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
            setSyncItem(true);
          } catch(err) {
            setError(err);
          }
        }, 3000);
      }, [syncItem]);

      const saveItem = (newItem) => {
        try {
          const stringfiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringfiedItem);
          setItem(newItem);
        } catch (err) {
          setError(err);
        }
      };

      const syncronizeItem = () => {
        setLoading(true);
        setSyncItem(false);
      }

      return {
        item,
        saveItem,
        loading,
        error,
        syncronizeItem,
      }
}


export { useLocalStorage };