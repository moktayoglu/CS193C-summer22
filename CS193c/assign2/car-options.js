function changePhoto() {
    	document.getElementById("car_photo").src =  document.getElementById("main").color.value +".jpg";
}
	
function calculateTotal(){
		var carForm = document.getElementById("main");
		var sum = 0;
		if (carForm.GTmanual.checked)
			sum = sum + 17790
		if(carForm.GTauto.checked)
			sum = sum + 18590
		if(carForm.GTSmanual.checked)
			sum = sum + 22450
		if(carForm.GTSsports.checked)
			sum = sum + 23155
		if(carForm.op1.checked)
			sum = sum + 1235
		if(carForm.op2.checked)
			sum = sum + 3354
		if(carForm.stereo.checked)
			sum = sum + 550
		if(carForm.security.checked)
			sum = sum + 399
		if(carForm.mirror.checked)
			sum = sum + 295
		carForm.totaldisplay.value ="$" + sum.toFixed(2).toLocaleString('en-US')
}
document.getElementById("calculateButton").addEventListener("click", calculateTotal)
document.getElementById("selectColor").addEventListener("click",changePhoto);