const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSelection = document.querySelector(".images-section");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer 'put your api key here'`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 1,
      size: "1024x1024",
    }),
  };

  try {
    const response = await fetch("/generate-image", options);
    const data = await response.json();

    data?.data.forEach((imageObject) => {
      const ImageContainer = document.createElement("div");
      ImageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageObject.url);
      ImageContainer.append(imageElement);
      imageSelection.append(ImageContainer);
    });
  } catch (error) {
    console.log(error);
  }
};

submitIcon.addEventListener("click", getImages);
