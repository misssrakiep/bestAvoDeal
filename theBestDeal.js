var avoDeals = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
var avoList = [];
describe('AvoDeals', function(){
  it('Should show the amount of deals available', function numberOfDeals(){
  var deals = avoDeals.split(',');
	  avoList.push(deals);
	  return deals.length;
	  assert.equal(4, numOfDeals);
  });
	
	it('Should show the price per avo in every deal', function avoPrice(){
		var dealList = [];
		for (var i=0; i<avoList; i++){	
		avoSplit = avoList[i].split("for");
		dealList.push({
			quantity : avoSplit[0],
			price : avoSplit[1].replace('R', ''),
			priceOfEach :  (avoSplit[1]/avoSplit[0]).toFixed(2)
			
		});
			var theList = [{
				quantity : 1,
				price : 3,
				priceOfEach : 3
						  },
						  {
					quantity : 2,
				price : 7,
				priceOfEach : 3.50 		  
						  },
						  {
					quantity : 3,
				price : 10,
				priceOfEach : 3.33		  
						  },
						  {
				quantity : 5,
				price : 14.50,
				priceOfEach : 2.90			  
						  }];
			
		assert.equal(dealList , theList);
		}
	});	
	
	
});


		 








