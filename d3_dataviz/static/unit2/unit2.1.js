function main() {
    const width = document.querySelector('#content').offsetWidth;
    const height = width;

    const svg = d3.select('#content')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const marks = [];

    for (let i = 0; i < 100; i++) {
        marks.push(
            {
                y: i * 20,
                width: width,
                height: 10
            }
        )
    }
    console.log(marks);

    svg.selectAll('rect')
        .data(marks)
        .join('rect')
        .attr('y', (d) => d.y)
        .attr('width', (d) => d.width)
        .attr('height', (d) => d.height);
};

main()
