
const capitalizeFirstLetter = (text: string) => {
  const splitString = text.split(" ");

  const arrayOfCapitalizedText = splitString.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })

  const capitalizedFormat = arrayOfCapitalizedText.join(" ");

  return capitalizedFormat;
}

export default capitalizeFirstLetter;