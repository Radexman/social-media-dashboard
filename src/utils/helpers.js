const getBackgroundColor = (media) => {
  if (media === "facebook") {
    return "hsl(208, 92%, 53%)";
  } else if (media === "twitter") {
    return "hsl(203, 89%, 53%)";
  } else if (media === "instagram") {
    return "linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%)";
  } else if (media === "youtube") {
    return "hsl(348, 97%, 53%)";
  }
};

const checktheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const calculateFollowers = (stats) => {
  const followersAmount = Intl.NumberFormat("en-US");

  const number = stats.reduce((acc, cur) => {
    return acc + cur.followers;
  }, 0);

  return followersAmount.format(number);
};

const addK = (number) => {
  if (number > 10000) {
    return number.toString().slice(0, 2).concat("", "k");
  } else {
    return number;
  }
};

const chooseImage = (media, mediaOne, mediaTwo, mediaThree, mediaFour) => {
  switch (media) {
    case "facebook":
      return mediaOne;
    case "instagram":
      return mediaTwo;
    case "twitter":
      return mediaThree;
    case "youtube":
      return mediaFour;
  }
};

const utils = {
  getBackgroundColor,
  checktheme,
  calculateFollowers,
  addK,
  chooseImage,
};

export default utils;
