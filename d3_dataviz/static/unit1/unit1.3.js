// .createElementNS('http://www.w3.org/2000/svg')

function main() {
    const width = document.querySelector('#content').offsetWidth;
    const height = width*(2/9);
    const xpad = height/10;
    const ypad = height/10;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'svg2')
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    document.getElementById("content").appendChild(svg);

    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute("width", width);
    bg.setAttribute("height", height);
    bg.setAttribute("class", "bg");
    svg.appendChild(bg);

    const vmask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    vmask.setAttribute('id', 'vmask3');
    svg.appendChild(vmask);

    const vmaskBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    vmaskBg.setAttribute('x', 0);
    vmaskBg.setAttribute('y', 0);
    vmaskBg.setAttribute('height', height);
    vmaskBg.setAttribute('width', width);
    vmaskBg.setAttribute('fill', 'white');
    vmask.appendChild(vmaskBg);

    const radius = (height-(ypad*2))/2.5

    const vmaskCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    vmaskCircle.setAttribute('cx', width/2);
    vmaskCircle.setAttribute('cy', height/2);
    vmaskCircle.setAttribute('r', radius);
    vmaskCircle.setAttribute('fill', 'black');
    vmask.appendChild(vmaskCircle);

    const vbars = 151
    const barThickness = (width-(xpad*2))/((vbars*2)-1);
    for (let i = 0; i < vbars; i++) {
        const vbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        if (i%2 == 0) {
            vbar.setAttribute("class", "bar1")
        }
        else {
            vbar.setAttribute("class", "bar2")
        };
        vbar.setAttribute('x', (i*(barThickness*2))+xpad);
        vbar.setAttribute('y', ypad);
        vbar.setAttribute("width", barThickness);
        vbar.setAttribute("height", height-(ypad*2));
        vbar.setAttribute("mask", "url(#vmask3)");
        svg.appendChild(vbar);
    };

    const hmask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    hmask.setAttribute('id', 'hmask3');
    svg.appendChild(hmask);

    const hmaskBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    hmaskBg.setAttribute('x', 0);
    hmaskBg.setAttribute('y', 0);
    hmaskBg.setAttribute('height', height);
    hmaskBg.setAttribute('width', width);
    hmaskBg.setAttribute('fill', 'black');
    hmask.appendChild(hmaskBg);

    const hmaskCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    hmaskCircle.setAttribute('cx', width/2);
    hmaskCircle.setAttribute('cy', height/2);
    hmaskCircle.setAttribute('r', radius);
    hmaskCircle.setAttribute('fill', 'white');
    hmask.appendChild(hmaskCircle);

    const hbars = vbars;
    for (let i = 0; i < hbars; i++) {
        if (((i*(barThickness*2))+ypad) > (height-ypad)) {
            break
        }

        const hbar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hbar.setAttribute('y', (i*(barThickness*2))+ypad);
        hbar.setAttribute('x', xpad);
        hbar.setAttribute("width", width-(xpad*2));
        hbar.setAttribute("height", barThickness);
        if (i%2 == 0) {
            hbar.setAttribute("class", "bar1")
        }
        else {
            hbar.setAttribute("class", "bar2")
        };
        hbar.setAttribute("mask", "url(#hmask3)");
        svg.appendChild(hbar);
    };
};

main()
