

<script type= "text/javascript">

			function foodSearch() {
				let input = document.getElementById('searchbar').value		//Retrieves value enetered on the search bar by user
				input=input.toUpperCase();																//Converts to lower case to avoid ambiguity
				let x = document.getElementsByClassName('food');					//Retrieves the list of food under class name 'food'

				for (i = 0; i < x.length; i++) {
					if (x[i].innerHTML.toUpperCase().includes(input)) {		//Check to see if the search is in the list
						x[i].style.display="list-item";
					}
					else {
						x[i].style.display="none";
					}
				}
			}
</script>
