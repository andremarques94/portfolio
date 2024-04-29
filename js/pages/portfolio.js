function render(elem) {
    elem.style = 'width:100%; height:100%; display:flex;flex-direction:column;';

    const content = document.createElement('div');

    content.style =
        'width:100%; height:100%; display:flex;flex-direction:column;justify-content:center;align-items:center;';

    content.innerHTML = `
      <div style="text-align: justify;">
        <h1>WORK IN PROGRESS</h1>
      </div>`;

    elem.appendChild(content);
}

export { render };
