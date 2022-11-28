function main() {
    const width = document.querySelector('#content').offsetWidth;
    const height = width;
    const xpad = width/6;
    const ypad = height/6;

    const svg = d3.select('#content')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const bg = svg.append('rect');

    bg.attr('class', 'bg')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height);
    
    const vbars = 25;

    const xArr = [];
    const barThickness = (width-(xpad*2))/((vbars*2)-1);
    for (let i = 0; i < vbars; i++) {
        let barClass = undefined
        if (i%2 == 0) {
            barClass = "bar1"
        }
        else {
            barClass = "bar2"
        }
        xArr.push(
            {
                x: (i*(barThickness*2)+xpad),
                y: ypad,
                width: barThickness,
                height: height-(ypad*2),
                class: barClass
            }
        )
    };

    svg.selectAll('.vbar').data(xArr).join('rect')
        .attr('class', (d) => d.class)
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y)
        .attr('width', (d) => d.width)
        .attr('height', (d) => d.height);
    
    const hbars = vbars;
    yArr = []
    for (let i = 0; i < hbars; i++) {
        const y = (i*(barThickness*2))+ypad;
        const ylim = height-ypad;
        if (y > ylim) {
            break
        };

        let barClass = undefined;
        if (i%2 == 0) {
            barClass = 'bar1';
        }
        else {
            barClass = 'bar2';
        };

        const barLength = width-(xpad*2);

        yArr.push(
            {
                x: xpad,
                y: y,
                width: barLength,
                height: barThickness,
                class: barClass
            }
        );
    };

    svg.selectAll('.hbar').data(yArr).join('rect')
        .attr('class', (d) => d.class)
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y)
        .attr('width', (d) => d.width)
        .attr('height', (d) => d.height);
};

main();
