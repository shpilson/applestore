const apple_map1 = document.querySelector(".custom_section");

function apple_map() {
apple_map1.insertAdjacentHTML('afterend', `<div class="mymap_section" style="height: 100%;margin-top: 80px;position: relative;padding: 50px 0;width: 100%;">

<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A463eac9ab974902527947ad58129996e289d642018dbd623cf607d5c4dc7ef13&amp;source=constructor" width="auto" height="auto" frameborder="0" style="
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(.8);
    transition: all .3s ease;
    "></iframe>

<div class="container">
<div class="col-12 col-md-4 contacts" style="
    background:  black;
    border-radius: 10px;
    padding: 5% 3%;
    color: white;
">
<h5 class="contacts__title">Наши контакты</h5>
<ul class="contacts__list" style="width: 80%;margin: 0 auto;/* display: flex; *//* align-items: center; *//* margin: 0 0 0 40px !important; */">
  
<li class="contact__list-el" style="
    /* margin: 0 0 0 40px !important; */
    display: flex;
    -webkit-box-align: center;
">
  <i>
<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2884 12.3117V11.3366H10.3133H2.94297C1.87831 11.3366 1.45504 9.8226 2.54975 9.30998C2.55028 9.30973 2.55082 9.30948 2.55135 9.30923L19.9485 1.27972C20.3172 1.1329 20.7396 1.23574 21.0643 1.56043C21.3889 1.88508 21.492 2.30764 21.3452 2.67663L13.3157 20.0737C13.3155 20.0743 13.3152 20.0748 13.315 20.0753C12.8025 21.1698 11.2884 20.7472 11.2884 19.682V12.3117Z" stroke="white" stroke-width="1.95017"></path>
</svg>

</i>
  <p class="contact__list-text" style="
    margin: 0 0 0 10px !important;
">
    <a href="" role="link">г. Москва, Петровка , д. 2</a>
  </p>
</li>

<li class="contact__list-el" style="
    display: flex;
    -webkit-box-align: center;
    margin: 15px 0 15px 0;
">
  <i>
<svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6857 1.76299C13.1425 1.76299 15.4986 2.73894 17.2358 4.47615C18.973 6.21336 19.949 8.56952 19.949 11.0263C19.949 14.8335 16.9832 20.32 10.7832 24.97C10.755 24.9911 10.7208 25.0025 10.6857 25.0025C10.6505 25.0025 10.6163 24.9911 10.5882 24.97C4.3881 20.32 1.42235 14.8335 1.42235 11.0263C1.42235 8.56952 2.3983 6.21336 4.13551 4.47615C5.87272 2.73894 8.22888 1.76299 10.6857 1.76299ZM10.6857 6.63842C9.52193 6.63842 8.40585 7.10071 7.58296 7.9236C6.76007 8.74649 6.29778 9.86257 6.29778 11.0263C6.29778 12.19 6.76007 13.3061 7.58296 14.129C8.40585 14.9519 9.52193 15.4142 10.6857 15.4142C11.8494 15.4142 12.9655 14.9519 13.7884 14.129C14.6113 13.3061 15.0736 12.19 15.0736 11.0263C15.0736 9.86257 14.6113 8.74649 13.7884 7.9236C12.9655 7.10071 11.8494 6.63842 10.6857 6.63842Z" stroke="white" stroke-width="1.95017"></path>
</svg>

</i>
  <p class="contact__list-text" style="
    margin: 0 0 0 10px !important;
">
    <a href="mailto:info@applestore.sellavi" role="link">info@applestore.sellavi</a>
  </p>
</li>

<li class="contact__list-el" style="
    /* display: flex; */
    /* -webkit-box-align: center; */
    /* margin: 0 0 0 10px !important; */
    display: flex;
    -webkit-box-align: center;
">
  <i>
<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2594 17.6388L15.7325 17.6978L16.0696 17.3607L17.9764 15.4538C17.977 15.4532 17.9776 15.4527 17.9782 15.4521C18.101 15.3315 18.256 15.2489 18.4247 15.2143C18.5935 15.1797 18.7686 15.1946 18.9291 15.2572C18.9297 15.2575 18.9304 15.2577 18.931 15.258L21.2502 16.184C21.2509 16.1843 21.2516 16.1845 21.2523 16.1848C21.4133 16.2506 21.5513 16.3625 21.6492 16.5063C21.7467 16.6498 21.7999 16.8187 21.8022 16.9921V21.2483C21.8009 21.3655 21.7761 21.4812 21.7292 21.5886C21.6819 21.697 21.6132 21.7947 21.5272 21.8758C21.4411 21.9569 21.3396 22.0198 21.2286 22.0606L21.5654 22.9757L21.2286 22.0606C21.1191 22.1009 21.0026 22.119 20.8861 22.1137C13.0465 21.6242 8.40944 18.0849 5.62739 14.0712C2.81549 10.0145 1.86568 5.41775 1.56295 2.84987C1.54972 2.72774 1.56231 2.60418 1.59992 2.48722C1.63779 2.36944 1.70017 2.26101 1.78295 2.16907C1.86573 2.07713 1.96705 2.00376 2.08022 1.95379C2.1934 1.90382 2.31587 1.87837 2.43959 1.87913L2.43959 1.87915H2.44557H6.56482C6.73757 1.8799 6.90619 1.93219 7.04906 2.02934C7.19226 2.12671 7.30305 2.2647 7.36718 2.42555L7.36735 2.42598L8.29734 4.75522L8.29732 4.75523L8.29999 4.76177C8.36437 4.9197 8.3808 5.09309 8.34721 5.2603C8.31367 5.4273 8.23172 5.58074 8.11159 5.70148C8.11144 5.70163 8.1113 5.70177 8.11116 5.70192L6.20125 7.61182L5.85443 7.95864L5.92613 8.44385L6.89074 8.30131C5.92613 8.44385 5.9262 8.44432 5.92628 8.44483L5.92645 8.44599L5.92688 8.44882L5.92806 8.45652L5.93181 8.47999C5.93494 8.49915 5.93937 8.5253 5.94526 8.55801C5.95704 8.6234 5.97468 8.71512 5.9995 8.82967C6.04911 9.05858 6.12767 9.37991 6.24596 9.7655C6.48178 10.5342 6.87972 11.5722 7.53083 12.6462C8.84293 14.8105 11.1984 17.1323 15.2594 17.6388Z" stroke="white" stroke-width="1.95017"></path>
</svg>
</i>
  <p class="contact__list-text" style="
    margin: 0 0 0 10px !important;
">
    <a href="tel:8 (999) 965-89-09" role="link">8 (999) 965-89-09</a>
  </p>
</li>
</ul>
</div><div class="contact-with-map row">
</div>
</div></div>`)
}

export default apple_map;