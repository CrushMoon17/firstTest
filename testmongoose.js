const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}

const mydata = mongoose.model('cats', schema);

// const kitty = new mydata({ name: 'testZildjian2' });
// kitty.save().then(() => console.log('testmeow1'));
// const kitty1=new mydata({ name: 'Tom3',age:1,health:'good'});
// kitty1.save().then(()=>console.log("new scheam writed"))
mydata.find({name:"Tom3"},(err,data)=>{console.log(data[0]._doc.name)})