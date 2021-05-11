const catalogue1 = document.querySelector("#home > div > div.content-area > section.page-section.homefeatured_category > div")

function catalogue() {
catalogue1.insertAdjacentHTML('afterbegin', `<h2 class="section-title mb-4 mt-4 w-100"><span>Категории товаров</span></h2>`)
}

export default catalogue;