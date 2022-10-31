function search() {
  searchData = document.getElementById("searchData");
  filter = searchData.value.toUpperCase();
  events = document.getElementById("searchCanvas");

  toFilter = events.getElementsByTagName("div");

  for (i = 0; i < toFilter.length; i++) {
    title = toFilter[i].getElementsByTagName("h5")[0];
    description = toFilter[i].getElementsByTagName("p")[0];

    titleValue = title.textContent || title.innerText;
    descValue = description.textContent || description.innerText;

    if (titleValue.toUpperCase().indexOf(filter) > -1 || descValue.toUpperCase().indexOf(filter) > -1) {
      toFilter[i].style.display = "";
    } else {
      toFilter[i].style.display = "none";
    }
  }
}
