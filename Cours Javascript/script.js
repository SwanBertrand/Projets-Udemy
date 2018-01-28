function Dog(name, color, age)
{
	this.name = name;
	this.color = color;
	this.age = age;
	this.aboie = function()
	{
		console.log(this.name + " aboie tres fort !");
	}
};

var grandChien = new Dog("Alpha", "Grey", 6);

grandChien.aboie();