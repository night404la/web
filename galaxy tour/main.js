let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
        ],
    imageSrc2:[
            "images/pexels-pixabay-2159.jpg",
            "images/pexels-spacex-23769.jpg",
            ],
    h2ClassController:{
            centered:true,
            colorFont:false
            },
    pStyleController:{
                'margin-left':'50px',
                color:'blue',
                'font-size':'20px',
                'font-style':'italic'
                },
    imageStyleController:
                {
                    margin:'auto',
                    display:'block',
                    width:'50%'
                },
    imageStyleController2:
                {
                    margin: '0 auto',
                    display:'block',
                    width:'15%',
                    position :' absolute',
                    left:'80%',
                    top:'10%'

                },
    imageAlt:"Photo from space"
};
    const app = Vue.createApp({
    data(){
    return pageData;
    }
    });
    app.mount("#app");