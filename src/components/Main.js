require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var imageDatas=require("../data/imageDatas.json");
imageDatas=(function genImageUrl(imageDatasArr){
	for(var i=0;i<imageDatasArr.length;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require("../images/"+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section calssName="stage">
      <section className="img-sec">
      </section>
      <nav className="controller-nav">
      </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
