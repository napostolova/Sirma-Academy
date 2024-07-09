function getAttributes() {
    event.preventDefault();

    let linkElement = document.querySelector('#someId');
    let hrefLink = linkElement.getAttribute('href');
    let hrefLangLink = linkElement.getAttribute('hreflang');
    let relLink = linkElement.getAttribute('rel');
    let targetLink = linkElement.getAttribute('target');
    let typeLink = linkElement.getAttribute('type');

    console.log(hrefLink);
    console.log(hrefLangLink);
    console.log(relLink);
    console.log(targetLink);
    console.log(typeLink);
}