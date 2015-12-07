class figure{
    constructor () {
        this.coordinates = {
            coordinatesX:[],
            coordinatesY:[]
        };
        for (var i=0; i<Array.prototype.slice.call(arguments).length; i++) {
            if (i==0||i%2==0){
                this.coordinates.coordinatesX.push(Array.prototype.slice.call(arguments)[i]);
            }
            else {
                this.coordinates.coordinatesY.push(Array.prototype.slice.call(arguments)[i]);
            }
        }
    }
}

var figureOne = new figure(1,2,3,4,5,6,7,8); //проверяем роспределение всех углов фигуры.
console.log("Кординаты Х: "+figureOne.coordinates.coordinatesX);//выводим координаты Х-ков.
console.log("Кординаты Y: "+figureOne.coordinates.coordinatesY);//выводим координаты Y-ков.

class polygon extends figure{
    constructor () {
        this.topsCoordinates = Array.prototype.slice.call(arguments);
        this.perimeter = function(){
            var quantityTops = this.coordinates.coordinatesX.length;
            //var calculation = 0;
            var line=[];
            for (var i=0; i<quantityTops; i++){
                if (this.coordinates.coordinatesX[i+1]){
                    line.push(Math.sqrt(Math.pow((this.coordinates.coordinatesX[i+1] - this.coordinates.coordinatesX[i]),2) + Math.pow((this.coordinates.coordinatesY[i+1] - this.coordinates.coordinatesY[i]),2)));
                }
            }
            line.push(Math.sqrt(Math.pow((this.coordinates.coordinatesX[quantityTops-1] - this.coordinates.coordinatesX[0]),2) + Math.pow((this.coordinates.coordinatesY[quantityTops-1] - this.coordinates.coordinatesY[0]),2)));
            console.log(line);
        };
    }
}