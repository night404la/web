/*
const svg = d3.select('body')
.append('svg')
.attr('width',500)
.attr('height',300);
const height_male = svg.append('g')
.attr('transform','translate(100,100)');
height_male.append('line')
.attr('x1',0).attr('x2',173.5).style('stroke','black');
height_male.append('circle').attr('cx',173.5).attr('cy',0).attr('r',3);
height_male.append('text').attr('x',0).attr('y',20).text("台灣男生平均身高173.5 cm");
*/
//get csv file
d3.csv('data/harry_potter.csv').then(
    res =>{
    console.log('Local CSV:',res)
    }
    );
    //get json file
    d3.csv('data/harry_potter.json').then(
    res =>{
    console.log('Local json:',res)
    }
    );
    //get local multi-files
const potter = d3.csv('data/harry_potter.csv');
const rings = d3.csv('data/lord_of_the_rings.csv');
Promise.all([potter, rings]).then(
res =>{
console.log('Multiple Request:',res);
console.log('Concat:',[...res[0],...res[1]]);
//console.log('potter:',res[0]);
//console.log('rigns:',res[1]);
}
);

d3.json('https://api.themoviedb.org/3/search/movie?api_key=YourKeyHere&language=zh-TW&query=%E7%80%91%E5%B8%83').then(
res =>{
    console.log('API json:',res)
}
);