Date.prototype.GetLastYear= function(){
    return this.getFullYear() - 1
    };

console.log(new Date('1993-10-01').GetLastYear())



const module1 = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
}
  const unboundGetX = module1.getX;
  
  const boundGetX = unboundGetX.bind(module1);
  console.log(boundGetX());

