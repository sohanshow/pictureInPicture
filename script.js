const videoElement = document.getElementById('video');
const button = document.getElementById('button');



//Alerting the user to select the browser screen to be shared

async function selectMediaStream(){

try{

    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }

}  catch (error){

//This is where we catch the error. 

}


} //end of selectMediaStream method


button.addEventListener('click', async ()=> {

      button.disable = true;

      //Start picture in picture
      await videoElement.requestPictureInPicture();

      button.disable = false;


});


selectMediaStream();