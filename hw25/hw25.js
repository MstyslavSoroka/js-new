const closeBtn = document.getElementById("close");

const closeEsc = (e, modal) => {
  if (e.key === "Escape") {
    modal.close();
    closeBtn.style.display = "none";
    document.removeEventListener("keydown", escListener);
  }
};

const closeFunct = () => {
  closeBtn.style.display = "block";
};

const createModal = (content) => {
  const modal = basicLightbox.create(content, { closable: false });
  modal.show();
  closeFunct();
  closeBtn.addEventListener("click", () => {
    modal.close();
    closeBtn.style.display = "none";
  });
  const escListener = (e) => closeEsc(e, modal);
  document.addEventListener("keydown", escListener);
};

document.getElementById("openImage").onclick = () => {
  const content = `<img src="https://via.placeholder.com/600x400" alt="Image" />
                   <button class="close" id="closeImage">Закрити</button>`;
  createModal(content, "image");
};

document.getElementById("openVideo").onclick = () => {
  const content = `<iframe width="560" height="315" src="https://www.youtube.com/embed/kcfs1-ryKWE" frameborder="0" allowfullscreen></iframe>
                   <button class="close" id="closeVideo">Закрити</button>`;
  createModal(content, "video");
};

document.getElementById("btn").onclick = () => {
  const content = `<form id="feedbackForm">
                     <label for="name">Ім'я:</label>
                     <input type="text" id="name" name="name" required />
                     <label for="email">Електронна пошта:</label>
                     <input type="email" id="email" name="email" required />
                     <label for="message">Повідомлення:</label>
                     <textarea id="message" name="message" required></textarea>
                     <button type="submit">Надіслати</button>
                   </form>
                   <button class="close" id="closeForm">Закрити</button>`;
  createModal(content, "form");
};

document.getElementById("openText").onclick = () => {
  const content = `<h1>Hi</h1>
                   <p>Modal made by lightbox.</p>
                   <button class="close" id="closeReg">Закрити</button>`;
  createModal(content, "text");
};
