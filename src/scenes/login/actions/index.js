import { SubmissionError } from 'redux-form'; 


export function doLogin(values,cb){
    
    console.log(values);

    if(values.email === "Email@gmail" && values.password ==="Passs"){
        cb();
        return {
            type:'ADD_MESSAGE',
            payload:'everything went fine'
        }
    } else {
        console.log('dasdas')
        throw new SubmissionError({_error: 'Senha invalida'})
    }

}