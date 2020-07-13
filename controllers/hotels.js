const { hotels } = require('../data/data.json'); 
const fs = require ('fs');
const path = require ('path');

module.exports = {
    getHotels: (req, res) => {

        for (var i in hotels) {
            if (hotels[i].hasOwnProperty('image')) {
                    var fs   = require('fs'),  
                    file = `${process.cwd()}/public/assets/images/hotels/${hotels[i].image}`,
                    extensionName = path.extname(`${file}`);
                    data = fs.readFileSync(file);
                    images = data.toString('base64');
                    imgNew = `data:image/${extensionName.split('.').pop()};base64,${images}`;

                    if (imgNew.length<50){
                        imgNew = '0';
                    }

                    hotels[i].imgstr= imgNew;
            }
          }
        
          res.json({hotels}) 
    },

    getSearchByName: (req, res) => {
        const { keyword } = req.params;

          for (var i in hotels) {
            if (hotels[i].hasOwnProperty('image')) {

                    var fs   = require('fs'),  
                    file = `${process.cwd()}/public/assets/images/hotels/${hotels[i].image}`,
                    extensionName = path.extname(`${file}`);
                    data = fs.readFileSync(file);
                    images = data.toString('base64');
                    imgNew = `data:image/${extensionName.split('.').pop()};base64,${images}`;

                    if (imgNew.length<50){
                        imgNew = '0';
                    }

                    hotels[i].imgstr= imgNew;
            }
          }

        var searchname=function(hotels, keyword){
            var result=[];
            for(var i = 0; i < hotels.length; i++) {
                if (hotels[i]['name'].toLowerCase().indexOf(keyword.toLowerCase())>-1){
                    result.push(hotels[i]);
                }
            }
            hotels = result;
            return {hotels};
        }

        res.json(searchname(hotels, keyword)); 

    },

    getSearchHotel: (req, res) => {

        for (var i in hotels) {
            if (hotels[i].hasOwnProperty('image')) {
                    var fs   = require('fs'),  
                    file = `${process.cwd()}/public/assets/images/hotels/${hotels[i].image}`,
                    extensionName = path.extname(`${file}`);
                    data = fs.readFileSync(file);
                    images = data.toString('base64');
                    imgNew = `data:image/${extensionName.split('.').pop()};base64,${images}`;

                    if (imgNew.length<50){
                        imgNew = '0';
                    }

                    hotels[i].imgstr= imgNew;
            }
        }

        const  {stars} = req.params;
        const a = stars[0];
        const b = stars[1];
        const c = stars[2];
        const d = stars[3];
        const f = stars[4];

        const result = hotels.filter((hotel) => {
            return (hotel.stars === Number(a) || hotel.stars === Number(b) || hotel.stars === Number(c) || hotel.stars === Number(d) || hotel.stars === Number(f));
          });

        res.json({result});

  
    }

};
