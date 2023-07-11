import { IRegistration } from "components/Registration/RegistrationTypes"

export const removeRepeatPasword = (data:IRegistration) => {
    const filteredUserObject = Object.entries(data).filter(([key]) => {
        return key !== 'repeatPassword'
    })
   return Object.fromEntries(filteredUserObject)
    

}