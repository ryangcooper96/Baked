import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  constructor(props) {
    super();
    this.name = props.name;
    this.imageURL = props.imageURL;
    this.setImageURL = props.setImageURL;
  }

  componentDidMount() {
    const cloudName = "dipopoimh"; // replace with your own cloud name
    const uploadPreset = "k66vawij"; // replace with your own upload preset

    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        singleUploadAutoClose: true,
        cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false, //restrict upload to a single file
        folder: "company_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        maxImageFileSize: 2000000, //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.setImageURL({
            ...this.imageURL,
            [this.name]: result.info.secure_url,
          });
        }
      }
    );
    document.getElementById(`upload_widget-${this.name}`).addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button type="button" name={this.name} id={`upload_widget-${this.name}`}>
        UPLOAD&nbsp;<span className="material-symbols-rounded">upload</span>
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
