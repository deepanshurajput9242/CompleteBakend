// const cloudnary =require("@cloudinary")

const ImageKit=require("@imagekit/nodejs")


const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIMARY_KEY,
// private_p2PR************************
})

async function uploadFile(buffer){
    const result=await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })//buffer k help se hm file return krenge 
    return result;
}
module.exports=uploadFile;

