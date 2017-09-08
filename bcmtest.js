var fs= require('fs');
var path = require('path');
const mongoose = require('mongoose');
const {Products} = require('./models/schemas');
var urlencode = require('urlencode');

//const sector = 2;
const dir = 'C:/users/johnny-laptop/desktop/eastoon-web/web_data/images';
//must change dir becasue it's currently linked to local adress
const subsections = fs.readdirSync(dir);
mongoose.connect('localhost:27017');
let epdb = mongoose.connection;
epdb.on('error',(err) => {
    console.error('Could not connect to MongoDB server', err);
})
epdb.once('open',() => {
    console.info('Connected to localhost successfully!');
})

//console.log(subsections);
// var tex = "foo.baz";
//
//
// var result = tex.slice(0,tex.length-4)+"bar"+tex.slice(3);
// console.log(result);
//
// console.log(fs.existsSync(dir+'/thumbnail/1-2S24501ss(s).jpg'));

//
// var sectors = fs.readdirSync(dir);
//     for(var i=6 ; i<7;i++){
//         Products.find({
//             "catagory":sectors[i]
//         },{
//             _id: 0,
//             __v: 0
//             },((err,comps) => {
//             if(err){
//                 console.error(err);
//             }else {
//                 fs.writeFileSync('dummy.js', comps, function (err) {
//                   if (err) throw err;
//                   console.log('Replaced!');
//                 });
//             }
//
//         }))
//
//     }


//
// fs.writeFileSync('dummy.js', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });




