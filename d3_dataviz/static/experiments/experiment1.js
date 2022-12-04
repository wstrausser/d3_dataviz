const width = document.querySelector('#content').offsetWidth;
const height = width;
const xPad = width/6;
const yPad = height/6;
const points = 200000;
const pointSize = 0.5;

const fig = d3.select('#content')
    .append('svg')
    .attr('class', 'fig')
    .attr('width', width)
    .attr('height', height);

const bg = fig.append('rect')
    .attr('class', 'bg')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height);

const ax = d3.select('.fig')
    .append('svg')
    .attr('class', 'ax')
    .attr('x', xPad)
    .attr('y', yPad)
    .attr('width', width-(xPad*2))
    .attr('height', height-(yPad*2));

const axWidth = ax.attr('width');

const points1 = [];

for (let i = 0; i < (points/2); i++) {
    const x = Math.random();
    const y = Math.random();
    if (y<(1-x+.05)) {
        points1.push({
            x: x * ax.attr('width'),
            y: y * ax.attr('height'),
            r: pointSize
        });
    };
};

ax.append('g')
    .selectAll('circle')
    .data(points1)
    .join('circle')
    // .attr('class', 'color1')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => d.r)
    .attr('fill', '#444444');

const points2 = [];

for (let i = 0; i < (points/2); i++) {
    const x = Math.random();
    const y = Math.random();
    if (y>(1-x-.05)) {
        points2.push({
            x: x * ax.attr('width'),
            y: y * ax.attr('height'),
            r: pointSize
        });
    };
};

ax.append('g')
    .selectAll('circle')
    .data(points2)
    .join('circle')
    // .attr('class', 'color2')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => d.r)
    .attr('fill', '#444444');

