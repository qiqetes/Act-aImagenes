import "./App.css";
import { useState } from "react";

function App() {
  const [contenido, setContenido] = useState(localStorage.getItem("contenido"));
  const [titulo, setTitulo] = useState(localStorage.getItem("title"));
  const [isWhite, setIsWhite] = useState(false);
  const [imagen, setImagen] = useState(null);

  const handleTitleChange = (e) => {
    setTitulo(e.target.value);
    localStorage.setItem("title", e.target.value);
  };

  const handleContentChange = (e) => {
    setContenido(e.target.value);
    localStorage.setItem("contenido", e.target.value);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImagen(e.target.files[0]);
    }
    console.log(e.target.files[0]);
  };

  // const creaImg = () => {
  //   const nodoImg = document.getElementById("imagen_insta");
  // };

  return (
    <div id="App">
      <div
        className="row"
        style={{ justifyContent: "space-between", margin: "0px 50px" }}
      >
        <h1 className="title">Creador imágenes corporativas Actúa</h1>
      </div>
      <div className="container row">
        <div className="slide-maker">
          <div style={{ margin: "20px" }}>
            <form>
              <label className="row">
                <span>Título:</span>
                <textarea
                  type="text"
                  name="name"
                  rows="2"
                  onChange={handleTitleChange}
                  value={titulo}
                />
              </label>
              <hr />
              <label className="row">
                <span>Contenido:</span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={handleContentChange}
                  value={contenido}
                ></textarea>
              </label>
              <hr />

              <div className="row">
                <span className="tooltiptext">Icono en negro:</span>
                <div className="file-input-container tooltip">
                  <input
                    type="file"
                    className="custom-file-input"
                    accept="image/*"
                    type="file"
                    id="img"
                    name="uploadImg"
                    style={{ marginTop: "5px" }}
                    onChange={imageChange}
                  />
                </div>
              </div>
              <hr />
              <input
                type="checkbox"
                id="isWhite"
                name="scales"
                onChange={(e) => {
                  setIsWhite(e.target.checked);
                }}
              />
              <label htmlFor="isWhite">Blanco</label>
            </form>
            <div className="row">
              <button
                onClick={() => {}}
                style={{ margin: "auto", marginTop: "80px" }}
              >
                Crea Imagen
              </button>
            </div>
          </div>
        </div>
        <div
          className="proceso-img"
          style={{ color: isWhite ? "var(--green)" : "var(--white)" }}
        >
          <div className="container-proceso-img" id="imagen_insta">
            <div
              className="container-proceso-texto"
              style={{
                backgroundColor: isWhite ? "var(--white)" : "var(--green)",
                border: isWhite ? "solid var(--green) 1px" : "none",
              }}
            >
              <div className="center-vertically">
                <h1>{titulo}</h1>
                <p>{contenido}</p>
                {imagen && (
                  <div className="img">
                    <div className="img-container">
                      <img
                        src={URL.createObjectURL(imagen)}
                        alt="decoración"
                        className={isWhite ? "isWhite" : "isGreen"}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="container-proceso-layer">
              <div className="web">
                <span
                  style={{ color: isWhite ? "var(--green)" : "var(--white)" }}
                >
                  www.actuapsico.com
                </span>
              </div>
              <div className="arrow">
                <span
                  style={{ color: isWhite ? "var(--green)" : "var(--white)" }}
                >
                  ACTÚA --{">"} PSICOLOGÍA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>1. Click derecho + inspeccionar elemento sobre la imagen creada</p>
      <p>2. Ctrl + Shift + P y escribir Screenshot node</p>
      <p>3. Enter y se descargará la imagen</p>
    </div>
  );
}

export default App;
