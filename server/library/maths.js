function maths(request, response){
    const {num1, num2 } = request.query; //#Destructuring
    const sum = num1 * num2;
    response.json(sum);

}

module.exports = maths;