 let daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 let malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
 let femalenames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]

 function validateform(){
     let year = document.getElementById("YearField").value;
     let month =document.getElementById("MonthField").value;
     let day = document.getElementById("DateField").value ;

     if (year ==""|| month==""|| day==""){
        console.log()
        alert("Please fill in all deatils")
        return false ;
     }else{
         getuserdetails()
     }
 }

var getuserdetails =function(){
    let Inputyear=document.getElementById("YearField").value;
    let intyear=parseInt(Inputyear)

    let Inputmonth=document.getElementById("MonthField").value;
    let intmonth=parseInt(Inputmonth)

    let Inputdate=document.getElementById("DateField").value ;
    let intdate=parseInt(Inputdate)

    let Inputgender=document.getElementById("gender").value 
    let akanName;
    

    if (intyear >2021){
        alert("Enter valid year")
    }
    if(intdate <=0 || intdate>31){
        alert("Enter correct date")
    }
    if(intmonth<=0||intmonth>12){
        alert("Enter valid month")
    }
    
        let CC=parseInt(Inputyear.slice(0,2));
        let YY=parseInt(Inputyear.slice(2,4));
        let MM=parseInt(Inputmonth);
        let DD=parseInt(Inputdate);
    
         let Dayoftheweek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    
          let day=Math.round(Dayoftheweek);
    
        if (Inputgender==="Male"){
            akanName=malenames[day]
            alert("Your name is " + akanName)
        }
        else if(Inputgender==="Female"){
            akanName=femalenames[day]
            alert("Your akan name is " + akanName)
        }
    }
