export const API_KEY = 'AIzaSyA8gmi-gw0Q_tVpuLR9zZ9JWYyKoRLL50A';

export const value_converter = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M"; // using toFixed(1) to keep one decimal place
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K"; // using toFixed(1) to keep one decimal place
    } else {
      return value.toString();
    }
  };
  