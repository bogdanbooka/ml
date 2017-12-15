var perceptron = {};
perceptron.inputs = [x1: 0, x2: 1, x3: 0];
perceptron.weights = [w1: 0.1, w2: 0.4, w3:0.3];
perceptron.output = false;
perceptron.threshold = 0.5;

var sigmoidNeuron = {};
sigmoidNeuron.x = perceptron.inputs;
sigmoidNeuron.w = perceptron.weights;
sigmoidNeuron.b = -perceptron.threshold;
sigmoidNeuron.isActive = function(){
	var that = this;
	let summ = 0;
	this.x.each(function(var xi){
  	that.w.each(function(var wi){
    	summ += xi*wi;
    });
  });
  return 1/(1+Math.exp(summ + this.b) > 0);
};

