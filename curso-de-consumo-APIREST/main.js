const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "X-API-KEY":
      "live_OBBJyIwMh1yMRsR554W7NRpKTSMIGndoQOWrjD9FvrxTkgOBf2PbLJ6KMsYFeje8",
  },
});

const key =
  "live_OBBJyIwMh1yMRsR554W7NRpKTSMIGndoQOWrjD9FvrxTkgOBf2PbLJ6KMsYFeje8";
const API_URL = `https://api.thecatapi.com/v1/`;

// function para generar michis random
async function loadRandomMichis() {
  const res = await fetch(`${API_URL}images/search?limit=3&api_key=${key}`);
  const data = await res.json();
  console.log("random");
  console.log(data);

  // validamos el https status code
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

    btn1.onclick = () => saveFavouritesMichis(data[0].id);
    btn2.onclick = () => saveFavouritesMichis(data[1].id);
    btn3.onclick = () => saveFavouritesMichis(data[2].id);
  }

  /* const reload = document.getElementById("recargar");
  reload.onclick(); */
}

//function para cargar mis michis favorites con mi API KEY
async function loadFavouritesMichis() {
  const res = await fetch(`${API_URL}favourites`, {
    method: "GET",
    headers: {
      "x-api-key": key,
    },
  });
  const data = await res.json();
  console.log("favoritos");
  console.log(data);
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    const toRender = [];
    const section = document.querySelector("#favourites");
    section.innerHTML = "";

    data.forEach((element) => {
      const art = document.createElement("article");
      const img = document.createElement("img");
      const btn = document.createElement("button");
      const textBtn = document.createTextNode("sacar");

      btn.append(textBtn);
      btn.onclick = () => deleteFavouritesMichis(element.id);
      img.src = element.image.url;

      art.append(img, btn);
      toRender.push(art);
    });

    section.append(...toRender);
  }
}

// function para guardar nuevos michis a favoritos
async function saveFavouritesMichis(id) {
  const { data, status } = api.post("/favourites", {
    image_id: id,
  });
  /*   const res = await fetch(`${API_URL}favourites/`, {
    method: "POST",
    headers: {
      "x-api-key": key,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  }); */

  /* const data = await res.json();
  console.log(res); */

  console.log("Save");
  console.log("Michi guardado en favoritos");
  loadFavouritesMichis();
  /* if (status !== 200) {
    spanError.innerHTML = "Hubo un error: " + status + data.message;
  } else {
    console.log("Michi guardado en favoritos");
    loadFavouritesMichis();
  } */
}

// function para eliminar michis de favoritos
async function deleteFavouritesMichis(id) {
  const res = await fetch(`${API_URL}favourites/${id}`, {
    method: "DELETE",
    headers: {
      "x-api-key": key,
    },
  });

  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log("michi eliminado de favoritos");
    loadFavouritesMichis();
  }
}

// upload michis
async function uploadMichiPhoto() {
  const form = document.getElementById("uploadingForm");
  const formData = new FormData(form);

  const res = await fetch(`${API_URL}images/upload`, {
    method: "POST",
    headers: {
      "x-api-key": key,
    },
    body: formData,
  });
  const data = await res.json();

  if (res.status !== 201) {
    spanError.innerText = "Hubo un error: " + res.status + data.message;
  } else {
    console.log("Michi cargado correctamente");
    console.log({ data });
    console.log(data.url);
    console.log(loadFavouritesMichis());
    loadFavouritesMichis();
    saveFavouritesMichis(data.id);
  }
}

function miniatura() {
  const form = document.getElementById("uploadingForm");
  const formData = new FormData(form);
  //usamos el FileReader para sacar la información del archivo del formData
  const reader = new FileReader();

  //Este código es para borrar la miniatura anterior al actualizar el form.
  if (form.children.length === 3) {
    const preview = document.getElementById("preview");
    form.removeChild(preview);
  }
  //aquí sucede la magia, el reader lee los datos del form.
  reader.readAsDataURL(formData.get("file"));

  //Éste código es para cuando termine de leer la info de la form, cree una imagen miniatura de lo que leyó el form.
  reader.onload = () => {
    const previewImage = document.createElement("img");
    previewImage.id = "preview";
    previewImage.width = 100;
    previewImage.src = reader.result;
    form.appendChild(previewImage);
  };
}

loadRandomMichis();
loadFavouritesMichis();
