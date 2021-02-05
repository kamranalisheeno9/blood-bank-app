import database from '@react-native-firebase/database';

export const fetch_donnerdata =()=>{
return(dispatch)=>{
    const donners =[]
        database().ref("/").child("donners").on("child_added",(data)=>{
            donners.push(data.val())
            
            // console.log(data.val())
            dispatch({
                type:"ADDDONNER",
                payload:donners
    
            })
        })
    }
}

