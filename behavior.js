document.addEventListener("DOMContentLoaded", function (event) {
  //alert("Hello!");
  var thumbnailElements = document.getElementsByName("stad-img");
  thumbnailElements.forEach((thumbnailElement) => {
    thumbnailElement.addEventListener("click", function () {
      //alert("I saw you click!");
      if (thumbnailElement.className == "big") {
        thumbnailElement.className = "small";
      } else {
        thumbnailElement.className = "big";
      }
    });
  });
});
