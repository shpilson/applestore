function changeButton () {
    const button = document.querySelector('.buttons_added');
    button.insertAdjacentHTML(
        'afterbegin',
        `
                <span>Товар в корзине</span>
        `
      );
}

export default changeButton;