// var sectors = fs.readdirSync(dir);
//
//     for (var secIndex = 0 ; secIndex < 7; secIndex++){
//         if (fs.lstatSync(dir+'/'+sectors[secIndex]).isDirectory()){
//             var sub_items = fs.readdirSync(dir+'/'+sectors[secIndex])
//             for(var si_index = 0; si_index<sub_items.length; si_index++){
//                 if(fs.lstatSync(dir+'/'+sectors[secIndex]+'/'+sub_items[si_index]).isDirectory()){
//                     var subsub_items = fs.readdirSync(dir+'/'+sectors[secIndex]+'/'+sub_items[si_index])
//                     console.log(subsub_items);
//                     for(var ssi_index = 0; ssi_index<subsub_items.length; ssi_index++){
//                         if(fs.lstatSync(dir+'/'+sectors[secIndex]+'/'+sub_items[si_index]+'/'+subsub_items[ssi_index]).isDirectory()){
//                             var subsubsub_items = fs.readdirSync(dir+'/'+sectors[secIndex]+'/'+sub_items[si_index]+'/'+subsub_items[ssi_index])
//                             for (var sssi_index=0; sssi_index<subsubsub_items.length;sssi_index++){
//                                 var fileName = subsubsub_items[sssi_index]
//                                 var productName = fileName.slice(0,fileName.length-4)//get rid of .jpg extention
//                                 var thumbnail = fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4);
//                                 var fileurl = urlencode(fileName);
//                                 var thumbnailurl = urlencode(fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4))
//                                 if(fs.existsSync(dir+'/thumbnail/'+thumbnail)){
//                                     const product =  new Products({
//                                                 'id':`${secIndex}_${si_index}${ssi_index}${sssi_index}`,
//                                                 'catagory':`${sectors[secIndex]}`,
//                                                 'productType':`${sub_items[si_index]}-${subsub_items[ssi_index]}`,
//                                                 'productName': productName,
//                                                 'description': productName,
//                                                 'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/Thumbnail/${thumbnailurl}`,
//                                                 'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${subsub_items[ssi_index]}/${fileurl}`
//                                             });
//                                             product.save(err => {
//                                                 if(err){
//                                                     console.error(err);
//                                                 }
//                                                 else {
//                                                     console.log('savedddd');
//                                                 }
//                                             })
//                                 }
//                                 else {
//                                     const product =  new Products({
//                                                 'id':`${secIndex}_${si_index}${ssi_index}${sssi_index}`,
//                                                 'catagory':`${sectors[secIndex]}`,
//                                                 'productType':`${sub_items[si_index]}-${subsub_items[ssi_index]}`,
//                                                 'productName': productName,
//                                                 'description': productName,
//                                                 'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${subsub_items[ssi_index]}/${fileurl}`,
//                                                 'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${subsub_items[ssi_index]}/${fileurl}`
//                                             });
//                                             product.save(err => {
//                                                 if(err){
//                                                     console.error(err);
//                                                 }
//                                                 else {
//                                                     console.log('saveddddNTH');
//                                                 }
//                                             })
//                                 }
//                             }
//                         }
//                         else {
//                             var fileName = subsub_items[ssi_index]
//                             var productName = fileName.slice(0,fileName.length-4)//get rid of .jpg extention
//                             var thumbnail = fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4);
//                             var fileurl = urlencode(fileName);
//                             var thumbnailurl = urlencode(fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4));
//                             if(fs.existsSync(dir+'/thumbnail/'+thumbnail)){
//                                 const product =  new Products({
//                                             'id':`${secIndex}_${si_index}${ssi_index}`,
//                                             'catagory':`${sectors[secIndex]}`,
//                                             'productType':`${sub_items[si_index]}`,
//                                             'productName':productName,
//                                             'description':productName,
//                                             'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/Thumbnail/${thumbnailurl}`,
//                                             'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${fileurl}`
//                                         });
//                                         product.save(err => {
//                                             if(err){
//                                                 console.error(err);
//                                             }
//                                             else {
//                                                 console.log('savedd');
//                                             }
//                                         })
//                             }
//                             else {
//                                 const product =  new Products({
//                                             'id':`${secIndex}_${si_index}${ssi_index}`,
//                                             'catagory':`${sectors[secIndex]}`,
//                                             'productType':`${sub_items[si_index]}`,
//                                             'productName':productName,
//                                             'description':productName,
//                                             'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${fileurl}`,
//                                             'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${sub_items[si_index]}/${fileurl}`
//                                         });
//                                         product.save(err => {
//                                             if(err){
//                                                 console.error(err);
//                                             }
//                                             else {
//                                                 console.log('saveddNTH');
//                                             }
//                                         })
//                             }
//                         }
//                     }
//                 }
//                 else {
//                     var fileName = sub_items[si_index]
//                     var productName = fileName.slice(0,fileName.length-4)//get rid of .jpg extention
//                     var thumbnail = fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4);
//                     var fileurl = urlencode(fileName);
//                     var thumbnailurl = urlencode(fileName.slice(0,fileName.length-4)+'(s)'+fileName.slice(fileName.length-4));
//                     if(fs.existsSync(dir+'/thumbnail/'+thumbnail)){
//                         const product =  new Products({
//                                     'id':`${secIndex}_${si_index}`,
//                                     'catagory':`${sectors[secIndex]}`,
//                                     'productType':`${sectors[secIndex]}`,
//                                     'productName':productName,
//                                     'description':productName,
//                                     'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/Thumbnail/${thumbnailurl}`,
//                                     'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${fileurl}`
//                                 });
//                                 product.save(err => {
//                                     if(err){
//                                         console.error(err);
//                                     }
//                                     else {
//                                         console.log( 'saved');
//                                     }
//                                 })
//                     }
//                     else {
//                         const product =  new Products({
//                                     'id':`${secIndex}_${si_index}`,
//                                     'catagory':`${sectors[secIndex]}`,
//                                     'productType':`${sectors[secIndex]}`,
//                                     'productName':productName,
//                                     'description':productName,
//                                     'thumbnail':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${fileurl}`,
//                                     'piclocation':`https://s3-us-west-2.amazonaws.com/eastoon/web_data/images/${sectors[secIndex]}/${fileurl}`
//                                 });
//                                 product.save(err => {
//                                     if(err){
//                                         console.error(err);
//                                     }
//                                     else {
//                                         console.log( 'savedNTH');
//                                     }
//                                 })
//                     }
//                 }
//             }
//         } else {
//             const product =  new Products({
//                         'id':999999999,
//                         'catagory':`${sectors[secIndex]}`,
//                         'productType':"xxx",
//                         'productName':"xxx",
//                         'description':"xxx",
//                         'thumbnail':"require('../../../web_data/style/images/BagClosingMachine/Fischbein/F_Series(s).jpg')",
//                         'piclocation':"require('../../../web_data/style/images/BagClosingMachine/Fischbein/F_Series.jpg')"
//                     });
//                     product.save(err => {
//                         if(err){
//                             console.error(err);
//                         }
//                         else {
//                             console.log(sectors[secIndex]+ 'saved impossible to see');
//                         }
//                     })
//         }
//    }
//
//         const schema =  new Products({
//                     'id':999999999,
//                     'catagory':"Bag Closing Machine",
//                     'productType':"Fischbein",
//                     'productName':"F_Series",
//                     'description':"F_Series",
//                     'thumbnail':"require('../../../web_data/style/images/BagClosingMachine/Fischbein/F_Series(s).jpg')",
//                     'piclocation':"require('../../../web_data/style/images/BagClosingMachine/Fischbein/F_Series.jpg')"
//                 });

// schema.save(err => {
//     if(err){
//         console.error(err);
//     }
//     else {
//         console.log('saved');
//     }
// });
//
//
// Products.find((err,p) => {
//     if(err) return console.error(err);
//     console.log(p);
// });
