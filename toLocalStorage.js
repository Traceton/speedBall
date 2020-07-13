export const sendData = (key) => {
  localStorage.setItem(key, key);
};
export let showLocal = () => {
  for (let i = 0; i < localStorage.length; i++) {
    console.log(
      "Show Local Storage ->" + localStorage.getItem(localStorage.key(i)) + "X"
    );
  }
};

export let clearLocal = () => {
  localStorage.clear();
  location.reload();
};
