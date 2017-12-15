var perceptron = {};
perceptron.inputs = [x1: 0, x2: 1, x3: 0];
perceptron.weights = [w1: 0.1, w2: 0.4, w3:0.3];
perceptron.output = false;
perceptron.threshold = 0.5;

var modernPerceptron = {};
modernPerceptron.x = perceptron.inputs;
modernPerceptron.w = perceptron.weights;
modernPerceptron.b = -perceptron.threshold;
modernPerceptron.isActive = function(){
	var that = this;
	let summ = 0;
	this.x.each(function(var xi){
  	that.w.each(function(var wi){
    	summ += xi*wi;
    });
  });
  return (summ + this.b) > 0;
};

