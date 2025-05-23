
import { toast } from "react-toastify";

export const SubmitAddSkill = async ( title:string, description:string, url:string, cetagory:string) => {
   
    const addingData = {title,description,url,cetagory}
    try {
        const response = await fetch(`${import.meta.env.VITE_END_POINT}/skills`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(addingData)
        });
        if (!response.ok) {
            console.log('something went wrong')
            toast.error('Something Went Wrong')
        }
        const result = await response.json()
        console.log(result)
        toast.success('Skills Added Succesfully')  
    } catch (err) {
        console.log(err)
        toast.error('err to insert Data')
    }
   

}