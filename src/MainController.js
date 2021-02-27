app.controller('MainController', function ($scope, $http, $sce) {    
    $scope.textBoxes = []
    $scope.preview = '';
    $scope.addTextBoxes = function() {
        if ($scope.textBoxes.length > 6){
            alert('reached maximum textbox');
            return;
        }
        if ($scope.textBoxes.length >= 1){
          if ($scope.textBoxes[$scope.textBoxes.length-1].content == '' ){
            alert('Textbox cannot be empty');
            return;
          }
        }
        if($scope.textBoxes.length >= 1 ){
          $scope.textBoxes[$scope.textBoxes.length-1].content = $scope.toAvoidWord($scope.textBoxes[$scope.textBoxes.length-1].content);
        }        
        $scope.textBoxes.push({content: ''
        });              
    }
    
    $scope.renderHtml = function(html)
{          
    return $sce.trustAsHtml(html);    
};

    $scope.toAvoidWord = function(input){
      var WordsToAvoid = ['free','offer','discount'];  
      angular.forEach(WordsToAvoid, function(word){
        var regEx = new RegExp(word);
        input = input.replace(regEx, " ");
      });
      return input;
    }
    

  });

  app.filter('avoidWords', function() {

    var WordsToAvoid = ['free','offer','discount'];    
    return function(inputs) {      
      var input = inputs.toString();
      console.log(input);
      angular.forEach(WordsToAvoid, function(word){
        var regEx = new RegExp(word);
        input = input.replace(regEx, " ");
      });
      console.log('Hellossss');
      return input;
    };
  
  });
  